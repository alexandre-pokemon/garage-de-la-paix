import type { MetadataRoute } from "next";

const SITE_URL = "https://garage-de-la-paix-demo.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
