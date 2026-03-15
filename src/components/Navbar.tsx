"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[var(--dark)]/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[var(--primary)]">Social</span>
            <span className="text-[var(--secondary)]">Rank</span> SEO
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[var(--primary)] transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-[var(--primary)] transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--primary)] transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-[var(--primary)] px-6 py-2 font-semibold hover:bg-[var(--primary-dark)] transition"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="hover:text-[var(--primary)] transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="hover:text-[var(--primary)] transition" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-[var(--primary)] transition" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" className="rounded-full bg-[var(--primary)] px-6 py-2 font-semibold text-center hover:bg-[var(--primary-dark)] transition" onClick={() => setIsOpen(false)}>Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
