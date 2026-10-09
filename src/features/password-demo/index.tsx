import { useState, useMemo, useRef, type ReactNode } from "react";
import { analyzePassword } from "password-intelligence";
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";
import { SiNpm } from "react-icons/si";

// Dark band in both themes, so the colours assume a dark background
const SCORE_META = [
  { label: "Çok zayıf", color: "from-rose-500 to-red-500", text: "text-rose-300" },
  { label: "Zayıf", color: "from-orange-500 to-amber-500", text: "text-orange-300" },
  { label: "Orta", color: "from-amber-400 to-yellow-400", text: "text-amber-200" },
  { label: "İyi", color: "from-lime-400 to-green-500", text: "text-lime-300" },
  { label: "Güçlü", color: "from-emerald-400 to-green-500", text: "text-emerald-300" },
] as const;

const SAMPLE_PASSWORDS = [
  { value: "mehmet1907", label: "Türk adı + Fenerbahçe yılı" },
  { value: "galatasaray1905", label: "Kulüp + kuruluş yılı" },
  { value: "İSTANBUL34", label: "Plaka + şehir (TR klavye)" },
  { value: "askim123", label: "Romantik + sayı" },
  { value: "Xk9#mP2$vL7@nQ5!", label: "Rastgele, güçlü" },
] as const;

// From the password-intelligence 0.4.1 README
const FACTS = [
  "Ad, soyad, kulüp, plaka ve şehir dâhil 12 Türkçe kategori",
  "Varsayılan paket yaklaşık 37 kB (gzip)",
  "Analiz tamamen tarayıcıda; parola hiçbir yere gönderilmez",
] as const;

const PATTERN_LABELS: Record<string, string> = {
  passwords: "Yaygın parola",
  userInputs: "Kişisel bilgi",
  turkish_firstnames: "Türk adı",
  turkish_surnames: "Türk soyadı",
  turkish_teams: "Futbol kulübü",
  turkish_cities: "Türk şehri",
  turkish_plate_patterns: "Plaka kalıbı",
  turkish_cultural: "Kültürel terim",
  turkish_keyboard: "Klavye yürüyüşü",
  turkish_romantic: "Romantik terim",
  turkish_religious: "Dinî/ideolojik",
  turkish_common: "Yaygın TR parola",
  turkish_zodiac: "Burç",
  turkish_brands: "Türk markası",
};

const formatMatch = (match: { pattern: string; token?: string; dictionaryName?: string }) => {
  if (match.pattern === "dictionary" && match.dictionaryName) {
    const label = PATTERN_LABELS[match.dictionaryName] ?? match.dictionaryName;
    return `${label}: "${match.token}"`;
  }
  if (match.pattern === "spatial") return `Klavye dizisi: "${match.token}"`;
  if (match.pattern === "repeat") return `Tekrar: "${match.token}"`;
  if (match.pattern === "sequence") return `Ardışık dizi: "${match.token}"`;
  if (match.pattern === "regex") return `Tarih/yıl: "${match.token}"`;
  if (match.pattern === "date") return `Tarih: "${match.token}"`;
  if (match.token) return `${match.pattern}: "${match.token}"`;
  return match.pattern;
};

// children: static Astro markup shown under the demo (the open source block)
const PasswordDemo = ({ children }: { children?: ReactNode }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // analyzePassword is synchronous and fast, so no debounce
  const analysis = useMemo(() => {
    if (!password) return null;
    try {
      return analyzePassword(password);
    } catch {
      return null;
    }
  }, [password]);

  const score = analysis?.score ?? 0;
  const meta = SCORE_META[score];
  const crackTime = analysis?.crackTimesDisplay.onlineNoThrottling10PerSecond;
  const matches = (analysis?.sequence ?? []).filter((m) => m.pattern !== "bruteforce");

  const tryExample = (value: string) => {
    setPassword(value);
    // On touch screens focusing the field opens the keyboard over the result
    if (window.matchMedia("(hover: hover)").matches) inputRef.current?.focus();
  };

  return (
    <section
      id="password-demo"
      className="relative isolate overflow-hidden bg-dark-900 py-20 text-white sm:py-24 lg:py-28 dark:border-y dark:border-dark-800 dark:bg-dark-950"
      aria-labelledby="password-demo-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow absolute -top-40 left-[8%] h-[28rem] w-[28rem] rounded-full bg-primary-600/30" />
        <div className="glow absolute right-[-6%] -bottom-48 h-[26rem] w-[26rem] rounded-full bg-gold-500/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] bg-[size:44px_44px]" />
      </div>

      <div className="section-container grid gap-12 section-padding lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 eyebrow text-primary-200">Canlı deneme</p>
          <h2
            id="password-demo-heading"
            className="text-3xl leading-[1.12] font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.6rem]"
          >
            Parola ölçerimi burada deneyin
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-gray-300">
            Türkçe ad, takım ve plaka kalıplarını tanıyan{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] whitespace-nowrap text-white">
              password-intelligence
            </code>{" "}
            kütüphanem bu sayfada çalışıyor. Standart ölçerlerin zayıf saymadığı{" "}
            <code className="font-mono text-[0.9em] text-white">mehmet1907</code> gibi parolalar
            burada zayıf çıkar.
          </p>

          <ul className="mt-8 space-y-3">
            {FACTS.map((fact) => (
              <li key={fact} className="flex gap-3 text-gray-200">
                <FaCheck className="mt-1 h-3.5 w-3.5 flex-none text-gold-400" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>

          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            <a
              href="https://www.npmjs.com/package/password-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-300 underline-offset-4 hover:text-primary-200 hover:underline"
            >
              <span className="flex size-6 items-center justify-center rounded-md bg-white">
                <SiNpm className="h-3.5 w-3.5 text-[#cb3837]" aria-hidden="true" />
              </span>
              npm'de inceleyin <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/blog/standart-parola-olcerleri-mehmet1907"
              className="text-primary-300 underline-offset-4 hover:text-primary-200 hover:underline"
            >
              Neden gerekli olduğunu yazdım <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>

        <div>
          <div className="rounded-3xl bg-white/[0.05] p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur md:p-8">
            <label htmlFor="password-input" className="mb-2 block text-sm font-semibold text-white">
              Bir parola yazın
            </label>
            <div className="relative">
              <input
                id="password-input"
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="örneğin mehmet1907"
                className="w-full rounded-xl border-2 border-white/10 bg-dark-950/70 px-4 py-3.5 pr-14 font-mono text-lg text-white outline-hidden transition placeholder:text-gray-500 focus:border-primary-400 focus:ring-4 focus:ring-primary-400/25"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                enterKeyHint="done"
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                aria-describedby="password-feedback"
                // Password managers modify this input before hydration
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute top-1/2 right-1.5 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white"
                aria-label="Parolayı göster"
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <FaEye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className="mt-5">
              <div
                className="h-2.5 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={4}
                aria-valuenow={password ? score : 0}
                aria-label={`Parola güç skoru: ${password ? score : 0} / 4`}
              >
                <div
                  className={`h-full bg-linear-to-r transition-all duration-500 ease-out ${meta.color}`}
                  style={{ width: password ? `${((score + 1) / 5) * 100}%` : "0%" }}
                />
              </div>
              {/* One live region with a short summary instead of every chip */}
              <p
                role="status"
                className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm"
              >
                <span className={`font-bold ${password ? meta.text : "text-gray-400"}`}>
                  {password ? meta.label : "Yazmaya başlayın…"}
                </span>
                {crackTime && (
                  <span className="text-xs text-gray-400">
                    Tahmini kırılma süresi:{" "}
                    <span className="font-semibold text-white">{crackTime}</span>
                  </span>
                )}
              </p>
            </div>

            <div id="password-feedback" className="mt-6 space-y-4 text-sm">
              {analysis?.feedback.warning && (
                <div className="flex gap-3 rounded-xl bg-amber-400/10 p-4 ring-1 ring-amber-300/25">
                  <FaTimes className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                  <p className="text-amber-100">{analysis.feedback.warning}</p>
                </div>
              )}

              {analysis && analysis.feedback.suggestions.length > 0 && (
                <ul className="space-y-1.5">
                  {analysis.feedback.suggestions.map((s, i) => (
                    <li key={i} className="flex gap-2 text-gray-300">
                      <span aria-hidden="true" className="text-primary-300">
                        →
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {matches.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                    Tespit edilen kalıplar
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {matches.map((m, i) => (
                      <li
                        key={i}
                        className="inline-flex rounded-md bg-primary-400/10 px-2 py-1 text-xs font-medium text-primary-100 ring-1 ring-primary-300/25"
                      >
                        {formatMatch(m)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {password && score === 4 && (
                <div className="flex items-center gap-3 rounded-xl bg-emerald-400/10 p-4 ring-1 ring-emerald-300/25">
                  <FaCheck className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <p className="text-emerald-100">
                    <strong>Bu ölçere göre güçlü görünüyor.</strong> Yine de her hesap için ayrı bir
                    parola kullanın; bir parola yöneticisi bu işi oldukça kolaylaştırır.
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-sm font-medium text-gray-400">Örneklerden birini deneyin:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SAMPLE_PASSWORDS.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => tryExample(s.value)}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2 text-xs font-medium text-gray-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white hover:ring-primary-300/40"
                aria-label={`${s.value} örneğini deneyin: ${s.label}`}
              >
                <code className="font-mono text-white">{s.value}</code>
                <span className="hidden text-gray-400 sm:inline">· {s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {children && <div className="section-container section-padding">{children}</div>}
    </section>
  );
};

export default PasswordDemo;
