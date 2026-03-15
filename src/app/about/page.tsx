import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SocialRank SEO - Social Media SEO Agency",
  description:
    "Learn about SocialRank SEO — our mission, team, and approach to social media search engine optimization.",
};

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "10+ years in digital marketing and SEO. Former head of social at a Fortune 500 company.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Strategy",
    bio: "Social media strategist who has managed campaigns reaching over 100M impressions.",
  },
  {
    name: "James Okafor",
    role: "SEO Lead",
    bio: "Technical SEO expert specializing in social platform algorithms and search ranking factors.",
  },
  {
    name: "Lisa Tanaka",
    role: "Content Director",
    bio: "Award-winning content creator who bridges the gap between creativity and data-driven SEO.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            About <span className="text-[var(--primary)]">SocialRank</span> SEO
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            We exist to make your brand impossible to ignore on social media
            search.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <div className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Social media has become a search engine. People discover brands,
              products, and services through Instagram search, TikTok explore,
              LinkedIn queries, and YouTube lookups. At SocialRank SEO, we
              specialize in making sure your brand shows up first. We combine
              traditional SEO principles with deep platform knowledge to deliver
              strategies that drive real, measurable growth.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-[var(--secondary)]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-gray-400">
                Every strategy is backed by research, analytics, and measurable
                KPIs.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-400">
                No black-box tactics. You see exactly what we do and why it
                works.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Results-First</h3>
              <p className="text-gray-400">
                We measure success by your growth — more reach, more engagement,
                more conversions.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the <span className="text-[var(--primary)]">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-6 text-center hover:border-[var(--primary)]/50 transition"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-2xl font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-[var(--secondary)] text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
