"use client";

import AnimatedSection from "./AnimatedSection";
import { Shield, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const strengths = [
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "Rigorous best practices and engineering talent delivering on-premises solutions with unmatched quality.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Certified scrum masters and PMPs ensure your projects get delivered on-time, every time.",
    },
    {
        icon: Award,
        title: "Industry Expertise",
        description: "Product development done right, with breakthrough technologies and Agile processes.",
    },
];

const impacts = [
    "Cost-effective application development & consulting",
    "End-to-end solutions with quality assurance",
    "Exceptional on-premises & cloud solutions",
    "Up-to-date with cutting-edge technology trends",
];

export default function AboutPreview() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text */}
                    <AnimatedSection>
                        <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                            About Kanshe Infotech
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                            Your Partner For <span className="gradient-text">IT Innovation</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Kanshe Infotech is one of the fast-emerging software development and consulting services providers that focuses mainly on cost-effective, qualitative and timely delivered application development and consulting services.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Today, software and application development is the nerve of many firms, thus delivering end-to-end solutions and services with quality assurance will help our clients stand apart from the crowd.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {impacts.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-cyan transition-colors"
                        >
                            Learn More About Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>

                    {/* Right — Strength cards */}
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-5">
                            {strengths.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="service-card flex items-start gap-5"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${index === 0 ? "bg-brand-cyan/10" : index === 1 ? "bg-brand-yellow/10" : "bg-brand-magenta/10"
                                        }`}>
                                        <item.icon className={`w-6 h-6 ${index === 0 ? "text-brand-cyan" : index === 1 ? "text-brand-yellow" : "text-brand-magenta"
                                            }`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-navy mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
