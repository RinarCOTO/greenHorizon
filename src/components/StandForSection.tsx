"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Educate",
    body: "We break down the real science of climate change into content that actually makes sense. No textbooks, no jargon. Just the truth about what's happening to our planet and why it matters to your generation more than any other.",
    image: "/images/section2_card1.webp",
  },
  {
    title: "Inspire",
    body: "We share stories of young people who chose to act and made a real difference. Because the most powerful thing we can tell you is this: someone your age is already doing it, and they started exactly where you are now.",
    image: "/images/section2_card.webp",
    position: "object-top",
  },
  {
    title: "Act",
    body: "Awareness without action is just worry. We give you practical, doable steps you can take today at home, at school, and in your community that add up to something much bigger than yourself.",
    image: "/images/section2_card3.webp",
  },
];

const cardDelays = ["delay-400", "delay-500", "delay-600"];

export default function StandForSection() {
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
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <Image
        src="/images/section2Image.jpg"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/88" />
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <div className={`flex items-center gap-3 mb-4 sm:mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>Why We Exist</span>
          </div>
          <h2 className={`font-extrabold text-[clamp(1.75rem,4vw,3.5rem)] text-gray-900 leading-tight mb-4 sm:mb-6 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            We believe one person can<br className="hidden sm:block" />change everything.
          </h2>
          <p className={`text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Green Begins With One was built for students like you: people who care about the planet but don&apos;t know where to begin. We&apos;re not here to overwhelm you with statistics or guilt you into action. We&apos;re here to show you that the smallest habit, repeated by enough people, becomes a movement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group relative rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.2)] transition-all duration-300 aspect-4/5 ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""} ${visible ? `animate-fade-up ${cardDelays[i]}` : "opacity-0"}`}
            >
              {/* Image */}
              {card.image ? (
                <Image src={card.image} alt={card.title} fill className={`object-cover ${"position" in card && card.position ? card.position : "object-center"}`} />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-1 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
              )}

              {/* Step badge */}
              <div
                className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-10"
                style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Default: title only (desktop, non-hovered) */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pt-16 pb-5 sm:pb-6 opacity-0 sm:opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)" }}
              >
                <h3 className="font-extrabold text-lg text-white">{card.title}</h3>
              </div>

              {/* Always visible on mobile, hover-revealed on desktop */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pt-20 pb-5 sm:pb-6 opacity-100 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)" }}
              >
                <h3 className="font-extrabold text-lg text-white mb-2">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
