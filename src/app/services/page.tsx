import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | SocialRank SEO - Social Media SEO Agency",
  description:
    "Explore our social media SEO services: profile optimization, content strategy, hashtag research, analytics, and more.",
};

const services = [
  {
    title: "Social Media Profile Optimization",
    description:
      "We optimize every element of your social profiles — bios, usernames, links, alt text, and keywords — so you rank higher when people search on Instagram, LinkedIn, TikTok, Twitter, and Facebook.",
    features: [
      "Bio & username keyword optimization",
      "Link-in-bio strategy",
      "Alt text optimization for images",
      "Profile completeness audit",
    ],
  },
  {
    title: "Content Strategy & SEO",
    description:
      "We create data-driven content strategies that align your posts with what your audience is searching for, maximizing organic reach and engagement.",
    features: [
      "Keyword-driven content calendars",
      "Search-intent aligned posts",
      "Trending topic identification",
      "Cross-platform content adaptation",
    ],
  },
  {
    title: "Hashtag & Keyword Research",
    description:
      "Our proprietary research methodology identifies the highest-impact hashtags and keywords for your niche, driving discovery and reach on every platform.",
    features: [
      "Niche hashtag discovery",
      "Competitor hashtag analysis",
      "Keyword difficulty scoring",
      "Seasonal trend mapping",
    ],
  },
  {
    title: "Social Link Building",
    description:
      "Strengthen your website's domain authority through strategic social media backlinks, mentions, and engagement signals that search engines value.",
    features: [
      "Strategic social backlinks",
      "Influencer collaboration for links",
      "Social signal amplification",
      "Cross-platform link strategy",
    ],
  },
  {
    title: "YouTube & Video SEO",
    description:
      "Optimize your video content for maximum visibility on YouTube, TikTok, and Instagram Reels with keyword-rich titles, descriptions, and tags.",
    features: [
      "Video title & description optimization",
      "Tag & category strategy",
      "Thumbnail optimization guidance",
      "Closed caption & transcript SEO",
    ],
  },
  {
    title: "Analytics & Monthly Reporting",
    description:
      "Transparent, detailed monthly reports that track your social SEO performance, growth metrics, and ROI across all platforms.",
    features: [
      "Custom KPI dashboards",
      "Monthly growth reports",
      "Competitor benchmarking",
      "Actionable recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Our <span className="text-[var(--primary)]">Services</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end social media SEO solutions designed to put your brand in
            front of the right audience.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row gap-8 items-start rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 md:p-12 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-400">
                      <span className="text-[var(--secondary)]">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[var(--primary)] px-10 py-4 text-lg font-semibold hover:bg-[var(--primary-dark)] transition"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
