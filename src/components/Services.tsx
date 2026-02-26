"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Cloud, Database, Shield, Code2, Brain, Workflow } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Workflow,
        title: "Salesforce",
        description: "We implement Salesforce solutions that boost output and revenue using Apex, Visualforce, Lightning components & more.",
        href: "/services/salesforce",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Code2,
        title: "Java",
        description: "Innovative Java application development for web and mobile with the best user experience and hiccup-free performance.",
        href: "/services/java",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        icon: Cloud,
        title: "Azure",
        description: "Wide range of Azure services including Virtual Machines, App Service, SQL Database and DevOps for diverse business needs.",
        href: "/services/azure",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
    },
    {
        icon: Shield,
        title: "DevOps",
        description: "Bridging development and operations with agility and velocity — achieving 80% faster time-to-market with assured quality.",
        href: "/services/devops",
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        icon: Database,
        title: "AWS",
        description: "Scalable and reliable cloud solutions leveraging Amazon EC2, S3, Lambda, CloudFront, and enterprise infrastructure services.",
        href: "/services/aws",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        icon: Brain,
        title: "Artificial Intelligence",
        description: "Deep industry expertise with advanced analytics, automation and AI services to operate with agility from front to back office.",
        href: "/services/ai",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 lg:py-28 bg-brand-offwhite">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <AnimatedSection className="text-center mb-14">
                    <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                        Technology Services That <span className="gradient-text">Drive Growth</span>
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Product development done right, with breakthrough technologies and Agile processes.
                        We bring exceptional solutions with rigorous best practices, commitment to deliver on time and engineering talent.
                    </p>
                </AnimatedSection>

                {/* Services grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <AnimatedSection key={service.title} delay={index * 0.08}>
                            <motion.div whileHover={{ y: -4 }}>
                                <Link href={service.href} className="block service-card group h-full">
                                    <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5`}>
                                        <service.icon className={`w-6 h-6 ${service.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-cyan transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy group-hover:text-brand-cyan transition-colors">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
