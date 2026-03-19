"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "1.1°C",
    label: "Global Warming",
    body: "The Earth has already warmed by 1.1 degrees Celsius above pre-industrial levels and it's still rising. Even half a degree more puts millions of lives at risk.",
  },
  {
    value: "8M Tons",
    label: "Ocean Plastic Per Year",
    body: "That's how much plastic enters our oceans every single year. Most of it comes from everyday items like bags, bottles, and wrappers that were used for just a few minutes.",
  },
  {
    value: "3x More",
    label: "Extreme Weather Events",
    body: "Extreme weather events including floods, droughts, and super typhoons are occurring three times more frequently than they did 50 years ago. Communities across Asia and the Pacific are among the hardest hit.",
  },
  {
    value: "1",
    label: "Person",
    body: "That's all it takes to start something. Every movement in history, environmental or otherwise, began with one person who decided enough was enough.",
  },
];

const cardDelays = ["delay-300", "delay-400", "delay-500", "delay-600"];

export default function StatsSection() {
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
    <section ref={sectionRef} className="py-28 px-6 lg:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div className={visible ? "animate-fade-up delay-100" : "opacity-0"}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>The Reality</span>
            </div>
            <h2 className="font-extrabold text-[clamp(2rem,4vw,3.2rem)] text-gray-900 leading-tight">
              The planet is sending a signal.<br />
              <span className="gradient-text">It&apos;s time we listened.</span>
            </h2>
          </div>
          <div className={visible ? "animate-fade-up delay-200" : "opacity-0"}>
            <p className="text-gray-500 text-lg leading-relaxed">
              Climate change isn&apos;t a future problem. It&apos;s happening right now, in the typhoons that hit our shores harder every year, in the summers that keep getting hotter, in the rivers and oceans filling up with waste. Here&apos;s what the numbers say:
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(38,159,98,0.12)] transition-all duration-300 overflow-hidden ${visible ? `animate-fade-up ${cardDelays[i]}` : "opacity-0"}`}
            >
              {/* Gradient accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
              />

              {/* Background number watermark */}
              <span className="absolute -bottom-4 -right-2 font-extrabold text-8xl text-gray-50 select-none leading-none pointer-events-none">
                {i + 1}
              </span>

              <div className="relative">
                <p className="font-extrabold text-4xl leading-none mb-1 gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{stat.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
