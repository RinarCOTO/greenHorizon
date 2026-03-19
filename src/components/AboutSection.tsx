import Link from "next/link";

const cards = [
  {
    icon: "🎯",
    title: "Our Focus",
    body: "We're here for the youth — students, activists, and everyday individuals who want to make a difference but don't know where to start. We make eco-friendly living feel accessible, not intimidating.",
  },
  {
    icon: "🌍",
    title: "Our Goal",
    body: "Our mission is simple: spread awareness about climate change and turn that awareness into action. From facts to habits, we give you everything you need to live a little greener every day.",
  },
  {
    icon: "💚",
    title: "Our Community",
    body: "You're not alone in this. Green Begins With One connects you with a community of like-minded individuals who are already taking steps — and who will cheer you on as you take yours.",
  },
];

function NatureColumn({ tint, label }: { tint: string; label?: boolean }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-80" style={{ background: tint }}>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40" />
      {label && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div
            className="absolute inset-0 opacity-80"
            style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.85), rgba(168,227,4,0.75))" }}
          />
          <div className="relative">
            <p className="text-white/80 text-xs font-medium tracking-widest uppercase mb-3">Who We Are</p>
            <h3 className="text-white font-bold text-xl leading-snug mb-5">
              Real Change Starts<br />With One Action
            </h3>
            <Link href="/about" className="btn-outline text-sm px-6 py-2.5">
              Learn More
            </Link>
          </div>
        </div>
      )}
      <svg className="absolute bottom-0 left-0 right-0 w-full opacity-25" viewBox="0 0 300 120" fill="none">
        <ellipse cx="60" cy="80" rx="40" ry="55" fill="#1a4a2a" />
        <rect x="56" y="100" width="8" height="20" fill="#1a4a2a" />
        <ellipse cx="160" cy="70" rx="50" ry="65" fill="#1f5a32" />
        <rect x="155" y="110" width="10" height="10" fill="#1f5a32" />
        <ellipse cx="255" cy="85" rx="35" ry="48" fill="#1a4a2a" />
        <rect x="251" y="105" width="8" height="15" fill="#1a4a2a" />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">

      {/* Header */}
      <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>Who We Are</span>
          </div>
          <h2 className="font-extrabold text-[clamp(2rem,3.5vw,3rem)] leading-tight text-gray-900">
            Real change starts with{" "}
            <span className="gradient-text">one simple action.</span>
          </h2>
        </div>
        <div>
          <p className="text-gray-500 leading-relaxed">
            Green Begins With One is a climate awareness platform built for the next generation — students, young changemakers, and anyone who believes that a better world is possible. We know that big problems can feel overwhelming, but we also know that every movement in history started with a single person deciding to act. We&apos;re here to help you be that person.
          </p>
        </div>
      </div>

      {/* 3-column image grid */}
      <div className="grid grid-cols-3 gap-5 mb-14">
        <NatureColumn tint="linear-gradient(135deg, #1a4a2a, #2d7a3a)" />
        <NatureColumn tint="linear-gradient(135deg, #0d3320, #1a5c2a)" label />
        <NatureColumn tint="linear-gradient(135deg, #1a4a2a, #2d7a3a)" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="p-7 rounded-2xl border border-gray-100 bg-gray-50/60 hover:border-green-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{card.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      {/* Feature strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: "🌳", title: "Reforestation", desc: "Planting native trees to restore ecosystems and capture carbon." },
          { icon: "☀️", title: "Clean Energy", desc: "Promoting solar and wind solutions for off-grid communities." },
          { icon: "💧", title: "Water Access", desc: "Building sustainable water systems in vulnerable regions." },
          { icon: "♻️", title: "Zero Waste", desc: "Reducing plastic and organic waste through community programs." },
        ].map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-gray-50 transition-all duration-300"
          >
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
