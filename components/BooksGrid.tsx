"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { books, pressQuotes } from "@/lib/data";
import Animate from "./Animate";

export default function BooksGrid() {
  const featured = books.find((b) => b.featured)!;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteDir, setQuoteDir] = useState(0);

  const VISIBLE = 4;
  const maxStart = Math.max(0, books.length - VISIBLE);

  function slideCarousel(dir: number) {
    setCarouselIndex((i) => Math.max(0, Math.min(i + dir, maxStart)));
  }

  function goQuote(dir: number) {
    setQuoteDir(dir);
    setQuoteIndex((i) => (i + dir + pressQuotes.length) % pressQuotes.length);
  }

  const visibleBooks = books.slice(carouselIndex, carouselIndex + VISIBLE);
  const quote = pressQuotes[quoteIndex];

  return (
    <div style={{ backgroundColor: "#F8F6F1" }}>

      {/* ── Hero — "New Release" with floating featured cover ── */}
      <section className="relative pt-36 pb-10 lg:pt-44 lg:pb-16 overflow-hidden" style={{ backgroundColor: "#F8F6F1" }}>
        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black text-ink whitespace-nowrap uppercase leading-none"
            style={{ fontSize: "clamp(5rem, 20vw, 18rem)", opacity: 0.045 }}
          >
            New Release
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-12">

            {/* Left — credential block */}
            <Animate variant="slideRight" className="text-left">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-stone mb-2">Latest Release</p>
              <p
                className="font-display font-black uppercase leading-tight text-ink"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
              >
                Prophetic<br />
                <span style={{ color: "#4EC5BF" }}>Author</span>
              </p>
              <p className="font-body text-sm text-stone mt-3 max-w-[180px] leading-relaxed">
                Pastor · Theologian · Strategic Educator
              </p>
            </Animate>

            {/* Centre — floating book cover */}
            <Animate variant="scaleUp" delay={0.15} className="flex flex-col items-center">
              <Link href={`/books/${featured.slug}`}>
                <div
                  className="relative w-[160px] sm:w-[220px] lg:w-[260px] aspect-[2/3] cursor-pointer transition-transform duration-500 hover:-translate-y-2"
                  style={{ filter: "drop-shadow(0 32px 64px rgba(11,20,64,0.22))" }}
                >
                  <Image
                    src={featured.coverImage}
                    alt={`Cover of ${featured.title}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 260px"
                  />
                </div>
              </Link>
            </Animate>

            {/* Right — title + description + CTA */}
            <Animate variant="slideLeft" delay={0.1} className="text-right">
              <p
                className="font-display italic text-ink leading-tight mb-3"
                style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
              >
                Rev. Acheampong<br />E.S. Builderman
              </p>
              <p className="font-body text-sm text-stone leading-relaxed mb-5 max-w-[200px] ml-auto">
                {featured.description}
              </p>
              <Link
                href={`/books/${featured.slug}`}
                className="inline-flex items-center px-5 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide transition-all"
                style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}
              >
                Know More
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Horizontal books carousel ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <Animate variant="slideRight" className="max-w-sm">
              <p className="text-xs tracking-[0.25em] uppercase font-body text-stone mb-3">Books</p>
              <h2
                className="font-display font-black text-ink leading-tight uppercase"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                Discover all his books you were looking for
              </h2>
            </Animate>
            <Animate variant="slideLeft" delay={0.1} className="flex flex-col items-start lg:items-end gap-4">
              <p className="font-body text-sm text-stone max-w-[260px] lg:text-right leading-relaxed">
                Prophetic, pastoral, and purpose-driven — six works written to equip leaders across Africa and beyond.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center px-6 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide transition-all"
                style={{ backgroundColor: "#0B1440", color: "#fff" }}
              >
                View all Books
              </Link>
            </Animate>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {visibleBooks.map((book, i) => (
                <motion.div
                  key={book.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                >
                  <Link href={`/books/${book.slug}`} className="group flex flex-col items-center text-center gap-3">
                    <div
                      className="relative w-full aspect-[2/3] transition-transform duration-400 group-hover:-translate-y-2"
                      style={{ filter: "drop-shadow(0 16px 32px rgba(11,20,64,0.15))" }}
                    >
                      <Image
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                      />
                    </div>
                    <p className="font-display font-semibold text-sm text-ink leading-snug group-hover:text-teal transition-colors">
                      {book.title}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => slideCarousel(-1)}
                disabled={carouselIndex === 0}
                aria-label="Previous books"
                className="w-9 h-9 rounded-full border border-stone/30 flex items-center justify-center text-ink hover:border-ink transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => slideCarousel(1)}
                disabled={carouselIndex >= maxStart}
                aria-label="Next books"
                className="w-9 h-9 rounded-full border border-stone/30 flex items-center justify-center text-ink hover:border-ink transition-colors disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About the author ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Animate variant="slideRight">
              <p className="text-xs tracking-[0.25em] uppercase font-body text-stone mb-4">About the Author</p>
              <h2
                className="font-display font-black text-ink uppercase leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Rev. Builderman: Stories of Faith, Leadership, and Africa
              </h2>
              <p className="font-body text-base text-stone leading-relaxed mb-8 max-w-prose">
                Rev. Acheampong E.S. Builderman is a pastor, author, and transformational educator whose six books span theology, leadership, cultural commentary, and devotional writing. His work has impacted church leaders, students, and executives across Africa and the world.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide border border-ink/30 text-ink hover:border-teal hover:text-teal transition-all"
              >
                About Rev. Builderman
              </Link>
            </Animate>

            <Animate variant="slideLeft" delay={0.1}>
              <div
                className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 24px 60px rgba(11,20,64,0.15)" }}
              >
                <Image
                  src="/author.png"
                  alt="Rev. Acheampong E.S. Builderman"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Quote slider ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 relative">
          <button
            onClick={() => goQuote(-1)}
            aria-label="Previous quote"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-10 w-9 h-9 rounded-full border border-stone/30 flex items-center justify-center text-stone hover:text-ink hover:border-ink transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => goQuote(1)}
            aria-label="Next quote"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-10 w-9 h-9 rounded-full border border-stone/30 flex items-center justify-center text-stone hover:text-ink hover:border-ink transition-colors"
          >
            <ChevronRight size={16} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, x: quoteDir > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: quoteDir > 0 ? -30 : 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-center"
            >
              <p className="font-display italic text-ink/80 leading-relaxed mb-5"
                 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}>
                &ldquo;{quote.quote}&rdquo;
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone">
                — {quote.publication}
                {quote.book && <span className="ml-2 normal-case not-italic">, on <em>{quote.book}</em></span>}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {pressQuotes.map((_, i) => (
              <button
                key={i}
                onClick={() => goQuote(i - quoteIndex)}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ backgroundColor: i === quoteIndex ? "#0B1440" : "#CBD5E1" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to buy ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1440" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Animate variant="fadeUp" className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.28em] uppercase mb-4" style={{ color: "#4EC5BF" }}>
              Available Worldwide
            </p>
            <h2
              className="font-display font-black text-white uppercase leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
            >
              Pick up your copy today
            </h2>
          </Animate>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Amazon", sub: "Print & Kindle" },
              { name: "Apple Books", sub: "iPhone & iPad" },
              { name: "Barnes & Noble", sub: "Print & Nook" },
              { name: "Bookshop.org", sub: "Independent stores" },
              { name: "Kobo", sub: "eBook & audiobook" },
            ].map((store, i) => (
              <Animate key={store.name} variant="fadeUp" delay={i * 0.07}>
                <div
                  className="flex flex-col items-center text-center px-5 py-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: "rgba(78,197,191,0.12)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4EC5BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <p className="font-display font-bold text-white text-sm leading-tight mb-1">
                    {store.name}
                  </p>
                  <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {store.sub}
                  </p>
                </div>
              </Animate>
            ))}
          </div>

          <Animate variant="fadeUp" delay={0.4} className="text-center mt-12">
            <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              Also available at local bookshops and church bookstores across Ghana and West Africa.
            </p>
          </Animate>
        </div>
      </section>

    </div>
  );
}
