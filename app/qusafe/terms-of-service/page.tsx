// terms/page.tsx
// Assumptions Verified From Repo (qusafe-mobile):
// 1) The mobile app uses Supabase (@supabase/supabase-js) for backend/auth and sync-related operations.
// 2) The mobile app includes Sentry (@sentry/react-native) for crash/diagnostics reporting.
// 3) The mobile app includes Google Mobile Ads (react-native-google-mobile-ads) and may show ads depending on configuration.
// 4) The mobile app has a Paywall screen and includes react-native-purchases; purchases are currently disabled/“coming soon” in code.
// 5) The mobile app encrypts vault data on-device (AES module present) and derives keys via PBKDF2 (argon2.ts uses PBKDF2 naming).

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service - QuSafe',
    description: 'QuSafe Terms of Service - Service rules, acceptable use, and legal terms.',
}

const COMPANY_NAME = 'QuSafe'
const CONTACT_EMAIL = 'schwerttr@gmail.com'
const WEBSITE_URL = 'http://goldsword.dev/qusafe'
const JURISDICTION = 'Türkiye / Gaziantep'

export default function TermsPage() {
    return (
        <article className="max-w-none">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
                <p className="text-slate-400">Kullanım Şartları</p>
                <p className="text-sm text-slate-600 mt-4">Last updated: December 2025</p>
            </div>

            <div className="prose-container space-y-8">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="text-slate-300 leading-relaxed">
                        <strong className="text-white">{COMPANY_NAME}</strong> uygulamasını veya {WEBSITE_URL} üzerindeki ilgili
                        sayfaları kullanarak bu Kullanım Şartları’nı kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayın.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        By using <strong className="text-white">{COMPANY_NAME}</strong> or the related pages at {WEBSITE_URL}, you
                        agree to these Terms. If you do not agree, do not use the app.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">2. Who We Are & Contact</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu şartlar {COMPANY_NAME} için geçerlidir. Destek ve güvenlik bildirimleri için bize e-posta ile ulaşabilirsiniz:{' '}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        These Terms apply to {COMPANY_NAME}. For support and security reports, contact:{' '}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">3. The Service (Password/Vault App)</h2>
                    <p className="text-slate-300 leading-relaxed">
                        {COMPANY_NAME}, parolalarınız ve benzeri hassas veriler için “kasa/vault” mantığında bir uygulamadır.
                        Uygulama; yerel (cihaz içi) şifreli depolama, isteğe bağlı bulut senkronizasyonu ve bazı ek özellikler sunabilir.
                        Özellikler sürümlere göre değişebilir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        {COMPANY_NAME} is a vault-style app for passwords and similar sensitive data. It may offer encrypted on-device
                        storage, optional cloud sync, and additional features. Features may change by version.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">4. Account, Authentication & Security</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Hesap kullanıyorsanız (ör. e-posta ile giriş), hesabınızın güvenliğinden siz sorumlusunuz. Cihaz güvenliği,
                        ekran kilidi, güçlü ana parola (master password) seçimi ve hesap erişiminin korunması önemlidir. Ana parolanızı
                        bizimle paylaşmayın.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        If you use an account (e.g., email login), you are responsible for account security. Device security, screen
                        lock, and choosing a strong master password are important. Do not share your master password with us.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">5. Acceptable Use</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Uygulamayı hukuka aykırı amaçlarla, başkalarının sistemlerine izinsiz erişim için, kötüye kullanım (spam, saldırı,
                        kötü niyetli otomasyon) veya hizmetin güvenliğini zayıflatma amacıyla kullanamazsınız.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        You may not use the app for unlawful purposes, unauthorized access to others’ systems, abuse (spam/attacks),
                        or attempts to compromise service security.
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>TR: Tersine mühendislik / sömürü geliştirme / yetkisiz testler yasaktır.</li>
                        <li>EN: Reverse engineering, exploit development, or unauthorized security testing is prohibited.</li>
                        <li>TR: Sorumlu güvenlik bildirimi için {CONTACT_EMAIL} üzerinden iletişime geçin.</li>
                        <li>EN: For responsible disclosure, contact {CONTACT_EMAIL}.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">6. Backups & User Responsibility</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Parola yöneticileri doğası gereği kritiktir. Cihaz kaybı, ana parola unutulması, işletim sistemi değişiklikleri,
                        uygulama hataları veya üçüncü taraf hizmet kesintileri gibi durumlarda veri kaybı yaşanabilir. Uygun gördüğünüz
                        şekilde yedekleme ve kurtarma planı oluşturmanız önerilir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Password managers are inherently critical. Data loss can occur due to device loss, forgotten master password,
                        OS changes, app bugs, or third-party outages. We recommend maintaining an appropriate backup/recovery plan.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">7. Optional Cloud Sync & Third Parties</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bulut senkronizasyonu isteğe bağlı olabilir. Senkronizasyon sırasında kasa içeriği cihazda şifrelenmiş halde
                        tutulabilir; yine de hesap verileri (ör. e-posta), zaman damgaları veya hata kayıtları gibi sınırlı meta veriler
                        işlenebilir. Ayrıca, uygulama; altyapı (ör. kimlik doğrulama/senkronizasyon), crash/diagnostics veya reklam SDK’ları
                        gibi üçüncü taraf servisler kullanabilir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Cloud sync may be optional. Vault content may be stored in encrypted form, while limited metadata (e.g., account
                        email, timestamps, diagnostics) may be processed. The app may use third-party services for infrastructure,
                        crash/diagnostics, or ads.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Ayrıntılar için Gizlilik Politikası’na bakın. / See the Privacy Policy for details.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">8. Subscriptions / Premium (Future)</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Ücretli özellikler veya abonelikler ileride eklenebilir. Plan/özellik/fiyat değişiklikleri mümkün olup,
                        uygulanabilir olduğu ölçüde kullanıcıya makul bildirim sağlanmaya çalışılır.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Paid features or subscriptions may be added in the future. Plans/features/prices may change, and we will try to
                        provide reasonable notice where applicable.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">9. Security & Cryptography Disclaimer</h2>
                    <p className="text-slate-300 leading-relaxed">
                        {COMPANY_NAME}, yaygın kabul gören güvenlik uygulamalarını ve endüstri standardı şifreleme yaklaşımlarını
                        uygulamayı hedefler. Bununla birlikte, yazılım ve kriptografi zamanla değişir; yeni riskler ortaya çıkabilir ve
                        güncellemeler gerekebilir. Mutlak güvenlik garantisi veremeyiz.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        {COMPANY_NAME} aims to follow widely accepted security practices and industry-standard encryption approaches.
                        However, software and cryptography evolve; new risks may emerge and updates may be required. We do not provide
                        an absolute security guarantee.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">10. Warranty Disclaimer & Limitation of Liability</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Uygulama “olduğu gibi” sunulur. Uygulanabilir hukuk izin verdiği ölçüde, ticari elverişlilik, belirli bir amaca
                        uygunluk ve ihlal etmeme dahil açık/zımni tüm garantileri reddederiz. Dolaylı, arızi, özel veya sonuç olarak doğan
                        zararlardan sorumlu tutulamayız.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        The app is provided “as is.” To the extent permitted by law, we disclaim warranties including merchantability,
                        fitness for a particular purpose, and non-infringement. We are not liable for indirect, incidental, special, or
                        consequential damages.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        (Not: Zorunlu tüketici hakları saklıdır.) / (Note: Mandatory consumer rights remain reserved.)
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">11. Changes to These Terms</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu şartları zaman zaman güncelleyebiliriz. Önemli değişikliklerde mümkün olduğunda uygulama içi bildirim veya
                        web sayfası üzerinden duyuru yapabiliriz. Güncellenmiş şartları kullanmaya devam etmeniz kabul anlamına gelir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We may update these Terms from time to time. For material changes, we may provide notice in-app or via the
                        website when feasible. Continued use means acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">12. Governing Law & Disputes</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Bu şartlar {JURISDICTION} hukukuna göre yorumlanır; ancak yürürlükteki zorunlu tüketici mevzuatından doğan
                        haklarınız saklıdır. Uyuşmazlıklarda, uygulanabilir olduğu ölçüde yerel yasal yollar geçerlidir.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        These Terms are governed by the laws of {JURISDICTION}, without prejudice to mandatory consumer protections
                        that apply to you. Local legal remedies may also apply where required.
                    </p>
                </section>


            </div>
        </article>
    )
}
