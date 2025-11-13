"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

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
              className="object-cover w-full h-[320px]"
            />
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="py-20 bg-[#F8FFF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <h2 className="text-3xl font-semibold text-green-800 text-center">
            Product Categories
          </h2>
          <p className="text-green-700 text-center mt-2 mb-10">
            Our key export categories offering freshness, purity and sustainable solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* VEGETABLES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-green-100 cursor-pointer hover:shadow-lg hover:shadow-green-100 transition"
            >
              <img
                src="vegetables.webp"
                alt="Vegetables"
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-green-800 mt-4">Vegetables</h3>
              <p className="mt-2 text-green-700 text-sm">
                Fresh, farm-grown vegetables sourced directly from partnered farms.
              </p>
            </motion.div>

            {/* FRUITS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-green-100 cursor-pointer hover:shadow-lg hover:shadow-green-100 transition"
            >
              <img
                src="fruits.jpg"
                alt="Fruits"
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-green-800 mt-4">Fruits</h3>
              <p className="mt-2 text-green-700 text-sm">
                Naturally ripened tropical fruits with rich flavor and freshness.
              </p>
            </motion.div>

            {/* WHOLE SPICES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-green-100 cursor-pointer hover:shadow-lg hover:shadow-green-100 transition"
            >
              <img
                src="spice.jpg"
                alt="Whole Spices"
                className="w-full h-32 object-cover rounded-md scale-110"
              />
              <h3 className="text-xl font-semibold text-green-800 mt-4">Whole Spices</h3>
              <p className="mt-2 text-green-700 text-sm">
                Cleaned, graded and aromatic spices sourced from trusted growers.
              </p>
            </motion.div>

            {/* ECO FRIENDLY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-green-100 cursor-pointer hover:shadow-lg hover:shadow-green-100 transition"
            >
              <img
                src="eco.avif"
                alt="Eco-Friendly Products"
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-green-800 mt-4">Eco-Friendly Products</h3>
              <p className="mt-2 text-green-700 text-sm">
                Sustainable biodegradable packaging solutions for global markets.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer/>
    </div>
  );
}
