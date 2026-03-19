"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const team = [
  {
    photo: "/images/about_section7_rishi.webp",
    name: "Rishi-R. Cendana",
    role: "Lead Designer & Content Lead",
    bio: "Rishi believes that awareness is the most powerful tool a young person can carry. Passionate about environmental advocacy and visual storytelling, she helped shape the look, feel, and voice of Green Horizon from the ground up. For her, this platform is proof that students don't have to wait to make a difference.",
  },
  {
    photo: "/images/about_section7_marion.webp",
    name: "Marion Aiza D. Dacumos",
    role: "Researcher & Content Writer",
    bio: "Marion is driven by facts and moved by people. Her deep interest in climate science and community impact shaped much of the research and content behind this platform. She joined this project because she wanted to turn information into inspiration, and inspiration into action.",
  },
  {
    photo: "/images/about_section7_andrea.webp",
    name: "Andrea E. Quedim",
    role: "UI Designer & Developer",
    bio: "Andrea has always believed that design can change how people see the world. Her creative vision brought the platform to life visually, making climate awareness feel accessible, engaging, and hopeful for young people everywhere. She hopes Green Horizon becomes a starting point for a generation ready to act.",
  },
];

const delays = ["delay-200", "delay-300", "delay-400"];

export default function AboutTeamSection() {
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
      className="py-24 lg:py-32 px-6 lg:px-10"
      style={{ background: "linear-gradient(135deg, #e8f5e9, #d4eedb)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className={`inline-flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>The People Behind It</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(168,227,4,1), rgba(1,140,129,1))" }} />
          </div>
          <h2
            className={`font-extrabold text-gray-900 leading-tight mb-5 ${visible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className={`text-gray-500 leading-relaxed ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Green Horizon was created by three students who believe that young people have the power to drive real environmental change. This platform is their answer to a world that needs more voices, more action, and more hope.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group rounded-3xl p-px transition-all duration-300 hover:-translate-y-1 ${visible ? `animate-fade-up ${delays[i]}` : "opacity-0"}`}
              style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.4), rgba(168,227,4,0.4))" }}
            >
              <div className="h-full rounded-3xl bg-white overflow-hidden flex flex-col">

                {/* Photo */}
                <div className="relative w-full h-96 bg-gray-100 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 px-6 py-6">
                  {/* Name */}
                  <h3 className="font-extrabold text-gray-900 text-lg leading-tight">{member.name}</h3>

                  {/* Bio */}
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
