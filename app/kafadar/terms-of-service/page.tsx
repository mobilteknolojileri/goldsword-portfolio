import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - Kafadar",
    description:
        "Kafadar Terms of Service - Service rules, acceptable use, and legal terms.",
};

const COMPANY_NAME = "Kafadar";
const CONTACT_EMAIL = "schwerttr@gmail.com";
const WEBSITE_URL = "https://goldsword.dev/kafadar";
const JURISDICTION = "Türkiye / Gaziantep";

export default function TermsPage() {
    return (
        <article className="max-w-none">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
                <p className="text-slate-400">Kullanım Şartları</p>
                <p className="text-sm text-slate-600 mt-4">
                    Last updated: February 2026
                </p>
            </div>

            <div className="prose-container space-y-8">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        <strong className="text-white">{COMPANY_NAME}</strong> uygulamasını
                        veya {WEBSITE_URL} üzerindeki ilgili sayfaları kullanarak bu Kullanım
                        Şartları&apos;nı kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı
                        kullanmayın.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        By using <strong className="text-white">{COMPANY_NAME}</strong> or
                        the related pages at {WEBSITE_URL}, you agree to these Terms. If you
                        do not agree, do not use the app.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        2. Who We Are & Contact
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu şartlar {COMPANY_NAME} için geçerlidir. Destek için bize e-posta
                        ile ulaşabilirsiniz:{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-rose-400 hover:text-rose-300 transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        These Terms apply to {COMPANY_NAME}. For support, contact:{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-rose-400 hover:text-rose-300 transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        3. The Service
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        {COMPANY_NAME}, arkadaşlık testi oluşturma ve paylaşma uygulamasıdır.
                        Quiz oluşturabilir, link ile paylaşabilir ve arkadaşlarınızın
                        sonuçlarını görebilirsiniz. Özellikler sürümlere göre değişebilir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        {COMPANY_NAME} is a friendship quiz app. You can create quizzes,
                        share them via link, and view your friends&apos; scores. Features may
                        change by version.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        4. Account & Security
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Hesap oluşturuyorsanız (e-posta ile giriş), hesabınızın güvenliğinden
                        siz sorumlusunuz. Güçlü parola seçimi ve hesap erişiminin korunması
                        önemlidir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        If you create an account (email login), you are responsible for
                        account security. Strong passwords and protecting account access are
                        important.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        5. User Content & Acceptable Use
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Oluşturduğunuz quiz içerikleri sizin sorumluluğunuzdadır. Aşağıdaki
                        kullanımlar yasaktır:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>
                            TR: Hakaret, nefret söylemi, taciz veya yasadışı içerik.
                            <br />
                            EN: Harassment, hate speech, or illegal content.
                        </li>
                        <li>
                            TR: Spam veya otomatik toplu quiz oluşturma.
                            <br />
                            EN: Spam or automated bulk quiz creation.
                        </li>
                        <li>
                            TR: Hizmetin güvenliğini zayıflatma girişimleri.
                            <br />
                            EN: Attempts to compromise service security.
                        </li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed mt-4">
                        TR: Uygun olmayan içerikler kaldırılabilir ve hesaplar
                        askıya alınabilir.
                        <br />
                        EN: Inappropriate content may be removed and accounts suspended.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        6. Data & Privacy
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Verilerinizin nasıl işlendiği hakkında ayrıntılı bilgi için{" "}
                        <a
                            href="/kafadar/privacy-policy"
                            className="text-rose-400 hover:text-rose-300 transition-colors"
                        >
                            Gizlilik Politikası
                        </a>
                        &apos;na bakın.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        See our{" "}
                        <a
                            href="/kafadar/privacy-policy"
                            className="text-rose-400 hover:text-rose-300 transition-colors"
                        >
                            Privacy Policy
                        </a>{" "}
                        for details on data processing.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        7. Warranty Disclaimer & Limitation of Liability
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Uygulama &quot;olduğu gibi&quot; sunulur. Uygulanabilir hukuk izin verdiği
                        ölçüde, açık/zımni tüm garantileri reddederiz. Dolaylı, arızi, özel
                        veya sonuç olarak doğan zararlardan sorumlu tutulamayız.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        The app is provided &quot;as is.&quot; To the extent permitted by law, we
                        disclaim all warranties. We are not liable for indirect, incidental,
                        special, or consequential damages.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        (Not: Zorunlu tüketici hakları saklıdır.) / (Note: Mandatory
                        consumer rights remain reserved.)
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        8. Changes to These Terms
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu şartları zaman zaman güncelleyebiliriz. Güncellenmiş şartları
                        kullanmaya devam etmeniz kabul anlamına gelir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We may update these Terms from time to time. Continued use means
                        acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        9. Governing Law & Disputes
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu şartlar {JURISDICTION} hukukuna göre yorumlanır; ancak zorunlu
                        tüketici mevzuatından doğan haklarınız saklıdır.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        These Terms are governed by the laws of {JURISDICTION}, without
                        prejudice to mandatory consumer protections.
                    </p>
                </section>
            </div>
        </article>
    );
}
