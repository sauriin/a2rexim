"use client";

import { motion } from "framer-motion";
import {
    Leaf,
    Users,
    CheckCircle2,
    Target,
    Eye,
    Globe,
    Truck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F9FFFB] text-[#123A2B]">

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative py-32 bg-linear-to-br from-green-50 to-green-100 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('/leaf-pattern.png')] bg-cover"></div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-extrabold text-green-900 drop-shadow-lg"
                    >
                        About A2R EXIM
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 text-lg max-w-2xl mx-auto text-green-800"
                    >
                        A global leader in sustainable agricultural exports — delivering
                        freshness, purity, and consistency to international markets.
                    </motion.p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold text-green-900">Who We Are</h2>

                        <p className="mt-5 text-green-700 text-lg leading-relaxed">
                            A2R EXIM partners directly with farmers, bringing premium
                            agricultural products — vegetables, fruits, spices, and sustainable
                            packaging — to global markets.
                        </p>

                        <p className="mt-4 text-green-700 text-lg leading-relaxed">
                            Through ethical sourcing, traceability, and high-grade processing
                            systems, we ensure that every shipment meets international standards.
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            <Globe className="w-10 h-10 text-green-800" />
                            <span className="text-green-800 text-lg font-medium">
                                Exporting to multiple countries with global trust
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl shadow-xl overflow-hidden border border-green-200"
                    >
                        <img
                            src="/about-farm.jpg"
                            className="w-full h-[380px] object-cover"
                            alt="Farm partnerships"
                        />
                    </motion.div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-24 bg-[#F3FFF6]">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-semibold text-green-900 text-center">
                        Our Mission & Vision
                    </h2>

                    <p className="text-green-700 text-center max-w-2xl mx-auto mt-3 mb-12">
                        The foundation of our purpose and long-term direction.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-lg border border-green-100"
                        >
                            <Target className="w-14 h-14 text-green-800" />
                            <h3 className="text-3xl text-green-900 mt-4 font-semibold">Our Mission</h3>
                            <p className="mt-3 text-green-700 text-lg leading-relaxed">
                                To deliver high-quality agricultural products with transparency,
                                sustainability, and ethical trade — while uplifting farmer communities.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-lg border border-green-100"
                        >
                            <Eye className="w-14 h-14 text-green-800" />
                            <h3 className="text-3xl text-green-900 mt-4 font-semibold">Our Vision</h3>
                            <p className="mt-3 text-green-700 text-lg leading-relaxed">
                                To become a global benchmark brand for quality agricultural exports,
                                sustainability, and farmer empowerment.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-semibold text-green-900 text-center">
                        Our Core Values
                    </h2>

                    <p className="text-green-700 text-center max-w-2xl mx-auto mt-3 mb-12">
                        Built on trust, responsibility, and uncompromised standards.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-md border border-green-100"
                        >
                            <Leaf className="w-12 h-12 text-green-800" />
                            <h3 className="text-2xl text-green-900 mt-4 font-semibold">Sustainability</h3>
                            <p className="text-green-700 mt-2 text-lg leading-relaxed">
                                Eco-friendly farming, zero-waste packaging, and long-term environmental focus.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-md border border-green-100"
                        >
                            <Users className="w-12 h-12 text-green-800" />
                            <h3 className="text-2xl text-green-900 mt-4 font-semibold">
                                Farmer Partnerships
                            </h3>
                            <p className="text-green-700 mt-2 text-lg leading-relaxed">
                                Direct relationships ensuring fair pricing, traceability, and mutual growth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-md border border-green-100"
                        >
                            <CheckCircle2 className="w-12 h-12 text-green-800" />
                            <h3 className="text-2xl text-green-900 mt-4 font-semibold">
                                Quality Assurance
                            </h3>
                            <p className="text-green-700 mt-2 text-lg leading-relaxed">
                                Rigorous cleaning, grading, and export certification for every batch.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* EXPORT LOGISTICS */}
            <section className="py-24 bg-[#F3FFF6]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        src="/export.jpg"
                        className="rounded-2xl shadow-xl w-full h-[360px] object-cover"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold text-green-900">
                            Global Export & Logistics
                        </h2>

                        <p className="mt-4 text-green-700 text-lg leading-relaxed">
                            A robust logistics ecosystem ensures smooth international delivery —
                            from cold-chain transport to customs, fumigation, packaging and
                            documentation.
                        </p>

                        <ul className="mt-6 space-y-3 text-lg text-green-800">
                            <li>• APEDA & FSSAI compliant</li>
                            <li>• Refrigerated & controlled-atmosphere logistics</li>
                            <li>• ISO-grade packaging standards</li>
                            <li>• International export presence</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
            {/* FOOTER */}
            <Footer />
        </div>
    );
}