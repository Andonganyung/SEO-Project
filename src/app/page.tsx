import Link from "next/link";

const services = [
  {
    title: "Social Media Optimization",
    description:
      "Optimize your profiles across Instagram, LinkedIn, Twitter, TikTok, and Facebook for maximum search visibility.",
    icon: "🔍",
  },
  {
    title: "Content Strategy",
    description:
      "Data-driven content plans aligned with trending keywords and audience search intent on every platform.",
    icon: "📝",
  },
  {
    title: "Profile SEO Audit",
    description:
      "Comprehensive audits of your social profiles with actionable recommendations to rank higher in social search.",
    icon: "📊",
  },
  {
    title: "Hashtag & Keyword Research",
    description:
      "Discover high-impact hashtags and keywords that drive organic reach and engagement on social platforms.",
    icon: "🏷️",
  },
  {
    title: "Link Building & Social Signals",
    description:
      "Strengthen your domain authority with strategic social backlinks and engagement signals.",
    icon: "🔗",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Transparent monthly reports tracking your social SEO growth, reach, and conversion metrics.",
    icon: "📈",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director, TechFlow",
    text: "SocialRank SEO transformed our LinkedIn presence. Our organic reach increased by 340% in just 3 months.",
  },
  {
    name: "Marcus Williams",
    role: "Founder, GreenLeaf Co.",
    text: "Their hashtag strategy alone doubled our Instagram engagement. The ROI has been incredible.",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO, BrightWave",
    text: "Finally an agency that understands social media SEO. Our brand now shows up everywhere our audience searches.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "340%", label: "Avg. Reach Increase" },
  { value: "50M+", label: "Impressions Generated" },
  { value: "98%", label: "Client Retention" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--secondary)]/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Dominate Social Media
            <br />
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Search Results
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            We help brands rank higher on social media platforms through
            data-driven SEO strategies, content optimization, and smart keyword
            targeting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--primary)] px-8 py-4 text-lg font-semibold hover:bg-[var(--primary-dark)] transition"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--dark-light)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our{" "}
              <span className="text-[var(--primary)]">Services</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Comprehensive social media SEO solutions tailored to your brand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 hover:border-[var(--primary)]/50 transition group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary)] transition">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--dark-light)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Our{" "}
              <span className="text-[var(--secondary)]">Clients</span> Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-[var(--dark)] border border-white/10 p-8"
              >
                <p className="text-gray-300 italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to{" "}
            <span className="text-[var(--primary)]">Boost</span> Your Social
            Media Rankings?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Get a free social media SEO audit and discover untapped growth
            opportunities for your brand.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[var(--primary)] px-10 py-4 text-lg font-semibold hover:bg-[var(--primary-dark)] transition"
          >
            Start Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
