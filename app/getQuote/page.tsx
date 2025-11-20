"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Globe, Map, Building, XCircle, MessageSquare, Send, Plus, Trash2, CheckCircle } from "lucide-react";

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
    Vegetables: ["Onion", "Potato", "Bell Pepper", "Drumstick", "Green Chillies", "Lemon", "Mushroom"],
    Fruits: ["Banana", "Coconut", "Grape", "Mango", "Apple", "Pomegranate", "Orange"],
    "Eco-Friendly Products": ["Biodegradable Plates", "Biodegradable Cups"],
};

export default function GetQuotePage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", pincode: "", state: "", country: "", message: "" });
    const [products, setProducts] = useState<{ category: string; product: string; quantity: string }[]>([{ category: "", product: "", quantity: "" }]);
    const [errors, setErrors] = useState<any>({});

    const isValidPincode = (pin: string) => /^[0-9]{6}$/.test(pin);

    async function fetchCityState(pin: string) {
        if (!isValidPincode(pin)) {
            setForm((prev) => ({ ...prev, city: "", state: "" }));
            return;
        }
        try {
            const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
            const data = await res.json();
            if (data[0]?.Status === "Success") {
                const PO = data[0].PostOffice[0];
                setForm((prev) => ({ ...prev, city: PO.District || "", state: PO.State || "" }));
            } else {
                setForm((prev) => ({ ...prev, city: "", state: "" }));
            }
        } catch (err) {
            setForm((prev) => ({ ...prev, city: "", state: "" }));
        }
    }

    const addRow = () => setProducts([...products, { category: "", product: "", quantity: "" }]);
    const removeRow = (index: number) => { if (products.length > 1) setProducts(products.filter((_, i) => i !== index)); };

    const validate = () => {
        const newErrors: any = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter valid email.";
        if (!/^[0-9]{8,15}$/.test(form.phone)) newErrors.phone = "Enter valid phone.";
        if (!form.address.trim()) newErrors.address = "Address is required.";
        if (!form.city.trim()) newErrors.city = "City is required.";
        if (!isValidPincode(form.pincode)) newErrors.pincode = "Invalid pincode.";
        if (!form.state.trim()) newErrors.state = "State is required.";
        if (!form.country.trim()) newErrors.country = "Country is required.";
        if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
        if (form.message.length > 300) newErrors.message = "Message cannot exceed 300 characters.";

        products.forEach((p, i) => {
            if (!p.category) newErrors[`cat_${i}`] = "Select category.";
            if (!p.product) newErrors[`prod_${i}`] = "Select product.";
            if (!p.quantity || parseInt(p.quantity) <= 0) newErrors[`qty_${i}`] = "Enter valid quantity.";
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!validate()) return;
        alert("Your quote request has been submitted!");
        setForm({ name: "", email: "", phone: "", address: "", city: "", pincode: "", state: "", country: "", message: "" });
        setProducts([{ category: "", product: "", quantity: "" }]);
    };

    return (
        <div className="min-h-screen bg-[#F8FFF9] text-[#123A2B]">
            <Navbar />
            {/* PAGE HEADER */}
            <div
                className="w-full bg-linear-to-r from-green-50 via-green-100 to-green-50 py-28 text-center px-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-green-900">
                    Request a Quote
                </h1>

                <p className="text-green-800 mt-4 max-w-3xl mx-auto text-lg">
                    Order multiple products easily
                </p>
            </div>


            <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg border border-green-100 rounded-xl mb-20 mt-14">
                <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    {/* CONTACT INFO ROWS */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800"><User /> Name</label>
                            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className={`w-full mt-2 p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-green-200"}`} placeholder="Your Name" />
                            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800"><Mail /> Email</label>
                            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full mt-2 p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-green-200"}`} placeholder="Your Email" />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800"><Phone /> Phone</label>
                            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9]/g, "") })} className={`w-full mt-2 p-3 border rounded-lg ${errors.phone ? "border-red-500" : "border-green-200"}`} placeholder="Phone Number" />
                            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800">Address</label>
                            <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={`w-full mt-2 p-3 border rounded-lg ${errors.address ? "border-red-500" : "border-green-200"}`} placeholder="Full Address" />
                            {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800"><Building /> City</label>
                            <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className={`w-full mt-2 p-3 border rounded-lg ${errors.city ? "border-red-500" : "border-green-200"}`} placeholder="City" />
                            {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800">Pincode</label>
                            <div className="relative mt-2">
                                <input maxLength={6} value={form.pincode} onChange={(e) => { const pin = e.target.value.replace(/[^0-9]/g, ""); setForm({ ...form, pincode: pin }); fetchCityState(pin); }} className={`w-full p-3 pr-10 border rounded-lg ${errors.pincode ? "border-red-500" : "border-green-200"}`} placeholder="6-digit pincode" />
                                {form.pincode.length > 0 && (isValidPincode(form.pincode) ? <CheckCircle className="absolute right-3 top-3 text-green-600 w-5 h-5" /> : <XCircle className="absolute right-3 top-3 text-red-600 w-5 h-5" />)}
                            </div>
                            {errors.pincode && <p className="text-red-600 text-sm">{errors.pincode}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800"><Map /> State</label>
                            <input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className={`w-full mt-2 p-3 border rounded-lg ${errors.state ? "border-red-500" : "border-green-200"}`} placeholder="State" />
                            {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-medium text-green-800"><Globe /> Country</label>
                            <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className={`w-full mt-2 p-3 border rounded-lg ${errors.country ? "border-red-500" : "border-green-200"}`} placeholder="Country" />
                            {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-green-800 mt-10">Products to Order</h2>

                    {products.map((row, index) => (
                        <div key={index} className="p-4 mt-4 bg-[#F8FFF9] border border-green-100 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <label className="font-medium text-green-800">Category</label>
                                    <select value={row.category} onChange={(e) => { const updated = [...products]; updated[index].category = e.target.value; updated[index].product = ""; setProducts(updated); }} className={`w-full mt-2 p-3 border rounded-lg ${errors[`cat_${index}`] ? "border-red-500" : "border-green-200"}`}>
                                        <option value="">Select Category</option>
                                        {Object.keys(productCategories).map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                    {errors[`cat_${index}`] && <p className="text-red-600 text-sm">{errors[`cat_${index}`]}</p>}
                                </div>

                                <div>
                                    <label className="font-medium text-green-800">Product</label>
                                    <select value={row.product} disabled={!row.category} onChange={(e) => { const updated = [...products]; updated[index].product = e.target.value; setProducts(updated); }} className={`w-full mt-2 p-3 border rounded-lg ${errors[`prod_${index}`] ? "border-red-500" : "border-green-200"} ${!row.category ? "bg-gray-100 cursor-not-allowed" : ""}`}>
                                        <option value="">Select Product</option>
                                        {row.category && productCategories[row.category].map((p) => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                    {errors[`prod_${index}`] && <p className="text-red-600 text-sm">{errors[`prod_${index}`]}</p>}
                                </div>

                                <div>
                                    <label className="font-medium text-green-800">Quantity</label>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button type="button" className="px-3 py-2 bg-green-200 text-green-800 rounded font-bold" onClick={() => { const updated = [...products]; const current = parseInt(updated[index].quantity || "0"); updated[index].quantity = Math.max(0, current - 1).toString(); setProducts(updated); }}>-</button>

                                        <input value={row.quantity} onChange={(e) => { const val = e.target.value.replace(/[^0-9]/g, ""); const updated = [...products]; updated[index].quantity = val; setProducts(updated); }} className={`w-full text-center p-3 border rounded-lg ${errors[`qty_${index}`] ? "border-red-500" : "border-green-200"}`} placeholder="0" />

                                        <button type="button" className="px-3 py-2 bg-green-200 text-green-800 rounded font-bold" onClick={() => { const updated = [...products]; const current = parseInt(updated[index].quantity || "0"); updated[index].quantity = (current + 1).toString(); setProducts(updated); }}>+</button>

                                        <span className="font-semibold text-green-800 ml-1">{row.category === "Eco-Friendly Products" ? "packet" : "kg"}</span>
                                    </div>

                                    {errors[`qty_${index}`] && <p className="text-red-600 text-sm">{errors[`qty_${index}`]}</p>}
                                </div>
                            </div>

                            {products.length > 1 && <button type="button" onClick={() => removeRow(index)} className="flex items-center gap-1 text-red-600 hover:text-red-800 mt-3"><Trash2 size={16} /> Remove</button>}
                        </div>
                    ))}

                    <button type="button" onClick={addRow} className="mt-6 bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-800"><Plus size={20} /> Add Another Product</button>

                    <div className="mt-8">
                        <label className="flex items-center gap-2 font-medium text-green-800"><MessageSquare /> Additional Message</label>
                        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value.replace(/[^a-zA-Z0-9\s.,!?-]/g, "") })} className={`w-full mt-2 p-3 border rounded-lg h-32 ${errors.message ? "border-red-500" : "border-green-200"}`} placeholder="Tell us more..." />
                        <p className={`text-sm mt-1 ${form.message.length > 280 ? "text-red-600" : "text-green-800"}`}>{form.message.length} / 300 characters</p>
                    </div>

                    <button type="submit" className="w-full mt-10 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 flex items-center justify-center gap-2"><Send size={20} /> Submit Quote Request</button>
                </motion.form>
            </div>

            <Footer />
        </div>
    );
}
