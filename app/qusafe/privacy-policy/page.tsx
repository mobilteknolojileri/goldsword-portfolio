// privacy/page.tsx
// Assumptions Verified From Repo (qusafe-mobile):
// 1) The mobile app uses Supabase (@supabase/supabase-js) for backend/auth and sync-related operations.
// 2) The mobile app includes Sentry (@sentry/react-native) for crash/diagnostics reporting.
// 3) The mobile app includes Google Mobile Ads (react-native-google-mobile-ads) and may show ads depending on configuration.
// 4) The mobile app uses RevenueCat via react-native-purchases (subscriptions / paywall).
// 5) The mobile app encrypts vault data on-device (AES module present) and derives keys via PBKDF2.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - QuSafe",
  description: "QuSafe Privacy Policy - Learn how we protect your data.",
};

const COMPANY_NAME = "QuSafe";
const CONTACT_EMAIL = "schwerttr@gmail.com";
const WEBSITE_URL = "http://goldsword.dev/qusafe";
const JURISDICTION = "Türkiye / Gaziantep";

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-400">Gizlilik Politikası</p>
        <p className="text-sm text-slate-600 mt-4">
          Last updated: December 2026
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
            işlendiğini açıklar. Politika; Türkiye’de KVKK ve ayrıca
            kullanıcıların bulunduğu ülkeye göre GDPR/UK GDPR, CCPA/CPRA, LGPD
            gibi çerçevelerle uyum hedefiyle hazırlanmıştır; ancak yerel mevzuat
            farklılık gösterebilir.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This Privacy Policy explains how{" "}
            <strong className="text-white">{COMPANY_NAME}</strong> processes
            personal data in the app and related pages at {WEBSITE_URL}. It is
            designed to align with common frameworks (KVKK, GDPR/UK GDPR,
            CCPA/CPRA, LGPD), but local laws may differ.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            2. Data We Collect
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Topladığımız/veri işlediğimiz kategoriler, kullandığınız özelliklere
            göre değişebilir:
          </p>
          <p className="text-slate-300 leading-relaxed">
            The categories of data we process may vary depending on features you
            use:
          </p>

          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>
              <span className="text-white">Hesap verileri / Account data:</span>{" "}
              Giriş için e-posta gibi bilgiler (varsa), oturum belirteçleri ve
              temel hesap meta verileri.
            </li>
            <li>
              <span className="text-white">
                Kasa (vault) içeriği / Vault content:
              </span>{" "}
              Parolalar, notlar vb. içerikler cihazda şifreli olarak saklanır.
              Bulut senkronizasyonu açıksa, şifreli bir yük (payload) sunucuya
              aktarılabilir.
            </li>
            <li>
              <span className="text-white">
                Cihaz ve tanı/diagnostic verileri:
              </span>{" "}
              Uygulama sürümü, cihaz modeli/OS sürümü, hata raporları ve
              performans sinyalleri (ör. crash log’ları) — mümkün olduğunda
              minimizasyon hedeflenir.
            </li>
            <li>
              <span className="text-white">
                Reklam verileri (varsa) / Ads data (if enabled):
              </span>{" "}
              Reklam gösterimi için reklam tanımlayıcıları veya ölçüm sinyalleri
              (platform izinleri ve ayarlarınıza bağlı).
            </li>
            <li>
              <span className="text-white">
                Ödeme/abonelik meta verileri / Payment & subscription metadata:
              </span>{" "}
              Satın alma etkinliği, ürün/plan kimliği, deneme durumu,
              yenileme/sona erme durumu gibi “erişim yetkisi (entitlement)”
              doğrulaması için gerekli içerik dışı meta veriler. Ödeme işlemi
              App Store/Google Play tarafından yapılır; tam kart/banka
              bilgileriniz bize aktarılmaz.
            </li>
          </ul>

          <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 mt-6">
            <p className="text-slate-300 leading-relaxed">
              <span className="text-white">Önemli not (TR):</span> Kasa içeriği
              şifreli olarak tasarlanır; ancak hiçbir sistem “mutlak güvenlik”
              garanti edemez. Kriptografi ve tehditler zamanla evrimleşir;
              gerekli durumlarda güncellemeler yayınlanabilir.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="text-white">Important (EN):</span> Vault content
              is designed to be encrypted, but no system can guarantee absolute
              security. Cryptography and threats evolve; updates may be released
              as needed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            3. How We Use Your Data
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Verileri; hizmeti sunmak, güvenliği sağlamak ve iyileştirmek için
            işleriz:
          </p>
          <p className="text-slate-300 leading-relaxed">
            We use data to provide, secure, and improve the service:
          </p>

          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>
              TR: Hesap oluşturma/giriş, oturum yönetimi ve isteğe bağlı
              senkronizasyon.
            </li>
            <li>
              EN: Account login/session management and optional synchronization.
            </li>
            <li>
              TR: Abonelik doğrulama ve premium erişimi sağlama (entitlement).
            </li>
            <li>
              EN: Verifying subscriptions and providing premium access
              (entitlements).
            </li>
            <li>
              TR: Hata ayıklama, crash analizi ve güvenlik olaylarını tespit
              etme.
            </li>
            <li>
              EN: Debugging, crash analysis, and detecting security incidents.
            </li>
            <li>TR: Destek taleplerine yanıt verme ve iletişim kurma.</li>
            <li>
              EN: Responding to support requests and communicating with you.
            </li>
            <li>
              TR: (Varsa) Reklam gösterimi ve ölçümü; platform izinleri ve
              ayarlarınıza bağlıdır.
            </li>
            <li>
              EN: (If enabled) Serving and measuring ads, subject to platform
              permissions and your settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            4. Data Security
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Güvenlik yaklaşımımız; veri minimizasyonu, yetki sınırlaması (least
            privilege), şifreleme, güvenli anahtar/oturum yönetimi ve güvenlik
            güncellemeleri gibi iyi uygulamaları hedefler. Buna rağmen, hiçbir
            uygulama veya hizmet %100 güvenlik garantisi veremez.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Our security approach aims to follow best practices such as data
            minimization, least privilege, encryption, secure session handling,
            and security updates. However, no app or service can guarantee 100%
            security.
          </p>

          <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 mt-6">
            <p className="text-slate-300 leading-relaxed">
              TR: Cihazınızın güvenliği (ekran kilidi, OS güncellemeleri,
              zararlı yazılımlardan kaçınma) özellikle önemlidir.
              <br />
              EN: Your device security (screen lock, OS updates, avoiding
              malware) is especially important.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            5. Third-Party Services
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Uygulama; altyapı, kimlik doğrulama/senkronizasyon,
            crash/diagnostics, abonelik doğrulama veya reklam gibi amaçlarla
            üçüncü taraf servisler kullanabilir. Bu servis sağlayıcılar,
            genellikle “hizmet sağlayıcı/işleyen” rolünde sınırlı veriye
            erişebilir ve kendi politikalarına tabi olabilir.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The app may use third-party services for infrastructure, auth/sync,
            crash/diagnostics, subscription verification, or ads. These
            providers typically act as service providers/processors and may
            process limited data under their own policies.
          </p>

          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>
              TR: Altyapı/kimlik doğrulama/senkronizasyon (ör. Supabase benzeri
              servisler).
              <br />
              EN: Infrastructure/auth/sync (e.g., services like Supabase).
            </li>
            <li>
              TR: Crash/diagnostics (ör. Sentry benzeri).
              <br />
              EN: Crash/diagnostics (e.g., Sentry).
            </li>
            <li>
              TR: Abonelik yönetimi/doğrulama (ör. RevenueCat) ve mağaza
              sağlayıcıları (Apple/Google).
              <br />
              EN: Subscription management/verification (e.g., RevenueCat) and
              store providers (Apple/Google).
            </li>
            <li>
              TR: Reklam (varsa) (ör. Google Mobile Ads/AdMob).
              <br />
              EN: Ads (if enabled) (e.g., Google Mobile Ads/AdMob).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            6. Your Rights
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Bulunduğunuz ülkeye göre; veriye erişim, düzeltme, silme, işleme
            kısıtlama, taşınabilirlik, itiraz ve belirli durumlarda rızayı geri
            çekme gibi haklarınız olabilir. (ABD’de bazı eyaletlerde
            “satış/paylaşım” opt-out gibi ek haklar bulunabilir.) Hak kullanımı
            için bize e-posta ile ulaşabilirsiniz.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Depending on your location, you may have rights to access, correct,
            delete, restrict processing, portability, object, and withdraw
            consent in certain cases. (Some US states provide additional opt-out
            rights.) Contact us to exercise your rights.
          </p>

          <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 mt-6">
            <p className="text-slate-300 leading-relaxed">
              TR: Talebinizi değerlendirirken kimlik doğrulaması isteyebiliriz
              ve bazı verileri yasal yükümlülükler nedeniyle sınırlı süre
              saklamamız gerekebilir.
              <br />
              EN: We may need to verify your identity and retain certain data
              for legal obligations.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              TR: Uyuşmazlık/yorum farkı durumunda, {JURISDICTION} ve zorunlu
              tüketici hakları çerçevesi saklıdır.
              <br />
              EN: In case of disputes, {JURISDICTION} law may apply without
              prejudice to mandatory consumer rights.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            7. Contact Us
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Bu Gizlilik Politikası ile ilgili sorularınız için bize ulaşın:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-slate-300 leading-relaxed">
            Questions about this Privacy Policy:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
