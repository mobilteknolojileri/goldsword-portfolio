import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Legends of Aestera",
  description: "Terms of Service for Legends of Aestera mobile game.",
};

const CONTACT_EMAIL = "schwerttr@gmail.com";

export default function TermsOfServicePage() {
  return (
    <article className="max-w-none prose prose-invert">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-slate-400 italic">
          Son güncelleme / Last updated: 6 Şubat 2026
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-slate-800/20 p-8 rounded-3xl border border-white/5">
          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading or using Legends of Aestera, you agree to these
                terms. If you do not agree, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. License
              </h2>
              <p>
                Broadly speaking: We grant you a personal, non-exclusive license
                to play the game on your own devices for non-commercial
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. Prohibited Actions
              </h2>
              <p>
                You may not: reverse engineer, redistribute, or use the game
                contents for commercial gain without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Disclaimer
              </h2>
              <p>
                The game is provided "as is". We are not responsible for any
                issues arising from hardware compatibility or data loss.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Contact
              </h2>
              <p>
                Contact us at:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-indigo-400 underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
