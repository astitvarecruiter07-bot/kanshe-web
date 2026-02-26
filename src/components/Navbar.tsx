"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Link from "next/link";

const services = [
    { label: "Salesforce", href: "/services/salesforce" },
    { label: "Java", href: "/services/java" },
    { label: "Azure", href: "/services/azure" },
    { label: "DevOps", href: "/services/devops" },
    { label: "AWS", href: "/services/aws" },
    { label: "Artificial Intelligence", href: "/services/ai" },
];

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true, children: services },
    { label: "IT Staffing", href: "/it-staffing" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-900/5"
                : "bg-brand-navy"
                }`}
        >
            {/* Top utility bar */}
            {!scrolled && (
                <div className="border-b border-white/10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-end gap-6 py-2 text-xs text-slate-300">
                        <a href="tel:+18323309377" className="flex items-center gap-1.5 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                            +1 (832) 330 9377
                        </a>
                        <a href="mailto:info@kansheinfotech.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" />
                            info@kansheinfotech.com
                        </a>
                    </div>
                </div>
            )}

            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1">
                    <span className={`text-2xl font-bold tracking-tight ${scrolled ? "text-brand-navy" : "text-white"}`}>
                        Kanshe
                    </span>
                    <span className="relative">
                        <span className={`text-2xl font-bold tracking-tight ${scrolled ? "text-brand-navy" : "text-white"}`}>
                            Infotech
                        </span>
                        <span className="absolute -bottom-0.5 left-[calc(50%-3px)] w-1.5 h-1.5 rounded-full bg-brand-magenta" />
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${scrolled
                                    ? "text-slate-700 hover:text-brand-navy"
                                    : "text-slate-200 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                {link.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />}
                            </Link>

                            {/* Dropdown */}
                            {link.hasDropdown && activeDropdown === link.label && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden z-50"
                                >
                                    <div className="py-2">
                                        {link.children?.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="flex items-center gap-3 px-5 py-3 text-sm text-slate-700 hover:bg-brand-offwhite hover:text-brand-navy transition-colors"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-5">
                    <Link
                        href="/careers"
                        className={`text-sm font-semibold transition-colors ${scrolled ? "text-slate-700 hover:text-brand-navy" : "text-white hover:text-slate-200"}`}
                    >
                        Find a Job
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-6 py-2.5 text-sm font-bold text-brand-navy hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
                    >
                        Hire Talent
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                                <span className="text-xl font-bold text-brand-navy">
                                    Kanshe <span className="relative">Infotech<span className="absolute -bottom-0.5 left-[calc(50%-3px)] w-1.5 h-1.5 rounded-full bg-brand-magenta" /></span>
                                </span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6 space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={() => !link.hasDropdown && setMobileOpen(false)}
                                            className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-brand-navy rounded-xl font-medium transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                        {link.hasDropdown && link.children && (
                                            <div className="ml-6 space-y-0.5">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-500 hover:text-brand-navy hover:bg-slate-50 rounded-lg transition-colors"
                                                    >
                                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 space-y-3">
                                    <Link
                                        href="/careers"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex w-full items-center justify-center rounded-full border-2 border-brand-navy px-6 py-3 text-sm font-semibold text-brand-navy"
                                    >
                                        Find a Job
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex w-full items-center justify-center rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-navy"
                                    >
                                        Hire Talent
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
