"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaWhatsapp } from "react-icons/fa";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SocialShare({ 
  url, 
  title = "Check this out!",
  description = "",
  className = ""
}: SocialShareProps) {
  // Get current URL if not provided
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleShare = (platform: string, link: string) => {
    window.open(link, "_blank", "width=600,height=400");
    
    // Track share event in Google Analytics if available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "share", {
        method: platform,
        content_type: "article",
        item_id: shareUrl,
      });
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm text-gray-400">Share:</span>
      <button
        onClick={() => handleShare("Facebook", shareLinks.facebook)}
        className="p-2 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/80 transition"
        aria-label="Share on Facebook"
      >
        <FaFacebook className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare("Twitter", shareLinks.twitter)}
        className="p-2 rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 transition"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare("LinkedIn", shareLinks.linkedin)}
        className="p-2 rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/80 transition"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare("Pinterest", shareLinks.pinterest)}
        className="p-2 rounded-full bg-[#E60023] hover:bg-[#E60023]/80 transition"
        aria-label="Share on Pinterest"
      >
        <FaPinterest className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare("WhatsApp", shareLinks.whatsapp)}
        className="p-2 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 transition"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp className="w-4 h-4" />
      </button>
    </div>
  );
}
