"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

const stats = [
    { value: "500+", label: "IT Placements Each Year" },
    { value: "10+", label: "Years in the Staffing Industry" },
    { value: "50+", label: "Countries to Source Talent From" },
    { value: "98%", label: "Client Satisfaction Rate" },
];

export default function WhyChooseUs() {
    return (
        <section id="staffing" className="relative py-20 lg:py-28 overflow-hidden">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-mid to-brand-navy" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-magenta/5 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <AnimatedSection className="text-center mb-14">
                    <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                        Why Kanshe Infotech
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Certified scrum masters and PMPs ensure that your projects run like a well-oiled machine and get delivered on-time. We focus on cost-effective, qualitative and timely delivered solutions.
                    </p>
                </AnimatedSection>

                {/* Stats grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {stats.map((stat, index) => (
                        <AnimatedSection key={stat.label} delay={index * 0.1}>
                            <div className="glass-card rounded-2xl p-8 text-center">
                                <div className="text-5xl md:text-6xl font-bold text-brand-cyan mb-3">
                                    {stat.value}
                                </div>
                                <p className="text-sm font-medium text-slate-300 leading-snug">
                                    {stat.label}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA */}
                <AnimatedSection delay={0.4} className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
                    >
                        Hire Now
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}
