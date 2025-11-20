import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a2rexim.com"),
  title: {
    default: "A2R EXIM – Exporters of Fresh Produce, Spices & Eco Products",
    template: "%s | A2R EXIM",
  },
  description:
    "A2R EXIM is a global exporter of fresh vegetables, fruits, whole spices, and eco-friendly biodegradable products. Trusted sourcing, premium packaging, APEDA-certified quality.",
  keywords: [
    "A2R EXIM",
    "export company India",
    "vegetable exporters",
    "spice exporters India",
    "fresh produce export",
    "eco-friendly disposable export",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.a2rexim.com",
    siteName: "A2R EXIM",
    title: "A2R EXIM – Exporters of Fresh Produce, Spices & Eco Products",
    description:
      "Trusted Indian exporter of vegetables, fruits, spices and biodegradable eco-products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2R EXIM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A2R EXIM",
    description:
      "Exporter of vegetables, fruits, spices and biodegradable products.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#0f5132",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}