"use client";

import { useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subjects = [
  "Speaking & Conferences",
  "Bulk Book Orders",
  "Media & Interviews",
  "Ministry Enquiry",
  "General Message",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass = "w-full px-3.5 py-2.5 rounded-xl border text-sm font-body outline-none transition-colors"
  const inputStyle = { borderColor: "#DDD8FF", backgroundColor: "#F8F7FF", color: "#0B1440" }

  return (
    <>
      <Navbar />

      {/* Full-page gradient background */}
      <div className="fixed inset-0 -z-10" style={{ background: "linear-gradient(135deg, #e8eaf6 0%, #d8e4f8 60%, #e2e8f8 100%)" }} />

      <main className="min-h-screen pt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 lg:py-20">

          {/* Breadcrumb */}
          <p className="font-body text-xs mb-10" style={{ color: "rgba(11,20,64,0.4)" }}>
            Home <span className="mx-1.5 opacity-50">/</span>
            <span style={{ color: "#0B1440" }}>Contact</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* ── Left col ── */}
           {/* <div>
              <h1
                className="font-display font-black leading-[1.05] mb-4"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: "#0B1440" }}
              >
                Let&rsquo;s Get<br />in touch
              </h1>
              <p className="font-body text-base mb-10" style={{ color: "rgba(11,20,64,0.5)" }}>
                Don&rsquo;t be afraid to say hello with us!
              </p>

              {/* Contact rows 
              <div className="flex flex-col gap-3 mb-10">
                {[
                  { Icon: Mail,    label: "Email Us",         value: "enochbuilderman@gmail.com",    href: "mailto:enochbuilderman@gmail.com" },
                  { Icon: MapPin,  label: "Our Headquarters", value: "Thanksgiving Place Chapel, Accra, Ghana", href: "https://thanksgivingplace.org/" },
                ].map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-white border border-white/90 hover:shadow-md transition-all group"
                    style={{ boxShadow: "0 2px 10px rgba(11,20,64,0.06)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(11,20,64,0.07)" }}>
                        <Icon size={15} style={{ color: "#0B1440" }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] tracking-[0.16em] uppercase mb-0.5" style={{ color: "rgba(11,20,64,0.4)" }}>
                          {label}
                        </p>
                        <p className="font-body text-sm font-medium" style={{ color: "#0B1440" }}>
                          {value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="shrink-0 opacity-25 group-hover:opacity-60 transition-opacity" style={{ color: "#0B1440" }} />
                  </a>
                ))}
              </div>

              {/* Socials 
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(11,20,64,0.4)" }}>
                  Follow us on
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      href: "#", label: "Facebook",
                      el: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                    },
                    {
                      href: "#", label: "LinkedIn",
                      el: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
                    },
                    {
                      href: "#", label: "X / Twitter",
                      el: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>,
                    },
                    {
                      href: "#", label: "YouTube",
                      el: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
                    },
                  ].map(({ href, label, el }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:shadow-md transition-all"
                      style={{ color: "#0B1440", boxShadow: "0 2px 8px rgba(11,20,64,0.06)" }}
                    >
                      {el}
                    </a>
                  ))}
                </div>
              </div>
            </div>*/}

            {/* ── Right col — form card ── */}
            <div className="bg-white rounded-3xl p-8 lg:p-10" style={{ boxShadow: "0 8px 40px rgba(11,20,64,0.10)" }}>
              <h2 className="font-display font-bold text-xl mb-7" style={{ color: "#0B1440" }}>
                Contact Us
              </h2>

              {sent ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(78,197,191,0.12)" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4EC5BF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <p className="font-display font-bold text-lg mb-2" style={{ color: "#0B1440" }}>Message sent!</p>
                  <p className="font-body text-sm" style={{ color: "rgba(11,20,64,0.5)" }}>
                    Rev. Builderman will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Name</label>
                      <input required type="text" placeholder="John Doe"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Email</label>
                      <input required type="email" placeholder="johndoe@gmail.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Phone Number</label>
                      <input type="tel" placeholder="+233 XX XXX XXXX"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Subject</label>
                      <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass + " appearance-none cursor-pointer"}
                        style={{ ...inputStyle, color: form.subject ? "#0B1440" : "rgba(11,20,64,0.35)" }}>
                        <option value="" disabled>Select subject</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs mb-1.5 block" style={{ color: "rgba(11,20,64,0.55)" }}>Message</label>
                    <textarea required rows={4} placeholder="Enter your message…"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + " resize-none"}
                      style={inputStyle} />
                  </div>

                  <button type="submit"
                    className="w-full py-3 rounded-xl font-body font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#0B1440", color: "#fff" }}>
                    Send Message <ArrowUpRight size={15} />
                  </button>

                  <p className="font-body text-[10px] leading-relaxed" style={{ color: "rgba(11,20,64,0.35)" }}>
                    By submitting this message, you agree to our Privacy Policy. We respect your data and will never share your information without your consent.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
