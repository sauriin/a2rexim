"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `hover:text-green-900 transition ${pathname === path || pathname.startsWith(path + "/")
      ? "font-bold underline underline-offset-4"
      : ""
    }`;

  return (
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

        {/* NAV LINKS */}
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

          <a
            href="/getQuote"
            className="ml-4 px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800 transition"
          >
            Get Quote
          </a>
        </nav>

        <div className="md:hidden text-green-700">Menu</div>
      </div>
    </motion.header>
  );
}
