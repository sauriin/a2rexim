"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const validate = () => {
        let valid = true;
        const newErrors: any = { name: "", email: "", message: "" };

        if (!form.name.trim()) {
            newErrors.name = "Name is required.";
            valid = false;
        } else if (form.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
            valid = false;
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
            valid = false;
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required.";
            valid = false;
        } else if (form.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters.";
            valid = false;
        } else if (form.message.trim().length > 300) {
            newErrors.message = "Message cannot exceed 300 characters.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-[#F8FFF9] text-[#123A2B] font-sans">
            <Navbar />

            {/* HEADER (same style as About page) */}
            <div
                className="w-full py-28 text-center"
                style={{
                    background: "linear-gradient(to bottom, #E8FBEA, #F4FFF5)",
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-green-900 drop-shadow-sm">
                    Contact Us
                </h1>

                <p className="text-green-800 mt-4 text-lg max-w-3xl mx-auto">
                    We’re here to help you. Reach out anytime!
                </p>
            </div>

            {/* MAP + FORM */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 md:px-10 pb-20 mt-14">
                {/* MAP */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl overflow-hidden shadow-md border border-green-100 h-[420px]"
                >
                    <iframe
                        title="Vadodara map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.425353945811!2d73.17121957503035!3d22.299405779689763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8a5e7a2a8df%3A0x8e75f1ef1a3040cc!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000001111!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>

                {/* FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-green-100 shadow-md p-8 rounded-xl"
                >
                    <h2 className="text-2xl font-bold text-green-800 mb-6">
                        Send us a message
                    </h2>

                    {/* NAME */}
                    <div className="mb-5">
                        <label className="text-green-800 font-medium flex items-center gap-2">
                            <User /> Name
                        </label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            className="w-full mt-2 p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div className="mb-5">
                        <label className="text-green-800 font-medium flex items-center gap-2">
                            <Mail /> Email
                        </label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            className="w-full mt-2 p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* MESSAGE */}
                    <div className="mb-5">
                        <label className="text-green-800 font-medium flex items-center gap-2">
                            <MessageSquare /> Message
                        </label>

                        <textarea
                            value={form.message}
                            onChange={(e) => {
                                if (e.target.value.length <= 300)
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    });
                            }}
                            className={`w-full mt-2 p-3 border rounded-lg h-32 focus:ring-2 focus:ring-green-500 ${errors.message
                                    ? "border-red-500"
                                    : "border-green-200"
                                }`}
                            placeholder="Write your message..."
                        />

                        <p
                            className={`text-sm mt-1 ${form.message.length > 280
                                    ? "text-red-600 font-semibold"
                                    : "text-green-700"
                                }`}
                        >
                            {form.message.length} / 300 characters
                        </p>

                        {errors.message && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full mt-4 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition flex items-center justify-center gap-2"
                    >
                        <Send className="w-5 h-5" /> Send Message
                    </button>
                </motion.form>
            </div>

            <Footer />
        </div>
    );
}
