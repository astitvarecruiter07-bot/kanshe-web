"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    heroDescription: string;
    iconElement: ReactNode;
    mainContent: string[];
    features: { title: string; description: string }[];
    bulletPoints?: string[];
    whyUsContent: string;
}

export default function ServicePageLayout({
    title,
    subtitle,
    heroDescription,
    iconElement,
    mainContent,
    features,
    bulletPoints,
    whyUsContent,
}: ServicePageLayoutProps) {
    return (
        <main>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                            <span>/</span>
                            <span className="text-white">{title}</span>
                        </nav>
                        <div className="flex items-center gap-4 mb-4">
                            {iconElement}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                {title}
                            </h1>
                        </div>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                            {heroDescription}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Left — Main content */}
                        <div className="lg:col-span-3">
                            <AnimatedSection>
                                <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                    {subtitle}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                                    {title} Solutions
                                </h2>
                                {mainContent.map((paragraph, i) => (
                                    <p key={i} className="text-slate-600 leading-relaxed mb-5">
                                        {paragraph}
                                    </p>
                                ))}

                                {bulletPoints && bulletPoints.length > 0 && (
                                    <ul className="space-y-3 mt-6">
                                        {bulletPoints.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </AnimatedSection>
                        </div>

                        {/* Right — Sidebar CTA */}
                        <div className="lg:col-span-2">
                            <AnimatedSection delay={0.2}>
                                <div className="sticky top-32 space-y-6">
                                    <div className="service-card bg-brand-offwhite border-0">
                                        <h3 className="text-lg font-bold text-brand-navy mb-3">Need {title} Expertise?</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                            Get in touch with our team to discuss how our {title} services can transform your business.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="group inline-flex items-center justify-center w-full rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-navy hover:brightness-110 transition-all"
                                        >
                                            Get a Free Consultation
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    <div className="service-card bg-brand-navy border-0 text-white">
                                        <h3 className="text-lg font-bold mb-3">Our Other Services</h3>
                                        <ul className="space-y-2">
                                            {["Salesforce", "Java", "Azure", "DevOps", "AWS", "AI"].map((s) => (
                                                <li key={s}>
                                                    <Link
                                                        href={`/services/${s.toLowerCase() === "artificial intelligence" ? "ai" : s.toLowerCase()}`}
                                                        className="text-sm text-slate-300 hover:text-brand-cyan transition-colors"
                                                    >
                                                        → {s}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 lg:py-28 bg-brand-offwhite">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                            Key Capabilities
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <AnimatedSection key={feature.title} delay={index * 0.08}>
                                <div className="service-card h-full">
                                    <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-lg font-bold text-brand-cyan">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-navy mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                            Why Kanshe Infotech
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                            Why Choose Us for {title}
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            {whyUsContent}
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-yellow-500/15 hover:brightness-110 transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
