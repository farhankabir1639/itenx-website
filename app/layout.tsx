import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://itenx.it.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "itenx technologies limited | Premium Technology Outsourcing",
    template: "%s | itenx technologies limited",
  },
  description:
    "World-class engineering, design, and software solutions. Premium technology outsourcing and IT staffing partner in Bangladesh. Trusted for software development, web development, and digital transformation. Based in Dhaka, serving clients globally.",
  keywords: [
    "technology outsourcing",
    "IT staffing",
    "software staffing",
    "tech talent Bangladesh",
    "software development Bangladesh",
    "web development Dhaka",
    "IT consulting Bangladesh",
    "digital transformation",
    "UI/UX design",
    "software solutions",
    "technology partner Dhaka",
    "engineering outsourcing",
    "staff augmentation",
    "developer staffing",
    "IT recruitment Bangladesh",
    "itenx",
  ],
  authors: [{ name: "itenx technologies limited", url: siteUrl }],
  creator: "itenx technologies limited",
  publisher: "itenx technologies limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "itenx technologies limited",
    title: "itenx technologies limited | Premium Technology Outsourcing & IT Staffing",
    description:
      "World-class engineering, design, and software solutions. Trusted technology outsourcing and IT staffing partner in Bangladesh. Software development, web development, digital transformation.",
    images: [{ url: "/images/hero-bg.png", width: 1920, height: 1080, alt: "itenx technology outsourcing and IT staffing - engineering and software development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "itenx technologies limited | Premium Technology Outsourcing & IT Staffing",
    description:
      "World-class engineering, design, and software solutions. Trusted technology outsourcing and IT staffing partner in Bangladesh.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0A0C10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-bg.png" />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} bg-[#0A0C10] text-slate-100 font-sans min-h-screen antialiased`}
      >
        <OrganizationJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#00D8FF] focus:px-4 focus:py-2 focus:text-[#0A0C10] focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main className="pt-0" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
