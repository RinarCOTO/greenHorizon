"use client";

import { useEffect, useRef, useState } from "react";

const issues = [
  {
    tag: "Key Issue",
    title: "Capitalism and Consumerism",
    subtitle: "The cost of buying more than we need.",
    body: [
      "We live inside an economic system built on the idea that more is always better. More production, more consumption, more profit. But every product manufactured, every package discarded, and every trend that pushes us to replace things that still work comes with an environmental price tag that the planet is paying for.",
      "Fast fashion produces more carbon emissions than international aviation and shipping combined. Single-use packaging clogs our waterways and fills our landfills. Food waste contributes to greenhouse gas emissions on a massive scale. The culture of overconsumption that capitalism encourages is one of the most significant drivers of climate change we face today.",
      "This does not mean the solution is simple. But it does mean that every conscious purchasing decision, every time we choose to reuse instead of replace, and every time we question whether we truly need something new, is an act of resistance against a system that profits from planetary destruction.",
    ],
    actions: [
      "Buy only what you need and choose products that last.",
      "Support local and sustainable businesses when possible.",
      "Say no to fast fashion and single-use items.",
      "Repair, reuse, and repurpose before throwing anything away.",
    ],
    accentFrom: "#f97316",
    accentTo: "#ef4444",
    actionAccentFrom: "rgba(1,140,129,1)",
    actionAccentTo: "rgba(168,227,4,1)",
  },
  {
    tag: "Key Issue",
    title: "Ocean Plastic Pollution",
    subtitle: "What we throw away does not just disappear.",
    body: [
      "Every piece of plastic ever produced still exists somewhere on this planet. It does not biodegrade. It breaks down into smaller and smaller fragments called microplastics, and those fragments end up in our oceans, our soil, our food, and our bodies.",
      "Over 8 million metric tons of plastic enter our oceans every year. That plastic wraps itself around marine life, fills the stomachs of seabirds, and carpets the ocean floor in places no human eye will ever see. Massive garbage patches, some larger than entire countries, float across the Pacific and Atlantic oceans as a testament to decades of careless disposal.",
      "But here is the hopeful part: most ocean plastic starts on land. It starts with a wrapper dropped on a sidewalk, a bottle left on a beach, a bag that blew out of an uncovered bin. That means the solution also starts on land, with the choices each of us makes every single day.",
    ],
    actions: [
      "Refuse single-use plastic whenever possible.",
      "Bring your own bag, bottle, and container.",
      "Join coastal and community clean-up drives.",
      "Properly segregate and dispose of your waste every time.",
    ],
    accentFrom: "#f97316",
    accentTo: "#ef4444",
    actionAccentFrom: "rgba(1,140,129,1)",
    actionAccentTo: "rgba(168,227,4,1)",
  },
];

function IssueBlock({
  issue,
  index,
  visible,
}: {
  issue: typeof issues[0];
  index: number;
  visible: boolean;
}) {
  const isEven = index % 2 === 0;
  const delay = index === 0 ? "delay-200" : "delay-300";

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start ${visible ? `animate-fade-up ${delay}` : "opacity-0"}`}>

      {/* Number / visual side */}
      <div className={`${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"} flex flex-col justify-center`}>
        <div
          className="text-[clamp(4rem,14vw,11rem)] font-black leading-none select-none mb-4 opacity-10"
          style={{ backgroundImage: `linear-gradient(135deg, ${issue.accentFrom}, ${issue.accentTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          0{index + 1}
        </div>

        {/* Action list */}
        <div
          className="rounded-2xl p-px"
          style={{ background: `linear-gradient(135deg, rgba(1,140,129,1), rgba(168,227,4,1))` }}
        >
          <div className="rounded-2xl p-6 bg-white">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: issue.actionAccentFrom }}>What you can do</p>
            <ul className="space-y-3">
              {issue.actions.map((action) => (
                <li key={action} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                  <span
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${issue.actionAccentFrom}, ${issue.actionAccentTo})` }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className={isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
          style={{ background: `linear-gradient(135deg, ${issue.accentFrom}20, ${issue.accentTo}20)`, color: issue.accentFrom }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: issue.accentFrom }} />
          {issue.tag}
        </div>

        {/* Title */}
        <h3
          className="font-extrabold text-gray-900 leading-tight mb-2"
          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
        >
          {issue.title}
        </h3>

        {/* Subtitle */}
        <p className="font-medium mb-6" style={{ color: issue.accentFrom }}>{issue.subtitle}</p>

        {/* Body */}
        <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
          {issue.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function AboutKeyIssues() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-32 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-24">
          <div className={`flex items-center gap-3 mb-5 ${visible ? "animate-fade-down delay-100" : "opacity-0"}`}>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>Key Issues to Explore</span>
          </div>
          <h2
            className={`font-extrabold text-gray-900 leading-tight mb-6 ${visible ? "animate-fade-up delay-100" : "opacity-0"}`}
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Two forces <span className="gradient-text">driving the crisis.</span>
          </h2>
          <p className={`text-gray-500 leading-relaxed ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Climate change has many causes, but two of the most powerful ones are deeply connected to the way we live and the systems we participate in every day. Understanding them is not about blame. It is about awareness, and awareness is where change begins.
          </p>
        </div>

        {/* Issues */}
        <div className="flex flex-col gap-16 lg:gap-32">
          {issues.map((issue, i) => (
            <IssueBlock key={issue.title} issue={issue} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}
