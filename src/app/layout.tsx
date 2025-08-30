import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home, person, social } from "@/resources";

export async function generateMetadata() {
  return {
    title: {
      default: home.title,
      template: `%s | ${person.name}`,
    },
    description: home.description,
    keywords: [
      'Data Scientist',
      'AI Engineer', 
      'Machine Learning',
      'LLM Evaluation',
      'Python',
      'Data Analytics',
      'Miras Muratov',
      'Portfolio',
      'Washington DC',
      'Riff',
      'CallCompass',
      'Tidewater Research'
    ],
    authors: [{ name: person.name, url: baseURL }],
    creator: person.name,
    publisher: person.name,
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: baseURL,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseURL,
      title: home.title,
      description: home.description,
      siteName: home.title,
      images: [
        {
          url: `${baseURL}${home.image}`,
          width: 1200,
          height: 630,
          alt: `${person.name} - ${person.role}`,
          type: 'image/jpeg',
        },
        {
          url: `${baseURL}${person.avatar}`,
          width: 400,
          height: 400,
          alt: `${person.name} Profile Picture`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: home.title,
      description: home.description,
      creator: '@mirasmuratov',
      site: '@mirasmuratov',
      images: [{
        url: `${baseURL}${home.image}`,
        width: 1200,
        height: 630,
        alt: `${person.name} - ${person.role} Portfolio`
      }],
    },
    verification: {
      // Add your verification codes here when you have them
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": person.name,
              "alternateName": `${person.firstName} ${person.lastName}`,
              "description": `${person.role} specializing in AI-powered analytics and evaluation systems`,
              "jobTitle": person.role,
              "url": baseURL,
              "image": `${baseURL}${person.avatar}`,
              "email": `mailto:${person.email}`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Washington",
                "addressRegion": "DC",
                "addressCountry": "US"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of the Potomac",
                  "department": "Data Science"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "Budapest University of Technology and Economics",
                  "department": "Chemical Engineering"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Tidewater Research",
                "url": "https://www.tidewaterresearch.com"
              },
              "knows": ["Machine Learning", "Data Science", "AI", "Python", "LLM Evaluation"],
              "sameAs": [
                person.email ? `mailto:${person.email}` : null,
                ...social.filter(item => item.link && !item.link.includes('javascript:')).map(item => item.link),
                baseURL
              ].filter(Boolean)
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": home.title,
              "description": home.description,
              "url": baseURL,
              "author": {
                "@type": "Person",
                "name": person.name,
                "jobTitle": person.role
              },
              "publisher": {
                "@type": "Person", 
                "name": person.name
              },
              "inLanguage": "en-US",
              "copyrightYear": new Date().getFullYear(),
              "copyrightHolder": {
                "@type": "Person",
                "name": person.name
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "dateCreated": "2025-01-01T00:00:00.000Z",
              "dateModified": new Date().toISOString(),
              "mainEntity": {
                "@type": "Person",
                "name": person.name,
                "jobTitle": person.role,
                "description": `Portfolio of ${person.name}, ${person.role}`,
                "url": baseURL,
                "image": `${baseURL}${person.avatar}`
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${baseURL}#organization`,
              "name": "Tidewater Research",
              "url": "https://www.tidewaterresearch.com",
              "employee": {
                "@type": "Person",
                "name": person.name,
                "jobTitle": person.role,
                "worksFor": {
                  "@type": "Organization",
                  "name": "Tidewater Research"
                }
              },
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Richmond",
                  "addressRegion": "VA",
                  "addressCountry": "US"
                }
              },
              "industry": "Artificial Intelligence",
              "description": "AI-powered tools that solve real problems for real businesses"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseURL
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Portfolio",
                  "item": `${baseURL}#portfolio`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About",
                  "item": `${baseURL}#about`
                }
              ]
            })
          }}
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
