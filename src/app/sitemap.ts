import { MetadataRoute } from "next";
import { profile } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: profile.resumeUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
