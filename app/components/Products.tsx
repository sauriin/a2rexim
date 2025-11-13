"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const products = [
        { name: "Turmeric Powder", img: "/turmeric.jpg" },
        { name: "Cumin Seeds", img: "/cumin.jpg" },
        { name: "Red Chili", img: "/chili.avif" },
        { name: "Coriander Powder", img: "/corianderPowder.webp" },
        { name: "Cardamom", img: "/Cardamom.webp" },
        { name: "Black Pepper", img: "/blackPepper.jpg" },
        { name: "Cloves", img: "/clove.jpg" },
        { name: "Mustard Seeds", img: "/mustardSeeds.jpg" },
        { name: "Fenugreek Seeds", img: "/fenugreek.jpg" },
        { name: "Star Anise", img: "/starAnise.jpg" },
        { name: "Cinnamon Sticks", img: "/cinnamon.jpg" },
        { name: "Ginger Powder", img: "/gingerPowder.jpg" },
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount =
                direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="products"
            className="relative py-28 bg-linear-to-b from-emerald-50 to-white overflow-hidden"
        >
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <h2 className="text-4xl font-semibold text-emerald-800 mb-4">
                    Our Export Products
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Explore India’s finest range of export-grade spices — pure, aromatic, and sustainably sourced.
                </p>
            </div>

            {/* Product Row */}
            <div className="relative max-w-7xl mx-auto px-10">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-emerald-200 p-3 rounded-full shadow-md hover:bg-emerald-600 hover:text-white hover:scale-110 transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Scrollable Products */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-hidden scroll-smooth select-none"
                >
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="group bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden shrink-0 min-w-[260px] sm:min-w-[280px] md:min-w-[300px] transition-transform"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-lg sm:text-xl font-semibold text-emerald-700">
                                    {p.name}
                                </h3>
                                <p className="text-sm text-slate-500 mt-1">
                                    100% Natural • Premium Export Quality
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-emerald-200 p-3 rounded-full shadow-md hover:bg-emerald-600 hover:text-white hover:scale-110 transition"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Soft Edge Fades */}
                <div className="pointer-events-none absolute top-0 left-0 w-20 h-full bg-linear-to-r from-emerald-50 via-emerald-50/70 to-transparent z-0" />
                <div className="pointer-events-none absolute top-0 right-0 w-20 h-full bg-linear-to-l from-emerald-50 via-emerald-50/70 to-transparent z-0" />
            </div>
        </section>
    );
}
