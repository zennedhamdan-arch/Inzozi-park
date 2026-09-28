import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const BASE = "https://inzozipark.rw"; // ⚠️ TO CONFIRM — final domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/venue",
    "/services",
    "/weddings",
    "/gallery",
    "/about",
    "/contact",
    "/enquire",
    "/kids",
  ];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
