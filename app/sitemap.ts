import type { MetadataRoute } from "next";
import { practiceAreas } from "./site-data";

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
  ];
}
