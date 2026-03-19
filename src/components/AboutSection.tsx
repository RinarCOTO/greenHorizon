"use client";

import { useEffect, useRef, useState } from "react";

const keyPoints = [
  "We are a climate awareness platform that believes real change starts with one simple action.",
  "We encourage individuals, especially the youth, to take small but meaningful steps to protect the environment.",
  "We spread awareness about climate change and promote everyday eco-friendly habits.",
  "Climate change causes rising temperatures, stronger storms, floods, droughts, and pollution that affect both people and nature.",
  "Many people think the problem is too big to solve, but change begins with one person deciding to act.",
  "Small actions like reducing waste, saving energy, planting trees, and recycling can create a big collective impact when enough people participate.",
];

const delays = ["delay-300", "delay-400", "delay-500", "delay-600", "delay-700", "delay-800"];

export default function AboutSection() {
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
    <section ref={sectionRef} className="py-16 lg:py-32 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">

        {/* Left */}
        <div className="lg:sticky lg:top-32">
          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>About Us</span>
          </div>

          {/* Headline */}
          <h2
            className={`font-extrabold text-gray-900 leading-tight mb-6 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            We exist because the<br />
            <span className="gradient-text">planet can&apos;t wait.</span>
          </h2>

          {/* Body */}
          <div className={`space-y-4 text-gray-500 leading-relaxed ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            <p>
              Green Horizon is a climate awareness platform that believes real change starts with one simple action. We encourage individuals, especially the youth, to take small but meaningful steps to protect the environment every single day.
            </p>
            <p>
              Our platform spreads awareness about climate change and promotes everyday eco-friendly habits that are practical, accessible, and impactful. We know that most people care about the environment. The problem isn&apos;t caring. The problem is not knowing where to start. That&apos;s where we come in.
            </p>
          </div>
        </div>

        {/* Right — Key Points */}
        <div className="flex flex-col gap-4">
          {keyPoints.map((point, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-green-200 hover:bg-green-50/40 transition-colors duration-300 ${visible ? `animate-fade-up ${delays[i]}` : "opacity-0"}`}
            >
              <div
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
              >
                {i + 1}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
