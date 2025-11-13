"use client";

import { motion } from "framer-motion";
import { Globe2, PhoneCall, ShieldCheck, Leaf, Award, Ship } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Globe2,
            title: "Global Reach",
            text: "Exporting to 25+ countries with trusted logistics partners worldwide.",
        },
        {
            icon: PhoneCall,
            title: "Customer Focused",
            text: "Dedicated export team offering fast, personalized service.",
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance",
            text: "Every product is lab-tested and meets international standards.",
        },
        {
            icon: Leaf,
            title: "Sustainable Sourcing",
            text: "Partnering with farmers for ethical, eco-friendly cultivation.",
        },
        {
            icon: Award,
            title: "Certified Exports",
            text: "FSSAI, APEDA & ISO certified processes for premium export quality.",
        },
        {
            icon: Ship,
            title: "Efficient Logistics",
            text: "Seamless documentation & fast global delivery.",
        },
    ];

    return (
        <section id="services" className="py-24 bg-emerald-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-emerald-800 mb-10">
                    Why Choose <span className="text-emerald-600">A2REXIM Exports</span>
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-emerald-100 shadow-md hover:shadow-xl transition"
                        >
                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-4">
                                <service.icon className="w-7 h-7 text-emerald-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{service.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
