"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, ChevronDown, ChevronUp, Search, ShoppingBag, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { books, bookBundle, bundleTotalPrice, bundleSavings } from "@/lib/data";
import type { Book } from "@/lib/types";
import { useCart } from "@/lib/cart-context";

/* ── Add to Cart button ── */
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
      className="w-full py-2.5 rounded-lg text-xs font-body font-semibold tracking-wide transition-all duration-300 border"
      style={
        added
          ? { backgroundColor: "#4EC5BF", color: "#0B1440", borderColor: "#4EC5BF" }
          : { backgroundColor: "transparent", color: "#0B1440", borderColor: "#0B1440" }
      }
    >
      {added ? <span className="flex items-center justify-center gap-1.5"><Check size={11} strokeWidth={2.5} />Added!</span> : "Add to Cart"}
    </button>
  );
}

/* ── Bundle Add to Cart — premium CTA ── */
function BundleAddToCartButton({ book }: { book: Book }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <motion.button
      onClick={handleAdd}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="relative overflow-hidden flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body font-bold text-sm tracking-wide whitespace-nowrap"
      style={{
        backgroundColor: added ? "#0B1440" : "#4EC5BF",
        color: added ? "#4EC5BF" : "#0B1440",
        boxShadow: added ? "0 6px 20px rgba(11,20,64,0.35)" : "0 6px 20px rgba(78,197,191,0.45)",
      }}
    >
      {/* Shimmer sweep */}
      {!added && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)" }}
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
        />
      )}

      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 flex items-center gap-2"
          >
            <Sparkles size={15} strokeWidth={2.4} />
            Added — Enjoy the Collection!
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 flex items-center gap-2"
          >
            <ShoppingBag size={15} strokeWidth={2.4} />
            Get the Complete Collection
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ── Product card ── */
function BookCard({ book }: { book: Book }) {
  const [wished, setWished] = useState(false);
  return (
    <div className="bg-white rounded-2xl overflow-hidden group" style={{ boxShadow: "0 2px 12px rgba(11,20,64,0.07)" }}>
      {/* Cover */}
      <div className="relative" style={{ backgroundColor: "#F0EDE8", aspectRatio: "1/1.15" }}>
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
        />
        {book.debut && (
          <span className="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full font-body font-medium" style={{ backgroundColor: "rgba(11,20,64,0.75)", color: "#F8F6F1" }}>
            Debut
          </span>
        )}
        {book.featured && (
          <span className="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full font-body font-medium" style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}>
            Featured
          </span>
        )}
        <button
          onClick={() => setWished((w) => !w)}
          aria-label="Wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform hover:scale-110"
        >
          <Heart size={14} fill={wished ? "#EF4444" : "none"} stroke={wished ? "#EF4444" : "#8C7B6B"} strokeWidth={1.8} />
        </button>
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-4">
        <p className="font-body text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: "#8C7B6B" }}>
          {book.genre}
        </p>
        <h3 className="font-display font-bold text-[15px] leading-snug mb-1" style={{ color: "#1A1A1A" }}>
          {book.title}
        </h3>
        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {[1,2,3,4,5].map((s) => (
            <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
          <span className="text-[10px] font-body ml-1" style={{ color: "#8C7B6B" }}>(5.0)</span>
        </div>
        <p className="font-display font-bold text-base mb-3" style={{ color: "#1A1A1A" }}>
          ${book.price?.toFixed(2)}
        </p>
        <AddToCartButton book={book} />
      </div>
    </div>
  );
}

/* ── Filter accordion ── */
function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b pb-4 mb-4" style={{ borderColor: "#E8E4DC" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full font-display font-bold text-sm mb-3"
        style={{ color: "#1A1A1A" }}
      >
        {title}
        {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>
      {open && children}
    </div>
  );
}

const genres = [
  { label: "All", value: "all" },
  { label: "Christian Social Commentary", value: "Christian Social Commentary" },
  { label: "Christian Living", value: "Christian Living" },
  { label: "Theology & Writing", value: "Theology & Writing" },
  { label: "Christian Leadership", value: "Christian Leadership" },
  { label: "Devotional", value: "Devotional" },
];

const priceRanges = [
  { label: "$0 – $19", min: 0, max: 19 },
  { label: "$19 – $22", min: 19, max: 22 },
  { label: "$22+", min: 22, max: Infinity },
];

const sortOptions = ["Recommended", "Price: Low to High", "Price: High to Low", "Newest"];

export default function StorePage() {
  const featured = books.find((b) => b.featured)!;

  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Recommended");
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);

  let filtered = books.filter((b) => {
    const genreMatch = selectedGenre === "all" || b.genre === selectedGenre;
    const priceRange = priceRanges.find((r) => r.label === selectedPrice);
    const priceMatch = !priceRange || ((b.price ?? 0) >= priceRange.min && (b.price ?? 0) < priceRange.max);
    const searchMatch = !search || b.title.toLowerCase().includes(search.toLowerCase());
    return genreMatch && priceMatch && searchMatch;
  });

  if (sortBy === "Price: Low to High") filtered = [...filtered].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
  if (sortBy === "Price: High to Low") filtered = [...filtered].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));

  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ backgroundColor: "#F8F6F1" }}>

        {/* ── Banner hero ── */}
        <section className="mx-4 lg:mx-8 mt-4 rounded-3xl overflow-hidden relative" style={{ backgroundColor: "#0d1a4a", minHeight: 220 }}>
          <div className="max-w-7xl mx-auto px-8 lg:px-14 py-12 flex items-center justify-between gap-8">
            <div className="max-w-md">
              <p className="font-body text-xs tracking-[0.22em] uppercase mb-3" style={{ color: "#4EC5BF" }}>
                Rev. Builderman · 2026
              </p>
              <h1 className="font-display font-black text-white leading-tight mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                Six Books to Transform Your Faith and Leadership
              </h1>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                Prophetic, pastoral, and purpose-driven writing for leaders across Africa and beyond.
              </p>
              <Link
                href={`/books/${featured.slug}`}
                className="inline-flex items-center px-6 py-2.5 rounded-full font-body text-xs font-semibold tracking-wide transition-all"
                style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}
              >
                Explore Latest Release
              </Link>
            </div>
            {/* Featured book floating cover */}
            <div className="hidden lg:block relative shrink-0" style={{ width: 160, height: 220 }}>
              <div style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.5))" }} className="w-full h-full relative">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="160px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bundle promo ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
          <div
            className="rounded-3xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center gap-8"
            style={{ backgroundColor: "#fff", border: "1px solid #E8E4DC", boxShadow: "0 4px 24px rgba(11,20,64,0.06)" }}
          >
            {/* Fanned covers */}
            <div className="relative shrink-0 flex items-center" style={{ width: 170, height: 140 }}>
              {books.map((book, i) => (
                <div
                  key={book.slug}
                  className="absolute rounded-md overflow-hidden shadow-md"
                  style={{
                    width: 64,
                    aspectRatio: "2/3",
                    left: i * 18,
                    transform: `rotate(${(i - 2.5) * 6}deg)`,
                    zIndex: i,
                    boxShadow: "0 6px 14px rgba(11,20,64,0.18)",
                  }}
                >
                  <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="64px" />
                </div>
              ))}
            </div>

            {/* Copy */}
            <div className="flex-1 text-center sm:text-left">
              <span
                className="inline-block text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-body font-medium mb-2"
                style={{ backgroundColor: "rgba(78,197,191,0.15)", color: "#0B1440" }}
              >
                Best Value
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl mb-1" style={{ color: "#1A1A1A" }}>
                The Complete Collection
              </h2>
              <p className="font-body text-sm" style={{ color: "#8C7B6B" }}>
                All six books, bundled together — save ${bundleSavings.toFixed(2)} versus buying individually.
              </p>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="text-center">
                <p className="font-display font-bold text-2xl" style={{ color: "#1A1A1A" }}>
                  ${bookBundle.price?.toFixed(2)}
                </p>
                <p className="font-body text-xs line-through" style={{ color: "#8C7B6B" }}>
                  ${bundleTotalPrice.toFixed(2)}
                </p>
              </div>
              <BundleAddToCartButton book={bookBundle} />
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex gap-8">

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block shrink-0 w-56">
              {/* Search */}
              <div className="relative mb-6">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#8C7B6B" }} />
                <input
                  type="text"
                  placeholder="Search books…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs font-body bg-white outline-none border focus:border-teal transition-colors"
                  style={{ borderColor: "#E8E4DC", color: "#1A1A1A" }}
                />
              </div>

              <FilterSection title="Genre">
                <div className="flex flex-col gap-2">
                  {genres.map((g) => {
                    const count = g.value === "all" ? books.length : books.filter((b) => b.genre === g.value).length;
                    return (
                      <label key={g.value} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-2">
                          <div
                            onClick={() => setSelectedGenre(g.value)}
                            className="w-3.5 h-3.5 rounded border flex items-center justify-center cursor-pointer transition-colors"
                            style={{
                              borderColor: selectedGenre === g.value ? "#4EC5BF" : "#C8C0B4",
                              backgroundColor: selectedGenre === g.value ? "#4EC5BF" : "transparent",
                            }}
                          >
                            {selectedGenre === g.value && <Check size={8} color="#0B1440" strokeWidth={3} />}
                          </div>
                          <span className="font-body text-xs leading-snug" style={{ color: "#1A1A1A" }}>{g.label}</span>
                        </div>
                        <span className="font-body text-[10px]" style={{ color: "#8C7B6B" }}>{String(count).padStart(2, "0")}</span>
                      </label>
                    );
                  })}
                </div>
              </FilterSection>

              <FilterSection title="Price">
                <div className="flex flex-col gap-2">
                  {priceRanges.map((r) => {
                    const count = books.filter((b) => (b.price ?? 0) >= r.min && (b.price ?? 0) < r.max).length;
                    const active = selectedPrice === r.label;
                    return (
                      <label key={r.label} className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div
                            onClick={() => setSelectedPrice(active ? null : r.label)}
                            className="w-3.5 h-3.5 rounded border flex items-center justify-center cursor-pointer transition-colors"
                            style={{
                              borderColor: active ? "#4EC5BF" : "#C8C0B4",
                              backgroundColor: active ? "#4EC5BF" : "transparent",
                            }}
                          >
                            {active && <Check size={8} color="#0B1440" strokeWidth={3} />}
                          </div>
                          <span className="font-body text-xs" style={{ color: "#1A1A1A" }}>{r.label}</span>
                        </div>
                        <span className="font-body text-[10px]" style={{ color: "#8C7B6B" }}>{String(count).padStart(2, "0")}</span>
                      </label>
                    );
                  })}
                </div>
              </FilterSection>

              {(selectedGenre !== "all" || selectedPrice) && (
                <button
                  onClick={() => { setSelectedGenre("all"); setSelectedPrice(null); }}
                  className="text-xs font-body underline underline-offset-2 transition-colors"
                  style={{ color: "#8C7B6B" }}
                >
                  Clear filters
                </button>
              )}
            </aside>

            {/* ── Product grid ── */}
            <div className="flex-1 min-w-0">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="font-body text-sm" style={{ color: "#8C7B6B" }}>
                  Showing <span className="font-semibold" style={{ color: "#1A1A1A" }}>{filtered.length}</span> {filtered.length === 1 ? "Book" : "Books"}
                </p>
                {/* Sort */}
                <div className="relative">
                  <button
                    onClick={() => setSortOpen((o) => !o)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-body bg-white transition-colors"
                    style={{ borderColor: "#E8E4DC", color: "#1A1A1A" }}
                  >
                    Sort by: <span className="font-semibold">{sortBy}</span>
                    <ChevronDown size={13} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border z-20 py-1 overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
                      {sortOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setSortBy(opt); setSortOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-xs font-body transition-colors hover:bg-gray-50"
                          style={{ color: opt === sortBy ? "#4EC5BF" : "#1A1A1A", fontWeight: opt === sortBy ? 600 : 400 }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="font-display text-xl text-ink mb-2">No books found</p>
                  <p className="font-body text-sm text-stone">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                  {filtered.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
