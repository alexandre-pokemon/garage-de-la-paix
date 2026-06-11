import type { MetadataRoute } from "next";

const SITE_URL = "https://garage-paix-flame.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/rendez-vous", "/devis", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  );
}
