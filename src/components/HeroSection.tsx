"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

export default function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX / width) - 0.5) * 20;
    const y = ((clientY / height) - 0.5) * 12;
    setOffset({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background — moves with mouse */}
      <div className="absolute -inset-10">
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: "transform 0.15s ease-out",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/heroBackground.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ── Floating orbs ── */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-float pointer-events-none"
        style={{
          background: "rgba(1,140,129,0.7)",
          transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-15 animate-float-delayed pointer-events-none"
        style={{
          background: "rgba(168,227,4,0.6)",
          transform: `translate(${offset.x * -0.2}px, ${offset.y * -0.2}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* ── Floating badge — top right ── */}
      <div
        className="absolute top-32 right-8 lg:right-20 animate-float pointer-events-none"
        style={{
          transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-xl">
          <div className="flex -space-x-2">
            {["bg-emerald-400", "bg-teal-400", "bg-lime-400"].map((c, i) => (
              <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white/30`} />
            ))}
          </div>
          <div>
            <p className="text-white text-xs font-semibold">89+ joined today</p>
            <p className="text-white/55 text-[10px]">Growing community</p>
          </div>
        </div>
      </div>

      {/* ── Floating stat card — bottom right ── */}
      <div
        className="absolute bottom-24 right-8 lg:right-20 animate-float-delayed pointer-events-none"
        style={{
          transform: `translate(${offset.x * -0.4}px, ${offset.y * -0.4}px)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <p className="text-white/60 text-[10px] uppercase tracking-wide">Live impact</p>
          </div>
          <p className="text-white font-extrabold text-2xl leading-none">685+</p>
          <p className="text-white/60 text-xs mt-1">Trees planted</p>
          <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full w-3/4"
              style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
            />
          </div>
        </div>
      </div>

      {/* ── Floating eco-tip — left ── */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 animate-float pointer-events-none hidden lg:block"
        style={{
          transform: `translateY(-50%) translate(${offset.x * -0.6}px, ${offset.y * -0.6}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl w-40 rotate-[-4deg]">
          <p className="text-lime-300 text-xs font-bold mb-1">🌱 Eco Tip</p>
          <p className="text-white/80 text-[11px] leading-snug">Carry a reusable bag everywhere you go.</p>
        </div>
      </div>

      {/* ── Floating climate fact — bottom left ── */}
      <div
        className="absolute bottom-28 left-4 lg:left-12 animate-float-delayed pointer-events-none hidden lg:block"
        style={{
          transform: `translate(${offset.x * -0.35}px, ${offset.y * -0.35}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 shadow-xl">
          <span className="text-base">🌍</span>
          <p className="text-white/80 text-xs font-medium">1.5°C — the line we must not cross</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24 flex items-center">
        <div
          className="max-w-2xl"
          style={{
            transform: `translate(${offset.x * 0.05}px, ${offset.y * 0.05}px)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-white/80 text-xs font-medium tracking-wide">Climate Awareness Platform</span>
          </div>

          <h1 className={`text-white font-extrabold leading-[1.06] mb-4 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`} style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}>
            Green Begins<br />
            With <span className="gradient-text">One.</span>
          </h1>

          <p className={`text-white/85 text-2xl font-medium mb-6 leading-snug ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Small steps today. A safer, greener tomorrow.
          </p>

          <p className={`text-white/65 text-lg leading-relaxed mb-10 max-w-xl ${visible ? "animate-fade-up delay-400" : "opacity-0"}`}>
            You scrolled past the news. You saw the floods, the fires, the dying reefs. And maybe you thought: what can I even do? More than you think. It starts here. It starts with one.
          </p>

          <div className={`flex flex-wrap gap-4 ${visible ? "animate-fade-up delay-500" : "opacity-0"}`}>
            <Link
              href="/signup"
              className="inline-block rounded-full px-9 py-3.5 font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
            >
              Sign up — it&apos;s free
            </Link>
            <Link href="/login" className="btn-outline">
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-white/40 text-xs tracking-widest uppercase">Scroll</p>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
