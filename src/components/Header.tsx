"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between py-3.5">

        {/* Logo + Nav grouped together */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/greenHorizonLogo.png"
              alt="GreenHorizon"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-white font-bold text-base tracking-tight hidden sm:block">GreenHorizon</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-white/85 text-sm font-medium hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <span
                className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(1,140,129,1), rgba(168,227,4,1))" }}
              />
            </Link>
          ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200">
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
          >
            Sign up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-6 flex flex-col gap-1 border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-white/85 text-sm font-medium hover:text-white transition-colors border-b border-white/8"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-sm font-medium text-white/85 border border-white/20 rounded-full hover:text-white hover:border-white/40 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center rounded-full py-2.5 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(90deg, rgba(1,140,129,1) 0%, rgba(168,227,4,1) 75%, rgba(200,240,20,1) 100%)" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
