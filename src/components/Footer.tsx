import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
import { seoConfig } from "@/config/seo";

export default function Footer() {
  const { socialLinks, businessEmail } = seoConfig;

  const socialIcons = [
    { name: "Facebook", icon: FaFacebook, url: socialLinks.facebook, color: "hover:text-[#1877F2]" },
    { name: "Instagram", icon: FaInstagram, url: socialLinks.instagram, color: "hover:text-[#E4405F]" },
    { name: "Twitter", icon: FaTwitter, url: socialLinks.twitter, color: "hover:text-[#1DA1F2]" },
    { name: "LinkedIn", icon: FaLinkedin, url: socialLinks.linkedin, color: "hover:text-[#0A66C2]" },
    { name: "YouTube", icon: FaYoutube, url: socialLinks.youtube, color: "hover:text-[#FF0000]" },
    { name: "TikTok", icon: FaTiktok, url: socialLinks.tiktok, color: "hover:text-[#00F2EA]" },
    { name: "Pinterest", icon: FaPinterest, url: socialLinks.pinterest, color: "hover:text-[#E60023]" },
  ];

  return (
    <footer className="bg-[var(--dark-light)] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[var(--primary)]">Social</span>
              <span className="text-[var(--secondary)]">Rank</span> SEO
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Data-driven social media SEO strategies to amplify your brand across every platform.
            </p>
            {businessEmail && (
              <a href={`mailto:${businessEmail}`} className="text-sm text-gray-400 hover:text-[var(--primary)] transition">
                {businessEmail}
              </a>
            )}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Social Media Optimization</li>
              <li>Content Strategy</li>
              <li>Profile SEO</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/10 ${social.color} transition`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              Connect with us on social media for tips, updates, and industry insights.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SocialRank SEO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
