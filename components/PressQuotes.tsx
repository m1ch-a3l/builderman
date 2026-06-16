"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pressQuotes } from "@/lib/data";

export default function PressQuotes() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="press" className="bg-parchment py-24 lg:py-36 border-t border-stone/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-display text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-16">
          Press
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressQuotes.map((item, i) => (
            <motion.blockquote
              key={item.id}
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="flex flex-col gap-4 border-t border-stone/20 pt-6"
            >
              <p className="font-display text-xl italic text-ink leading-snug">
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
            </motion.blockquote>
          ))}
        </div>
      </div>

    </section>
  );
}
