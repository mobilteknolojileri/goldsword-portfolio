import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - 20+ Projects",
  description:
    "Explore 20+ completed software projects including mobile apps (Flutter, React Native), web applications (Next.js), AI integrations, and games (Unity). Real-world production projects with 5.0 rating.",
  path: "/portfolio",
  keywords: [
    "software portfolio",
    "mobile app examples",
    "web development projects",
    "flutter projects",
    "react native apps",
    "AI applications",
    "game development portfolio",
  ],
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
