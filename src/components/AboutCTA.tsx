"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AboutCTA() {
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

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0a1f0f 0%, #0d3320 40%, #1a5c2a 70%, #0d3320 100%)" }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "rgba(1,140,129,0.8)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "rgba(168,227,4,0.7)" }} />

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

        {/* Eyebrow */}
        <div className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
          <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Take the Next Step</span>
        </div>

        {/* Headline */}
        <h2
          className={`font-extrabold text-white leading-tight mb-6 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Now that you know,<br />
          <span className="gradient-text">you can act.</span>
        </h2>

        {/* Body */}
        <p className={`text-white/65 text-lg leading-relaxed mb-10 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          Awareness is only the beginning. This platform exists to move you from knowing to doing, from scrolling to acting, from one person to one movement. Head over to our Take Action page and find out exactly what you can do today, starting with the simplest habit you can build right now.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col items-center justify-center gap-4 ${visible ? "animate-fade-up delay-400" : "opacity-0"}`}>
          <Link
            href="/take-action"
            className="px-8 py-4 text-sm font-bold rounded-full text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
          >
            See What You Can Do Today
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
          >
            Visit our Contact page
          </Link>
        </div>

      </div>
    </section>
  );
}
