export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Gaziantep dışından da iş alıyor musunuz?",
    answer:
      "Evet. Gaziantep'teyseniz yüz yüze görüşebiliriz. Türkiye'nin başka şehirlerinden ve yurt dışından gelen işleri ise görüntülü görüşmeyle ve ortak bir iş takip aracı üzerinden yürütürüm.",
  },
  {
    question: "Bir proje ne kadar sürede tamamlanır?",
    answer:
      "Kapsama bağlı. Kabaca standart bir web sitesi 1–2 hafta, kapsamlı bir mobil uygulama 4–8 hafta sürer. Kesin süreyi ilk görüşmede neyin yapılacağını birlikte yazıya döktükten sonra söylerim.",
  },
  {
    question: "Hangi teknolojilerle çalışıyorsunuz?",
    answer:
      "Mobil uygulamada genellikle React Native ve Expo ya da Flutter, web tarafında Astro, Next.js ve Supabase kullanırım. Seçimi projenin ihtiyacına göre yaparım; hangi projede neyi kullandığımı portfolyoda görebilirsiniz.",
  },
  {
    question: "Arama motoru optimizasyonu (SEO) dâhil mi?",
    answer:
      "Evet. Her projede teknik SEO'yu, yapılandırılmış veriyi (schema) ve sayfa hızını baştan hesaba katarım. Sitenizin Google'da bulunabilmesi en başta düşündüğüm şeylerden biri.",
  },
  {
    question: "Teslimden sonra destek veriyor musunuz?",
    answer:
      "Evet. Teslimden sonra da hata düzeltme, güncelleme ve bakım işlerine bakarım. İsterseniz düzenli bir bakım anlaşması yaparız, isterseniz yalnızca ihtiyaç olduğunda çalışırız.",
  },
];
