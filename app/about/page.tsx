import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Award, Globe, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InkDivider from "@/components/InkDivider";

export const metadata: Metadata = {
  title: "About — Rev. Acheampong E.S. Builderman",
  description:
    "Biography of Rev. Acheampong E.S. Builderman — pastor, author, strategic leader, and transformational educator.",
};

const credentials = [
  { year: "In progress", title: "Doctor of Business Administration (AI & Machine Learning) — Walsh College, USA" },
  { year: "Certified", title: "Rotterdam School of Management, Netherlands" },
  { year: "Certified", title: "Emory University, USA" },
  { year: "Certified", title: "Anglia Ruskin University, UK" },
  { year: "15+ yrs", title: "Lead Pastor — Thanksgiving Place Chapel & Ministries Inc., Accra, Ghana" },
  { year: "Mentored", title: "Will Graham, R.T. Kendall & Chip Ingram" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-ink tracking-tight mb-6">
            About
          </h1>
          <p className="text-stone text-lg max-w-xl leading-relaxed">
            Pastor, author, strategic leader, and transformational educator
            empowering leaders across Africa and beyond.
          </p>
        </div>

        {/* Main bio section */}
        <section className="bg-cream py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Photo */}
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] w-full max-w-[340px]">
                <Image
                  src="/author.png"
                  alt="Rev. Acheampong E.S. Builderman"
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { icon: BookOpen, text: "6 books published" },
                  { icon: Award, text: "DBA candidate — AI & Machine Learning" },
                  { icon: Globe, text: "15+ years of transformational ministry" },
                  { icon: MapPin, text: "Based in Accra, Ghana" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 flex items-center justify-center border border-forest/30 shrink-0">
                      <Icon size={13} className="text-forest" />
                    </div>
                    <span className="text-ink text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-8">
              <blockquote className="font-display text-3xl italic text-ink leading-tight border-l-2 border-forest pl-6">
                &ldquo;Writing is not merely a vocation — it is a sacred duty
                to speak truth where silence would be easier.&rdquo;
              </blockquote>

              <div className="space-y-5 text-stone leading-relaxed text-base">
                <p>
                  Acheampong E. S. Builderman is a pastor, author, strategic
                  leader, and transformational educator whose work has influenced
                  institutions and empowered emerging leaders across Africa and
                  beyond for over fifteen years.
                </p>
                <p>
                  With experience in management strategy, development consulting,
                  C-suite leadership advisory, and public-sector policy, he holds
                  postgraduate degrees and professional certifications from Anglia
                  Ruskin University (UK), Emory University (USA), and Rotterdam
                  School of Management (Netherlands). He is currently completing a
                  Doctor of Business Administration in AI and Machine Learning at
                  Walsh College, USA.
                </p>
                <p>
                  In ministry, he has received mentorship and practical training
                  from globally renowned institutions and teachers of the Word,
                  notably Will Graham, R.T. Kendall, and Chip Ingram. He has
                  travelled extensively and attended several leadership and
                  ministry-focused conferences to enhance his capacity to serve
                  effectively.
                </p>
                <p>
                  He currently serves as a Volunteer Lead Pastor at The
                  Thanksgiving Place Chapel and Ministries Incorporated in Accra,
                  Ghana — where his preaching, teaching, and writing converge to
                  form and equip a generation that will reshape the spiritual and
                  social fabric of Africa.
                </p>
                <p>
                  His six books span Christian living, theology, leadership,
                  devotional life, and African social commentary — each one a
                  prophetic summons to a generation that needs to hear truth
                  spoken clearly and with love.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InkDivider />

        {/* Credentials */}
        <section className="bg-parchment py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-display text-4xl font-bold text-ink mb-12">
              Education &amp; Ministry
            </h2>
            <ol className="flex flex-col divide-y divide-stone/15">
              {credentials.map((c) => (
                <li
                  key={c.title}
                  className="grid grid-cols-[100px_1fr] gap-8 py-6 items-start"
                >
                  <span className="font-display text-sm font-semibold text-forest leading-snug">
                    {c.year}
                  </span>
                  <span className="text-ink text-base">{c.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
