"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Users, FileCheck, UserCheck, Briefcase, CheckCircle, ArrowRight, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

const staffingTypes = [
    {
        icon: Users,
        title: "Permanent Staffing",
        description: "Our permanent staffing solutions serve as the bedrock of your organization's triumph. We understand that permanent talent acquisition is not just about filling a vacancy; it's about discovering a long-term match that contributes to your company's growth and stability. Our expert team employs a thorough approach to identify, assess, and connect you with outstanding professionals who resonate with your company's values, culture, and objectives.",
        color: "text-brand-cyan",
        bg: "bg-brand-cyan/10",
    },
    {
        icon: FileCheck,
        title: "Contract Staffing",
        description: "We specialize in contract staffing solutions designed to provide agility and efficiency for your business. We recognize that workforce needs can fluctuate, and our contract staffing expertise is here to meet those evolving demands. Whether you need specialized expertise for a short-term project or seek to bolster your team during peak periods, we maintain a pool of highly skilled professionals ready to step in.",
        color: "text-brand-yellow",
        bg: "bg-brand-yellow/10",
    },
    {
        icon: UserCheck,
        title: "Contract To Hire",
        description: "We are strong proponents of the contract-to-hire model, recognizing its value for both job seekers and employers alike. Contract-to-hire arrangements offer the perfect blend of flexibility and permanence, allowing candidates to gain experience and assess company fit before committing to a long-term role. Employers benefit from the opportunity to evaluate talent while mitigating hiring risks.",
        color: "text-brand-magenta",
        bg: "bg-brand-magenta/10",
    },
];

const solutions = [
    "Staff Augmentation",
    "Permanent Recruitment",
    "Recruitment Process Outsourcing",
    "Hire Train & Deploy",
    "Skill Transition Programs",
    "Career Support Services",
    "Employee Retention Management",
];

export default function ITStaffingPageContent() {
    return (
        <main>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">IT Staffing</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                            IT <span className="gradient-text">Staffing</span> Services
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                            Your reliable partner for placement services, filling the huge scarcity of talent in the ever-growing IT sector with quality and consistency.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                Staffing Excellence
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                                Finding The Right Talent For Your Business
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-5">
                                Information technology is a field that is growing more and more fiercely competitive. Even major firms are finding it harder to keep up with the evolving trends in the IT sector. Rapid technological improvements have increased the need for a trained and competitive workforce.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-5">
                                One of the core services we provide as part of our global business operations is the placement of skilled applicants for both permanent and contract positions. We retain a database of the greatest profiles, making sure to satisfy your needs while streamlining your obligations and work process.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                To build a successful and long-lasting business partnership, we adhere to two fundamental principles: quality and consistency. Our team has vast expertise managing initial candidate screening to assure the quality of every profile.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-magenta/20 rounded-3xl blur-2xl opacity-30" />
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                                    alt="IT staffing team collaboration"
                                    className="relative rounded-2xl shadow-2xl shadow-slate-900/10 w-full object-cover aspect-[4/3]"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Staffing Types */}
            <section className="py-20 lg:py-28 bg-brand-offwhite">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                            Staffing Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                            Our Staffing Models
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-8">
                        {staffingTypes.map((type, index) => (
                            <AnimatedSection key={type.title} delay={index * 0.1}>
                                <div className="service-card flex flex-col md:flex-row items-start gap-6">
                                    <div className={`w-16 h-16 ${type.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                        <type.icon className={`w-8 h-8 ${type.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy mb-3">{type.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{type.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staffing Solutions */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                Staffing Solutions
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
                                Complete Staffing Solutions
                            </h2>
                            <ul className="space-y-4">
                                {solutions.map((solution) => (
                                    <li key={solution} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="grid grid-cols-2 gap-5">
                                {[
                                    { icon: Shield, title: "Quality", desc: "Rigorous candidate screening" },
                                    { icon: Clock, title: "Speed", desc: "Fast talent placement" },
                                    { icon: Award, title: "Expertise", desc: "Industry-leading talent" },
                                    { icon: Briefcase, title: "Scale", desc: "Global talent network" },
                                ].map((item) => (
                                    <div key={item.title} className="service-card text-center">
                                        <item.icon className="w-8 h-8 text-brand-cyan mx-auto mb-3" />
                                        <h4 className="text-lg font-bold text-brand-navy mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-mid to-brand-navy" />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px]" />

                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                            Why Choose Kanshe Infotech for IT Staffing?
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            We have earned our reputation as a top-tier staffing solution provider through a steadfast commitment to excellence. What truly sets us apart is our dedication to customization. We take the time to comprehensively grasp your company&apos;s culture, objectives, and specific staffing prerequisites.
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            Our strength lies in our extensive talent network, rigorous candidate evaluation process, and our ability to respond swiftly to your staffing requirements — whether you seek permanent, contract, or executive placements.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-yellow-500/20 hover:brightness-110 transition-all duration-300 hover:scale-105"
                        >
                            Start Hiring Today
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
