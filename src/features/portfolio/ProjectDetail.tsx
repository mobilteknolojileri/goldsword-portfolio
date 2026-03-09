"use client";

import Badge from "@/components/ui/Badge";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectDetailProps {
  project: any;
  allProjects: any[];
}

export default function ProjectDetail({ project, allProjects }: ProjectDetailProps) {
  const categoryLabels: Record<string, string> = {
    Mobile: "Mobil",
    Web: "Web",
    Game: "Oyun",
    Backend: "Backend",
    SEO: "SEO",
    Design: "Tasarım",
    AI: "Yapay Zeka",
  };

  const relatedProjects = allProjects
    .filter((p) => p.slug !== project.slug)
    .sort((a, b) => a.title.localeCompare(b.title, "tr"))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <main className="pb-16 pt-24">
        <div className="section-container section-padding">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <a href="/" className="text-muted font-medium transition-colors hover:text-primary-600">
              Ana Sayfa
            </a>
            <span className="text-muted/30">/</span>
            <a
              href="/portfolio/"
              className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              <FaArrowLeft />
              Portfolyoya Dön
            </a>
          </div>

          <div className="mb-8 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-800">
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

            <div className="p-8 sm:p-10 md:p-12">
              <div className="max-w-4xl">
                <h1 className="text-heading mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
                  {project.title}
                </h1>
                <p className="text-body text-xl leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              {project.detailedDescription && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-dark-700 dark:bg-dark-800">
                  <h2 className="text-heading mb-4 text-2xl font-bold">Proje Hakkında</h2>
                  <p className="text-body leading-relaxed">{project.detailedDescription}</p>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-dark-700 dark:bg-dark-800">
                  <h2 className="text-heading mb-4 text-2xl font-bold">Geliştirdiklerim</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="text-body flex items-start gap-3">
                        <span className="mt-1 text-primary-600 dark:text-primary-400">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-dark-700 dark:bg-dark-800">
                  <h2 className="text-heading mb-4 text-2xl font-bold">Teknik Zorluklar</h2>
                  <p className="text-body leading-relaxed">{project.challenges}</p>
                </div>
              )}

              {project.screenshots && project.screenshots.length > 0 && (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-dark-700 dark:bg-dark-800">
                  <h2 className="text-heading mb-4 text-2xl font-bold">Ekran Görüntüleri</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.screenshots.map((screenshot: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-[9/16] overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 transition-colors hover:border-primary-500 dark:border-dark-700 dark:bg-dark-900 dark:hover:border-primary-500"
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} Uygulama Ekran Görüntüsü ${index + 1}`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                          width={300}
                          height={533}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-dark-700 dark:bg-dark-800">
                <h3 className="text-heading mb-4 text-xl font-bold">Proje Bilgileri</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-muted mb-1 text-sm font-medium">Kategori</p>
                    <Badge variant="primary">
                      {categoryLabels[project.category] || project.category}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-muted mb-2 text-sm font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <Badge key={index}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div>
                      <p className="text-muted mb-2 text-sm font-medium">Link</p>
                      <div className="space-y-2">
                        {project.links.map((link: any, index: number) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                          >
                            <FaExternalLinkAlt size={14} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-heading mb-10 text-3xl font-black">Diğer Projelerim</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p, i) => (
                <a
                  key={i}
                  href={`/portfolio/${p.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-dark-700 dark:bg-dark-800"
                >
                  <div
                    className={`h-40 bg-gradient-to-br ${p.color} relative mb-4 overflow-hidden rounded-xl`}
                  >
                    <div className="text-heading absolute right-3 top-3 z-10 rounded-lg border border-white/20 bg-white/50 px-3 py-1 text-[10px] font-black uppercase backdrop-blur-md dark:bg-dark-900/40">
                      {categoryLabels[p.category] || p.category}
                    </div>
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-contain p-4"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                    )}
                  </div>
                  <h3 className="text-heading text-xl font-bold group-hover:text-primary-600">
                    {p.title}
                  </h3>
                  <p className="text-muted mt-2 line-clamp-2 text-sm">{p.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
