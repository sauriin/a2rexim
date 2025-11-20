"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkStyle = (path: string) =>
    `block py-2 md:py-0 hover:text-green-900 transition ${pathname === path || pathname.startsWith(path + "/")
      ? "font-bold underline underline-offset-4"
      : ""
    }`;

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-green-100"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-green-100 border border-green-200">
              <Globe2 className="w-5 h-5 text-green-700" />
            </div>
            <div className="text-lg font-semibold text-green-800">
              A2R EXIM
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-green-700">
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>

            <Link href="/products" className={linkStyle("/products")}>
              Products
            </Link>

            <Link href="/about" className={linkStyle("/about")}>
              About
            </Link>

            <Link href="/contact" className={linkStyle("/contact")}>
              Contact
            </Link>

            <Link
              href="/getQuote"
              className="ml-4 px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800 transition"
            >
              Get Quote
            </Link>
          </nav>

          {/* MOBILE ICON */}
          <button
            className="md:hidden text-green-700"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE MENU PANEL */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 p-6 flex flex-col text-green-800"
      >
        {/* Close Button */}
        <button
          className="ml-auto mb-6"
          onClick={() => setMobileOpen(false)}
        >
          <X size={28} className="text-green-700" />
        </button>

        {/* Mobile Links */}
        <Link href="/" className={linkStyle("/")} onClick={() => setMobileOpen(false)}>
          Home
        </Link>

        <Link href="/products" className={linkStyle("/products")} onClick={() => setMobileOpen(false)}>
          Products
        </Link>

        <Link href="/about" className={linkStyle("/about")} onClick={() => setMobileOpen(false)}>
          About
        </Link>

        <Link href="/contact" className={linkStyle("/contact")} onClick={() => setMobileOpen(false)}>
          Contact
        </Link>

        <Link
          href="/getQuote"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-3 py-1.5 text-sm bg-green-700 text-white rounded-md hover:bg-green-800 transition w-fit"
        >
          Get Quote
        </Link>
      </motion.div>
    </>
  );
}
