import type { Metadata } from "next";
import Link from "next/link";
import { PenLine, BookOpen, Users, Printer, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Become an Author — The Ministry of Writing",
  description:
    "Partner with the Ministry of Writing to publish your book. Expert consultation, manuscript development, and a streamlined path to print — guided by Rev. Acheampong E.S. Builderman.",
};

const steps = [
  {
    icon: PenLine,
    title: "Concept Development",
    body: "If you have an idea but are not sure how to structure it, we are here to help. Contact us to discuss your subject area, or let our consultants guide you in identifying a topic that aligns with your passions and goals.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    body: "We provide professional guidance throughout the entire process, ensuring your manuscript is polished, structured, and ready for readers.",
  },
  {
    icon: Printer,
    title: "The Path to Print",
    body: "Beyond editing and structure, we take you through the final stages of publishing, assisting you in the production of your first one hundred copies.",
  },
];

export default function BecomeAnAuthorPage() {
  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16">

        {/* ── Banner hero ── */}
        <section
          className="mx-4 lg:mx-8 mt-4 rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#0d1a4a" }}
        >
          <div className="max-w-4xl mx-auto px-8 lg:px-14 py-16 lg:py-20 text-center">
            <p className="font-body text-xs tracking-[0.22em] uppercase mb-4" style={{ color: "#4EC5BF" }}>
              The Ministry of Writing
            </p>
            <h1
              className="font-display font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
            >
              Become a Published Author
            </h1>
            <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Are you ready to share your message with the world but find yourself stalled by the writing
              process or the complexities of the publishing industry? You are not alone.
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-20 lg:py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <BookOpen size={36} className="text-forest mx-auto mb-6" />
            <p className="font-body text-lg leading-relaxed text-stone mb-6">
              Many aspiring authors have a powerful story to tell or expert knowledge to share but struggle
              to navigate the journey from initial concept to a physical book.
            </p>
            <p className="font-display text-2xl lg:text-3xl font-bold text-ink leading-snug">
              The Ministry of Writing is here to bridge that gap.
            </p>
          </div>
        </section>

        {/* ── Founder note ── */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: "#F8F6F1" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <blockquote
              className="border-l-4 pl-8 py-2"
              style={{ borderColor: "#4EC5BF" }}
            >
              <p className="font-body text-base leading-relaxed text-stone mb-4">
                Founded by <span className="font-semibold text-ink">Acheampong E. S. Builderman</span> — theologian,
                management consultant, and prolific writer — author of seven compelling, life-transformational books
                who has already completed over 22 manuscripts and counting since August 2018.
              </p>
              <p className="font-display text-xl font-bold text-ink">
                Our mission is to simplify the path to authorship.
              </p>
              <p className="font-body text-base leading-relaxed text-stone mt-4">
                We have developed a streamlined process designed to fast-track your journey, turning your
                vision into a professional publication.
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── How we help ── */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="font-body text-xs tracking-[0.22em] uppercase mb-3" style={{ color: "#4EC5BF" }}>
                Our Process
              </p>
              <h2 className="font-display font-black text-ink" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                How We Can Help You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-8 flex flex-col gap-5"
                  style={{ boxShadow: "0 4px 24px rgba(11,20,64,0.07)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(78,197,191,0.12)" }}
                  >
                    <Icon size={20} style={{ color: "#4EC5BF" }} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug">{title}</h3>
                  <p className="font-body text-sm text-stone leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section
          className="mx-4 lg:mx-8 mb-4 rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#0d1a4a" }}
        >
          <div className="max-w-3xl mx-auto px-8 lg:px-14 py-16 lg:py-20 text-center">
            <p className="font-body text-xs tracking-[0.22em] uppercase mb-4" style={{ color: "#4EC5BF" }}>
              Take the First Step
            </p>
            <h2
              className="font-display font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Are you ready to see your name on the cover of your own book?
            </h2>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Whether you are an established professional, a budding writer, or someone with a unique story,
              the Ministry of Writing provides the support you need to succeed. Our consultancy services
              are tailored to ensure that your work meets the high standards required in today&rsquo;s literary world.
            </p>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Contact our team today to discuss your project, and let us help you transform your aspirations
              into a tangible reality.
            </p>

            {/* Question callout */}
            <div
              className="rounded-2xl px-8 py-6 mb-10 text-left"
              style={{ backgroundColor: "rgba(78,197,191,0.10)", border: "1px solid rgba(78,197,191,0.25)" }}
            >
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                <span className="font-semibold" style={{ color: "#4EC5BF" }}>Start here: </span>
                What specific aspect of your current manuscript or book idea would you like our team to
                prioritise first in your initial consultation?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#4EC5BF", color: "#0B1440" }}
              >
                Contact Us Today <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+233543771181"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                <Phone size={14} />
                Call +233 54 377 1181
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
