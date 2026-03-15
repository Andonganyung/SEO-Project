// SEO Configuration
// Update these values or use environment variables

export const seoConfig = {
  // Site Information
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "SocialRank SEO",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://socialrankseo.com",
  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 
    "We boost your brand visibility across social media platforms with data-driven SEO strategies. Expert social media optimization, content strategy, and analytics.",

  // Business Information
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "SocialRank SEO",
  businessType: process.env.NEXT_PUBLIC_BUSINESS_TYPE || "ProfessionalService",
  businessPhone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "",
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@socialrankseo.com",
  
  // Address
  address: {
    street: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STREET || "",
    city: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_CITY || "",
    state: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STATE || "",
    zip: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_ZIP || "",
    country: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY || "US",
  },

  // Social Media Links
  socialLinks: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/socialrankseo",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/socialrankseo",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/socialrankseo",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/socialrankseo",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@socialrankseo",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com/@socialrankseo",
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL || "https://pinterest.com/socialrankseo",
  },

  // Analytics
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",

  // Default OG Image
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/images/og-default.jpg",

  // Keywords
  keywords: [
    "social media SEO",
    "social media optimization",
    "SMO",
    "social media marketing",
    "SEO agency",
    "social media strategy",
    "content optimization",
    "brand visibility",
    "Instagram SEO",
    "LinkedIn SEO",
    "TikTok SEO",
    "Twitter SEO",
    "Facebook marketing",
  ],
};

// Generate JSON-LD Schema for Organization/Business
export function generateOrganizationSchema() {
  const { businessName, businessType, siteUrl, siteDescription, businessPhone, businessEmail, address, socialLinks } = seoConfig;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": businessType,
    name: businessName,
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}${seoConfig.ogImage}`,
    sameAs: Object.values(socialLinks).filter(link => link),
  };

  if (businessPhone) schema.telephone = businessPhone;
  if (businessEmail) schema.email = businessEmail;

  if (address.street && address.city) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: address.country,
    };
  }

  return schema;
}

// Generate JSON-LD Schema for WebSite with Search Action
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Generate JSON-LD Schema for FAQPage
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate JSON-LD Schema for BreadcrumbList
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
