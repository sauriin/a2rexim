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
                "Cumin",
                "Coriander",
                "Chilli Flakes",
                "Black Pepper",
                "Clove Seed",
                "Cardamom",
                "Black Cumin",
                "Bay Leaf",
                "Ajwain",
                "Cinnamon",
                "Mace",
                "Star Anise",
                "Imli (Tamarind)",
                "Nutmeg",
                "Fennel Seeds",
                "Methi Seeds",
            ],
            img: "/spice.avif",
        },

        {
            slug: "vegetables",
            title: "Vegetables",
            desc: "Fresh, farm-grown vegetables exported with strict quality checks.",
            items: [
                "Onion",
                "Potato",
                "Bell Pepper",
                "Drumstick",
                "Green Chillies",
                "Lemon",
                "Mushroom",
            ],
            img: "/vegetables.webp",
        },

        {
            slug: "fruits",
            title: "Fruits",
            desc: "Naturally ripened tropical fruits packed with flavor and freshness.",
            items: [
                "Banana",
                "Coconut",
                "Grape",
                "Mango",
                "Apple",
                "Pomegranate",
                "Orange",
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

            <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20">

                {/* PAGE TITLE */}
                <h1 className="text-4xl font-bold text-green-800 text-center">
                    Our Product Range
                </h1>
                <p className="text-green-700 text-center mt-3 mb-12">
                    Explore our export-grade agricultural produce and eco-friendly products.
                </p>

                {/* CATEGORY SECTIONS */}
                <div className="grid md:grid-cols-2 gap-10">
                    {categories.map((cat, i) => (
                        <Link key={i} href={`/products/${cat.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-lg shadow-md border border-green-100 p-6 hover:shadow-lg cursor-pointer"
                            >
                                {/* IMAGE */}
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={cat.img}
                                        alt={cat.title}
                                        className="w-full h-40 object-cover scale-110 transition-all duration-500"
                                    />
                                </div>

                                {/* TITLE */}
                                <h2 className="text-2xl font-semibold text-green-800 mt-4">
                                    {cat.title}
                                </h2>

                                <p className="text-green-700 text-sm mt-1">{cat.desc}</p>

                                {/* ITEMS */}
                                <p className="text-green-800 text-sm mt-3">
                                    <span className="font-semibold">Includes:</span>{" "}
                                    {cat.items.join(", ")}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
