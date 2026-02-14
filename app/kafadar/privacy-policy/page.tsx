import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Kafadar",
    description: "Kafadar Privacy Policy - Learn how we protect your data.",
};

const COMPANY_NAME = "Kafadar";
const CONTACT_EMAIL = "schwerttr@gmail.com";
const WEBSITE_URL = "https://goldsword.dev/kafadar";
const JURISDICTION = "Türkiye / Gaziantep";

export default function PrivacyPolicyPage() {
    return (
        <article className="max-w-none">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                <p className="text-slate-400">Gizlilik Politikası</p>
                <p className="text-sm text-slate-600 mt-4">
                    Last updated: February 2026
                </p>
            </div>

            <div className="prose-container space-y-8">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu Gizlilik Politikası,{" "}
                        <strong className="text-white">{COMPANY_NAME}</strong> uygulaması ve{" "}
                        {WEBSITE_URL} ile ilişkili sayfalarda kişisel verilerin nasıl
                        işlendiğini açıklar. Politika; Türkiye'de KVKK ve ayrıca
                        kullanıcıların bulunduğu ülkeye göre GDPR/UK GDPR, CCPA/CPRA, LGPD
                        gibi çerçevelerle uyum hedefiyle hazırlanmıştır.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        This Privacy Policy explains how{" "}
                        <strong className="text-white">{COMPANY_NAME}</strong> processes
                        personal data in the app and related pages at {WEBSITE_URL}. It is
                        designed to align with common frameworks (KVKK, GDPR/UK GDPR,
                        CCPA/CPRA, LGPD).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        2. Data We Collect
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Topladığımız/veri işlediğimiz kategoriler:
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        The categories of data we process:
                    </p>

                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>
                            <span className="text-white">Hesap verileri / Account data:</span>{" "}
                            E-posta adresi, kullanıcı adı, emoji avatar, oturum belirteçleri.
                        </li>
                        <li>
                            <span className="text-white">
                                Quiz içeriği / Quiz content:
                            </span>{" "}
                            Oluşturduğunuz quiz soruları, cevapları ve paylaşım linkleri.
                        </li>
                        <li>
                            <span className="text-white">
                                Yanıt verileri / Response data:
                            </span>{" "}
                            Çözülen quizlerin cevapları, skor bilgileri ve yanıt sayıları.
                        </li>
                        <li>
                            <span className="text-white">
                                Cihaz ve tanı verileri:
                            </span>{" "}
                            Uygulama sürümü, cihaz modeli/OS sürümü — mümkün olduğunda
                            minimizasyon hedeflenir.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        3. How We Use Your Data
                    </h2>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>
                            TR: Hesap oluşturma/giriş ve oturum yönetimi.
                            <br />
                            EN: Account login/session management.
                        </li>
                        <li>
                            TR: Quiz oluşturma, paylaşma ve sonuçları görüntüleme.
                            <br />
                            EN: Quiz creation, sharing, and viewing results.
                        </li>
                        <li>
                            TR: Leaderboard ve skor karşılaştırması.
                            <br />
                            EN: Leaderboard and score comparison.
                        </li>
                        <li>
                            TR: Destek taleplerine yanıt verme.
                            <br />
                            EN: Responding to support requests.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        4. Data Security
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Güvenlik yaklaşımımız; veri minimizasyonu, yetki sınırlaması, güvenli
                        oturum yönetimi ve Row Level Security (RLS) gibi iyi uygulamaları
                        hedefler. Buna rağmen, hiçbir uygulama veya hizmet %100 güvenlik
                        garantisi veremez.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Our security approach aims to follow best practices such as data
                        minimization, least privilege, secure session handling, and Row Level
                        Security (RLS). However, no app or service can guarantee 100%
                        security.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        5. Third-Party Services
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Uygulama; altyapı ve kimlik doğrulama için üçüncü taraf servisler
                        kullanabilir:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>
                            Supabase — Kimlik doğrulama, veritabanı ve API.
                        </li>
                        <li>
                            Expo — Uygulama derleme ve güncelleme altyapısı.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        6. Your Rights
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bulunduğunuz ülkeye göre; veriye erişim, düzeltme, silme, işleme
                        kısıtlama ve taşınabilirlik gibi haklarınız olabilir. Hak kullanımı
                        için bize e-posta ile ulaşabilirsiniz.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Depending on your location, you may have rights to access, correct,
                        delete, restrict processing, and portability. Contact us to exercise
                        your rights.
                    </p>
                    <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 mt-6">
                        <p className="text-slate-300 leading-relaxed">
                            Uyuşmazlık durumunda, {JURISDICTION} hukuku ve zorunlu tüketici
                            hakları çerçevesi geçerlidir.
                            <br />
                            In case of disputes, {JURISDICTION} law may apply without prejudice
                            to mandatory consumer rights.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        7. Contact Us
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu Gizlilik Politikası ile ilgili sorularınız için:{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-rose-400 hover:text-rose-300 transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Questions about this Privacy Policy:{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-rose-400 hover:text-rose-300 transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                </section>
            </div>
        </article>
    );
}
