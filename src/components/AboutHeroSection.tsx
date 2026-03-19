"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutHeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/about_hero_section.webp"
        alt="About GreenHorizon"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 100%)" }} />

      {/* Green tint overlay */}
      <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.6) 0%, rgba(10,31,15,0.8) 60%)" }} />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <div className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm ${visible ? "animate-fade-down" : "opacity-0"}`}>
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
          />
          <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Who We Are</span>
        </div>

        {/* Headline */}
        <h1
          className={`font-extrabold leading-tight text-white mb-6 ${visible ? "animate-fade-up delay-100" : "opacity-0"}`}
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          More than a website.<br />
          <span className="gradient-text">A movement that starts with you.</span>
        </h1>

        {/* Body */}
        <p className={`text-white/65 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          Green Horizon is a climate awareness platform built on one simple belief: that real change doesn&apos;t wait for governments or corporations to act first. It starts with one person, one habit, one decision. We are here to make that first step as easy as possible for every student, every young person, and every individual who wants to be part of the solution.
        </p>

      </div>
    </section>
  );
}
