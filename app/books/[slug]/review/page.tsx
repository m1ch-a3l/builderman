import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { books } from "@/lib/data";
import { getReview } from "@/lib/reviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return { title: "Not Found" };
  return {
    title: `Review: ${book.title} — Rev. Acheampong E.S. Builderman`,
    description: `A review of ${book.title} by Rev. Acheampong E.S. Builderman.`,
  };
}

export default async function BookReviewPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  const review = getReview(slug);

  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16 min-h-screen">

        {/* ── Banner ── */}
        <section
          className="mx-4 lg:mx-8 mt-4 rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#0d1a4a" }}
        >
          <div className="max-w-5xl mx-auto px-8 lg:px-14 py-12 lg:py-16 flex flex-col lg:flex-row gap-10 items-center">
            {/* Cover */}
            <div className="relative shrink-0 w-[130px] lg:w-[160px] rounded-xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "auto" }}>
              <Image
                src={book.coverImage}
                alt={book.title}
                width={160}
                height={220}
                className="w-full h-auto object-contain"
                style={{ display: "block" }}
                priority
              />
            </div>
            {/* Meta */}
            <div>
              <p className="font-body text-xs tracking-[0.22em] uppercase mb-3" style={{ color: "#4EC5BF" }}>
                {book.genre}
              </p>
              <h1
                className="font-display font-black text-white leading-tight mb-3"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
              >
                {book.title}
              </h1>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                By Rev. Acheampong E.S. Builderman &nbsp;·&nbsp; {book.year}
              </p>
              {review && (
                <p className="font-body text-sm mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {review.reviewerTitle} by <span style={{ color: "#4EC5BF" }}>{review.reviewer}</span>
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14">

          {/* Back link */}
          <Link
            href={`/books/${slug}`}
            className="inline-flex items-center gap-2 text-stone text-sm hover:text-forest transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Back to book
          </Link>

          {review ? (
            <>
              {/* Foreword (compiler's note) — Thanksgiving Manifesto */}
              {review.foreword && (
                <div className="mb-14 pb-14 border-b border-stone/15">
                  <p className="font-body text-xs tracking-[0.22em] uppercase mb-2" style={{ color: "#4EC5BF" }}>
                    {review.foreword.title}
                  </p>
                  <h2 className="font-display font-bold text-2xl text-ink mb-8">
                    {review.foreword.subtitle}
                  </h2>
                  <article className="space-y-6">
                    {review.foreword.paragraphs.map((para, i) => (
                      <p key={i} className="font-body text-base lg:text-lg leading-relaxed text-stone">
                        {para}
                      </p>
                    ))}
                  </article>
                  <p className="mt-8 font-display italic text-ink font-semibold">
                    {review.foreword.author}
                  </p>
                </div>
              )}

              {/* Review body */}
              {review.paragraphs.length > 0 && (
                <article className="space-y-7">
                  {review.paragraphs.map((para, i) => (
                    <p key={i} className="font-body text-base lg:text-lg leading-relaxed text-stone">
                      {para}
                    </p>
                  ))}
                </article>
              )}

              {/* Recommended for */}
              {review.recommendedFor.length > 0 && (
                <div
                  className="mt-14 rounded-2xl p-8"
                  style={{ backgroundColor: "#F0F4FF", border: "1px solid rgba(11,20,64,0.08)" }}
                >
                  <p className="font-body text-xs tracking-[0.22em] uppercase mb-5" style={{ color: "#4EC5BF" }}>
                    Recommended For
                  </p>
                  <ul className="space-y-3">
                    {review.recommendedFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <BookOpen size={14} className="text-forest shrink-0 mt-1" />
                        <span className="font-body text-sm text-ink leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reviewer credit */}
              <div className="mt-10 flex items-center gap-4 pt-8 border-t border-stone/15">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-sm"
                  style={{ backgroundColor: "#0d1a4a", color: "#4EC5BF" }}
                >
                  {review.reviewer.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-ink">{review.reviewer}</p>
                  <p className="font-body text-xs text-stone">{review.reviewerTitle}</p>
                </div>
              </div>
            </>
          ) : (
            /* No review yet */
            <div className="text-center py-24">
              <BookOpen size={40} className="text-stone/30 mx-auto mb-5" />
              <p className="font-display text-xl text-ink mb-2">Review coming soon</p>
              <p className="font-body text-sm text-stone">
                A review for this book has not been published yet.
              </p>
            </div>
          )}

          {/* Get the book CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0B1440", color: "#fff" }}
            >
              Get this book
            </Link>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-sm border border-stone/30 text-stone hover:text-ink hover:border-ink transition-colors"
            >
              Browse all books
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
