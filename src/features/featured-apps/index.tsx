"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Card from "@/components/ui/Card";
import TiltCard from "@/components/effects/TiltCard";
import { PROJECTS } from "@/lib/constants";
import Magnetic from "@/components/effects/Magnetic";

const FeaturedApps = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  // Featured apps
  const featuredProjects = PROJECTS.filter(
    (p) =>
      p.slug === "qusafe-mobile" || p.slug === "legends-of-aestera" || p.slug === "kafadar-mobile",
  );

  return (
    <section id="featured-apps" className="overflow-hidden bg-gray-50 py-20 dark:bg-dark-900">
      <div className="section-container section-padding">
        <div className="mb-16 text-center">
          <h2
            ref={titleRef}
            className={`text-heading text-4xl font-bold tracking-tight transition-all duration-700 md:text-5xl lg:text-6xl ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Kendi Projelerim
          </h2>
          <p
            className={`text-body mt-4 text-lg transition-all delay-100 duration-700 ${
              titleVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Sıfırdan geliştirdiğim ve mağazalarda yayınladığım uygulamalar.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              hover
              className="group overflow-hidden border-gray-200 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:border-dark-700 dark:bg-dark-800"
            >
              <a href={(project as any).customLink || `/portfolio/${project.slug}`}>
                <div className="flex h-full flex-col">
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50/50 p-8 dark:bg-dark-900/50">
                    {/* Premium Glow Effects */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <TiltCard>
                      <div className="relative z-10 h-32 w-32 overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110 md:h-40 md:w-40">
                        <img
                          src={project.image}
                          alt={`${project.title} Uygulama İkonu`}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          decoding="async"
                        />
                      </div>
                    </TiltCard>

                    {/* Floating Badge */}
                    <div className="absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-white/50 px-4 py-1.5 text-xs font-black text-gray-900 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-dark-900/40 dark:text-white">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-heading mb-3 text-2xl font-bold transition-colors group-hover:text-primary-500 md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-body mb-6 line-clamp-2 text-lg">{project.description}</p>

                    <div className="mt-auto flex justify-center">
                      <span className="inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all group-hover:-translate-y-0.5 group-hover:from-blue-700 group-hover:to-indigo-700 group-hover:shadow-[0_15px_35px_rgba(37,99,235,0.5)]">
                        Keşfet
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-16 px-4 text-center">
          <Magnetic strength={0.2}>
            <a href="/portfolio" className="inline-block w-full sm:w-auto">
              <button className="text-heading flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-100 bg-white px-10 py-4 font-bold shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:border-primary-500 hover:shadow-2xl dark:border-dark-700 dark:bg-dark-800 dark:hover:border-primary-500 sm:w-auto">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <span className="text-lg">Tüm Projeleri Gör</span>
              </button>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
