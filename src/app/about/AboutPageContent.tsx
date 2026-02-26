"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Clock, Award, Target, Users, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const expertise = [
    {
        icon: Lightbulb,
        title: "Our Expertise",
        description: "Product development done right, with breakthrough technologies and Agile processes.",
        color: "text-brand-cyan",
        bg: "bg-brand-cyan/10",
    },
    {
        icon: Shield,
        title: "Our Strength",
        description: "Certified scrum masters and PMPs ensure that your projects run like a well-oiled machine and gets delivered on-time.",
        color: "text-brand-yellow",
        bg: "bg-brand-yellow/10",
    },
    {
        icon: Users,
        title: "How We Hire",
        description: "Certified and experienced consultants who go beyond the norms to address your pain points.",
        color: "text-brand-magenta",
        bg: "bg-brand-magenta/10",
    },
];

const values = [
    "Cost-effective and qualitative solutions",
    "Timely delivered application development",
    "End-to-end consulting services",
    "Exceptional on-premises & cloud solutions",
    "Rigorous best practices and engineering talent",
    "Up-to-date with the latest technology trends",
];

export default function AboutPageContent() {
    return (
        <main>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">About Us</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                            About <span className="gradient-text">Kanshe Infotech</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                            Your trusted partner for IT innovation, staffing excellence, and enterprise software development.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                                Fast-Emerging Software Development & Consulting Provider
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-5">
                                Kanshe Infotech is one of the fast-emerging software development and consulting services providers that focuses mainly on cost-effective, qualitative and timely delivered application development and consulting services.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-5">
                                Today, software and application development is the nerve of many firms, thus delivering of end-to-end solutions and services with quality assurance will help our clients stand apart from the crowd. To every project we bring exceptional on-premises solutions with our rigorous best practices, commitment to deliver on time and engineering talent.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We believe that being up-to-date with the technology is what defines the success of a business and so strive hard to relentlessly provide the best solutions to our potential clientele.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-magenta/20 rounded-3xl blur-2xl opacity-30" />
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="Kanshe Infotech team collaborating on innovative technology solutions"
                                    className="relative rounded-2xl shadow-2xl shadow-slate-900/10 w-full object-cover aspect-[4/3]"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Expertise Cards */}
            <section className="py-20 lg:py-28 bg-brand-offwhite">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                            What Sets Us Apart
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {expertise.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 0.1}>
                                <div className="service-card h-full text-center">
                                    <div className={`w-16 h-16 mx-auto ${item.bg} rounded-2xl flex items-center justify-center mb-5`}>
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                Our Values
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                                Why Choose Kanshe Infotech
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                We work hard to consistently deliver the best solutions to our potential clients since we feel that staying current with technology is what defines the success of a business.
                            </p>
                            <ul className="space-y-4">
                                {values.map((value) => (
                                    <li key={value} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="text-center">
                            <div className="grid grid-cols-2 gap-5">
                                {[
                                    { value: "500+", label: "IT Placements" },
                                    { value: "10+", label: "Years Experience" },
                                    { value: "50+", label: "Countries" },
                                    { value: "98%", label: "Satisfaction Rate" },
                                ].map((stat) => (
                                    <div key={stat.label} className="service-card text-center">
                                        <div className="text-4xl font-bold text-brand-cyan mb-2">{stat.value}</div>
                                        <p className="text-sm text-slate-600">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-offwhite">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Ready To Work With Us?</h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Let&apos;s discuss how we can accelerate your next project with world-class talent and technology solutions.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-yellow-500/15 hover:brightness-110 transition-all duration-300 hover:scale-105"
                        >
                            Contact Us Today
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
