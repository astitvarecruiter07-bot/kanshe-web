"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Briefcase, MapPin, Clock, ArrowRight, Search, Code2, Cloud, Shield, Database, Brain, Workflow } from "lucide-react";
import Link from "next/link";

const jobCategories = [
    { icon: Workflow, title: "Salesforce", count: "Multiple Positions", location: "Remote / Katy, TX" },
    { icon: Code2, title: "Java Development", count: "Multiple Positions", location: "Remote / USA" },
    { icon: Cloud, title: "Azure Cloud", count: "Multiple Positions", location: "Remote / USA" },
    { icon: Shield, title: "DevOps Engineering", count: "Multiple Positions", location: "Remote / USA" },
    { icon: Database, title: "AWS Solutions", count: "Multiple Positions", location: "Remote / USA" },
    { icon: Brain, title: "AI & Machine Learning", count: "Multiple Positions", location: "Remote / USA" },
];

const benefits = [
    "Competitive salary and benefits package",
    "Remote and flexible work arrangements",
    "Career growth and skill development opportunities",
    "Work on cutting-edge technology projects",
    "Supportive and collaborative work culture",
    "Health insurance and retirement plans",
];

export default function CareersPageContent() {
    return (
        <main>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Careers</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                            Join Our <span className="gradient-text">Team</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                            It is never too early to start planning for your career. Explore current openings and be part of an award-winning IT staffing and development team.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                            Current Openings
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                            Explore Career Opportunities
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We&apos;re looking for talented professionals across all IT domains. Browse our open categories below.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobCategories.map((job, index) => (
                            <AnimatedSection key={job.title} delay={index * 0.08}>
                                <div className="service-card group h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <job.icon className="w-6 h-6 text-brand-cyan" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-cyan transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase className="w-3.5 h-3.5" />
                                                    {job.count}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {job.location}
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1 text-sm font-bold text-brand-navy group-hover:text-brand-cyan transition-colors"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 lg:py-28 bg-brand-offwhite">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                Why Work With Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                                Build Your Career With Kanshe Infotech
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                It is never too early to start planning for your career. There are many opportunities that will boost your resume and make you more employable — from developing leadership skills to working on cutting-edge technology projects.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-magenta/20 rounded-3xl blur-2xl opacity-30" />
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Career opportunities at Kanshe Infotech"
                                    className="relative rounded-2xl shadow-2xl shadow-slate-900/10 w-full object-cover aspect-[4/3]"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-mid to-brand-navy" />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px]" />

                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                            Don&apos;t See The Right Fit?
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll keep you in mind for future opportunities that match your skills and experience.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-yellow-500/20 hover:brightness-110 transition-all duration-300 hover:scale-105"
                        >
                            Submit Your Resume
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
