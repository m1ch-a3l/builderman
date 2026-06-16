"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import BookCard from "./BookCard";
import { books } from "@/lib/data";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BooksGrid() {
  const featured = books.find((b) => b.featured)!;
  const rest = books.filter((b) => !b.featured);

  return (
    <>
      {/* ── Header band ── */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28" style={{ backgroundColor: "#0B1440" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 85% 20%, rgba(78,197,191,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-xs tracking-[0.28em] uppercase font-body mb-4" style={{ color: "#4EC5BF" }}>
              The Work
            </p>
            <h1
              className="font-body font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              The Books
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl font-body">
              Six transformational works on faith, leadership, and purpose — written to
              equip a generation of students, pastors, executives, and writers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured spotlight ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-center">
            <FadeIn className="flex flex-col items-center">
              <div className="relative flex items-center justify-center w-full" style={{ minHeight: 320 }}>
                <div className="absolute w-52 h-52 rounded-full" style={{ backgroundColor: "#F5F6FA" }} />
                <div
                  className="relative w-[190px] aspect-[2/3]"
                  style={{ filter: "drop-shadow(0 24px 40px rgba(11,20,64,0.2))" }}
                >
                  <Image
                    src={featured.coverImage}
                    alt={`Cover of ${featured.title}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="190px"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-xs tracking-[0.28em] uppercase font-body mb-4" style={{ color: "#4EC5BF" }}>
                Latest Release · {featured.year}
              </p>
              <h2
                className="font-body font-bold text-ink leading-tight mb-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                {featured.title}
              </h2>
              <p className="text-stone text-xs tracking-widest uppercase mb-6 font-body">{featured.genre}</p>
              <p className="text-ink/70 leading-relaxed text-base mb-8 max-w-prose font-body">
                {featured.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/books/${featured.slug}`}
                  className="inline-flex items-center px-7 py-3.5 rounded-full font-body text-sm font-medium tracking-wide transition-all"
                  style={{ backgroundColor: "#0B1440", color: "#fff" }}
                >
                  Read More
                </Link>
                <Link
                  href="/store"
                  className="inline-flex items-center px-7 py-3.5 rounded-full font-body text-sm font-medium tracking-wide border transition-all"
                  style={{ borderColor: "#4EC5BF", color: "#4EC5BF" }}
                >
                  Buy Now
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Grid of remaining books ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F5F6FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.28em] uppercase font-body mb-3" style={{ color: "#4EC5BF" }}>
              More Titles
            </p>
            <h2
              className="font-body font-bold text-ink leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Explore the Full Collection
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
