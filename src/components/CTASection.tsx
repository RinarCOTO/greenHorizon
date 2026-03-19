import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0a1f0f 0%, #0d3320 40%, #1a5c2a 70%, #0d3320 100%)" }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "rgba(1,140,129,0.8)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "rgba(168,227,4,0.7)" }}
      />

      {/* Dotted grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168,227,4,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }} />
          <span className="text-white/70 text-xs font-medium tracking-wide">Join the movement</span>
        </div>

        {/* Headline */}
        <h2 className="font-extrabold leading-tight text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          One action can protect<br />
          <span className="gradient-text">a thousand lives.</span>
        </h2>

        {/* Sub-copy */}
        <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          You don&apos;t need a title, a budget, or a perfect plan. You need a decision. Join thousands of students who are already taking their first step toward a greener future and making it count.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-block rounded-full px-10 py-4 font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
          >
            Sign up — it&apos;s free
          </Link>
          <Link
            href="/login"
            className="text-white/60 text-sm hover:text-white transition-colors duration-200"
          >
            Already have an account?{" "}
            <span className="underline underline-offset-2 font-medium">Log in</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
