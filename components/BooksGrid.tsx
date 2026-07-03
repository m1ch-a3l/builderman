"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { books, pressQuotes } from "@/lib/data";
import Animate from "./Animate";

export default function BooksGrid() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteDir, setQuoteDir] = useState(0);

  const VISIBLE = 4;
  const maxStart = Math.max(0, books.length - VISIBLE);
  const heroBook = books[heroIndex];

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % books.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

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
    <div className="pt-16" style={{ backgroundColor: "#0d1a4a" }}>

      {/* ── Hero — cycling book cover on dark navy ── */}
      <section className="relative mx-4 lg:mx-8 mt-4 rounded-3xl pt-14 pb-10 lg:pt-16 lg:pb-14 overflow-hidden" style={{ backgroundColor: "#0d1a4a" }}>
        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black whitespace-nowrap uppercase leading-none"
            style={{ fontSize: "clamp(5rem, 20vw, 18rem)", opacity: 0.06, color: "#fff" }}
          >
            Books
          </span>
        </div>

        {/* Subtle bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(13,26,74,0.6))" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-12">

            {/* Left — credential block */}
            <Animate variant="slideRight" className="text-left">
              <p className="font-body text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "#4EC5BF" }}>
                The Collection
              </p>
              <p
                className="font-display font-black uppercase leading-tight text-white"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
              >
                Prophetic<br />
                <span style={{ color: "#4EC5BF" }}>Author</span>
              </p>
              <p className="font-body text-sm mt-3 max-w-[180px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Pastor · Theologian · Strategic Educator
              </p>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-6">
                {books.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{ backgroundColor: i === heroIndex ? "#4EC5BF" : "rgba(255,255,255,0.25)", transform: i === heroIndex ? "scale(1.4)" : "scale(1)" }}
                    aria-label={`Show book ${i + 1}`}
                  />
                ))}
              </div>
            </Animate>

            {/* Centre — auto-cycling book cover */}
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroBook.slug}
                  initial={{ opacity: 0, y: 16, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.94 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/books/${heroBook.slug}`}>
                    <div
                      className="relative w-[160px] sm:w-[220px] lg:w-[260px] aspect-[2/3] cursor-pointer transition-transform duration-500 hover:-translate-y-2"
                      style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.45))" }}
                    >
                      <Image
                        src={heroBook.coverImage}
                        alt={`Cover of ${heroBook.title}`}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 260px"
                      />
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — animated book title + description + CTA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={heroBook.slug + "-text"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-right"
              >
                <p className="font-body text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#4EC5BF" }}>
                  {heroBook.genre} · {heroBook.year}
                </p>
                <p
                  className="font-display font-black text-white leading-tight mb-3"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  {heroBook.title}
                </p>
                <p className="font-body text-sm leading-relaxed mb-5 max-w-[200px] ml-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {heroBook.description}
                </p>
                <Link
                  href={`/books/${heroBook.slug}`}
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide transition-all"
                  style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}
                >
                  Know More
                </Link>
              </motion.div>
            </AnimatePresence>
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
                Acheampong E.S. Builderman
              </h2>
              <p className="font-body text-base text-stone leading-relaxed mb-8 max-w-prose">
                A thinker, New Testament prophet, and prolific writer — Rev. Builderman has completed twenty-two manuscripts since 2018, seven published and in circulation. He serves as Missions Director and Lead Pastor of The Thanksgiving Place Chapel and Ministries Incorporated in Accra, Ghana.
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
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 24px 60px rgba(11,20,64,0.15)" }}
              >
                <Image
                  src="/author.png"
                  alt="Rev. Acheampong E.S. Builderman"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                  style={{ display: "block" }}
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

          <div className="flex justify-center">
            <Animate variant="fadeUp" delay={0}>
              <div className="flex flex-col items-center text-center px-12 py-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: "#131921" }}>
                <svg viewBox="0 0 603 182" className="w-40 mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M373 141c-48 34-118 52-178 52C118 193 42 163 -2 111c-4-3 0-8 4-5 56 32 125 51 197 51 49 0 102-10 151-31 7-3 13 5 23 15z" fill="#FF9900"/>
                  <path d="M390 122c-5-6-33-3-46-2-4 1-5-3-1-5 22-16 59-11 63-6 4 5-1 42-22 59-3 2-6 1-5-2 5-12 15-38 11-44z" fill="#FF9900"/>
                  <path d="M350 20v-9h-49v9l19 1v60l-20 1v9h51v-9l-19-1V31l18-11zM138 79l-16-58H95l-16 57-15-57H36l24 82h27l16-55 15 55h27l25-82h-27l-16 58zM232 9c-28 0-47 19-47 46 0 27 19 44 47 44 28 0 47-17 47-44C279 28 260 9 232 9zm0 72c-14 0-21-11-21-27 0-15 7-27 21-27 14 0 21 12 21 27 0 16-7 27-21 27zM469 11h-27l-21 32-21-32h-28l35 50-37 52h27l23-35 23 35h28l-37-52 35-50zM560 54c0-25-14-43-41-43-27 0-44 19-44 45 0 27 17 44 46 44 14 0 26-4 36-12l-8-14c-8 6-17 9-27 9-14 0-22-7-23-22h62c0-2 0-5-1-7zm-61-5c1-13 8-21 20-21 12 0 18 8 19 21h-39z" fill="white"/>
                </svg>
                <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Print &amp; Kindle</p>
              </div>
            </Animate>
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
