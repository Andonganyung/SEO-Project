"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Get Your <span className="text-[var(--primary)]">Free</span> Audit
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Tell us about your brand and we&apos;ll send you a complimentary social
            media SEO audit within 48 hours.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-[var(--dark-light)] border border-[var(--primary)]/50 p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-400">
              We&apos;ve received your request. Our team will reach out within 48
              hours with your free social media SEO audit.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-[var(--dark-light)] border border-white/10 p-8 md:p-12 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-[var(--dark)] border border-white/10 px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg bg-[var(--dark)] border border-white/10 px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company / Brand
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-lg bg-[var(--dark)] border border-white/10 px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="platforms" className="block text-sm font-medium mb-2">
                Social Platforms of Interest
              </label>
              <input
                type="text"
                id="platforms"
                name="platforms"
                className="w-full rounded-lg bg-[var(--dark)] border border-white/10 px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition"
                placeholder="Instagram, LinkedIn, TikTok..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell us about your goals
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-lg bg-[var(--dark)] border border-white/10 px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition resize-none"
                placeholder="What are you looking to achieve with social media SEO?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--primary)] py-4 text-lg font-semibold hover:bg-[var(--primary-dark)] transition"
            >
              Request Free Audit
            </button>
          </form>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="rounded-xl bg-[var(--dark-light)] border border-white/10 p-6">
            <div className="text-2xl mb-2">📧</div>
            <div className="text-sm text-gray-400">hello@socialrankseo.com</div>
          </div>
          <div className="rounded-xl bg-[var(--dark-light)] border border-white/10 p-6">
            <div className="text-2xl mb-2">📱</div>
            <div className="text-sm text-gray-400">+1 (555) 123-4567</div>
          </div>
          <div className="rounded-xl bg-[var(--dark-light)] border border-white/10 p-6">
            <div className="text-2xl mb-2">📍</div>
            <div className="text-sm text-gray-400">New York, NY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
