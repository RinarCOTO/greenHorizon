const actions = [
  {
    icon: "♻️",
    title: "Reduce Waste",
    body: "Swap single-use for reusable. Bring your own bag, bottle, and container wherever you go. It's a simple shift that keeps thousands of pieces of plastic out of landfills and oceans every year — and it starts with you.",
    bg: "bg-[#f0f7f0]",
  },
  {
    icon: "💡",
    title: "Save Energy",
    body: "Turn off the lights when you leave a room. Unplug chargers and devices you're not using. These tiny habits reduce your carbon footprint and add up to real energy savings across entire households and communities.",
    bg: "bg-[#fff8ed]",
  },
  {
    icon: "🌳",
    title: "Plant Trees",
    body: "Start a small garden at home or sign up for a tree-planting drive near you. Trees clean the air, cool the earth, and restore biodiversity — and planting one is one of the most hopeful things a person can do.",
    bg: "bg-[#f0f7f0]",
  },
  {
    icon: "📣",
    title: "Spread Awareness",
    body: "Talk about it. Share what you know. Post an eco-tip, start a conversation, inspire a friend. Awareness is contagious — and the more people who know, the more people who act.",
    bg: "bg-[#fff8ed]",
  },
];

export default function ActionsSection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#269f62" }}>Action Center</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(168,227,4,1), rgba(1,140,129,1))" }} />
          </div>
          <h2 className="font-extrabold text-[clamp(2rem,3.5vw,3rem)] text-gray-900 leading-tight mb-5">
            What Can You Do Today?
          </h2>
          <p className="text-gray-500 leading-relaxed">
            You don&apos;t need a science degree or a big platform to make a difference. These four everyday habits are small enough to start today — and powerful enough to matter for decades to come.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => (
            <div
              key={action.title}
              className={`${action.bg} text-center px-6 py-10 rounded-3xl border-2 border-transparent hover:-translate-y-1.5 hover:border-green-200 hover:shadow-[0_25px_60px_rgba(38,159,98,0.12)] transition-all duration-300`}
            >
              <span className="text-[3rem] block mb-4" role="img" aria-hidden="true">{action.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{action.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{action.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
