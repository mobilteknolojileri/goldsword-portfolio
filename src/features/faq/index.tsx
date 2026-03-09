"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const FAQ_DATA = [
  {
    question: "Gaziantep'te veya uzaktan çalışıyor musunuz?",
    answer:
      "Evet, Gaziantep içinde yüz yüze görüşebildiğim gibi, tüm Türkiye ve yurt dışı projeleri için görüntülü görüşme ve modern iş takip araçlarıyla uzaktan da hizmet veriyorum.",
  },
  {
    question: "Bir proje ne kadar sürede tamamlanır?",
    answer:
      "Projenin kapsamına bağlı olarak değişir. Standart bir web sitesi 1-2 hafta, kapsamlı bir mobil uygulama 4-8 hafta arasında tamamlanır. İlk görüşmede projenize özel net bir süre belirleriz.",
  },
  {
    question: "Hangi teknolojilerle çalışıyorsunuz?",
    answer:
      "Her projeye özel en uygun teknolojiyi seçiyorum. Projenin ihtiyacına göre mimariyi tasarlayıp güncel ve kanıtlanmış araçlarla geliştiriyorum. Detaylar için portföyümdeki projelere göz atabilirsiniz.",
  },
  {
    question: "SEO ve arama motoru optimizasyonu dahil mi?",
    answer:
      "Evet. Her projede teknik SEO, schema yapılandırması ve performans optimizasyonunu standart olarak uyguluyorum. Sitenizin Google'da bulunabilir olması temel önceliklerimden biri.",
  },
  {
    question: "Proje sonrası destek sağlıyor musunuz?",
    answer:
      "Evet, proje tesliminden sonra da teknik destek, güncelleme ve bakım hizmeti veriyorum. İhtiyaçlarınıza göre esnek destek planları oluşturabiliriz.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 py-24 dark:bg-dark-900">
      <div className="section-container section-padding mx-auto max-w-4xl">
        <h2 className="text-heading mb-12 text-center text-3xl font-black sm:text-5xl">
          Sıkça Sorulan Sorular
        </h2>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-dark-700 dark:bg-dark-800"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-dark-700/50"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-heading pr-8 text-xl font-bold">{faq.question}</span>
                <FaChevronDown
                  className={`flex-shrink-0 text-primary-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-body mx-6 mt-4 border-t border-gray-50 p-6 pt-0 text-lg dark:border-dark-700/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
