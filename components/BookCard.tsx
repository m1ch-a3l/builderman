"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Book } from "@/lib/types";

interface BookCardProps {
  book: Book;
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: (index % 3) * 0.08,
        duration: 0.55,
        ease: "easeOut",
      }}
      className="group h-full"
    >
      <Link
        href={`/books/${book.slug}`}
        className="relative flex flex-col items-center text-center h-full rounded-2xl px-6 pt-10 pb-7 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        style={{ backgroundColor: "#0B1440" }}
      >
        {book.debut && (
          <span
            className="absolute top-4 left-4 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full font-body font-medium"
            style={{ backgroundColor: "rgba(78,197,191,0.15)", color: "#4EC5BF" }}
          >
            Debut
          </span>
        )}

        {/* Cover — free-floating, full cover visible, no crop */}
        <div
          className="relative w-[120px] aspect-[2/3] mb-6 transition-transform duration-500 group-hover:-translate-y-1"
          style={{ filter: "drop-shadow(0 18px 32px rgba(0,0,0,0.45))" }}
        >
          <Image
            src={book.coverImage}
            alt={`Cover of ${book.title}`}
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>

        <p className="text-[10px] tracking-[0.22em] uppercase font-body mb-3" style={{ color: "#4EC5BF" }}>
          {book.genre} · {book.year}
        </p>
        <h3 className="font-body font-bold text-white text-base leading-tight mb-2">
          {book.title}
        </h3>
        <p className="text-white/65 text-xs font-body leading-relaxed mb-5 line-clamp-3">
          {book.description}
        </p>

        <div className="mt-auto flex items-center justify-between w-full pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {book.price && (
            <span className="font-body font-semibold text-sm text-white">${book.price.toFixed(2)}</span>
          )}
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-body font-medium transition-colors"
            style={{ color: "#4EC5BF" }}
          >
            Read More →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
