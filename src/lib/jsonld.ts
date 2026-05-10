import { siteContent } from "@/content/site";
import type { Service } from "@/types";

import { absoluteUrl, siteUrl } from "./seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.siteName,
    url: siteUrl,
    description: siteContent.description,
    logo: absoluteUrl("/logo.png"),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteContent.contact.email,
      telephone: siteContent.contact.phone,
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.contact.address.street,
      addressLocality: siteContent.contact.address.city,
      addressRegion: siteContent.contact.address.region,
      postalCode: siteContent.contact.address.postalCode,
    },
    sameAs: siteContent.social.map((s) => s.url).filter((url) => url !== "#"),
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.siteName,
    url: siteUrl,
    description: siteContent.description,
    publisher: { "@type": "Organization", name: siteContent.siteName },
  } as const;
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: siteContent.siteName, url: siteUrl },
    ...(service.features && service.features.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.title,
            itemListElement: service.features.map((feature) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: feature },
            })),
          },
        }
      : {}),
  } as const;
}

type Breadcrumb = { name: string; path: string };

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  } as const;
}
