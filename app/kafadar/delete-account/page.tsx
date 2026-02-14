import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Delete Account - Kafadar",
    description: "Request deletion of your Kafadar account and data.",
};

const COMPANY_NAME = "Kafadar";
const CONTACT_EMAIL = "schwerttr@gmail.com";
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
            "Hesap bilgisi:",
            "- E-posta:",
            "- Kullanıcı adı:",
            "",
            "EN: Hello,",
            `I request deletion of my ${COMPANY_NAME} account and associated data.`,
            "",
            "Account info:",
            "- Email:",
            "- Username:",
        ].join("\n"),
    );

    return (
        <article className="max-w-none">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Delete Account</h1>
                <p className="text-slate-400">Hesap ve Veri Silme</p>
                <p className="text-sm text-slate-600 mt-4">
                    Last updated: February 2026
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
                            TR: Hesap silme işlemi geri alınamaz. Hesabınızla ilişkili tüm
                            quizler, yanıtlar ve profil bilgileri kalıcı olarak silinir.
                            <br />
                            EN: Account deletion is irreversible. All quizzes, responses, and
                            profile data associated with your account will be permanently
                            deleted.
                        </p>
                    </div>
                </div>
            </div>

            <div className="prose-container space-y-8">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        1. Email Request
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        TR: Hesap silme talebinizi e-posta ile gönderebilirsiniz.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        EN: You can request account deletion by email.
                    </p>

                    <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 mt-4">
                        <p className="text-slate-300 leading-relaxed mb-4">
                            <span className="text-white">TR/EN:</span> Silme talebi göndermek
                            için:
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-200 hover:bg-rose-500/30 transition-colors"
                        >
                            <span>Email: {CONTACT_EMAIL}</span>
                            <span aria-hidden>↗</span>
                        </a>
                        <p className="text-slate-400 text-sm mt-4">
                            TR: E-posta adresinizi ve kullanıcı adınızı eklemeyi unutmayın.
                            <br />
                            EN: Include your email and username to help us verify the request.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        2. What Will Be Deleted?
                    </h2>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>
                            TR: Hesap kaydı ve profil bilgileri (kullanıcı adı, avatar).
                            <br />
                            EN: Account record and profile data (username, avatar).
                        </li>
                        <li>
                            TR: Oluşturduğunuz tüm quizler ve sorular.
                            <br />
                            EN: All quizzes and questions you created.
                        </li>
                        <li>
                            TR: Quizlerinize gelen tüm yanıtlar ve skorlar.
                            <br />
                            EN: All responses and scores for your quizzes.
                        </li>
                        <li>
                            TR: Deep link ve paylaşım verileri.
                            <br />
                            EN: Deep link and sharing data.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        3. Processing Time
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        TR: Silme taleplerini genellikle{" "}
                        <span className="text-white">30 gün</span> içinde tamamlamayı
                        hedefleriz. Kimlik doğrulaması isteyebiliriz.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        EN: We generally aim to complete deletion requests within{" "}
                        <span className="text-white">30 days</span>. We may require identity
                        verification.
                    </p>
                    <p className="text-slate-400 text-sm mt-4">
                        TR: Zorunlu tüketici hakları saklıdır. ({JURISDICTION})
                        <br />
                        EN: Mandatory consumer protections remain reserved. ({JURISDICTION})
                    </p>
                </section>
            </div>
        </article>
    );
}
