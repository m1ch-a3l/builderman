"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Award, Globe } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "6", detail: "books published" },
  { icon: Award, label: "DBA", detail: "candidate — AI & Machine Learning" },
  { icon: Globe, label: "15+", detail: "years of transformational ministry" },
];

export default function About() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="bg-parchment py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: pull-quote + bio */}
          <motion.div
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="w-10 h-[2px] bg-forest mb-8" />
            <blockquote className="font-display text-3xl lg:text-4xl font-semibold italic text-ink leading-tight mb-10">
              &ldquo;Writing is not merely a vocation — it is a sacred duty to
              speak truth where silence would be easier.&rdquo;
            </blockquote>

            <p className="text-stone leading-relaxed text-base mb-5">
              Rev. Acheampong E.S. Builderman is a pastor, author, strategic
              leader, and transformational educator whose work has influenced
              institutions and empowered emerging leaders across Africa and
              beyond for over fifteen years.
            </p>
            <p className="text-stone leading-relaxed text-base mb-10">
              His six books span Christian living, theology, leadership, and
              African social commentary. He serves as Lead Pastor at Thanksgiving
              Place Chapel and Ministries Incorporated in Accra, Ghana.
            </p>

            <a
              href="/about"
              className="text-xs tracking-[0.18em] uppercase text-ink border-b border-ink/20 pb-px hover:border-ink transition-colors font-body"
            >
              Full biography →
            </a>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-10 lg:pt-10"
          >
            {stats.map(({ icon: Icon, label, detail }, i) => (
              <motion.div
                key={label + detail}
                initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-6"
              >
                <Icon size={18} className="text-forest mt-1 shrink-0" />
                <div>
                  <p className="font-display text-3xl font-bold text-ink leading-none mb-1">
                    {label}
                  </p>
                  <p className="text-stone text-sm font-body">{detail}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative quote mark */}
            <div className="mt-8 font-display text-[10rem] leading-none text-stone/8 select-none -mb-8">
              &ldquo;
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
