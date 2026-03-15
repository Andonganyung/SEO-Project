import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { seoConfig, generateOrganizationSchema, generateWebsiteSchema } from "@/config/seo";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: `${seoConfig.siteName} | Social Media SEO Agency`,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.siteDescription,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.businessName }],
  creator: seoConfig.businessName,
  publisher: seoConfig.businessName,
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.siteUrl,
    title: `${seoConfig.siteName} | Social Media SEO Agency`,
    description: seoConfig.siteDescription,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} - Social Media SEO`,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `${seoConfig.siteName} | Social Media SEO Agency`,
    description: seoConfig.siteDescription,
    images: [seoConfig.ogImage],
    creator: "@socialrankseo",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    google: seoConfig.googleSiteVerification || undefined,
  },
  
  alternates: {
    canonical: seoConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-[var(--dark)] text-white antialiased">
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
