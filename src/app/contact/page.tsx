"use client";

import { useState } from "react";
import { Mail, Globe, Instagram } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <main className="min-h-screen" style={{ background: "#f8faf8" }}>

        {/* Hero */}
        <section
          className="relative py-28 sm:py-36 px-5 sm:px-6 lg:px-10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1f0f 0%, #0d3320 50%, #1a5c2a 100%)" }}
        >
          <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "rgba(1,140,129,0.8)" }} />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "rgba(168,227,4,0.7)" }} />
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(168,227,4,0.6) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
              <span className="text-white/70 text-xs font-medium tracking-wide">Get in Touch</span>
            </div>
            <h1 className="font-extrabold text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
              We&apos;d love to<br />
              <span className="gradient-text">hear from you.</span>
            </h1>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto px-2">
              Whether you have a question, want to collaborate, or just want to say hi — our inbox is always open.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10 sm:gap-12 lg:gap-16 items-start">

            {/* Left — contact info */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>Contact Info</span>
              </div>
              <h2 className="font-extrabold text-[clamp(1.4rem,3vw,2.2rem)] text-gray-900 leading-tight mb-3 sm:mb-4">
                Let&apos;s start a conversation.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                Have questions about our platform, want to collaborate on a campaign, or interested in partnering with us? Fill out the form and we&apos;ll get back to you as soon as we can.
              </p>

              <div className="flex flex-col gap-5 sm:gap-6">
                {[
                  {
                    icon: <Mail size={18} strokeWidth={1.8} />,
                    label: "Email",
                    value: "info@greenbeginswithone.org",
                    href: "mailto:info@greenbeginswithone.org",
                  },
                  {
                    icon: <Globe size={18} strokeWidth={1.8} />,
                    label: "Website",
                    value: "www.greenbeginswithone.org",
                    href: "#",
                  },
                  {
                    icon: <Instagram size={18} strokeWidth={1.8} />,
                    label: "Instagram",
                    value: "@greenbeginswithone",
                    href: "#",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 text-green-700"
                      style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.12), rgba(168,227,4,0.12))", border: "1px solid rgba(38,159,98,0.2)" }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      <a href={item.href} className="text-gray-700 font-medium hover:text-green-600 transition-colors text-sm break-all">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social row */}
              <div className="mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: "Facebook", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                    { label: "Instagram", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                    { label: "Twitter", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-600 hover:border-green-300 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-8 sm:py-10">
                  <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.15), rgba(168,227,4,0.15))" }}>
                    🌱
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-xl mb-2">Message sent!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5" suppressHydrationWarning>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 sm:px-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@email.com"
                        className="w-full px-4 sm:px-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 outline-none focus:border-green-400 transition-colors bg-white"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Collaboration</option>
                      <option>Partnership</option>
                      <option>Media & Press</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 sm:px-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
