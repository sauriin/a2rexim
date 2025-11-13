"use client";
import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-28 bg-emerald-900 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                    <p className="text-emerald-100 text-lg">
                        Have an export inquiry or want to partner with us?
                        Let’s build lasting trade relationships together.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <PhoneCall className="w-5 h-5 text-emerald-300" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-emerald-300" />
                            <span>info@a2rexim.com</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-xl p-8 shadow-lg text-slate-800 space-y-4"
                >
                    <input
                        placeholder="Your Name"
                        required
                        className="w-full p-3 border border-emerald-200 rounded-md focus:ring-2 focus:ring-emerald-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 border border-emerald-200 rounded-md focus:ring-2 focus:ring-emerald-500"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-3 border border-emerald-200 rounded-md h-28 focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
