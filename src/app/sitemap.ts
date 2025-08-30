import { baseURL, routes as routesConfig } from "@/resources";
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();
  const lastModified = currentDate.toISOString();

  // Get active routes
  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  // Main pages with priority and change frequency
  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  // Add important static pages
  const staticPages = [
    {
      url: `${baseURL}`,
      lastModified: lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseURL}#about`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseURL}#work-experience`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseURL}#technical-skills`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseURL}#studies`,
      lastModified: lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }
  ];

  // Combine all routes and remove duplicates
  const allRoutes = [...routes, ...staticPages.filter(
    page => !routes.some(route => route.url === page.url)
  )];

  return allRoutes;
}
