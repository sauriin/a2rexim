export default function Footer() {
    return (
        <footer className="bg-green-900 text-green-50 py-14 mt-0">
            <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10">

                {/* BRAND */}
                <div>
                    <h3 className="text-2xl font-semibold text-white">A2R EXIM</h3>
                    <p className="mt-3 text-green-200 text-sm leading-relaxed">
                        Delivering India's finest agricultural produce, spices and eco-friendly
                        products to global markets with trust, quality, and sustainability.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-green-200 text-sm">
                        <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#categories" className="hover:text-white transition">Categories</a></li>
                        <li><a href="#services" className="hover:text-white transition">Services</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                    <ul className="space-y-3 text-green-200 text-sm">

                        {/* Location */}
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 mt-1 text-green-200" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M3 21v-13l9 -4l9 4v13"></path>
                                <path d="M13 13h4v8h-4z"></path>
                                <path d="M7 13h4v8h-4z"></path>
                            </svg>
                            <span>Surat, Gujarat, India</span>
                        </li>

                        {/* Email */}
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-200" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M3 5h18"></path>
                                <path d="M3 19h18"></path>
                                <path d="M3 5l9 7l9 -7"></path>
                            </svg>
                            <span>contact@a2rexim.com</span>
                        </li>

                        {/* Phone */}
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-200" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 0 1 -2.18 2a19.79 19.79 0 0 1 -8.63 -3.07a19.5 19.5 0 0 1 -6 -6a19.79 19.79 0 0 1 -3.07 -8.67a2 2 0 0 1 2 -2.18h3a2 2 0 0 1 2 1.72c.12 .81 .32 1.6 .58 2.36a2 2 0 0 1 -.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27 -1.27a2 2 0 0 1 2.11 -.45c.76 .26 1.55 .46 2.36 .58a2 2 0 0 1 1.72 2z">
                                </path>
                            </svg>
                            <span>+91 98765 43210</span>
                        </li>
                    </ul>
                </div>

                {/* SOCIAL MEDIA */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                    <div className="flex gap-4">

                        {/* Instagram */}
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6 text-green-200 hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                                <circle cx="12" cy="12" r="3"></circle>
                                <circle cx="16.5" cy="7.5" r="1"></circle>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6 text-green-200 hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M9 8h1V6a3 3 0 0 1 3 -3h2v3h-2a1 1 0 0 0 -1 1v2h3l-1 3h-2v9h-3v-9H9z"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6 text-green-200 hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M4 4h4v16H4z"></path>
                                <circle cx="6" cy="6" r="2"></circle>
                                <path d="M12 10h4a4 4 0 0 1 4 4v6h-4v-6a2 2 0 0 0 -2 -2h-2z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="text-center text-green-300 text-sm mt-10 border-t border-green-700 pt-5">
                © {new Date().getFullYear()} A2R EXIM. All Rights Reserved.
            </div>
        </footer>
    );
}
