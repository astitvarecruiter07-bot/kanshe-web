"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
    {
        icon: Phone,
        title: "Call Us",
        value: "+1 (832) 330 9377",
        href: "tel:+18323309377",
        color: "text-brand-cyan",
        bg: "bg-brand-cyan/10",
    },
    {
        icon: Mail,
        title: "Our Email",
        value: "info@kansheinfotech.com",
        href: "mailto:info@kansheinfotech.com",
        color: "text-brand-magenta",
        bg: "bg-brand-magenta/10",
    },
    {
        icon: MapPin,
        title: "Our Location",
        value: "2039 N Mason Rd #604, Katy, TX 77449, United States",
        href: "https://maps.google.com/?q=2039+N+Mason+Rd+604+Katy+TX+77449",
        color: "text-brand-yellow",
        bg: "bg-brand-yellow/10",
    },
    {
        icon: Clock,
        title: "Business Hours",
        value: "Monday - Friday, 9:00 AM - 5:00 PM CST",
        href: null,
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
];

export default function ContactPageContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generate mailto link with form data
        const mailtoLink = `mailto:info@kansheinfotech.com?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <main>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Contact</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                            Give us a call or drop by anytime. We endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
                        {contactInfo.map((info, index) => (
                            <AnimatedSection key={info.title} delay={index * 0.08}>
                                <div className="service-card bg-white shadow-xl shadow-slate-900/5 text-center h-full">
                                    <div className={`w-14 h-14 mx-auto ${info.bg} rounded-2xl flex items-center justify-center mb-4`}>
                                        <info.icon className={`w-7 h-7 ${info.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-navy mb-2">{info.title}</h3>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-sm text-slate-600 hover:text-brand-cyan transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm text-slate-600">{info.value}</p>
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 lg:py-28 bg-brand-offwhite">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <AnimatedSection>
                                <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase mb-4">
                                    Send Us A Message
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-8">
                                    Let&apos;s Start a Conversation
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                id="contact-name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                id="contact-email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="contact-phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-all"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                                            <input
                                                type="text"
                                                id="contact-company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-all"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
                                        <select
                                            id="contact-subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-all"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="IT Staffing Inquiry">IT Staffing Inquiry</option>
                                            <option value="Software Development Project">Software Development Project</option>
                                            <option value="Salesforce Consulting">Salesforce Consulting</option>
                                            <option value="Cloud Services (AWS/Azure)">Cloud Services (AWS/Azure)</option>
                                            <option value="DevOps Services">DevOps Services</option>
                                            <option value="AI/ML Solutions">AI/ML Solutions</option>
                                            <option value="Career Inquiry">Career Inquiry</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-all resize-none"
                                            placeholder="Tell us about your project or inquiry..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="group inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg shadow-yellow-500/15 hover:brightness-110 transition-all duration-300 hover:scale-105"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </button>
                                </form>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2">
                            <AnimatedSection delay={0.2}>
                                <div className="sticky top-32 space-y-6">
                                    <div className="service-card bg-brand-navy border-0 text-white">
                                        <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                                        <div className="space-y-4">
                                            <a href="tel:+18323309377" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                                <Phone className="w-5 h-5 text-brand-cyan" />
                                                +1 (832) 330 9377
                                            </a>
                                            <a href="mailto:info@kansheinfotech.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                                <Mail className="w-5 h-5 text-brand-cyan" />
                                                info@kansheinfotech.com
                                            </a>
                                            <div className="flex items-start gap-3 text-slate-300">
                                                <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                                                2039 N Mason Rd #604, Katy, TX 77449, United States
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-card bg-white">
                                        <h3 className="text-lg font-bold text-brand-navy mb-3">Kanshe Infotech</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            An award-winning agency specializing in direct hire, temp to hire staffing, & full-service executive search services with remarkable excellence in IT staffing.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map embed */}
            <section className="bg-white">
                <div className="w-full h-[400px] bg-slate-100 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2!2d-95.78!3d29.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzM2LjAiTiA5NcKwNDYnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kanshe Infotech Location - Katy, TX"
                        className="absolute inset-0"
                    />
                </div>
            </section>
        </main>
    );
}
