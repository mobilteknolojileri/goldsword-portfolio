"use client";

import { useRef, useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import Button from "@/components/ui/Button";

const MIN_SUBMIT_DELAY_MS = 2500;
const MAX_MESSAGE_LENGTH = 2000;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mountedAtRef = useRef(Date.now());

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (formData.company) {
      return;
    }

    if (Date.now() - mountedAtRef.current < MIN_SUBMIT_DELAY_MS) {
      toast.error("Lutfen formu doldurup birkac saniye sonra tekrar gonderin.");
      return;
    }

    if (trimmedName.length < 2) {
      toast.error("Lutfen gecerli bir isim girin.");
      return;
    }

    if (trimmedMessage.length < 10) {
      toast.error("Mesajiniz cok kisa gorunuyor.");
      return;
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      toast.error("Mesajiniz cok uzun. Lutfen kisaltin.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        (import.meta as any).env.PUBLIC_EMAILJS_SERVICE_ID!,
        (import.meta as any).env.PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: trimmedName,
          from_email: trimmedEmail,
          message: trimmedMessage,
          to_email: "mobilteknolojileri@gmail.com",
        },
        (import.meta as any).env.PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Mesajiniz basariyla gonderildi.");
      setFormData({ name: "", email: "", message: "", company: "" });
      mountedAtRef.current = Date.now();
    } catch (error) {
      console.error("Email gonderme hatasi:", error);
      toast.error("Mesaj gonderilemedi. Lutfen tekrar deneyin.");
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
          Iletisim
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <h3 className="text-heading mb-6 text-2xl font-bold">Mesaj Gonder</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-body mb-2 block text-sm font-medium">Adiniz</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className="text-heading w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 transition-colors focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800"
                  placeholder="Isminizi girin"
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
                <label className="text-body mb-2 block text-sm font-medium">Mesajiniz</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  minLength={10}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="text-heading w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 transition-colors focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800"
                  placeholder="Mesajinizi yazin..."
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Lutfen kisa ve net yazin. En fazla {MAX_MESSAGE_LENGTH} karakter.
                </p>
              </div>

              <Button type="submit" className="w-full" isLoading={isSubmitting}>
                {isSubmitting ? "Gonderiliyor..." : "Gonder"}
              </Button>
            </form>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <h3 className="text-heading mb-6 text-2xl font-bold">Diger Iletisim</h3>
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
