import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get Free Social Media SEO Audit",
  description:
    "Contact SocialRank SEO for a free social media SEO audit. Get expert analysis of your Instagram, LinkedIn, TikTok, and Facebook presence within 48 hours.",
  openGraph: {
    title: "Contact Us | Get Free Social Media SEO Audit",
    description: "Request your free social media SEO audit today. Expert analysis within 48 hours.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
