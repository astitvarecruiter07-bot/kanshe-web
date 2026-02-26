"use client";

import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const servicesLinks = [
    { label: "Salesforce", href: "/services/salesforce" },
    { label: "Java", href: "/services/java" },
    { label: "Azure", href: "/services/azure" },
    { label: "DevOps", href: "/services/devops" },
    { label: "AWS", href: "/services/aws" },
    { label: "Artificial Intelligence", href: "/services/ai" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "IT Staffing", href: "/it-staffing" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
];

const staffingLinks = [
    { label: "Permanent Staffing", href: "/it-staffing" },
    { label: "Contract Staffing", href: "/it-staffing" },
    { label: "Contract To Hire", href: "/it-staffing" },
    { label: "Staff Augmentation", href: "/it-staffing" },
    { label: "Recruitment Process", href: "/it-staffing" },
];

export default function Footer() {
    return (
        <footer>
            {/* CTA Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-mid to-brand-teal">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-cyan blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-magenta blur-[100px]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
                    <AnimatedSection className="text-center">
                        <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                            Ready To Get Started?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            Let&apos;s Build Something Amazing Together
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                            We&apos;re available 8 hours a day! Contact us for a detailed analysis and assessment of your plan.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-yellow-500/15 hover:brightness-110 transition-all duration-300 hover:scale-105"
                            >
                                Send Us A Message
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+18323309377"
                                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-brand-navy transition-all duration-300"
                            >
                                Call +1 (832) 330 9377
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Main footer */}
            <div className="bg-brand-navy">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    {/* Logo and social */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pb-10 border-b border-slate-700/50">
                        <div>
                            <Link href="/" className="inline-block">
                                <span className="text-2xl font-bold text-white tracking-tight">
                                    Kanshe{" "}
                                    <span className="relative">
                                        Infotech
                                        <span className="absolute -bottom-0.5 left-[calc(50%-3px)] w-1.5 h-1.5 rounded-full bg-brand-magenta" />
                                    </span>
                                </span>
                            </Link>
                            <p className="text-sm text-slate-400 mt-3 max-w-sm leading-relaxed">
                                An award-winning agency specializing in direct hire, temp to hire staffing & full-service executive search services focused on IT staffing.
                            </p>
                        </div>
                        {/* Contact info */}
                        <div className="flex flex-col gap-3 mt-6 md:mt-0">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                                <span>2039 N Mason Rd #604, Katy, TX 77449</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                                <a href="tel:+18323309377" className="hover:text-white transition-colors">
                                    +1 (832) 330 9377
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                                <a href="mailto:info@kansheinfotech.com" className="hover:text-white transition-colors">
                                    info@kansheinfotech.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3-column link grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                        <div>
                            <h4 className="text-sm font-bold text-white mb-5">Our Services</h4>
                            <ul className="space-y-3">
                                {servicesLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white mb-5">Staffing Solutions</h4>
                            <ul className="space-y-3">
                                {staffingLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white mb-5">Company</h4>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright bar */}
                <div className="border-t border-slate-700/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-slate-500">
                            &copy; {new Date().getFullYear()} Kanshe Infotech Inc. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
