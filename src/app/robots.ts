import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/"],
        crawlDelay: 1,
      }
    ],
    sitemap: `${baseURL}/sitemap.xml`,
    host: baseURL,
  };
}
