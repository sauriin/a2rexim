"use client";
import { Globe2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 top-0 bg-white/70 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 h-16">
        <div className="flex items-center gap-2 text-xl font-bold text-emerald-700 tracking-wide">
          <Globe2 className="w-5 h-5" /> A2REXIM EXPORTS
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <a href="#about" className="hover:text-emerald-700 transition">
            About
          </a>
          <a href="#products" className="hover:text-emerald-700 transition">
            Products
          </a>
          <a href="#contact" className="hover:text-emerald-700 transition">
            Contact
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-sm"
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
