"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Phone,
    Globe,
    MessageSquare,
    Send,
    Plus,
    Trash2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* PRODUCT CATEGORIES */
const productCategories: Record<string, string[]> = {
    "Whole Spices": [
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
    Vegetables: [
        "Onion",
        "Potato",
        "Bell Pepper",
        "Drumstick",
        "Green Chillies",
        "Lemon",
        "Mushroom",
    ],
    Fruits: ["Banana", "Coconut", "Grape", "Mango", "Apple", "Pomegranate", "Orange"],
    "Eco-Friendly Products": ["Biodegradable Plates", "Biodegradable Cups"],
};

export default function GetQuotePage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        pincode: "",
        message: "",
    });

    const [products, setProducts] = useState<
        { category: string; product: string; quantity: string }[]
    >([{ category: "", product: "", quantity: "" }]);

    const [errors, setErrors] = useState<any>({});

    /* ADD PRODUCT ROW */
    const addRow = () => {
        setProducts([...products, { category: "", product: "", quantity: "" }]);
    };

    /* REMOVE PRODUCT ROW */
    const removeRow = (index: number) => {
        if (products.length === 1) return;
        setProducts(products.filter((_, i) => i !== index));
    };

    /* VALIDATE FORM */
    const validate = () => {
        const newErrors: any = {};
        let valid = true;

        // NAME
        if (!form.name.trim()) {
            newErrors.name = "Name is required.";
            valid = false;
        }

        // EMAIL
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Valid email is required.";
            valid = false;
        }

        // PHONE
        if (!/^[0-9]{8,15}$/.test(form.phone)) {
            newErrors.phone = "Enter a valid phone number.";
            valid = false;
        }

        // COUNTRY
        if (!form.country.trim()) {
            newErrors.country = "Country is required.";
            valid = false;
        }

        // ADDRESS
        if (!form.address.trim()) {
            newErrors.address = "Address is required.";
            valid = false;
        }

        // PINCODE
        if (!/^[0-9]{6}$/.test(form.pincode)) {
            newErrors.pincode = "Enter valid 6-digit pincode.";
            valid = false;
        }

        // MESSAGE
        if (form.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters.";
            valid = false;
        }
        if (form.message.trim().length > 300) {
            newErrors.message = "Message cannot exceed 300 characters.";
            valid = false;
        }

        // PRODUCT ROWS
        products.forEach((p, index) => {
            if (!p.category) {
                newErrors[`cat_${index}`] = "Select category";
                valid = false;
            }
            if (!p.product) {
                newErrors[`prod_${index}`] = "Select product";
                valid = false;
            }
            if (!p.quantity || parseInt(p.quantity) <= 0) {
                newErrors[`qty_${index}`] = "Enter valid quantity";
                valid = false;
            }
        });

        setErrors(newErrors);
        return valid;
    };

    /* SUBMIT HANDLER */
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!validate()) return;

        alert("Your quote request has been submitted!");

        setForm({
            name: "",
            email: "",
            phone: "",
            country: "",
            address: "",
            pincode: "",
            message: "",
        });

        setProducts([{ category: "", product: "", quantity: "" }]);
    };

    return (
        <div className="min-h-screen bg-[#F8FFF9] text-[#123A2B]">
            <Navbar />

            {/* PAGE HEADER */}
            <div className="pt-32 pb-10 text-center">
                <h1 className="text-4xl font-bold text-green-800">Request a Quote</h1>
                <p className="text-green-700 mt-3">Order multiple products easily</p>
            </div>

            {/* FORM CONTAINER */}
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg border border-green-100 rounded-xl mb-20">
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* CONTACT INFO */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* NAME */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800">
                                <User /> Name
                            </label>
                            <input
                                value={form.name}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        name: e.target.value.replace(/[^a-zA-Z\s]/g, ""),
                                    })
                                }
                                className={`w-full p-3 mt-2 border rounded-lg ${errors.name ? "border-red-500" : "border-green-200"
                                    }`}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800">
                                <Mail /> Email
                            </label>
                            <input
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className={`w-full p-3 mt-2 border rounded-lg ${errors.email ? "border-red-500" : "border-green-200"
                                    }`}
                                placeholder="Your Email"
                            />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                        </div>

                        {/* PHONE */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800">
                                <Phone /> Phone
                            </label>
                            <input
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        phone: e.target.value.replace(/[^0-9]/g, ""),
                                    })
                                }
                                className={`w-full p-3 mt-2 border rounded-lg ${errors.phone ? "border-red-500" : "border-green-200"
                                    }`}
                                placeholder="Phone Number"
                            />
                            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                        </div>

                        {/* COUNTRY */}
                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800">
                                <Globe /> Destination Country
                            </label>
                            <input
                                value={form.country}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        country: e.target.value.replace(/[^a-zA-Z\s]/g, ""),
                                    })
                                }
                                className={`w-full p-3 mt-2 border rounded-lg ${errors.country ? "border-red-500" : "border-green-200"
                                    }`}
                                placeholder="UAE, UK, Germany"
                            />
                            {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
                        </div>

                        {/* ADDRESS */}
                        <div className="md:col-span-2">
                            <label className="font-medium text-green-800">Address</label>
                            <input
                                value={form.address}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                className={`w-full p-3 mt-2 border rounded-lg ${errors.address ? "border-red-500" : "border-green-200"
                                    }`}
                                placeholder="Full Address"
                            />
                            {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
                        </div>

                        {/* PINCODE */}
                        <div>
                            <label className="font-medium text-green-800">Pincode</label>
                            <input
                                maxLength={6}
                                value={form.pincode}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        pincode: e.target.value.replace(/[^0-9]/g, ""),
                                    })
                                }
                                className={`w-full p-3 mt-2 border rounded-lg ${errors.pincode ? "border-red-500" : "border-green-200"
                                    }`}
                                placeholder="6-digit pincode"
                            />
                            {errors.pincode && <p className="text-red-600 text-sm">{errors.pincode}</p>}
                        </div>
                    </div>

                    {/* PRODUCT ROWS */}
                    <h2 className="text-2xl font-bold text-green-800 mt-10">Products to Order</h2>

                    {products.map((row, index) => (
                        <div
                            key={index}
                            className="p-4 mt-4 bg-[#F8FFF9] border border-green-100 rounded-lg"
                        >
                            <div className="grid md:grid-cols-3 gap-4">
                                {/* CATEGORY */}
                                <div>
                                    <label className="font-medium text-green-800">Category</label>
                                    <select
                                        value={row.category}
                                        onChange={(e) => {
                                            const updated = [...products];
                                            updated[index].category = e.target.value;
                                            updated[index].product = "";
                                            setProducts(updated);
                                        }}
                                        className={`w-full p-3 mt-2 border rounded-lg ${errors[`cat_${index}`] ? "border-red-500" : "border-green-200"
                                            }`}
                                    >
                                        <option value="">Select Category</option>
                                        {Object.keys(productCategories).map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>

                                    {errors[`cat_${index}`] && (
                                        <p className="text-red-600 text-sm">{errors[`cat_${index}`]}</p>
                                    )}
                                </div>

                                {/* PRODUCT */}
                                <div>
                                    <label className="font-medium text-green-800">Product</label>
                                    <select
                                        value={row.product}
                                        disabled={!row.category}
                                        onChange={(e) => {
                                            const updated = [...products];
                                            updated[index].product = e.target.value;
                                            setProducts(updated);
                                        }}
                                        className={`w-full p-3 mt-2 border rounded-lg ${errors[`prod_${index}`] ? "border-red-500" : "border-green-200"
                                            } ${!row.category ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                    >
                                        <option value="">Select Product</option>
                                        {row.category &&
                                            productCategories[row.category].map((p) => (
                                                <option key={p} value={p}>
                                                    {p}
                                                </option>
                                            ))}
                                    </select>

                                    {errors[`prod_${index}`] && (
                                        <p className="text-red-600 text-sm">{errors[`prod_${index}`]}</p>
                                    )}
                                </div>

                                {/* QUANTITY */}
                                {/* QUANTITY */}
                                <div>
                                    <label className="font-medium text-green-800">Quantity</label>

                                    <div className="flex items-center gap-2 mt-2">
                                        {/* – BUTTON */}
                                        <button
                                            type="button"
                                            className="px-3 py-2 bg-green-200 text-green-800 rounded font-bold"
                                            onClick={() => {
                                                const updated = [...products];
                                                const current = parseInt(updated[index].quantity || "0");
                                                updated[index].quantity = Math.max(0, current - 1).toString();
                                                setProducts(updated);
                                            }}
                                        >
                                            -
                                        </button>

                                        {/* INPUT */}
                                        <input
                                            value={row.quantity}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/[^0-9]/g, "");
                                                const updated = [...products];
                                                updated[index].quantity = value;
                                                setProducts(updated);
                                            }}
                                            className={`w-full text-center p-3 border rounded-lg ${errors[`qty_${index}`] ? "border-red-500" : "border-green-200"
                                                }`}
                                            placeholder="0"
                                        />

                                        {/* + BUTTON */}
                                        <button
                                            type="button"
                                            className="px-3 py-2 bg-green-200 text-green-800 rounded font-bold"
                                            onClick={() => {
                                                const updated = [...products];
                                                const current = parseInt(updated[index].quantity || "0");
                                                updated[index].quantity = (current + 1).toString();
                                                setProducts(updated);
                                            }}
                                        >
                                            +
                                        </button>

                                        {/* UNIT (dynamic) */}
                                        <span className="font-semibold text-green-800 ml-1">
                                            {row.category === "Eco-Friendly Products" ? "packet" : "kg"}
                                        </span>
                                    </div>

                                    {errors[`qty_${index}`] && (
                                        <p className="text-red-600 text-sm">{errors[`qty_${index}`]}</p>
                                    )}
                                </div>
                            </div>

                            {/* REMOVE ROW */}
                            {products.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeRow(index)}
                                    className="flex items-center gap-1 text-red-600 hover:text-red-800 mt-3"
                                >
                                    <Trash2 size={16} /> Remove
                                </button>
                            )}
                        </div>
                    ))}

                    {/* ADD PRODUCT */}
                    <button
                        type="button"
                        onClick={addRow}
                        className="mt-6 bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-800"
                    >
                        <Plus size={20} /> Add Another Product
                    </button>

                    {/* MESSAGE */}
                    <div className="mt-8">
                        <label className="flex items-center gap-2 font-medium text-green-800">
                            <MessageSquare /> Additional Message
                        </label>
                        <textarea
                            value={form.message}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    message: e.target.value.replace(/[^a-zA-Z0-9\s.,!?-]/g, ""),
                                })
                            }
                            className={`w-full mt-2 p-3 border rounded-lg h-32 ${errors.message ? "border-red-500" : "border-green-200"
                                }`}
                            placeholder="Tell us more..."
                        />

                        <p
                            className={`text-sm mt-1 ${form.message.length > 280 ? "text-red-600" : "text-green-800"
                                }`}
                        >
                            {form.message.length} / 300 characters
                        </p>
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full mt-10 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 flex items-center justify-center gap-2"
                    >
                        <Send size={20} /> Submit Quote Request
                    </button>
                </motion.form>
            </div>

            <Footer />
        </div>
    );
}
