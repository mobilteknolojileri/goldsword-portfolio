// Scroll effects: reveal, counters, reading progress, back to top, navbar state, scroll-spy and
// the touch-screen stand-ins for hover.
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
function setupCounters() {
  const counters = document.querySelectorAll<HTMLElement>("[data-count-to]");
  if (counters.length === 0 || prefersReducedMotion() || !("IntersectionObserver" in window)) {
    return;
  }

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

  // All reads before any write, so one layout serves every counter
  const below = Array.from(counters).filter(
    (el) => el.getBoundingClientRect().top >= window.innerHeight,
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

function updateToc() {
  if (tocHeadings.length === 0) return;
  let id = "";
  for (const heading of tocHeadings) {
    if (heading.getBoundingClientRect().top > 140) break;
    id = heading.id;
  }
  for (const link of tocLinks) {
    const next = String(link.dataset.target === id);
    if (link.dataset.active !== next) link.dataset.active = next;
  }
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
    document.querySelectorAll(".card-interactive").forEach((card) => centerObserver.observe(card));
  }

  stepLists = Array.from(document.querySelectorAll<HTMLElement>(".steps"));
  updateSteps();
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

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  });

  onScroll();
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
window.addEventListener("resize", () => placeIndicator(true), { passive: true });
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
    setupReveal();
    setupCounters();
    setupTouch();
    setupScrollState();
    setupSpy();
  }),
);

export {};
