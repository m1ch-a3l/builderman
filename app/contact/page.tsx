import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Contact — Rev. Acheampong E.S. Builderman",
  description: "Get in touch with Rev. Acheampong E.S. Builderman or subscribe to his newsletter.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-ink tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-stone text-lg max-w-md leading-relaxed">
            For speaking invitations, ministry enquiries, and general correspondence.
          </p>
        </div>

        {/* Contact details */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone/20 pt-12">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">
                Church &amp; Ministry
              </h2>
              <p className="text-stone text-sm leading-relaxed">
                Thanksgiving Place Chapel
                <br />
                &amp; Ministries Incorporated
                <br />
                Accra, Ghana
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">
                Speaking &amp; Events
              </h2>
              <p className="text-stone text-sm leading-relaxed">
                For conference appearances, leadership workshops, and ministry
                speaking engagements, please use the contact form or reach out
                through the church directly.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">
                Books &amp; Media
              </h2>
              <p className="text-stone text-sm leading-relaxed">
                For bulk book orders, interview requests, and media enquiries,
                please reach out directly and allow up to five working days for
                a response.
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-prose">
            <p className="text-stone text-sm leading-relaxed italic">
              Rev. Builderman values every message he receives. Due to volume,
              personal replies may not always be possible — but every note is
              read and prayed over.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
