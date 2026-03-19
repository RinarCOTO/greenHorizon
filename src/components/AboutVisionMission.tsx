"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const missionPoints = [
  {
    number: "01",
    body: "To educate people about climate change and environmental issues in a way that is clear, honest, and relevant to their everyday lives.",
  },
  {
    number: "02",
    body: "To inspire simple, practical eco-friendly habits that anyone can adopt at home, at school, and in their community without needing special resources or expertise.",
  },
  {
    number: "03",
    body: "To encourage youth participation in sustainability movements and give young people the tools, knowledge, and confidence to lead change in their own communities.",
  },
  {
    number: "04",
    body: "To promote the belief that one action can protect a thousand lives, because when enough individuals act together, even the smallest habits become a force powerful enough to change the world.",
  },
];

export default function AboutVisionMission() {
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
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/about_section3_bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
      <div className="absolute inset-0 opacity-40" style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.6) 0%, rgba(10,31,15,0.9) 100%)" }} />

      <div className="relative max-w-7xl mx-auto">

        {/* Eyebrow + Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <div className={`inline-flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Vision and Mission</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(168,227,4,1), rgba(1,140,129,1))" }} />
          </div>
          <h2
            className={`font-extrabold text-white leading-tight ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            A cleaner, safer, <span className="gradient-text">greener planet</span> for everyone.
          </h2>
        </div>

        {/* Vision + Mission grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Vision */}
          <div className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden backdrop-blur-md border border-white/20 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "rgba(168,227,4,0.8)" }} />

            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/15 bg-white/5">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
              <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Our Vision</span>
            </div>

            {/* Large quote mark */}
            <div className="text-7xl font-black leading-none mb-2 gradient-text opacity-40 select-none">&ldquo;</div>

            <p className="text-white/80 leading-relaxed text-base lg:text-lg">
              To build a world where every individual understands their role in protecting the environment and takes action toward a cleaner, safer, and greener planet. We envision a future where no one feels too small to make a difference, and where the choices of one person ripple outward to protect thousands of lives and generations to come.
            </p>
          </div>

          {/* Mission */}
          <div className={`flex flex-col gap-4 ${visible ? "animate-fade-up delay-400" : "opacity-0"}`}>
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md self-start">
              <span className="w-2 h-2 rounded-full" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Our Mission</span>
            </div>

            {missionPoints.map((point, i) => (
              <div
                key={point.number}
                className={`flex items-start gap-5 p-5 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 ${visible ? `animate-fade-up delay-${(i + 4) * 100}` : "opacity-0"}`}
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="shrink-0 text-2xl font-black leading-none"
                  style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {point.number}
                </span>
                <p className="text-white/75 text-sm leading-relaxed pt-1">{point.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
