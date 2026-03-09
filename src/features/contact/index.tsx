"use client";

import { useRef, useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import Button from "@/components/ui/Button";

const MIN_SUBMIT_DELAY_MS = 2500;
const MAX_MESSAGE_LENGTH = 2000;

interface ContactProps {
  emailjsConfig: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

const Contact = ({ emailjsConfig }: ContactProps) => {
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
  const mountedAtRef = useRef(Date.now());

  useEffect(() => {
    if (emailjsConfig.publicKey) {
      emailjs.init(emailjsConfig.publicKey);
    } else {
      console.error("EmailJS: Public Key eksik! Lütfen çevre değişkenlerini kontrol edin.");
    }
  }, [emailjsConfig.publicKey]);

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
    setIsSubmitting(true);

    try {
      if (!emailjsConfig.publicKey || !emailjsConfig.serviceId || !emailjsConfig.templateId) {
        throw new Error("EmailJS yapılandırması eksik. Lütfen Vercel ayarlarını kontrol edin.");
      }

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: trimmedName,
          from_email: trimmedEmail,
          message: trimmedMessage,
          to_email: "mobilteknolojileri@gmail.com",
        },
        emailjsConfig.publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapılacaktır.",
      });
      setFormData({ name: "", email: "", message: "", company: "" });
      mountedAtRef.current = Date.now();
    } catch (error: any) {
      console.error("Email gonderme hatasi detayi:", error);
      const errorMessage = error?.text || error?.message || "Mesaj gonderilemedi.";
      setSubmitStatus({
        type: "error",
        message: `Hata: ${errorMessage}`,
      });
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

  return (
    <section id="contact" className="bg-gray-50 py-12 dark:bg-dark-800 sm:py-16 md:py-20">
      <Toaster position="top-right" />
      <div className="section-container section-padding">
        <h2 className="text-heading mb-8 text-center text-3xl font-bold tracking-tight sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl">
          İletişim
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <h3 className="text-heading mb-6 text-2xl font-bold">Mesaj Gönder</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-body mb-2 block text-sm font-medium">Adınız</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className="text-heading w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 transition-colors focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800"
                  placeholder="İsminizi girin"
                />
              </div>

              <div>
                <label className="text-body mb-2 block text-sm font-medium">E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-heading w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 transition-colors focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800"
                  placeholder="ornek@email.com"
                />
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
                <label className="text-body mb-2 block text-sm font-medium">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  minLength={10}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="text-heading w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 transition-colors focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800"
                  placeholder="Mesajınızı yazın..."
                />

                {submitStatus.type && (
                  <div
                    className={`mt-4 rounded-lg p-4 text-sm font-medium ${
                      submitStatus.type === "success"
                        ? "border border-green-200 bg-green-50 text-green-700 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400"
                        : "border border-red-200 bg-red-50 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus.type === "success" ? (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {submitStatus.message}
                    </div>
                  </div>
                )}

                <p className="text-muted mt-2 text-xs">
                  Ayrıca bana WhatsApp veya diğer portallardan da ulaşabilirsiniz.
                </p>
              </div>

              <Button type="submit" className="w-full" isLoading={isSubmitting}>
                {isSubmitting ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </form>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <h3 className="text-heading mb-6 text-2xl font-bold">Diğer İletişim</h3>

            <div className="space-y-4">
              <a
                href="mailto:mobilteknolojileri@gmail.com"
                className="text-body flex items-center space-x-3 transition-colors hover:text-primary-600"
              >
                <FaEnvelope className="h-5 w-5" />
                <span>mobilteknolojileri@gmail.com</span>
              </a>

              <a
                href="https://github.com/mobilteknolojileri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body flex items-center space-x-3 transition-colors hover:text-primary-600"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
