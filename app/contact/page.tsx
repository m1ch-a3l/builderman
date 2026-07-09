"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RECIPIENT = "enochbuilderman@gmail.com";

const subjects = [
  "Speaking & Conferences",
  "Bulk Book Orders",
  "Media & Interviews",
  "Ministry Enquiry",
  "General Message",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `[Builderman.com] ${form.subject} — from ${form.name}`,
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send your message. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full px-3.5 py-3 rounded-xl border text-sm font-body outline-none transition-colors focus:border-[#4EC5BF]";
  const inputStyle = { borderColor: "#DDD8FF", backgroundColor: "#F8F7FF", color: "#0B1440" };

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10" style={{ background: "linear-gradient(135deg, #e8eaf6 0%, #d8e4f8 60%, #e2e8f8 100%)" }} />

      <main className="min-h-screen pt-16 flex items-center justify-center px-4">
        <div className="w-full max-w-xl py-14 lg:py-20">

          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="font-body text-xs tracking-[0.22em] uppercase mb-3" style={{ color: "#4EC5BF" }}>
              Get in touch
            </p>
            <h1
              className="font-display font-black leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0B1440" }}
            >
              Send a Message
            </h1>
            <p className="font-body text-sm" style={{ color: "rgba(11,20,64,0.5)" }}>
              Fill in the form below and we&rsquo;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10" style={{ boxShadow: "0 8px 40px rgba(11,20,64,0.10)" }}>

            {sent ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(78,197,191,0.12)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4EC5BF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="font-display font-bold text-xl mb-2" style={{ color: "#0B1440" }}>Message Sent!</p>
                <p className="font-body text-sm" style={{ color: "rgba(11,20,64,0.5)" }}>
                  Thank you for reaching out. We&rsquo;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Name</label>
                    <input
                      required type="text" placeholder="Your name"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Email</label>
                    <input
                      required type="email" placeholder="your@email.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Subject</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass + " appearance-none cursor-pointer"}
                    style={{ ...inputStyle, color: form.subject ? "#0B1440" : "rgba(11,20,64,0.35)" }}
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Message</label>
                  <textarea
                    required rows={5} placeholder="Write your message here…"
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-none"}
                    style={inputStyle}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-xs font-body">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl font-body font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#0B1440", color: "#fff" }}
                >
                  {sending ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Message <ArrowUpRight size={15} /></>
                  )}
                </button>

                <p className="font-body text-[10px] text-center leading-relaxed" style={{ color: "rgba(11,20,64,0.35)" }}>
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
