"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { PROJECTS } from "@/lib/constants";
import { FaArrowLeft } from "react-icons/fa";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryLabels: Record<string, string> = {
    All: "Hepsi",
    Mobile: "Mobil",
    Web: "Web",
    Game: "Oyun",
    Backend: "Backend",
    SEO: "SEO",
    Design: "Tasarım",
    AI: "Yapay Zeka",
  };

  const categories = ["All", "Mobile", "Web", "Game", "Backend", "SEO", "Design", "AI"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <main className="pb-16 pt-24">
        <div className="section-container section-padding">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            <FaArrowLeft />
            Ana Sayfaya Dön
          </a>

          <div className="mb-12 text-center">
            <h1 className="text-heading mb-4 text-3xl font-bold sm:text-5xl md:text-6xl">
              Portfolyom
            </h1>
            <p className="text-body mx-auto max-w-3xl text-lg">
              12+ farklı alanda tamamladığım projeler. Her biri gerçek müşteriler için
              geliştirilmiş, üretim ortamında çalışan projelerdir.
            </p>
          </div>

          <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-3 sm:px-0 lg:grid-cols-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all active:scale-95 sm:text-base ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-800 dark:text-gray-200 dark:hover:bg-dark-700"
                }`}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card key={index} hover className="h-full">
                <div className="group flex h-full flex-col">
                  <div className="relative flex h-56 flex-shrink-0 items-center justify-center overflow-hidden rounded-t-xl bg-gray-50/50 p-6 dark:bg-dark-900/50">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} - Proje görseli`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-xl font-bold text-white">
                        {categoryLabels[project.category] || project.category}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="mb-4 line-clamp-2 flex-1 text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant={techIndex === 0 ? "primary" : "default"}>
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="default">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>

                    {project.slug ? (
                      <a
                        href={(project as any).customLink || `/portfolio/${project.slug}`}
                        className="block w-full rounded-lg bg-primary-600 py-2.5 text-center font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md"
                      >
                        Detayları Gör
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full cursor-not-allowed rounded-lg bg-gray-300 py-2.5 font-semibold text-gray-800 opacity-60 dark:bg-gray-800 dark:text-gray-300"
                      >
                        Yakında
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
