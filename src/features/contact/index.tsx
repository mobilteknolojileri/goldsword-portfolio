import { useEffect, useRef, useState } from "react";
import { FaGithub, FaRegLightbulb } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { BionlukIcon, GmailIcon } from "@/components/icons/brands";
import Button from "@/components/ui/Button";

// Also used by the click handler in Services.astro
const SUBJECT_EVENT = "contact:subject";
const SUBJECT_KEY = "contact-subject";

const MIN_SUBMIT_DELAY_MS = 2500;
const MAX_MESSAGE_LENGTH = 2000;
const CONTACT_EMAIL = "mobilteknolojileri@gmail.com";

const DIRECT_LINKS = [
  {
    logo: <GmailIcon size={22} />,
    label: "E-posta",
    detail: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    logo: <FaGithub className="h-5 w-5 text-gray-900 dark:text-white" aria-hidden="true" />,
    label: "GitHub",
    detail: "github.com/mobilteknolojileri",
    href: "https://github.com/mobilteknolojileri",
    external: true,
  },
  {
    logo: <BionlukIcon size={18} />,
    label: "Bionluk",
    detail: "Profil ve müşteri yorumları",
    href: "https://bionluk.com/goldsword",
    external: true,
  },
];

const TOPICS = {
  project: {
    label: "Yazılım projesi",
    hint: "Ne yaptırmak istiyorsunuz? Kısa bir özet yeterli.",
  },
  support: {
    label: "Android destek",
    hint: "Cihaz modeli, Android sürümü ve sorunu yazın.",
  },
} as const;

type Topic = keyof typeof TOPICS;

const inputClass =
  "text-heading w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-hidden transition placeholder:text-gray-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15 dark:border-dark-600 dark:bg-dark-900 dark:placeholder:text-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20";

interface ContactProps {
  emailjsConfig: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

const Contact = ({ emailjsConfig }: ContactProps) => {
  const [topic, setTopic] = useState<Topic>("project");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const mountedAtRef = useRef(0);
  const isConfigured = Boolean(
    emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
  );

  // Subject passed from a service card. A click before hydration waits in sessionStorage.
  useEffect(() => {
    const onSubject = (event: Event) => {
      const subject = (event as CustomEvent<string>).detail;
      try {
        sessionStorage.removeItem(SUBJECT_KEY);
      } catch {
        // Storage blocked, nothing to clear
      }
      setFormData((prev) =>
        prev.message.trim() ? prev : { ...prev, message: `${subject} hakkında yazıyorum. ` },
      );
    };
    window.addEventListener(SUBJECT_EVENT, onSubject);
    let pending: string | null = null;
    try {
      pending = sessionStorage.getItem(SUBJECT_KEY);
    } catch {
      // Storage blocked (private mode)
    }
    if (pending) window.dispatchEvent(new CustomEvent(SUBJECT_EVENT, { detail: pending }));
    return () => window.removeEventListener(SUBJECT_EVENT, onSubject);
  }, []);

  useEffect(() => {
    mountedAtRef.current = Date.now();
    if (isConfigured) {
      emailjs.init({
        publicKey: emailjsConfig.publicKey,
        blockHeadless: true,
        limitRate: { throttle: 10_000 },
      });
    } else if (import.meta.env.DEV) {
      console.warn("EmailJS env vars are missing; the contact form falls back to mailto.");
    }
  }, [isConfigured, emailjsConfig.publicKey]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (formData.company) {
      return;
    }

    if (Date.now() - mountedAtRef.current < MIN_SUBMIT_DELAY_MS) {
      toast.error("Lütfen formu doldurup birkaç saniye sonra tekrar gönderin.");
      return;
    }

    if (trimmedName.length < 2) {
      toast.error("Lütfen geçerli bir isim girin.");
      return;
    }

    if (trimmedMessage.length < 10) {
      toast.error("Mesajınız çok kısa görünüyor.");
      return;
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      toast.error("Mesajınız çok uzun. Lütfen kısaltın.");
      return;
    }

    setSubmitStatus({ type: null, message: "" });

    // The topic goes into the body so the EmailJS template doesn't need a new field
    const message = `Konu: ${TOPICS[topic].label}\n\n${trimmedMessage}`;

    const openMailApp = (note: string) => {
      const subject = encodeURIComponent(`goldsword.dev üzerinden mesaj: ${trimmedName}`);
      const body = encodeURIComponent(`${message}\n\n${trimmedName} <${trimmedEmail}>`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setSubmitStatus({ type: "success", message: note });
    };

    // No EmailJS config: open the visitor's mail app instead
    if (!isConfigured) {
      openMailApp("E-posta uygulamanız açılıyor; mesajınızı oradan gönderebilirsiniz.");
      return;
    }

    setIsSubmitting(true);

    try {
      // The recipient is fixed in the EmailJS template
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: trimmedName,
          from_email: trimmedEmail,
          message,
        },
        emailjsConfig.publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Mesajınız bana ulaştı, teşekkürler. Yanıtımı e-posta adresinize yazacağım.",
      });
      setFormData({ name: "", email: "", message: "", company: "" });
      mountedAtRef.current = Date.now();
    } catch (error) {
      if (import.meta.env.DEV) console.error("EmailJS send failed:", error);
      // The message still reaches the inbox through the visitor's mail app
      openMailApp(
        "Mesaj buradan gönderilemedi; e-posta uygulamanız açılıyor, oradan gönderebilirsiniz.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // The keyboard's "next" key moves to the next field instead of submitting a half-filled form
  const focusNext = (e: React.KeyboardEvent<HTMLInputElement>, nextId: string) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
    e.preventDefault();
    document.getElementById(nextId)?.focus();
  };

  return (
    <section id="contact" className="section-tint section">
      <Toaster position="top-right" />
      {/* Phones: intro, form, then the other channels. From lg the form takes the right column. */}
      <div className="section-container grid gap-10 section-padding lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="mb-4 eyebrow">İletişim</p>
          <h2 className="section-title">Projenizi ya da sorununuzu anlatın</h2>
          <p className="section-lead">
            İlk yanıtım fiyat teklifi olmaz, birkaç soru olur. Ne kadar ayrıntı verirseniz sorularım
            da o kadar azalır.
          </p>
        </div>

        <div className="card p-6 sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-heading">
                Ne için yazıyorsunuz?
              </legend>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(TOPICS) as Topic[]).map((key) => (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                      topic === key
                        ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-400 dark:bg-primary-400/10 dark:text-primary-200"
                        : "border-gray-300 text-body hover:border-primary-300 dark:border-dark-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={key}
                      checked={topic === key}
                      onChange={() => setTopic(key)}
                      className="accent-primary-600"
                    />
                    {TOPICS[key].label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-heading"
                >
                  Adınız
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  autoCapitalize="words"
                  enterKeyHint="next"
                  onKeyDown={(e) => focusNext(e, "contact-email")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className={inputClass}
                  placeholder="Ad soyad"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-heading"
                >
                  E-posta
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  enterKeyHint="next"
                  onKeyDown={(e) => focusNext(e, "contact-message")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="ornek@eposta.com"
                />
              </div>
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Mesajınız
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                minLength={10}
                maxLength={MAX_MESSAGE_LENGTH}
                className={inputClass}
                placeholder={TOPICS[topic].hint}
              />
            </div>

            <div role="status" aria-live="polite">
              {submitStatus.type && (
                <p
                  className={`rounded-xl p-4 text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "border border-green-200 bg-green-50 text-green-800 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300"
                      : "border border-red-200 bg-red-50 text-red-800 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
              {isSubmitting ? "Gönderiliyor…" : "Gönder"}
            </Button>
          </form>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <ul className="space-y-3">
            {DIRECT_LINKS.map(({ logo, label, detail, href, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-[0_12px_30px_-16px_rgb(79_70_229/0.4)] dark:border-dark-700 dark:bg-dark-800 dark:hover:border-primary-400/50"
                >
                  <span className="logo-tile size-11 rounded-xl">{logo}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-heading">{label}</span>
                    <span className="block truncate text-sm text-muted">{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 p-5 dark:border-dark-600">
            <p className="flex items-center gap-2 text-sm font-semibold text-heading">
              <FaRegLightbulb
                className="h-4 w-4 text-gold-600 dark:text-gold-400"
                aria-hidden="true"
              />
              Neler yazabilirsiniz?
            </p>
            <ul className="mt-3 space-y-2 text-sm text-body">
              <li>
                <span className="font-semibold text-heading">Yazılım projesi:</span> ne yapmak
                istediğiniz, benzer bir uygulama ya da site örneği ve aklınızdaki takvim.
              </li>
              <li>
                <span className="font-semibold text-heading">Android destek:</span> cihaz modeli,
                Android sürümü ve sorunun ne zaman, neyin ardından başladığı.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
