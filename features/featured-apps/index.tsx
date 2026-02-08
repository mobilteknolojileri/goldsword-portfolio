"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Card from "@/components/ui/Card";
import { PROJECTS } from "@/lib/constants";

const FeaturedApps = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  // QuSafe and Legends of Aestera are our featured apps
  const featuredProjects = PROJECTS.filter(
    (p) => p.slug === "qusafe-mobile" || p.slug === "legends-of-aestera",
  );

  return (
    <section
      id="featured-apps"
      className="py-20 bg-gray-50 dark:bg-dark-900 overflow-hidden"
    >
      <div className="section-container section-padding">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Kendi Projelerim
          </h2>
          <p
            className={`mt-4 text-lg text-body transition-all duration-700 delay-100 ${
              titleVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Sıfırdan geliştirdiğim ve mağazalarda yayınladığım uygulamalar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              hover
              className="bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-700 overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Link href={project.customLink || `/portfolio/${project.slug}`}>
                <div className="flex flex-col h-full">
                  <div
                    className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-8`}
                  >
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />

                    {/* Premium Glow Effects */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden z-10 border border-white/10">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-white border border-white/30 z-20 shadow-lg">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-heading mb-3 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body text-lg mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto flex justify-center">
                      <span className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-2xl group-hover:from-primary-600 group-hover:to-accent-600 transition-all shadow-[0_10px_30px_rgba(var(--primary-rgb),0.3)] group-hover:shadow-[0_15px_35px_rgba(var(--primary-rgb),0.5)] group-hover:-translate-y-0.5">
                        Keşfet
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center px-4">
          <Link href="/portfolio" className="inline-block w-full sm:w-auto">
            <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-white dark:bg-dark-800 border-2 border-gray-100 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 text-heading font-bold rounded-2xl transition-all shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <span className="text-lg">Müşteri Projelerini Gör</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
