import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { books } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookSlider from "@/components/BookSlider";
import type { Metadata } from "next";

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
    title: `${book.title} — Rev. Acheampong E.S. Builderman`,
    description: book.description,
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-parchment min-h-screen pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-stone text-sm hover:text-forest transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            All books
          </Link>

          <BookSlider books={books} initialSlug={slug} />
        </div>
      </main>
      <Footer />
    </>
  );
}
