"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/lib/types";

export default function BookSlider({
  books,
  initialSlug,
}: {
  books: Book[];
  initialSlug: string;
}) {
  const startIndex = Math.max(0, books.findIndex((b) => b.slug === initialSlug));
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const shouldReduce = useReducedMotion();
  const router = useRouter();
  const book = books[index];

  function select(newIndex: number, delta: number) {
    setDirection(delta);
    setIndex(newIndex);
    router.replace(`/books/${books[newIndex].slug}`, { scroll: false });
  }

  function go(delta: number) {
    select((index + delta + books.length) % books.length, delta);
  }

  function jump(i: number) {
    select(i, i > index ? 1 : -1);
  }

  return (
    <div>
      {/* Slide */}
      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={book.slug}
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, x: direction >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduce ? { opacity: 1 } : { opacity: 0, x: direction >= 0 ? -40 : 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start"
          >
            <div className="relative aspect-[2/3] w-full max-w-[320px]">
              <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                fill
                className="object-cover object-right"
                priority
                sizes="320px"
              />
            </div>

            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge
                  variant="outline"
                  className="text-stone border-stone/30 text-[10px] tracking-widest uppercase"
                >
                  {book.genre}
                </Badge>
                {book.featured && (
                  <Badge className="bg-forest text-parchment text-[10px] tracking-widest uppercase hover:bg-forest-dark">
                    Latest Release
                  </Badge>
                )}
                {book.debut && (
                  <Badge
                    variant="outline"
                    className="border-stone/40 text-stone text-[10px] tracking-widest uppercase"
                  >
                    Debut Title
                  </Badge>
                )}
              </div>

              <h1 className="font-display text-5xl lg:text-6xl font-bold text-ink leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-stone text-sm tracking-widest uppercase mb-8">{book.year}</p>

              <p className="text-ink/80 leading-relaxed text-base max-w-prose">
                {book.longDescription}
              </p>

              <div className="mt-10 pt-8 border-t border-stone/20">
                <p className="text-stone text-sm italic mb-2">Also available at:</p>
                <div className="flex flex-wrap gap-4">
                  {["Bookshop.org", "Amazon", "Barnes & Noble", "IndieBound"].map((store) => (
                    <span
                      key={store}
                      className="text-sm text-stone/70 underline underline-offset-2 cursor-not-allowed"
                      title="Demo — links not active"
                    >
                      {store}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / next arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous book"
          className="hidden lg:flex absolute -left-16 top-2 w-11 h-11 rounded-full items-center justify-center border border-stone/20 text-ink hover:border-forest hover:text-forest transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next book"
          className="hidden lg:flex absolute -right-16 top-2 w-11 h-11 rounded-full items-center justify-center border border-stone/20 text-ink hover:border-forest hover:text-forest transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Mobile arrows */}
      <div className="flex lg:hidden gap-4 mt-8">
        <button
          onClick={() => go(-1)}
          aria-label="Previous book"
          className="flex w-10 h-10 rounded-full items-center justify-center border border-stone/20 text-ink"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next book"
          className="flex w-10 h-10 rounded-full items-center justify-center border border-stone/20 text-ink"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-20">
        <p className="text-stone text-xs tracking-[0.2em] uppercase font-body mb-6">
          More from the collection
        </p>
        <div className="flex gap-5 overflow-x-auto pb-2 -mx-1 px-1">
          {books.map((b, i) => (
            <button
              key={b.slug}
              onClick={() => jump(i)}
              className="group flex flex-col gap-3 shrink-0 w-28 text-left"
            >
              <div
                className={`relative aspect-[2/3] overflow-hidden bg-sage/30 transition-opacity ${
                  i === index ? "" : "opacity-50 group-hover:opacity-80"
                }`}
                style={i === index ? { boxShadow: "0 0 0 2px #2D5016" } : undefined}
              >
                <Image
                  src={b.coverImage}
                  alt={`Cover of ${b.title}`}
                  fill
                  className="object-cover object-right"
                  sizes="112px"
                />
              </div>
              <p className="font-display text-sm font-semibold text-ink leading-snug line-clamp-2">
                {b.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
