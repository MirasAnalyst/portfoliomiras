import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
          "/_next/",
          "/admin/",
          "/*.json$",
          "/404",
          "/500"
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
          "/_next/",
          "/admin/"
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
          "/_next/"
        ],
        crawlDelay: 2,
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Twitterbot", 
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      }
    ],
    sitemap: `${baseURL}/sitemap.xml`,
    host: baseURL,
  };
}
