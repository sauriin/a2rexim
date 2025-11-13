import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params; // 🔥 FIX: await the params

    const categories = {
        "whole-spices": {
            title: "Whole Spices",
            desc: "Premium export-quality whole spices sourced from trusted growers.",
            items: [
                "Cumin", "Coriander", "Chilli Flakes", "Black Pepper",
                "Clove Seed", "Cardamom", "Black Cumin", "Bay Leaf",
                "Ajwain", "Cinnamon", "Mace", "Star Anise",
                "Imli (Tamarind)", "Nutmeg", "Fennel Seeds", "Methi Seeds",
            ],
            img: "/spice.avif",
        },

        vegetables: {
            title: "Vegetables",
            desc: "Fresh, farm-grown vegetables exported with strict quality checks.",
            items: [
                "Onion", "Potato", "Bell Pepper", "Drumstick",
                "Green Chillies", "Lemon", "Mushroom",
            ],
            img: "/vegetables.webp",
        },

        fruits: {
            title: "Fruits",
            desc: "Naturally ripened tropical fruits packed with flavor and freshness.",
            items: [
                "Banana", "Coconut", "Grape", "Mango",
                "Apple", "Pomegranate", "Orange",
            ],
            img: "/fruits.jpg",
        },

        "eco-friendly-products": {
            title: "Eco-Friendly Products",
            desc: "Sustainable biodegradable plates, cups and disposable products.",
            items: ["Biodegradable Plates", "Biodegradable Cups"],
            img: "/eco.avif",
        },
    };

    const category = categories[slug as keyof typeof categories];

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-700 text-2xl">
                Category Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FFF9] text-[#123A2B]">
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20">
                <h1 className="text-4xl font-bold text-green-800">{category.title}</h1>
                <p className="text-green-700 mt-2">{category.desc}</p>

                <img
                    src={category.img}
                    alt={category.title}
                    className="w-full h-64 object-cover rounded-lg mt-6"
                />

                <h2 className="text-2xl font-semibold text-green-800 mt-10">
                    Items We Export
                </h2>

                <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-green-700 text-lg">
                    {category.items.map((item, i) => (
                        <li
                            key={i}
                            className="bg-white p-3 rounded-md border border-green-100 shadow-sm"
                        >
                            • {item}
                        </li>
                    ))}
                </ul>
            </div>

            <Footer />
        </div>
    );
}
