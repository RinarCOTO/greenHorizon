"use client";

import { useState, useEffect, useRef } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-10 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0a1f0f 0%, #0d3320 40%, #1a5c2a 70%, #0d3320 100%)" }}
      />

      {/* Blurred leaf shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "5%",  left: "3%",  w: 180, rot: -20, op: 0.12 },
          { top: "15%", left: "12%", w: 120, rot: 15,  op: 0.09 },
          { top: "60%", left: "2%",  w: 200, rot: 30,  op: 0.1  },
          { top: "75%", left: "18%", w: 100, rot: -10, op: 0.08 },
          { top: "5%",  right: "4%", w: 160, rot: 25,  op: 0.11 },
          { top: "20%", right: "10%",w: 110, rot: -30, op: 0.09 },
          { top: "55%", right: "3%", w: 220, rot: 10,  op: 0.1  },
          { top: "78%", right: "15%",w: 130, rot: -15, op: 0.08 },
        ].map((leaf, i) => (
          <div
            key={i}
            className="absolute blur-2xl"
            style={{
              top: leaf.top,
              left: "left" in leaf ? leaf.left : undefined,
              right: "right" in leaf ? (leaf as { right: string }).right : undefined,
              width: leaf.w,
              height: leaf.w * 1.4,
              opacity: leaf.op,
              transform: `rotate(${leaf.rot}deg)`,
              background: "radial-gradient(ellipse at 40% 30%, rgba(168,227,4,0.9), rgba(1,140,129,0.6))",
              borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "rgba(1,140,129,0.8)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "rgba(168,227,4,0.7)" }}
      />

      {/* Dotted grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168,227,4,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
          <span className="text-white/70 text-xs font-medium tracking-wide">Newsletter</span>
        </div>

        <h2 className={`font-extrabold leading-tight text-white mb-5 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          Stay in the loop.<br />
          <span className="gradient-text">Stay in the fight.</span>
        </h2>

        <p className={`text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          Sign up for our newsletter and get eco-tips, event updates, and climate news delivered straight to your inbox. Written for students, by people who actually care.
        </p>

        {submitted ? (
          <p className="text-white font-semibold text-lg">🌱 You&apos;re in! Talk soon.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${visible ? "animate-fade-up delay-400" : "opacity-0"}`}
            suppressHydrationWarning
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/45 outline-none focus:border-white/50 focus:bg-white/15 transition-all text-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
