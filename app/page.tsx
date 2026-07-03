"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Animate from "@/components/Animate";
import { books, pressQuotes } from "@/lib/data";
import { BookOpen, Award, Globe, GraduationCap, Quote } from "lucide-react";

const stats = [
  { icon: Award,        value: "Acclaimed",  label: "Lead Pastor & Visionary" },
  { icon: BookOpen,     value: "6 Books",    label: "Published Author" },
  { icon: Globe,        value: "15+ Years",  label: "Transformational Ministry" },
  { icon: GraduationCap, value: "DBA",       label: "Candidate — AI & Learning" },
];

const audiences = [
  {
    title: "Students & Youth",
    desc: "Equipping the next generation with prophetic truth and purposeful identity.",
    book: books.find(b => b.slug === "size-steps-volume-1")!,
  },
  {
    title: "Church Leaders",
    desc: "Deepening pastoral calling with bold, Spirit-led insight.",
    book: books.find(b => b.slug === "charismatic-hoax")!,
  },
  {
    title: "Executives & Strategists",
    desc: "Bridging faith and leadership for Kingdom impact in the marketplace.",
    book: books.find(b => b.slug === "oversalting-the-earth")!,
  },
  {
    title: "Writers & Educators",
    desc: "Reclaiming the sacred vocation of the written word.",
    book: books.find(b => b.slug === "the-ministry-of-writing")!,
  },
];


type BookItem = (typeof books)[number];

function BookListing({ initial }: { initial: BookItem }) {
  const [selected, setSelected] = useState<BookItem>(initial);
  const quote =
    pressQuotes.find((q) => q.book === selected.title) ?? pressQuotes[0];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Thin top row */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-gray-100">
          <p className="text-xs tracking-[0.28em] uppercase font-body" style={{ color: "#4EC5BF" }}>
            Book Listing
          </p>
          <Link href="/store"
            className="text-xs tracking-[0.2em] uppercase font-body font-semibold text-ink hover:text-teal transition-colors">
            View Store →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_220px] gap-12 lg:gap-10 items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="contents"
            >
              {/* ── Cover, centered over a soft circle ── */}
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-full" style={{ minHeight: 320 }}>
                  <div className="absolute w-52 h-52 rounded-full" style={{ backgroundColor: "#F5F6FA" }} />
                  <div className="relative w-[170px] aspect-[2/3]"
                       style={{ filter: "drop-shadow(0 24px 40px rgba(11,20,64,0.2))" }}>
                    <Image src={selected.coverImage} alt={selected.title} fill className="object-contain" sizes="170px" />
                  </div>
                </div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-body text-stone mt-4">
                  Click for Preview
                </p>
              </div>

              {/* ── Details ── */}
              <div>
                <p className="text-xs tracking-[0.28em] uppercase font-body mb-3" style={{ color: "#4EC5BF" }}>
                  Latest Release · {selected.year}
                </p>
                <h2 className="font-body font-bold text-ink leading-tight mb-2"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                  {selected.title}
                </h2>
                <p className="text-stone text-xs tracking-widest uppercase mb-6 font-body">
                  By Rev. Acheampong E.S. Builderman
                </p>
                <p className="font-display italic text-ink/80 text-lg leading-snug mb-5">
                  {selected.description}
                </p>
                <p className="text-ink/70 leading-relaxed text-base mb-8 max-w-prose font-body">
                  {selected.longDescription}
                </p>

                {/* Metadata grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 pb-8 border-b border-gray-100 max-w-md">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-stone mb-1">Genre</p>
                    <p className="font-body text-sm text-ink">{selected.genre}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-stone mb-1">Release Date</p>
                    <p className="font-body text-sm text-ink">{selected.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-stone mb-1">Format</p>
                    <p className="font-body text-sm text-ink">Paperback</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-stone mb-1">Price</p>
                    <p className="font-body text-sm text-ink">${(selected.price ?? 0).toFixed(2)}</p>
                  </div>
                </div>

                {/* Reviewer */}
                <div className="flex items-start gap-3 mb-8">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                       style={{ backgroundColor: "rgba(78,197,191,0.12)" }}>
                    <Quote size={14} style={{ color: "#4EC5BF" }} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-stone mb-1">Reviewed By</p>
                    <p className="font-body font-semibold text-sm text-ink mb-1.5">{quote.publication}</p>
                    <p className="font-display italic text-ink/70 text-sm leading-snug">&ldquo;{quote.quote}&rdquo;</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href={`/books/${selected.slug}`}
                    className="inline-flex items-center px-7 py-3.5 rounded-full font-body text-sm font-medium tracking-wide transition-all"
                    style={{ backgroundColor: "#0B1440", color: "#fff" }}>
                    Read More
                  </Link>
                  <Link href="/store"
                    className="inline-flex items-center px-7 py-3.5 rounded-full font-body text-sm font-medium tracking-wide border transition-all"
                    style={{ borderColor: "#4EC5BF", color: "#4EC5BF" }}>
                    Buy Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Bookshelf sidebar ── */}
          <div className="flex gap-4 lg:gap-0">
            <div className="flex flex-col gap-3 flex-1">
              {books.map((book) => {
                const isActive = book.slug === selected.slug;
                return (
                  <button
                    key={book.slug}
                    onClick={() => setSelected(book)}
                    className="flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors"
                    style={{
                      backgroundColor: isActive ? "#F5F6FA" : "transparent",
                      borderLeft: isActive ? "2px solid #4EC5BF" : "2px solid transparent",
                    }}
                  >
                    <div className="relative w-9 aspect-[2/3] shrink-0">
                      <Image src={book.coverImage} alt={book.title} fill className="object-contain" sizes="36px" />
                    </div>
                    <p className="font-body text-xs leading-snug text-ink line-clamp-2">{book.title}</p>
                  </button>
                );
              })}
            </div>
            <p className="hidden lg:block text-[10px] tracking-[0.3em] uppercase font-body text-stone shrink-0"
               style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Expand Bookshelf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const featured = books.find(b => b.featured)!;
  const featuredQuotes = pressQuotes.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ── Stats card — contained, floating over hero/section boundary ── */}
        <section className="relative z-20 px-6 lg:px-12 -mt-12 lg:-mt-14">
          <div
            className="max-w-6xl mx-auto rounded-2xl bg-white grid grid-cols-2 lg:grid-cols-4"
            style={{ boxShadow: "0 16px 48px rgba(11,20,64,0.14)" }}
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 sm:px-8 py-7 border-gray-100
                  ${i % 2 === 0 ? "border-r" : ""}
                  ${i < 2 ? "border-b lg:border-b-0" : ""}
                  ${i < 3 ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(78,197,191,0.12)" }}
                >
                  <Icon size={18} style={{ color: "#4EC5BF" }} />
                </div>
                <div>
                  <p className="font-body font-bold text-ink text-[15px] leading-tight">{value}</p>
                  <p className="text-stone text-xs font-body leading-snug mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="h-16 lg:h-20 bg-[#F5F6FA]" />

        {/* ── Audience cards ── */}
        <section className="py-24 lg:py-32" style={{ backgroundColor: "#F5F6FA" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Animate variant="fadeDown" className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-xs tracking-[0.28em] uppercase font-body mb-3"
                 style={{ color: "#4EC5BF" }}>Ministry & Writing</p>
              <h2 className="font-body font-bold text-ink leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Inspiring Leaders Through Writing, Teaching,
                and Pastoral Ministry for…
              </h2>
              {/* Teal accent dot */}
              <div className="hidden lg:block absolute right-12 top-8 w-6 h-6 rounded-full"
                   style={{ backgroundColor: "#4EC5BF" }} />
            </Animate>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audiences.map(({ title, desc, book }, i) => (
                <Animate key={title} variant="scaleUp" delay={i * 0.12}>
                  <div
                    className="group relative rounded-2xl px-6 pt-10 pb-7 h-full flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: "#0B1440" }}
                  >
                    {/* Book cover — free-floating, full cover visible, no crop */}
                    <div className="relative w-[120px] aspect-[2/3] mb-6 transition-transform duration-500 group-hover:-translate-y-1"
                         style={{ filter: "drop-shadow(0 18px 32px rgba(0,0,0,0.45))" }}>
                      <Image
                        src={book.coverImage}
                        alt={title}
                        fill
                        className="object-contain drop-shadow-xl"
                        sizes="120px"
                      />
                    </div>
                    {/* Content */}
                    <h3 className="font-body font-bold text-white text-base mb-2">
                      <span style={{ color: "#4EC5BF" }}>✦ </span>{title}
                    </h3>
                    <p className="text-white/65 text-xs font-body leading-relaxed mb-5">{desc}</p>
                    <Link href="/books"
                      className="text-[10px] tracking-[0.2em] uppercase font-body font-medium transition-colors mt-auto"
                      style={{ color: "#4EC5BF" }}>
                      Find out more →
                    </Link>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── Watermark quote section — tilted top/bottom edges ── */}
        <section className="relative overflow-hidden py-28 lg:py-40"
                 style={{ backgroundColor: "#0B1440" }}>
          {/* Tilted seam bleeding down from the gray section above */}
          <div className="absolute top-0 left-0 w-full h-16 sm:h-20 lg:h-28 pointer-events-none"
               style={{ backgroundColor: "#F5F6FA", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />
          {/* Tilted seam bleeding up into the white section below */}
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 lg:h-28 pointer-events-none"
               style={{ backgroundColor: "#ffffff", clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 0)" }} />
          {/* Giant watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-body font-black text-white whitespace-nowrap"
                  style={{ fontSize: "clamp(6rem, 18vw, 16rem)", opacity: 0.035, lineHeight: 1 }}>
              prophetic
            </span>
          </div>
          {/* Teal accent shape right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 rounded-l-full"
               style={{ backgroundColor: "rgba(78,197,191,0.25)" }} />
          {/* Teal accent shape left */}
          <div className="absolute left-0 bottom-12 w-12 h-24 rounded-r-full"
               style={{ backgroundColor: "rgba(78,197,191,0.15)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <Animate variant="fade" duration={1.1}>
              <p className="text-xs tracking-[0.3em] uppercase font-body mb-8"
                 style={{ color: "#4EC5BF" }}>
                — A word from the author
              </p>
              <blockquote className="font-display italic text-white leading-tight mb-10"
                          style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                &ldquo;Writing is not merely a vocation — it is a sacred duty to
                speak truth where silence would be easier.&rdquo;
              </blockquote>
              <p className="text-white/50 text-sm font-body mb-10">
                — Rev. Acheampong E.S. Builderman
              </p>
              <Link href="/about"
                className="inline-flex items-center px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide transition-all"
                style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}>
                Read the Full Story →
              </Link>
            </Animate>
          </div>
        </section>

        {/* ── Book listing — click a title on the right to swap the details ── */}
        <BookListing initial={featured} />

        {/* ── Press quotes ── */}
        <section className="py-24 lg:py-32" style={{ backgroundColor: "#F5F6FA" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Animate variant="fadeDown" className="text-center mb-16">
              <h2 className="font-body font-bold text-ink"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                Hear From Those{" "}
                <em className="font-display italic" style={{ color: "#4EC5BF" }}>Impacted</em>
              </h2>
            </Animate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredQuotes.map((q, i) => (
                <Animate key={q.id} variant="slideLeft" delay={i * 0.13}>
                  <blockquote className="bg-white rounded-2xl p-7 h-full flex flex-col gap-4"
                              style={{ boxShadow: "0 2px 16px rgba(11,20,64,0.06)" }}>
                    <p className="font-display italic text-ink text-lg leading-snug flex-1">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <footer>
                      <p className="text-xs tracking-widest uppercase font-body font-medium"
                         style={{ color: "#4EC5BF" }}>
                        {q.publication}
                      </p>
                      {q.book && (
                        <p className="text-stone text-xs font-body mt-1 italic">On <em>{q.book}</em></p>
                      )}
                    </footer>
                  </blockquote>
                </Animate>
              ))}
            </div>
            <Animate variant="fadeUp" className="mt-10 text-center">
              <Link href="/press"
                className="inline-flex items-center text-sm font-body font-medium tracking-wide underline underline-offset-4"
                style={{ color: "#4EC5BF" }}>
                View all press →
              </Link>
            </Animate>
          </div>
        </section>

        {/* ── Newsletter CTA — tilted top edge ── */}
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: "#0B1440" }}>
          <div className="absolute top-0 left-0 w-full h-14 sm:h-20 lg:h-24 pointer-events-none"
               style={{ backgroundColor: "#F5F6FA", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />
          <div className="max-w-2xl mx-auto px-6 text-center">
            <Animate variant="scaleUp">
              <p className="text-xs tracking-[0.3em] uppercase font-body mb-4"
                 style={{ color: "#4EC5BF" }}>Stay Connected</p>
              <h2 className="font-body font-bold text-white mb-4"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                Be First to Know About New Books & Events
              </h2>
              <p className="text-white/50 text-sm font-body mb-8 leading-relaxed">
                No noise. No spam. Just truth — when it matters.
              </p>
              <Link href="/contact"
                className="inline-flex items-center px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide transition-all"
                style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}>
                Subscribe to the Newsletter →
              </Link>
            </Animate>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
