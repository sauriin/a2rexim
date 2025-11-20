"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Sprout,
  PackageCheck,
  ShieldCheck,
  Ship,
  Lightbulb
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <h2 className="text-3xl font-semibold text-green-800 text-center">
          Our Services
        </h2>
        <p className="text-green-700 text-center mt-2 mb-10">
          End-to-end export solutions ensuring freshness, safety and global compliance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* EXPORT DOCUMENTATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F8FFF9] p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg hover:shadow-green-100 transition"
          >
            <FileCheck className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Export Documentation</h3>
            <p className="mt-2 text-green-700 text-sm">
              Complete APEDA & FSSAI-compliant documentation for smooth global shipments.
            </p>
          </motion.div>

          {/* FARM SOURCING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F8FFF9] p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg hover:shadow-green-100 transition"
          >
            <Sprout className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Farm Sourcing</h3>
            <p className="mt-2 text-green-700 text-sm">
              Direct sourcing from verified farms ensuring traceability & premium quality.
            </p>
          </motion.div>

          {/* CUSTOM PACKAGING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F8FFF9] p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg hover:shadow-green-100 transition"
          >
            <PackageCheck className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Custom Packaging</h3>
            <p className="mt-2 text-green-700 text-sm">
              ISO-grade, customizable export packaging tailored to client markets.
            </p>
          </motion.div>

          {/* QUALITY INSPECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F8FFF9] p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg hover:shadow-green-100 transition"
          >
            <ShieldCheck className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Quality Inspection</h3>
            <p className="mt-2 text-green-700 text-sm">
              Lot-wise quality checks and lab testing to meet global export standards.
            </p>
          </motion.div>

          {/* LOGISTICS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F8FFF9] p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg hover:shadow-green-100 transition"
          >
            <Ship className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Logistics & Shipping</h3>
            <p className="mt-2 text-green-700 text-sm">
              Cold-chain, air freight, and sea freight logistics with end-to-end monitoring.
            </p>
          </motion.div>

          {/* CONSULTATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F8FFF9] p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg hover:shadow-green-100 transition"
          >
            <Lightbulb className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Export Consultation</h3>
            <p className="mt-2 text-green-700 text-sm">
              Expert guidance for startups and new exporters entering global markets.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
