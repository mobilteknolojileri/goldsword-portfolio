"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaSearchDollar,
  FaPenNib,
  FaGamepad,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={32} />,
    title: "Web Geliştirme",
    description:
      "Astro, Next.js ve React kullanarak ultra hızlı, SEO uyumlu ve modern web siteleri. Landing page'den kurumsal çözümlere kadar.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için Flutter veya React Native ile yüksek performanslı, native hissettiren mobil uygulamalar.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <FaSearchDollar size={32} />,
    title: "Teknik SEO",
    description:
      "Sitenizin arama motorlarında üst sıralara çıkması için teknik optimizasyon, schema yapılandırması ve performans iyileştirmeleri.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <FaPenNib size={32} />,
    title: "AI Entegrasyonu",
    description:
      "İş süreçlerinizi hızlandıracak özel yapay zeka çözümleri. LLM entegrasyonu, otomasyon sistemleri ve akıllı chatbotlar.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: <FaGamepad size={32} />,
    title: "Oyun Geliştirme",
    description:
      "Unity veya Godot ile 2D/3D oyun projeleri. Mekanik tasarım, asset entegrasyonu ve platform optimizasyonu.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: <FaRobot size={32} />,
    title: "Otomasyon & Scripting",
    description:
      "Python tabanlı web scraping ve özel otomasyon araçları. İş yükünüzü azaltacak saniye bazlı hızlı çözümler.",
    color: "from-slate-600 to-gray-800",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="bg-white py-24 dark:bg-dark-800">
      <div className="section-container section-padding">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-heading mb-6 text-3xl font-black sm:text-5xl">
            Freelance Yazılım Hizmetleri
          </h2>
          <p className="text-body text-lg">
            Gaziantep ve tüm Türkiye genelinde, modern teknolojilerle işletmenizi dijitale
            taşıyorum.
          </p>
        </div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-3xl border border-gray-100 bg-gray-50 p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl dark:border-dark-700 dark:bg-dark-900 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}
              >
                {service.icon}
              </div>
              <h3 className="text-heading mb-4 text-2xl font-bold">{service.title}</h3>
              <p className="text-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
