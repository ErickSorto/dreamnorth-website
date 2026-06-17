import type { MetadataRoute } from "next";

const siteUrl = "https://dream-north.com";
const lastModified = new Date("2026-06-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/dreamnorth/social-preview.png`],
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/copyright`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
