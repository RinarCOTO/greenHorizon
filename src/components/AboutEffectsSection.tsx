"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const effects = [
  {
    image: "/images/about_section5_card1.webp",
    title: "Rising Temperatures",
    body: "Global temperatures are climbing at a rate the Earth has not experienced in thousands of years. Hotter days mean more heat-related illnesses, crop failures, and the destruction of ecosystems that millions of species depend on to survive.",
  },
  {
    image: "/images/about_section5_card2.webp",
    title: "Stronger Storms and Floods",
    body: "As ocean temperatures rise, typhoons and hurricanes grow more powerful and more frequent. Flooding displaces communities, destroys homes, and cuts off access to food, water, and healthcare for millions of people across the world.",
  },
  {
    image: "/images/about_section5_card3.webp",
    title: "Droughts and Pollution",
    body: "Extended dry spells are drying up rivers and farmland, threatening food and water security for entire regions. At the same time, air and water pollution continue to harm human health and wipe out biodiversity at an alarming rate.",
  },
];

const delays = ["delay-300", "delay-400", "delay-500"];

export default function AboutEffectsSection() {
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
      className="py-16 lg:py-32 px-4 sm:px-6 lg:px-10"
      style={{ background: "linear-gradient(135deg, #0a1f0f 0%, #0d3320 50%, #1a5c2a 100%)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-20">
          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Visible Effects</span>
          </div>

          {/* Headline */}
          <h2
            className={`font-extrabold text-white leading-tight mb-6 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            What <span style={{ background: "linear-gradient(90deg, #f97316, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>climate change</span> looks like<br />
            <span className="gradient-text">in real life.</span>
          </h2>

          {/* Intro */}
          <p className={`text-white/60 leading-relaxed ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Climate change is not an abstract concept. Its effects are visible, measurable, and deeply human. From flooded communities to drought-stricken farmlands, the consequences of a warming planet are being felt by real people right now, many of whom contributed the least to the problem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {effects.map((effect, i) => (
            <div
              key={effect.title}
              className={`group rounded-2xl p-px transition-all duration-300 hover:-translate-y-1 ${visible ? `animate-fade-up ${delays[i]}` : "opacity-0"}`}
              style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.5), rgba(168,227,4,0.5))" }}
            >
              <div
                className="h-full rounded-2xl flex flex-col backdrop-blur-sm border border-white/5 overflow-hidden transition-colors duration-300 group-hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                {/* Image */}
                <div className="relative w-full h-56 sm:h-72 md:h-64 lg:h-80 shrink-0 bg-white/10">
                  <Image
                    src={effect.image}
                    alt={effect.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3 p-7">
                  <h3 className="font-bold text-white text-lg">{effect.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{effect.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
