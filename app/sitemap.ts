import type { MetadataRoute } from "next";
import { practiceAreas } from "./site-data";
import { getPublishedInsights } from "../lib/insights";

const baseUrl = "https://malcantara.adv.br";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/diagnostico",
    "/sobre",
    "/insights",
    "/privacidade",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...practiceAreas.map((area) => ({
      url: `${baseUrl}/atuacao/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getPublishedInsights().map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(`${insight.date}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
