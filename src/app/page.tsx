import type { Metadata } from "next";

import { HomeCta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { StatsGrid } from "@/components/sections/stats";
import { siteContent } from "@/content/site";
import { breadcrumbSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteContent.siteName} — ${siteContent.tagline}`,
  description: siteContent.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }])),
        }}
      />
      <Hero />
      <StatsGrid />
      <ServicesPreview />
      <Features />
      <HomeCta />
    </>
  );
}
