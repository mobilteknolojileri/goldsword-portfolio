// Scroll effects: reveal, counters, reading progress, back to top, navbar state, scroll-spy,
// swipe rows, the phone contact bar and the touch-screen stand-ins for hover.
// Everything still works without this file, just without the motion.

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

window.__motionReady = true;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let revealObserver: IntersectionObserver | undefined;
let countObserver: IntersectionObserver | undefined;

function setupReveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)");
  if (items.length === 0) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  // Stagger items that come into view together
  revealObserver = new IntersectionObserver(
    (entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const item = entry.target as HTMLElement;
        item.style.setProperty("--reveal-delay", `${Math.min(order, 5) * 90}ms`);
        item.classList.add("is-revealed");
        revealObserver?.unobserve(item);
        order += 1;
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
  );
  items.forEach((item) => revealObserver?.observe(item));
}

function formatCount(el: HTMLElement, value: number) {
  const decimals = Number(el.dataset.countDecimals ?? 0);
  const number = value.toLocaleString("tr-TR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${el.dataset.countPrefix ?? ""}${number}${el.dataset.countSuffix ?? ""}`;
}

function runCount(el: HTMLElement) {
  const target = Number(el.dataset.countTo);
  const final = el.dataset.countFinal ?? formatCount(el, target);
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - progress) ** 3;
    el.textContent = progress < 1 ? formatCount(el, target * eased) : final;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// The real value is already in the HTML. Only counters still below the fold restart from zero.
function measureCounters() {
  const counters = document.querySelectorAll<HTMLElement>("[data-count-to]");
  if (counters.length === 0 || prefersReducedMotion() || !("IntersectionObserver" in window)) {
    return [];
  }
  return Array.from(counters).filter((el) => el.getBoundingClientRect().top >= window.innerHeight);
}

function setupCounters(below: HTMLElement[]) {
  if (below.length === 0) return;
  countObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        countObserver?.unobserve(entry.target);
        runCount(entry.target as HTMLElement);
      }
    },
    { threshold: 0.5 },
  );

  for (const el of below) {
    el.dataset.countFinal = el.textContent ?? "";
    el.textContent = formatCount(el, 0);
    countObserver?.observe(el);
  }
}

// Scroll-spy: on the home page the nav link for the section in view lights up. Elsewhere the
// server marks the current page. [data-toc] lists highlight the heading being read.
let navSpy: HTMLElement | null = null;
let navIndicator: HTMLElement | null = null;
let spyLinks: HTMLAnchorElement[] = [];
let spySections: { el: HTMLElement; links: Set<HTMLAnchorElement> }[] = [];
let tocLinks: HTMLAnchorElement[] = [];
let tocHeadings: HTMLElement[] = [];

function placeIndicator(instant = false) {
  if (!navSpy || !navIndicator) return;
  const active = navSpy.querySelector<HTMLElement>('[data-nav-link][data-active="true"]');
  if (!active || active.offsetWidth === 0) {
    navIndicator.style.opacity = "0";
    return;
  }
  // Coming from hidden: jump into place instead of sliding from the old spot
  const jump = instant || navIndicator.style.opacity !== "1";
  if (jump) navIndicator.style.transition = "none";
  navIndicator.style.width = `${active.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${active.getBoundingClientRect().left - navSpy.getBoundingClientRect().left}px)`;
  if (jump) {
    void navIndicator.offsetWidth;
    navIndicator.style.transition = "";
  }
  navIndicator.style.opacity = "1";
}

function updateSectionSpy() {
  if (spySections.length === 0) return;
  const line = window.innerHeight * 0.4;
  let current = spySections.find(({ el }) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= line && rect.bottom > line;
  });
  // The last section may be too short to reach the line
  const last = spySections[spySections.length - 1];
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (!current && atBottom && last.el.getBoundingClientRect().top < window.innerHeight) {
    current = last;
  }

  let changed = false;
  for (const link of spyLinks) {
    const next = String(current?.links.has(link) ?? false);
    if (link.dataset.active !== next) {
      link.dataset.active = next;
      changed = true;
    }
  }
  if (changed) placeIndicator();
}

// A heading counts as reached once it is where a contents link would put it: the page's
// scroll-padding plus the heading's own scroll-margin (the chips bar on phones adds one)
let tocLine = 140;
let tocScroller: HTMLElement | null = null;

function updateToc() {
  if (tocHeadings.length === 0) return;
  let id = "";
  for (const heading of tocHeadings) {
    if (heading.getBoundingClientRect().top > tocLine) break;
    id = heading.id;
  }
  for (const link of tocLinks) {
    const next = String(link.dataset.target === id);
    if (link.dataset.active === next) continue;
    link.dataset.active = next;
    if (next === "true" && tocScroller?.contains(link)) keepChipInView(link);
  }
}

function measureTocLine() {
  if (!tocHeadings[0]) return;
  const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const margin = parseFloat(getComputedStyle(tocHeadings[0]).scrollMarginTop) || 0;
  tocLine = padding + margin + 12;
}

// The chip row scrolls sideways, so the chip for the current heading is brought to the middle
function keepChipInView(chip: HTMLElement) {
  if (!tocScroller) return;
  const row = tocScroller.getBoundingClientRect();
  const box = chip.getBoundingClientRect();
  tocScroller.scrollBy({
    left: box.left - row.left - (row.width - box.width) / 2,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function setupSpy() {
  navSpy = document.querySelector<HTMLElement>("[data-nav-spy]");
  navIndicator = navSpy?.querySelector<HTMLElement>("[data-nav-indicator]") ?? null;
  spyLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-nav-link][data-sections]"),
  );

  // Home page sections in document order, each with the links that point to it
  spySections = [];
  const sections =
    location.pathname === "/" ? document.querySelectorAll<HTMLElement>("main section[id]") : [];
  for (const el of sections) {
    const links = new Set(
      spyLinks.filter((link) => link.dataset.sections?.split(" ").includes(el.id)),
    );
    if (links.size > 0) spySections.push({ el, links });
  }
  if (spySections.length === 0) spyLinks = [];

  tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-toc] a[href^='#']"));
  tocLinks.forEach((link) => (link.dataset.target = decodeURIComponent(link.hash.slice(1))));
  const ids = new Set(tocLinks.map((link) => link.dataset.target ?? ""));
  tocHeadings = Array.from(document.querySelectorAll<HTMLElement>("[data-article] [id]")).filter(
    (el) => ids.has(el.id),
  );
  tocScroller = document.querySelector<HTMLElement>("[data-toc-scroll]");
  measureTocLine();

  if (navSpy) navSpy.dataset.navSpy = "ready";
  refreshSpy();
  placeIndicator(true);
  // Hash links and restored scroll can land after this, so check again
  requestAnimationFrame(() => requestAnimationFrame(refreshSpy));
}

function refreshSpy() {
  updateSectionSpy();
  updateToc();
}

// Touch screens have no hover, so what the pointer would light up follows the scroll instead:
// the card crossing the middle of the screen takes the gold edge, and the process wire fills
// up to the last step that has scrolled past the line
const touch = window.matchMedia("(hover: none)").matches;
let stepLists: HTMLElement[] = [];

function setupTouch() {
  if (!touch) return;
  // iOS only applies :active (the press states) when a touch listener exists
  document.addEventListener("touchstart", () => {}, { passive: true });

  if ("IntersectionObserver" in window) {
    const centerObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-centered", entry.isIntersecting);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    // Cards in a swipe row are lit by setupCarousels instead
    document.querySelectorAll(".card-interactive").forEach((card) => {
      if (!card.closest('[data-carousel][data-scrollable="true"]')) centerObserver.observe(card);
    });
  }

  stepLists = Array.from(document.querySelectorAll<HTMLElement>(".steps"));
  updateSteps();
}

// Swipe rows (SwipeRow.astro) on phones: the thumb shows how far along the row is and the
// counter which card leads. On touch screens the leading card lights up while the row crosses
// the middle of the screen, as cards in a column do. A row nudges once when it first comes into
// view, so it reads as swipeable.
interface SwipeRow {
  root: HTMLElement;
  track: HTMLElement;
  items: HTMLElement[];
  // Past the right edge: they never cross the viewport, so the scroll reveal would keep them
  // hidden until they are swiped in
  offscreen: HTMLElement[];
}

// Reads only; rows that aren't wider than the screen are showing their grid layout
function measureRows() {
  const rows: SwipeRow[] = [];
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-carousel-track]");
    if (!track || track.scrollWidth - track.clientWidth <= 1) return;
    const items = Array.from(track.children) as HTMLElement[];
    const offscreen = items.filter(
      (item) => item.offsetLeft - track.scrollLeft >= track.clientWidth,
    );
    rows.push({ root, track, items, offscreen });
  });
  return rows;
}

function setupCarousels(rows: SwipeRow[]) {
  rows.forEach(({ root, track, items, offscreen }) => {
    root.dataset.scrollable = "true";
    offscreen.forEach((item) => item.classList.add("is-revealed"));
    const thumb = root.querySelector<HTMLElement>("[data-carousel-thumb]");
    const count = root.querySelector<HTMLElement>("[data-carousel-count]");

    let lead = -1;
    let inMiddle = false;
    let ticking = false;

    const light = () => {
      items.forEach((item, index) => {
        item
          .querySelector(".card-interactive")
          ?.classList.toggle("is-centered", inMiddle && index === lead);
      });
    };

    const update = () => {
      ticking = false;
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 1) return;
      const ratio = track.clientWidth / track.scrollWidth;
      const progress = Math.min(1, Math.max(0, track.scrollLeft / max));
      if (thumb) {
        thumb.style.width = `${ratio * 100}%`;
        thumb.style.transform = `translateX(${progress * (1 / ratio - 1) * 100}%)`;
      }
      // Cards snap to their start, so the scroll position counts them; the last one can't reach
      // the start and counts once the row is at its end
      const step = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : max;
      const next =
        track.scrollLeft >= max - 2 ? items.length - 1 : Math.round(track.scrollLeft / step);
      if (next === lead) return;
      lead = next;
      if (count) count.textContent = `${lead + 1} / ${items.length}`;
      if (touch) light();
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    requestAnimationFrame(update);

    if (!("IntersectionObserver" in window)) return;

    if (touch) {
      new IntersectionObserver(
        ([entry]) => {
          inMiddle = entry.isIntersecting;
          light();
        },
        { rootMargin: "-45% 0px -45% 0px" },
      ).observe(track);
    }

    if (prefersReducedMotion()) return;
    let touched = false;
    track.addEventListener(
      "pointerdown",
      () => {
        touched = true;
        track.classList.remove("carousel-nudge");
      },
      { once: true, passive: true },
    );
    const nudgeObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        nudgeObserver.disconnect();
        // After the cards have faded in
        setTimeout(() => {
          if (touched || track.scrollLeft > 2) return;
          track.classList.add("carousel-nudge");
          track.addEventListener("animationend", () => track.classList.remove("carousel-nudge"), {
            once: true,
          });
        }, 700);
      },
      { threshold: 0.6 },
    );
    nudgeObserver.observe(track);
  });
}

function updateSteps() {
  if (stepLists.length === 0) return;
  const line = window.innerHeight * 0.6;
  for (const list of stepLists) {
    let reached = 0;
    list.querySelectorAll<HTMLElement>(":scope > .step").forEach((step, index) => {
      if (step.getBoundingClientRect().top < line) reached = index + 1;
    });
    if (list.dataset.reached !== String(reached)) list.dataset.reached = String(reached);
  }
}

let navbar: HTMLElement | null = null;
let progressBar: HTMLElement | null = null;
let article: HTMLElement | null = null;
let backToTop: HTMLButtonElement | null = null;
let ticking = false;

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const y = window.scrollY;

    if (navbar) navbar.dataset.scrolled = String(y > 8);

    if (progressBar && article) {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const read = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
      progressBar.style.transform = `scaleX(${read})`;
    }

    if (backToTop) {
      const visible = y > window.innerHeight * 1.5;
      if (backToTop.dataset.visible !== String(visible)) {
        backToTop.dataset.visible = String(visible);
        backToTop.tabIndex = visible ? 0 : -1;
        backToTop.setAttribute("aria-hidden", String(!visible));
      }
    }

    updateSectionSpy();
    updateToc();
    updateSteps();
  });
}

function setupScrollState() {
  navbar = document.getElementById("navbar");
  progressBar = document.querySelector<HTMLElement>("[data-reading-progress]");
  article = document.querySelector<HTMLElement>("[data-article]");
  backToTop = document.querySelector<HTMLButtonElement>("[data-back-to-top]");

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  };
  backToTop?.addEventListener("click", toTop);
  document.querySelector("[data-scroll-top]")?.addEventListener("click", toTop);

  onScroll();
}

// Phones: the contact bar slides in once the hero's call to action has scrolled off and steps
// aside near the contact form, the page's closing call to action and the footer, and while the
// on-screen keyboard is up (it would ride up on top of it)
function setupContactBar() {
  const bar = document.querySelector<HTMLElement>("[data-contact-bar]");
  if (!bar || !("IntersectionObserver" in window)) return;
  const heroCta = document.querySelector<HTMLElement>("[data-hero-cta]");
  let pastHero = !heroCta;
  let typing = false;
  const zonesInView = new Set<Element>();

  const apply = () => {
    const visible = pastHero && zonesInView.size === 0 && !typing;
    if (bar.dataset.visible === String(visible)) return;
    bar.dataset.visible = String(visible);
    bar.inert = !visible;
    document.documentElement.toggleAttribute("data-contact-bar-shown", visible);
  };

  if (heroCta) {
    new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      apply();
    }).observe(heroCta);
  }

  const zoneObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) zonesInView.add(entry.target);
      else zonesInView.delete(entry.target);
    }
    apply();
  });
  document
    .querySelectorAll("#contact, [data-cta-zone], footer")
    .forEach((zone) => zoneObserver.observe(zone));

  // Checked a frame later so moving between two fields doesn't flash the bar
  const onFocusChange = () =>
    requestAnimationFrame(() => {
      typing =
        document.activeElement?.matches(
          "input:not([type='radio'], [type='checkbox']), textarea, select",
        ) ?? false;
      apply();
    });
  document.addEventListener("focusin", onFocusChange);
  document.addEventListener("focusout", onFocusChange);
}

// The eyebrow sword's glint repaints, so it only runs while the eyebrow is on screen
// (data-glint, see globals.css)
function setupGlints() {
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;
  const glintObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.target.toggleAttribute("data-glint", entry.isIntersecting);
  });
  document.querySelectorAll(".eyebrow").forEach((eyebrow) => glintObserver.observe(eyebrow));
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
window.addEventListener("resize", () => placeIndicator(true), { passive: true });
// The chips bar's extra scroll margin only applies below lg
window.addEventListener("resize", measureTocLine, { passive: true });
// An early jump right after load can slip past the scroll handler
window.addEventListener("scrollend", refreshSpy, { passive: true });
window.addEventListener("load", refreshSpy);

// Geist Mono only sets small labels and code, so it shouldn't compete with the page for bandwidth
function loadMonoFont() {
  const font = new FontFace("Geist Mono", "url(/fonts/GeistMono-Variable.woff2)", {
    weight: "100 900",
    display: "swap",
  });
  font
    .load()
    .then((loaded) => document.fonts.add(loaded))
    .catch(() => {});
}

if (document.readyState === "complete") loadMonoFont();
else window.addEventListener("load", loadMonoFont, { once: true });

// Start after the first frame: measuring earlier would force the page's first layout inside
// this script and hold back the first paint
requestAnimationFrame(() =>
  setTimeout(() => {
    // Measure before writing anything, so one layout serves every measurement. The rows go
    // before the reveal and the touch setup: they mark the cards to show at once and the rows
    // that light their own cards.
    const rows = measureRows();
    const counters = measureCounters();
    setupCarousels(rows);
    setupReveal();
    setupCounters(counters);
    setupTouch();
    setupScrollState();
    setupContactBar();
    setupGlints();
    setupSpy();
  }),
);

export {};
