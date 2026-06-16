"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  function fade(delay: number, y = 24) {
    if (!mounted || shouldReduce) return {};
    return {
      initial: { opacity: 0, y },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.7, ease: "easeOut" as const },
    };
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0B1440" }}
    >
      {/* Subtle radial teal glow behind photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 85% 60%, rgba(78,197,191,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Full-viewport two-column grid — photo col has NO max-width constraint */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-screen">

        {/* ── Left — text ── */}
        <div className="flex flex-col justify-center pt-28 pb-16 lg:py-0
                        px-6 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-12
                        relative z-10">

          <motion.p {...fade(0.1)}
            className="font-body text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "#4EC5BF" }}>
            Pastor · Author · Transformational Educator
          </motion.p>

          <motion.h1 {...fade(0.2)}
            className="font-body font-bold text-white leading-[1.06] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}>
            The{" "}
            <em className="font-display" style={{ color: "#4EC5BF", fontStyle: "italic" }}>
              Prophetic Voice
            </em>{" "}
            for Leadership,<br />Faith, and Africa.
          </motion.h1>

          <motion.p {...fade(0.35)}
            className="text-white/60 text-[15px] leading-relaxed max-w-[420px] font-body mb-10">
            Motivational pastor, author of six transformational books, and strategic
            educator empowering leaders across Africa and beyond. Join Rev. Builderman
            on a journey of prophetic truth and purposeful living.
          </motion.p>

          <motion.div {...fade(0.5)} className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide transition-all hover:opacity-90"
              style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}
            >
              Connect with Rev. Builderman →
            </Link>
            <Link
              href="/books"
              className="inline-flex items-center px-7 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide border border-white/25 text-white hover:border-teal hover:text-teal transition-all"
            >
              Explore the Books
            </Link>
          </motion.div>

          {/* Teal decorative circle — bottom left of text area */}
          <div
            className="absolute bottom-8 left-6 w-10 h-10 rounded-full opacity-40 hidden lg:block"
            style={{ backgroundColor: "#4EC5BF" }}
          />
        </div>

        {/* ── Right — author photo, edge-to-edge, full height ── */}
        <div className="relative min-h-[60vh] lg:min-h-screen">

          {/* Teal outline circle — top left of photo col */}
          <motion.div
            {...fade(0.55)}
            className="absolute top-24 -left-6 w-14 h-14 rounded-full border-2 z-20 hidden lg:block"
            style={{ borderColor: "rgba(78,197,191,0.5)" }}
          />
          {/* Small filled teal dot */}
          <motion.div
            {...fade(0.65)}
            className="absolute top-36 -left-2 w-4 h-4 rounded-full z-20 hidden lg:block"
            style={{ backgroundColor: "#4EC5BF" }}
          />
          {/* Large teal circle — bottom right */}
          <motion.div
            {...fade(0.6)}
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full z-0"
            style={{ backgroundColor: "rgba(78,197,191,0.18)" }}
          />

          {/* Photo — fills the column */}
          <motion.div
            initial={!mounted || shouldReduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}
            className="absolute inset-0 z-10"
          >
            <Image
              src="/author.png"
              alt="Rev. Acheampong E.S. Builderman"
              fill
              className="object-cover object-[center_15%]"
              priority
              sizes="35vw"
            />
            {/* Left-edge fade to blend with text col */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(11,20,64,0.85) 0%, rgba(11,20,64,0.2) 30%, transparent 60%), linear-gradient(to top, rgba(11,20,64,0.5) 0%, transparent 30%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
