"use client";

import { useEffect, useRef, useState } from "react";

const accordionItems = [
  {
    question: "What is the definition of climate change?",
    answer: (
      <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
        <p>
          Climate change is the general change in temperature, rainfall, wind, and other climatic patterns over a period of time. It may be caused by natural internal processes or external forces such as shifts in solar cycles and volcanic eruptions. But today, climate change is primarily driven by persistent human-caused changes in the composition of the atmosphere and in how we use the land around us.
        </p>
        <p>
          The burning of fossil fuels, widespread deforestation, industrial agriculture, and decades of unchecked pollution have released enormous amounts of greenhouse gases into the atmosphere. These gases trap heat, warm the planet, and throw the natural systems that sustain life completely out of balance.
        </p>
      </div>
    ),
  },
  {
    question: "What to remember and what can you do today?",
    answer: (
      <div className="grid sm:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-semibold text-gray-800 mb-3">What to Remember</p>
          <ul className="space-y-2">
            {[
              "One action can make a difference.",
              "Small steps lead to big impact when everyone participates.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-500">
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-3">What to Do</p>
          <ul className="space-y-2">
            {[
              "Reduce waste and save energy at home or at school.",
              "Plant a tree or start a small garden.",
              "Encourage your friends and family to take eco-friendly action.",
              "Join community programs and climate campaigns near you.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-500">
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

function AccordionItem({
  question,
  answer,
  index,
  visible,
}: {
  question: string;
  answer: React.ReactNode;
  index: number;
  visible: boolean;
}) {
  const [open, setOpen] = useState(index === 0);
  const delays = ["delay-400", "delay-500"];

  return (
    <div
      className={`rounded-2xl p-px transition-all duration-300 ${visible ? `animate-fade-up ${delays[index]}` : "opacity-0"}`}
      style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.6), rgba(168,227,4,0.6))" }}
    >
    <div className="rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{question}</span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px" }}
      >
        <div className="px-6 pb-6 pt-1 border-t border-gray-100" style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.05) 0%, rgba(168,227,4,0.08) 100%)" }}>
          {answer}
        </div>
      </div>
    </div>
    </div>
  );
}

export default function AboutClimateSection() {
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

        {/* Left — sticky text */}
        <div className="lg:sticky lg:top-32">
          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>The Reality</span>
          </div>

          {/* Headline */}
          <h2
            className={`font-extrabold text-gray-900 leading-tight mb-6 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            The Alarming Reality of<br />
            <span className="gradient-text">Climate Change Worldwide.</span>
          </h2>

          {/* Intro */}
          <p className={`text-gray-500 leading-relaxed mb-8 ${visible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            The signs are everywhere. Stronger typhoons. Longer dry seasons. Coastlines swallowed by rising seas. Rivers running dry. What we are witnessing is not just bad weather. It is the result of decades of human activity catching up with the planet, and it is happening faster than scientists predicted.
          </p>

          {/* Full-width statement */}
          <div className={`rounded-2xl px-6 py-5 ${visible ? "animate-fade-up delay-600" : "opacity-0"}`}
            style={{ background: "linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
          >
            <p className="text-white font-bold text-base lg:text-lg leading-snug">
              &ldquo;Climate change is a direct and indirect result of human activity.&rdquo;
            </p>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex flex-col gap-4">
          {accordionItems.map((item, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
              visible={visible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
