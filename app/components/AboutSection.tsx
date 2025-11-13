"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <h2 className="text-4xl font-bold text-emerald-800">
            About <span className="text-emerald-600">A2REXIM</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are a trusted name in the export of premium Indian spices across 25+ countries.
            Our mission is to deliver purity, aroma, and sustainability with every shipment.
          </p>
          <a
            href="#contact"
            className="inline-block px-5 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition shadow"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img src="/bannerImg.png" alt="About A2REXIM" className="object-cover w-full h-[350px]" />
        </motion.div>
      </div>
    </section>
  );
}
