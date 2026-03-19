import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    handle: "GreenHorizon",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@greenbeginswithone",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    handle: "@Green1Act",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
];

const creators = [
  "Cendana, Rishi-R.",
  "Dacumos, Marion Aiza D.",
  "Quedim, Andrea E.",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a1f0f" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10 sm:gap-12 lg:gap-16 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-white/8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/greenHorizonLogo.png"
                alt="Green Begins With One logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-white font-bold text-lg">GreenHorizon</span>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs mb-6">
              Small steps today. A safer, greener tomorrow.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/75 hover:text-white hover:bg-white/20 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 mb-7">
              <li>
                <a href="mailto:info@greenbeginswithone.org" className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span>📧</span> info@greenbeginswithone.org
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span>🌐</span> www.greenbeginswithone.org
                </a>
              </li>
            </ul>

            <h4 className="text-white text-sm font-semibold mb-4">Social</h4>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/70 text-sm hover:text-white transition-colors duration-200">
                    {s.label}: {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Created by */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <p className="text-white/50 text-xs mb-2">Created by</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {creators.map((name) => (
              <span key={name} className="text-white/70 text-xs">{name}</span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-white/50 text-xs">
          <span>© 2026 GreenHorizon. All rights reserved.</span>
          <span>One action. One planet. One future. 🌿</span>
        </div>
      </div>
    </footer>
  );
}
