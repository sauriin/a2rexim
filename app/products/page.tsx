"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsPage() {
    const categories = [
        {
            slug: "whole-spices",
            title: "Whole Spices",
            desc: "Premium export-quality whole spices sourced from trusted growers.",
            items: [
                "Cumin", "Coriander", "Chilli Flakes", "Black Pepper", "Clove Seed",
                "Cardamom", "Black Cumin", "Bay Leaf", "Ajwain", "Cinnamon",
                "Mace", "Star Anise", "Imli (Tamarind)", "Nutmeg", "Fennel Seeds",
                "Methi Seeds",
            ],
            img: "/spice.avif",
        },
        {
            slug: "vegetables",
            title: "Vegetables",
            desc: "Fresh, farm-grown vegetables exported with strict quality checks.",
            items: [
                "Onion", "Potato", "Bell Pepper", "Drumstick",
                "Green Chillies", "Lemon", "Mushroom",
            ],
            img: "/vegetables.webp",
        },
        {
            slug: "fruits",
            title: "Fruits",
            desc: "Naturally ripened tropical fruits packed with flavor and freshness.",
            items: [
                "Banana", "Coconut", "Grape", "Mango",
                "Apple", "Pomegranate", "Orange",
            ],
            img: "/fruits.jpg",
        },
        {
            slug: "eco-friendly-products",
            title: "Eco-Friendly Products",
            desc: "Sustainable biodegradable plates, cups and disposable products.",
            items: ["Biodegradable Plates", "Biodegradable Cups"],
            img: "/eco.avif",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8FFF9] text-[#123A2B] font-sans">
            <Navbar />

            {/* HEADER (same gradient as About page) */}
            <div
                className="w-full py-28 text-center"
                style={{
                    background: "linear-gradient(to bottom, #E8FBEA, #F4FFF5)"
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-green-900 drop-shadow-sm">
                    Our Product Range
                </h1>

                <p className="text-green-800 mt-4 text-lg max-w-3xl mx-auto">
                    Explore our export-grade agricultural produce and eco-friendly products.
                </p>
            </div>

            {/* PAGE CONTENT */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 mt-14">
                <div className="grid md:grid-cols-2 gap-10">
                    {categories.map((cat) => (
                        <Link key={cat.slug} href={`/products/${cat.slug}`} className="block">
                            <motion.article
                                role="listitem"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-lg shadow-md border border-green-100 p-6 hover:shadow-lg cursor-pointer flex flex-col h-full min-h-[380px]"
                            >
                                {/* IMAGE */}
                                <div className="rounded-md overflow-hidden h-40">
                                    <img
                                        src={cat.img}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-all duration-300"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-col mt-4 grow">
                                    <h2 className="text-2xl font-semibold text-green-800">
                                        {cat.title}
                                    </h2>

                                    <p className="text-green-700 text-sm mt-2">
                                        {cat.desc}
                                    </p>

                                    <p className="text-green-800 text-sm mt-4">
                                        <span className="font-semibold">Includes:</span>{" "}
                                        {cat.items.join(", ")}
                                    </p>

                                    {/* CTA Badge */}
                                    <div className="mt-auto pt-5">
                                        <span className="inline-block px-4 py-2 rounded-md bg-green-50 text-green-700 text-sm border border-green-100">
                                            View {cat.title}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
