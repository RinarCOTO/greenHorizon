"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Capitalism & Consumerism",
    body: "Fast fashion, single-use plastics, and throwaway culture are among the leading drivers of environmental destruction. Choosing what actually matters is the first step.",
  },
  {
    title: "Ocean Plastic Pollution",
    body: "Over 8 million metric tons of plastic enter our oceans every year. It's a global crisis with local solutions — and it starts with the choices we make every day.",
  },
];

function FeatureIcon() {
  return (
    <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14">
      <div
        className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full opacity-80"
        style={{ background: "rgba(168,227,4,0.9)" }}
      />
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), #1a7a4a)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
          <path d="M12 3C7 3 3 8 3 12c0 2 1 4 2.5 5.5C7 19 9 20 12 20c4 0 8-3 9-8 0-5-4-9-9-9zm1 13c-3 0-5.5-2-6-5 .5 1 2 2 4 2-1-1-1.5-2.5-1-4 1 2 3 3 5 3-1-1-1-3 0-4 1 2 3 3 3 6-1 1.5-3 2-5 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function KeyIssuesSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

        {/* Left: Staggered images */}
        <div className="relative h-80 sm:h-96 lg:h-175 order-2 lg:order-1">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #269f62 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="absolute top-4 left-1/2 -translate-x-8 animate-float pointer-events-none z-10">
            <Image src="/images/section4_plasticbag.webp" alt="" width={60} height={90} className="object-contain drop-shadow-lg" aria-hidden="true" />
          </div>
          <div className="absolute bottom-4 left-1/2 translate-x-2 animate-float-delayed pointer-events-none z-10 lg:hidden">
            <Image src="/images/section4_bottle.webp" alt="" width={80} height={55} className="object-contain drop-shadow-lg rotate-[-15deg]" aria-hidden="true" />
          </div>
          <div className="absolute top-155 left-1/2 translate-x-2 animate-float-delayed pointer-events-none z-10 hidden lg:block">
            <Image src="/images/section4_bottle.webp" alt="" width={120} height={80} className="object-contain drop-shadow-lg rotate-[-15deg]" aria-hidden="true" />
          </div>

          <div className={`absolute top-0 left-0 w-44 h-60 sm:w-56 sm:h-72 lg:w-72 lg:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white ${visible ? "animate-fade-in delay-200" : "opacity-0"}`}>
            <Image src="/images/seciotn4_card1.webp" alt="Climate issue" fill className="object-cover object-center" />
          </div>

          <div className={`absolute bottom-0 right-0 w-48 h-60 sm:w-60 sm:h-72 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ${visible ? "animate-fade-in delay-400" : "opacity-0"}`}>
            <Image src="/images/section4_card2.webp" alt="Ocean plastic pollution" fill className="object-cover object-center" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
            <div
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-white text-xs font-semibold shadow-lg whitespace-nowrap"
              style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
            >
              🌍 2 Key Issues to Know
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="order-1 lg:order-2">
          <div className={`flex items-center gap-2 mb-4 sm:mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
              style={{ background: "#facc15", boxShadow: "0 0 10px 3px rgba(250,204,21,0.7), 0 0 20px 6px rgba(250,204,21,0.35)" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M12 3C7 3 3 8 3 12c0 2 1 4 2.5 5.5C7 19 9 20 12 20c4 0 8-3 9-8 0-5-4-9-9-9z" />
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">What&apos;s Driving It</span>
          </div>

          <h2 className={`font-extrabold text-[clamp(1.75rem,3.5vw,3rem)] text-gray-900 leading-tight mb-4 sm:mb-5 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Two issues every young<br />person needs to understand.
          </h2>

          <p className={`text-gray-500 leading-relaxed mb-6 sm:mb-8 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Climate change has many causes, but two of the biggest are ones we interact with every single day. Understanding them is the first step to doing something about them.
          </p>

          <div className="flex flex-col gap-5 sm:gap-6 mb-8 sm:mb-10">
            {features.map((f, i) => (
              <div key={f.title} className={`flex items-start gap-3 sm:gap-4 ${visible ? `animate-fade-up ${i === 0 ? "delay-400" : "delay-500"}` : "opacity-0"}`}>
                <FeatureIcon />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={visible ? "animate-fade-up delay-600" : "opacity-0"}>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(100,180,4,1))" }}
            >
              More About
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
