"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  Sprout,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Ship,
  Lightbulb
} from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Link from "next/link";
import CategoriesSection from "./components/CategoriesSection";
import ServicesSection from "./components/ServicesSections";


export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={topRef} className="min-h-screen text-[#123A2B] font-sans">

      <Navbar />
      <HeroSection />
      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-green-800">
              About A2R EXIM
            </h2>

            <p className="mt-4 text-green-700 leading-relaxed">
              A2R EXIM is an agricultural export company specializing in fresh produce,
              premium whole spices, value-added spice products, and eco-friendly
              packaging solutions. We partner directly with farmers to ensure
              traceability, quality and ethical sourcing.
            </p>

            <ul className="mt-5 space-y-2 text-green-700">
              <li>• FSSAI & APEDA compliant export documentation</li>
              <li>• Cold-chain handling & ISO-grade packaging</li>
              <li>• Traceable single-origin lots & farm partnerships</li>
            </ul>

            {/* Read More Button */}
            <Link
              href="/about"
              className="inline-block mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            >
              Read More
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-md border border-green-100"
          >
            <img
              src="/about-farm.jpg"
              alt="Farm partnerships"
              className="object-cover w-full h-80"
            />
          </motion.div>
        </div>
      </section>
      <CategoriesSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
