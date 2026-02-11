"use client";

import Link from "next/link";

const NAV_BG = "#0A0C10";
const CYAN = "#00D8FF";

export function Navbar() {
  return (
    <header
      style={{ backgroundColor: NAV_BG }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 backdrop-blur"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          itenx
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            href="#contact"
            style={{ backgroundColor: CYAN, color: NAV_BG }}
            className="rounded-full px-4 py-1.5 text-xs font-medium shadow-sm hover:opacity-90 transition"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
