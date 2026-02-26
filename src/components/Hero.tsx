"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Code } from "lucide-react";
import Link from "next/link";

const trustedLogos = [
    "Microsoft", "Amazon", "Google", "Salesforce", "Oracle", "Adobe",
];

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            {/* Main hero area */}
            <div className="relative bg-gradient-to-br from-brand-navy via-brand-mid to-brand-navy pt-32 pb-24 lg:pt-44 lg:pb-32">
                {/* Animated background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-cyan/5 blur-[120px] animate-pulse-glow" />
                <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-brand-magenta/5 blur-[100px] animate-float" />

                {/* Decorative dots */}
                <div className="absolute top-32 left-8 flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-yellow" />
                    <span className="w-3 h-3 rounded-full bg-brand-magenta" />
                    <span className="w-3 h-3 rounded-full bg-brand-cyan" />
                </div>
                <div className="absolute bottom-20 right-12 flex gap-2 opacity-60">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                    <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                </div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left — Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-brand-yellow" />
                                <span className="text-xs font-semibold text-brand-yellow tracking-wide">AWARD-WINNING IT STAFFING AGENCY</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Your Cloud-First Partner For{" "}
                                <span className="gradient-text">IT Innovation</span>{" "}
                                & Staffing
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                                Join hands with a reliable partner for staffing and application development. We deliver profit-driven strategies to monitor, manage, and scale your business simply, securely & smartly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
                                >
                                    Get Started Today
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center rounded-full border-2 border-white/20 text-white px-8 py-3.5 text-sm font-bold hover:bg-white/10 transition-all duration-300"
                                >
                                    Learn About Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right — Feature cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="grid gap-5"
                        >
                            <div className="glass-card p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">IT Staffing Excellence</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Direct hire, temp to hire & full-service executive search services with remarkable excellence across all IT domains.
                                    </p>
                                </div>
                            </div>
                            <div className="glass-card p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-magenta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Code className="w-6 h-6 text-brand-magenta" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Software Development</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        End-to-end application development with Salesforce, Java, Azure, AWS, DevOps & AI expertise for enterprise-grade solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="glass-card p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-brand-yellow" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Consulting Services</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Certified scrum masters and PMPs ensure your projects run like a well-oiled machine and get delivered on-time, every time.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Trusted By bar */}
            <div className="bg-brand-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase whitespace-nowrap">
                            Trusted By
                        </span>
                        <div className="hidden md:block w-px h-8 bg-slate-600" />
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                            {trustedLogos.map((logo) => (
                                <span
                                    key={logo}
                                    className="text-sm font-bold tracking-wide text-slate-500 hover:text-slate-300 transition-colors cursor-default"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
