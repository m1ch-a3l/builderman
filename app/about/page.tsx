import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Globe, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Rev. Acheampong E.S. Builderman",
  description:
    "Biography of Rev. Acheampong E.S. Builderman — pastor, author, strategic leader, and transformational educator.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16">
        {/* ── Banner hero ── */}
        <section
          className="mx-4 lg:mx-8 mt-4 rounded-3xl overflow-hidden relative"
          style={{ backgroundColor: "#0d1a4a", minHeight: 320 }}
        >
          {/* Author photo — right side, full height, fades left */}
          <div className="absolute top-8 bottom-0 right-0 w-[45%] hidden lg:block">
            <Image
              src="/Author.webp"
              alt="Rev. Acheampong E.S. Builderman"
              fill
              className="object-cover object-top"
              sizes="45vw"
              priority
            />
            {/* Gradient fade left into navy */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0d1a4a 0%, #0d1a4a 10%, transparent 55%)" }}
            />
            {/* Subtle bottom fade */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #0d1a4a 0%, transparent 30%)" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-8 lg:px-14 py-14 lg:py-16">
            <div className="max-w-lg">
              <p
                className="font-body text-xs tracking-[0.22em] uppercase mb-3"
                style={{ color: "#4EC5BF" }}
              >
                Pastor · Author · Strategic Educator
              </p>
              <h1
                className="font-display font-black text-white leading-tight mb-3"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
              >
                About Rev. Acheampong
                <br />
                E.S. Builderman
              </h1>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Thinker, New Testament prophet, pastor, and author empowering
                leaders across Africa and beyond for over fifteen years.
              </p>
            </div>
          </div>
        </section>

        {/* ── Main bio section ── */}
        <section className="bg-cream py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-14">
            {/* Centered photo */}
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="relative w-full max-w-[520px] rounded-2xl overflow-hidden shadow-lg mx-auto" style={{ aspectRatio: "auto" }}>
                <Image
                  src="/Author.webp"
                  alt="Rev. Acheampong E.S. Builderman"
                  width={520}
                  height={720}
                  className="w-full h-auto object-contain"
                  style={{ display: "block" }}
                />
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: BookOpen, text: "6 books published" },
                  { icon: Globe,    text: "15+ years of transformational ministry" },
                  { icon: MapPin,   text: "Based in Accra, Ghana" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 bg-white border border-stone/15 px-4 py-2.5 rounded-full">
                    <Icon size={13} className="text-forest shrink-0" />
                    <span className="text-ink text-sm font-body">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="w-full space-y-8">
              <blockquote className="font-display text-2xl lg:text-3xl italic text-ink leading-tight border-l-2 border-forest pl-6">
                &ldquo;Writing is not merely a vocation — it is a sacred duty
                to speak truth where silence would be easier.&rdquo;
              </blockquote>

              <div className="space-y-5 text-stone leading-relaxed text-base">
                <p>
                  Acheampong E. S. Builderman is a thinker and a New Testament
                  prophet whose strategic leadership, management consulting, and
                  transformational teaching have shaped institutions, communities,
                  and emerging leaders for over fifteen years across executive
                  leadership, business development, and nationwide
                  capacity-building.
                </p>
                <p>
                  He holds an MBA from Anglia Ruskin University, advanced
                  certifications in management consulting (Emory University) and
                  innovation management (Rotterdam School of Management — Erasmus
                  University), and UK postgraduate diplomas at Levels 7 and 8 in
                  strategic management and leadership. He is completing a Doctor of
                  Business Administration degree at Walsh College and researching
                  artificial intelligence and machine learning.
                </p>
                <p>
                  A prolific writer, he has completed twenty-two manuscripts since
                  2018, six of which have been published and are already in
                  circulation. He is the Missions Director and Lead Pastor of The
                  Thanksgiving Place Chapel and Ministries Incorporated and lives
                  in Accra, Ghana with his beloved wife and their children.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
