"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-forest py-24 lg:py-32"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <h2
          id="newsletter-heading"
          className="font-display text-4xl lg:text-5xl font-bold text-parchment tracking-tight mb-4"
        >
          Stay in touch
        </h2>
        <p className="text-parchment/70 text-base leading-relaxed mb-10">
          Be first to know about new books, events, and writing — and nothing
          else. No noise.
        </p>

        {submitted ? (
          <p className="text-parchment font-display text-xl italic">
            Thank you. You&rsquo;ll hear from me when it matters.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            aria-label="Newsletter signup"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-parchment/10 border-parchment/30 text-parchment placeholder:text-parchment/40 focus-visible:ring-parchment/50 focus-visible:border-parchment/60 rounded-none h-11"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="bg-parchment text-forest hover:bg-parchment/90 rounded-none h-11 px-6 text-sm font-medium tracking-wide shrink-0"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-6 text-parchment/40 text-xs">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
