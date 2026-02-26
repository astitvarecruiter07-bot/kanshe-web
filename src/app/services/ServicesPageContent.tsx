"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Cloud, Database, Shield, Code2, Brain, Workflow } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Workflow,
        title: "Salesforce",
        description: "We understand customer demands and implement Salesforce solutions that are suitable for them and produce the best value by boosting output and revenue. Our team of specialists has years of experience creating cutting-edge solutions using Salesforce customisation tools like Apex, Visualforce, Lightning components framework, and more.",
        href: "/services/salesforce",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Code2,
        title: "Java",
        description: "Our Java application development services extend usage with the best user experience. We implement innovative methodologies of software development and assure to make hiccup-free web and mobile applications with Java. From standalone to enterprise applications, we cover it all.",
        href: "/services/java",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        icon: Cloud,
        title: "Azure",
        description: "Kanshe Infotech provides a wide range of Azure services tailored to diverse business requirements including Azure Virtual Machines, Azure App Service, Azure SQL Database, DevOps Services, AI and Machine Learning services, and IoT solutions.",
        href: "/services/azure",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
    },
    {
        icon: Shield,
        title: "DevOps",
        description: "Bridging the gap between what's next and what works. DevOps has brought a new wave of transformation, making development and operations teams work in tandem to bring agility and velocity to software development with 80% faster time-to-market.",
        href: "/services/devops",
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        icon: Database,
        title: "AWS",
        description: "Amazon Web Services is not merely a cloud platform; it's a driving force behind digital innovation. By partnering with Kanshe Infotech for AWS services, your organization can gain the agility, security, and competitive edge required to excel in today's dynamic business landscape.",
        href: "/services/aws",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        icon: Brain,
        title: "Artificial Intelligence",
        description: "Our deep industry expertise combined with advanced analytics, automation and AI services helps you operate with agility from front office to back office. It all begins with a strong AI strategy that empowers you to invest in the right systems and build responsible practices.",
        href: "/services/ai",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
];

export default function ServicesPageContent() {
    return (
        <main>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Services</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                            Product development done right, with breakthrough technologies and Agile processes. Explore our comprehensive suite of IT services.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.title} delay={index * 0.08}>
                                <Link href={service.href} className="block service-card group h-full">
                                    <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5`}>
                                        <service.icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <h2 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-cyan transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed mb-5">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-navy group-hover:text-brand-cyan transition-colors">
                                        Explore Service
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
