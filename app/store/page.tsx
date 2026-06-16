"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { books } from "@/lib/data";
import type { Book } from "@/lib/types";
import { useCart } from "@/lib/cart-context";

function BuyButton({ book }: { book: Book }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      onClick={handleAdd}
      className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-body font-medium tracking-wide transition-all duration-300 ${
        added
          ? "bg-forest text-parchment"
          : "bg-ink text-parchment hover:bg-ink/80"
      }`}
    >
      {added ? <Check size={11} strokeWidth={2.5} /> : null}
      {added ? "Added" : "Buy"}
    </button>
  );
}

function AddToCartButton({ book }: { book: Book }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      onClick={handleAdd}
      className={`inline-flex items-center gap-2 px-8 py-3.5 text-xs font-body font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
        added
          ? "bg-forest text-parchment"
          : "bg-parchment text-ink hover:bg-parchment/80"
      }`}
    >
      {added ? <Check size={13} strokeWidth={2.5} /> : null}
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div
      className="group flex flex-col bg-white overflow-hidden"
      style={{ borderRadius: 20, boxShadow: "0 2px 16px rgba(26,26,26,0.08), 0 1px 3px rgba(26,26,26,0.06)" }}
    >
      {/* Cover image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/3.6", background: "#f0ede8" }}>
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ objectPosition: "right 8%" }}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
        {book.debut && (
          <div className="absolute top-3 left-3">
            <span className="bg-ink/80 text-parchment text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full font-body">
              First Book
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold text-ink leading-snug">
            {book.title}
          </h3>
          <span className="font-body text-[15px] font-semibold text-ink shrink-0">
            ${book.price?.toFixed(2)}
          </span>
        </div>
        <p className="text-stone/70 text-[13px] font-body leading-relaxed line-clamp-3">
          {book.description}
        </p>
        <div className="flex items-center justify-between mt-1">
          <Link
            href={`/books/${book.slug}`}
            className="text-[11px] text-stone/50 hover:text-ink font-body transition-colors tracking-wide"
          >
            Learn more →
          </Link>
          <BuyButton book={book} />
        </div>
      </div>
    </div>
  );
}

export default function StorePage() {
  const featured = books.find((b) => b.featured)!;
  const rest = books.filter((b) => !b.featured);
  const allBooks = [featured, ...rest];

  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16">

        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <p className="text-[10px] tracking-[0.28em] uppercase text-stone/50 font-body mb-3">Books</p>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-ink tracking-tight mb-4">
            Store
          </h1>
          <p className="text-stone text-base max-w-sm leading-relaxed">
            Order directly — every purchase supports the ministry.
          </p>
        </div>

        {/* Featured book — hero product */}
        <section className="bg-ink py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div
                className="relative aspect-[2/3] w-full max-w-[300px] mx-auto lg:mx-0"
                style={{ filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.6))" }}
              >
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover object-right"
                  priority
                  sizes="300px"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-forest font-body mb-5">
                  Latest Release · {featured.year}
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-parchment leading-tight mb-3">
                  {featured.title}
                </h2>
                <p className="text-stone text-xs tracking-widest uppercase mb-6">
                  {featured.genre}
                </p>
                <p className="text-parchment/65 leading-relaxed text-base mb-8 max-w-prose">
                  {featured.longDescription}
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-display text-3xl font-bold text-parchment">
                    ${featured.price?.toFixed(2)}
                  </span>
                  <span className="text-stone/60 text-xs tracking-wide font-body">Paperback</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <AddToCartButton book={featured} />
                  <Link
                    href={`/books/${featured.slug}`}
                    className="inline-flex items-center px-8 py-3.5 border border-parchment/20 text-parchment text-xs font-body font-medium tracking-[0.18em] uppercase hover:border-parchment/50 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All books — card grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <h2 className="font-display text-3xl font-bold text-ink mb-10">
            All Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Info row */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 border-t border-stone/10 pt-10">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Worldwide Shipping", detail: "Delivered to your door" },
              { label: "Secure Checkout", detail: "Powered by Paystack" },
              { label: "Ministry Support", detail: "Every purchase gives back" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-forest shrink-0" />
                <span className="text-sm font-body text-stone">
                  <span className="text-ink font-medium">{item.label}</span> — {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
