"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden min-h-[90vh]">
            <Image
                src="/BannerImg.jpeg"
                alt="Indian spices background"
                fill
                priority
                className="object-cover object-center"
                style={{ filter: "brightness(0.9) saturate(1.1)" }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-emerald-950/70 via-emerald-800/50 to-emerald-950/80" />
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg"
                >
                    Bringing India’s <span className="text-emerald-300">Flavors</span> to the World
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed"
                >
                    Exporting authentic Indian spices with sustainable sourcing and uncompromising quality.
                </motion.p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="#products"
                        className="px-8 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 shadow-lg transition-transform hover:scale-105"
                    >
                        Explore Products
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/70 rounded-md bg-white/20 hover:bg-white/30 text-white transition-transform hover:scale-105"
                    >
                        Contact Sales
                    </a>
                </div>
            </div>
        </section>
    );
}
