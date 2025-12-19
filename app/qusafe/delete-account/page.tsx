// delete-account/page.tsx
// Assumptions Verified From Repo (qusafe-mobile):
// 1) The mobile app uses Supabase (@supabase/supabase-js) for backend/auth and sync-related operations.
// 2) The mobile app includes Sentry (@sentry/react-native) for crash/diagnostics reporting.
// 3) The mobile app includes Google Mobile Ads (react-native-google-mobile-ads) and may show ads depending on configuration.
// 4) The mobile app uses RevenueCat via react-native-purchases (subscriptions / paywall).
// 5) The mobile app encrypts vault data on-device (AES module present) and derives keys via PBKDF2.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account - QuSafe",
  description: "Request deletion of your QuSafe account and data.",
};

const COMPANY_NAME = "QuSafe";
const CONTACT_EMAIL = "schwerttr@gmail.com";
const WEBSITE_URL = "http://goldsword.dev/qusafe";
const JURISDICTION = "Türkiye / Gaziantep";

export default function DeleteAccountPage() {
  const subject = encodeURIComponent(
    `${COMPANY_NAME} - Account Deletion Request / Hesap Silme Talebi`,
  );
  const body = encodeURIComponent(
    [
      "TR: Merhaba,",
      `${COMPANY_NAME} hesabımın ve ilişkili verilerimin silinmesini talep ediyorum.`,
      "",
      "Hesap bilgisi (varsa):",
      "- E-posta:",
      "- Kullanıcı adı (varsa):",
      "",
      "Ek not:",
      "- (Varsa) cihaz/telefon modeli, platform (iOS/Android), yaklaşık kayıt tarihi",
      "",
      "EN: Hello,",
      `I request deletion of my ${COMPANY_NAME} account and associated data.`,
      "",
      "Account info (if applicable):",
      "- Email:",
      "- Username (if any):",
      "",
      "Additional notes:",
      "- (Optional) device model, platform (iOS/Android), approximate signup date",
    ].join("\n"),
  );

  return (
    <article className="max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Delete Account</h1>
        <p className="text-slate-400">Hesap ve Veri Silme</p>
        <p className="text-sm text-slate-600 mt-4">
          Last updated: December 2025
        </p>
      </div>

      {/* Warning Box */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86l-7.4 12.8A2 2 0 004.62 20h14.76a2 2 0 001.73-3.04l-7.4-12.8a2 2 0 00-3.46 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">
              Önemli / Important
            </h2>
            <p className="text-slate-300 leading-relaxed">
              TR: Hesap silme işlemi geri alınamaz. Bulut senkronizasyonu
              (varsa) ve hesapla ilişkili veriler silinebilir. Cihazınızda
              yalnızca yerel kasa kullanıyorsanız, uygulama içinden “kasa
              temizleme/çıkış” adımları ile yerel veriyi de kaldırmanız
              gerekebilir.
              <br />
              EN: Account deletion is irreversible. Cloud sync (if enabled) and
              account-associated data may be removed. If you only use a local
              vault, you may also need to clear local data in-app.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              TR: Aboneliğiniz varsa, hesap silme işlemi aboneliği otomatik
              iptal etmeyebilir. Aboneliği App Store / Google Play ayarlarından
              yönetip iptal edin.
              <br />
              EN: If you have an active subscription, account deletion may not
              automatically cancel it. Manage/cancel via App Store / Google Play
              settings.
            </p>
          </div>
        </div>
      </div>

      <div className="prose-container space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            1. In-App Deletion
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Uygulama içinde aşağıdaki yolu izleyin:{" "}
            <span className="text-white">
              Settings → (alt kısım) Delete Account
            </span>
            . Uygulama sizden doğrulama isteyebilir (ör. tekrar giriş / kimlik
            doğrulama). Silme işlemi tamamlandığında, cihazınızdaki yerel
            verileri de temizlemeniz için yönlendirme görebilirsiniz.
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: In the app, follow:{" "}
            <span className="text-white">
              Settings → (bottom) Delete Account
            </span>
            . You may be asked to verify your identity (e.g.,
            re-authentication). After completion, you may be prompted to clear
            local data as well.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            2. Email Request (Alternative)
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Uygulama içinden silme seçeneklerine erişemiyorsanız veya teknik
            bir sorun yaşıyorsanız, e-posta ile talep oluşturabilirsiniz.
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: If you cannot access in-app deletion or experience a technical
            issue, you can request deletion by email.
          </p>

          <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 mt-4">
            <p className="text-slate-300 leading-relaxed mb-4">
              <span className="text-white">TR/EN:</span> Silme talebi göndermek
              için:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 hover:bg-indigo-500/30 transition-colors"
            >
              <span>Email: {CONTACT_EMAIL}</span>
              <span aria-hidden>↗</span>
            </a>
            <p className="text-slate-400 text-sm mt-4">
              TR: Talebinizi daha hızlı doğrulayabilmemiz için e-posta
              adresinizi ve mümkünse hesapla ilişkili bilgileri ekleyin.
              <br />
              EN: Include your email and any account-related details to help us
              verify the request.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            3. What Will Be Deleted?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Özellikleri kullanımınıza bağlı olarak, aşağıdaki veri türleri
            silinebilir:
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: Depending on your usage, the following data may be deleted:
          </p>

          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
            <li>
              TR: Hesap kaydı ve kimlik doğrulama ile ilişkili veriler (varsa).
            </li>
            <li>
              EN: Account record and authentication-related data (if
              applicable).
            </li>
            <li>
              TR: Bulut senkronizasyon kayıtları (varsa) (şifreli kasa yükü ve
              ilgili meta veriler).
            </li>
            <li>
              EN: Cloud sync records (if enabled) (encrypted vault payload and
              related metadata).
            </li>
            <li>
              TR: Destek talepleri ve iletişim kayıtları (varsa) (makul ölçüde).
            </li>
            <li>
              EN: Support communications (if any) (as reasonably necessary).
            </li>
            <li>
              TR: Abonelik/premium doğrulama için tutulan sınırlı meta veriler
              (ör. entitlement durumu) — mümkün olduğu ölçüde hesapla
              ilişkilendirme kaldırılabilir.
            </li>
            <li>
              EN: Limited metadata used for subscription/premium verification
              (e.g., entitlement status) — may be disassociated where feasible.
            </li>
            <li>
              TR: Crash/diagnostics kayıtları (varsa) — bazı durumlarda
              kimliksizleştirilmiş/anonimleşmiş kayıtlar teknik olarak tamamen
              geri döndürülemez biçimde tutulabilir.
            </li>
            <li>
              EN: Crash/diagnostics (if any) — in some cases,
              anonymized/aggregated records may not be practically reversible.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            4. What May Be Retained?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Yasal yükümlülükler, güvenlik (dolandırıcılık/istismar önleme)
            veya finansal kayıtlar (ör. iade/itiraz süreçleri) gibi gerekçelerle
            bazı sınırlı verileri, gerekli olduğu ölçüde ve sınırlı süreyle
            saklamamız gerekebilir.
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: We may retain limited data where required for legal obligations,
            security (fraud/abuse prevention), or financial records (e.g.,
            refunds/disputes), only as necessary and for a limited time.
          </p>
          <p className="text-slate-400 text-sm">
            TR: Zorunlu tüketici hakları saklıdır. ({JURISDICTION})
            <br />
            EN: Mandatory consumer protections remain reserved. ({JURISDICTION})
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            5. Processing Time & Verification
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Silme taleplerini genellikle{" "}
            <span className="text-white">30 gün</span> içinde tamamlamayı
            hedefleriz. Hesabın sahibini korumak için kimlik doğrulaması
            isteyebiliriz (ör. aynı e-posta ile talep, yeniden giriş
            doğrulaması).
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: We generally aim to complete deletion requests within{" "}
            <span className="text-white">30 days</span>. To protect account
            owners, we may require verification (e.g., request from the same
            email, re-authentication).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            6. Local Device Data
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Hesap silme, cihazınızdaki yerel verileri otomatik olarak
            kaldırmayabilir. Uygulama içinden kasa temizleme/çıkış adımlarını
            uygulayın ve gerekirse uygulamayı kaldırın. (Not: Ana parola
            unutulursa bazı yerel veriler kurtarılamayabilir.)
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: Account deletion may not automatically remove local device data.
            Use in-app clear/sign-out options and, if needed, uninstall the app.
            (Note: If the master password is forgotten, some local data may be
            unrecoverable.)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">
            7. Subscriptions (Important)
          </h2>
          <p className="text-slate-300 leading-relaxed">
            TR: Aboneliğiniz App Store / Google Play üzerinden yönetilir.
            Hesabınızı silseniz bile, mağaza tarafında abonelik aktif kalabilir.
            Lütfen iptal/yenileme ayarlarınızı mağaza hesabınızdan yönetin.
          </p>
          <p className="text-slate-300 leading-relaxed">
            EN: Subscriptions are managed by App Store / Google Play. Even if
            you delete your account, the store subscription may remain active.
            Please manage cancellation/renewal from your store account settings.
          </p>
        </section>
      </div>
    </article>
  );
}
