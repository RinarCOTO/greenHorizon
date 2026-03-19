"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const involveItems = [
  { label: "Local clean-up drives near you", image: "/images/section6_card1.webp" },
  { label: "Eco-education workshops & events", image: "/images/section6_card2.webp" },
  { label: "Community tree-planting campaigns", image: "/images/section6_card3.webp" },
];

const cardDelays = ["delay-400", "delay-500", "delay-600"];

export default function CommunitySection() {
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
      className="py-24 px-6 lg:px-10"
      style={{ background: "linear-gradient(135deg, #e8f5e9, #d4eedb)" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>
          <div className={`flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>Stay Connected</span>
          </div>
          <h2 className={`font-extrabold text-[clamp(2rem,3.5vw,3rem)] text-gray-900 leading-tight mb-5 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Get Involved.<br />Make It Count.
          </h2>
          <p className={`text-gray-600 leading-[1.8] mb-8 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            The best part about caring for the planet? You don&apos;t have to do it alone. Sign up for our newsletter and get regular updates on local events, eco-tips, and community campaigns delivered straight to your inbox. Whether you want to join a clean-up drive, attend a workshop, or just stay informed — there&apos;s a place for you here.
          </p>

        </div>

        {/* Right */}
        <div>
          <h3 className={`font-bold text-gray-900 text-lg mb-6 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>Ways to Get Involved</h3>
          <div className="grid grid-cols-1 gap-4">
            {involveItems.map((item, i) => (
              <div
                key={item.label}
                className={`group relative rounded-2xl overflow-hidden h-52 bg-gray-100 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(38,159,98,0.15)] transition-all duration-300 ${visible ? `animate-fade-up ${cardDelays[i]}` : "opacity-0"}`}
              >
                {/* Image */}
                {item.image ? (
                  <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-500 ease-out">
                    <Image src={item.image} alt={item.label} fill className="object-cover object-center" />
                  </div>
                ) : (
                <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-300 scale-100 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-1 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 100%)" }} />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center gap-3">
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
