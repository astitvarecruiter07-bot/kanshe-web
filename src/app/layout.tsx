import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kanshe Infotech — Enterprise IT Staffing & Software Development",
    template: "%s | Kanshe Infotech",
  },
  description:
    "Kanshe Infotech delivers cloud-first IT staffing, custom software development, and enterprise solutions. Salesforce, Java, Azure, DevOps, AWS & AI expertise based in Katy, TX.",
  keywords: [
    "IT Staffing",
    "Software Development",
    "Salesforce",
    "Java",
    "Azure",
    "DevOps",
    "AWS",
    "AI",
    "Kanshe Infotech",
    "IT Staffing Services",
    "IT Jobs USA",
    "Staff Augmentation",
    "Katy TX",
  ],
  openGraph: {
    title: "Kanshe Infotech — Enterprise IT Staffing & Software Development",
    description: "Award-winning IT staffing & software development agency. Direct hire, temp-to-hire, and full-service executive search focused on technology.",
    type: "website",
    siteName: "Kanshe Infotech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
