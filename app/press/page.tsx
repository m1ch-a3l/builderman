import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pressQuotes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press — Rev. Acheampong E.S. Builderman",
  description: "What readers, leaders, and publications have said about Rev. Builderman's books.",
};

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-ink tracking-tight mb-6">
            Press
          </h1>
          <p className="text-stone text-lg max-w-md leading-relaxed">
            What readers, leaders, and publications have said about his work.
          </p>
        </div>

        {/* Quotes grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pressQuotes.map((item) => (
              <blockquote
                key={item.id}
                className="flex flex-col gap-4 border-t-2 border-forest/20 pt-8"
              >
                <p className="font-display text-2xl italic text-ink leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-auto">
                  <p className="text-forest text-xs font-medium tracking-widest uppercase">
                    {item.publication}
                  </p>
                  {item.book && (
                    <p className="text-stone text-xs mt-1 italic">
                      On <em>{item.book}</em>
                    </p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Press contact */}
          <div className="mt-24 border-t border-stone/20 pt-12">
            <h2 className="font-display text-2xl font-semibold text-ink mb-3">
              Press enquiries
            </h2>
            <p className="text-stone text-sm leading-relaxed max-w-sm">
              For interview requests, review copies, or press information,
              please contact the publisher or reach out via the contact page.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
