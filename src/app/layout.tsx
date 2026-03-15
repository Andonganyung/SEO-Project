import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SocialRank SEO | Social Media SEO Agency",
  description:
    "We boost your brand visibility across social media platforms with data-driven SEO strategies. Expert social media optimization, content strategy, and analytics.",
  keywords: [
    "social media SEO",
    "social media optimization",
    "SMO",
    "social media marketing",
    "SEO agency",
    "social media strategy",
    "content optimization",
    "brand visibility",
  ],
  openGraph: {
    title: "SocialRank SEO | Social Media SEO Agency",
    description:
      "Boost your brand visibility across social media with data-driven SEO strategies.",
    url: "https://socialrankseo.com",
    siteName: "SocialRank SEO",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialRank SEO | Social Media SEO Agency",
    description:
      "Boost your brand visibility across social media with data-driven SEO strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SocialRank SEO",
              description:
                "Social Media SEO Agency specializing in brand visibility and social media optimization.",
              url: "https://socialrankseo.com",
              serviceType: "Social Media SEO",
              areaServed: "Worldwide",
              sameAs: [
                "https://twitter.com/socialrankseo",
                "https://linkedin.com/company/socialrankseo",
                "https://facebook.com/socialrankseo",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[var(--dark)] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
