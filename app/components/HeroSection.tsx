"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-0">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/hero-farm.png"
                    alt="Farmland and agriculture"
                    className="w-full h-full object-cover object-center"
                    style={{ filter: "brightness(0.65) contrast(0.95)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-green-200/10 to-white/40" />
            </div>

            {/* Text Content */}
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

                        <Link href="/products" className="inline-block px-5 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
                            View Products
                        </Link>
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
    );
}