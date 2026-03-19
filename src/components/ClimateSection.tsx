const facts = [
  {
    icon: "🌡️",
    title: "Rising Temperatures",
    body: "The Earth is warming faster than at any point in recorded history. Higher temperatures don't just mean hotter summers — they disrupt ecosystems, threaten food supplies, and push entire species toward extinction.",
  },
  {
    icon: "🌊",
    title: "Stronger Storms & Floods",
    body: "As oceans warm, storms grow more powerful and floods become more frequent. Communities around the world — many of them already vulnerable — are bearing the heaviest costs of a crisis they did little to cause.",
  },
  {
    icon: "🏜️",
    title: "Droughts & Pollution",
    body: "Prolonged droughts are drying up water sources and farmland, while air and water pollution continue to harm millions of people and wildlife every year. The planet is sending a signal — and it's time we listened.",
  },
];

const topics = [
  {
    tag: "Key Issue",
    title: "Capitalism & Consumerism",
    body: "The way we produce and consume goods is one of the biggest drivers of climate change. Fast fashion, single-use products, and endless consumption cycles leave a massive environmental footprint. Understanding the system is the first step to changing it.",
    icon: "🏭",
    bg: "linear-gradient(135deg, #3b2c1a, #5c4033)",
  },
  {
    tag: "Key Issue",
    title: "Ocean Plastic Pollution",
    body: "Over 8 million metric tons of plastic enter our oceans every year, choking marine life and entering the food we eat. What begins as a discarded bottle on a city street can end up in the belly of a whale. It's a global crisis with local solutions.",
    icon: "🐋",
    bg: "linear-gradient(135deg, #1a3a4a, #0d5c7a)",
  },
];

export default function ClimateSection() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>The Reality</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(168,227,4,1), rgba(1,140,129,1))" }} />
          </div>
          <h2 className="font-extrabold text-[clamp(2rem,3.5vw,3rem)] text-gray-900 leading-tight mb-5">
            Understanding Climate Change
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Climate change is the long-term shift in global temperatures, rainfall, wind, and other weather patterns over time — and human activity is at the heart of it. The effects are already here, and they&apos;re only growing stronger. But so are we.
          </p>
        </div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,159,98,0.12)] transition-all duration-300"
            >
              <div className="text-[2.5rem] mb-4">{fact.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{fact.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{fact.body}</p>
            </div>
          ))}
        </div>

        {/* Topic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl p-10 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              style={{ background: topic.bg }}
            >
              <p className="text-xs tracking-widest uppercase text-white/60 mb-4">{topic.tag}</p>
              <h3 className="font-extrabold text-[1.6rem] text-white leading-snug mb-3">{topic.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{topic.body}</p>
              <div className="flex items-center gap-1.5 text-white/80 text-sm font-semibold mt-5">
                Explore <span aria-hidden="true">→</span>
              </div>
              <span className="absolute right-6 bottom-6 text-[4rem] opacity-15 select-none" role="img" aria-hidden="true">
                {topic.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
