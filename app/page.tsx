"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export default function HeroNavbar() {
  const topRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={topRef} className="min-h-screen text-[#123A2B] font-sans">

      {/* NAVBAR */}
      <motion.header
        className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-green-100"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-green-100 border border-green-200">
              <Globe2 className="w-5 h-5 text-green-700" />
            </div>
            <div className="text-lg font-semibold text-green-800">A2R EXIM</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-green-700">
            <a href="#about" className="hover:text-green-900 transition">About</a>
            <a href="#products" className="hover:text-green-900 transition">Products</a>
            <a href="#services" className="hover:text-green-900 transition">Services</a>
            <a href="#contact" className="hover:text-green-900 transition">Contact</a>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800 transition"
            >
              Get Quote
            </a>
          </nav>

          <div className="md:hidden text-green-700">Menu</div>
        </div>
      </motion.header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-0">
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-farm.png"
            alt="Farmland and agriculture"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.65) contrast(0.95)" }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-green-200/10 to-white/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm">
              Bringing India's Finest Agricultural Produce to the World
            </h1>

            <p className="mt-4 text-lg text-green-50">
              Fresh fruits, premium vegetables, whole spices and eco-friendly
              solutions — sustainably sourced, export-ready and globally compliant.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-block px-5 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              >
                View Products
              </a>

              <a
                href="#contact"
                className="inline-block px-5 py-3 border border-white/70 text-white rounded-md hover:bg-white/10 transition"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
}
