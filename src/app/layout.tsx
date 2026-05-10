import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteContent } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import { siteUrl } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0e27",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteContent.siteName} — ${siteContent.tagline}`,
    template: `%s | ${siteContent.siteName}`,
  },
  description: siteContent.description,
  applicationName: siteContent.siteName,
  authors: [{ name: siteContent.siteName }],
  generator: "Next.js",
  keywords: siteContent.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteContent.siteName,
    title: `${siteContent.siteName} — ${siteContent.tagline}`,
    description: siteContent.description,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.siteName} — ${siteContent.tagline}`,
    description: siteContent.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors theme="dark" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
