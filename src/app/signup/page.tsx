"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    router.push("/");
  }

  return (
    <div className="min-h-screen flex">

      {/* Left panel — branding */}
      <div
        className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1f0f 0%, #0d3320 50%, #1a5c2a 100%)" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(168,227,4,0.6) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: "rgba(1,140,129,0.8)" }} />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ background: "rgba(168,227,4,0.7)" }} />

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3 z-10">
          <Image src="/images/greenHorizonLogo.png" alt="GreenHorizon" width={40} height={40} className="object-contain" />
          <span className="text-white font-bold text-lg">GreenHorizon</span>
        </Link>

        {/* Quote */}
        <div className="relative z-10">
          <p className="text-white font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Green begins<br />with <span className="gradient-text">one.</span><br />That one is you.
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Join thousands of young people taking small steps toward a greener future.
          </p>
        </div>

        {/* Bottom tagline */}
        <p className="relative z-10 text-white/30 text-xs">
          © 2026 GreenHorizon. All rights reserved.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col justify-center items-center px-5 sm:px-10 py-16 bg-white">

        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-10 lg:hidden">
          <Image src="/images/greenHorizonLogo.png" alt="GreenHorizon" width={36} height={36} className="object-contain" />
          <span className="font-bold text-gray-900">GreenHorizon</span>
        </Link>

        <div className="w-full max-w-md">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg, rgba(1,140,129,0.15), rgba(168,227,4,0.15))" }}>
                🌱
              </div>
              <h2 className="font-extrabold text-gray-900 text-2xl mb-2">You&apos;re in!</h2>
              <p className="text-gray-500 text-sm mb-6">Welcome to GreenHorizon. Let&apos;s make a difference together.</p>
              <Link href="/" className="btn-primary text-sm px-8 py-3">Go to Home</Link>
            </div>
          ) : (
            <>
              <h1 className="font-extrabold text-gray-900 text-3xl mb-1">Create account</h1>
              <p className="text-gray-400 text-sm mb-8">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold hover:underline" style={{ color: "#269f62" }}>Log in</Link>
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" suppressHydrationWarning>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={16} strokeWidth={1.8} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={16} strokeWidth={1.8} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Password</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={16} strokeWidth={1.8} />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Confirm password */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Confirm Password</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={16} strokeWidth={1.8} />
                    </span>
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirm"
                      value={form.confirm}
                      onChange={handleChange}
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 mt-1"
                  style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
                >
                  Create Account
                </button>

                <p className="text-center text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline hover:text-gray-600">Terms</Link>{" "}
                  and{" "}
                  <Link href="#" className="underline hover:text-gray-600">Privacy Policy</Link>.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
