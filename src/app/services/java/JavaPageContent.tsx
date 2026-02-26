"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Code2 } from "lucide-react";

export default function JavaPageContent() {
    return (
        <ServicePageLayout
            title="Java"
            subtitle="Application Development"
            heroDescription="Innovative Java application development for web, mobile, enterprise, and standalone applications with the best user experience."
            iconElement={
                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-orange-400" />
                </div>
            }
            mainContent={[
                "Java is one of the most widely used object-oriented programming languages. Most of the apps working on the Android operating platform are developed using the concepts of Java. With Java, developers can write the code once and run it on any platform that supports Java.",
                "Java programs and applications are compiled to byte code that runs on Java Virtual Machine (JVM) irrespective of the computer's architecture. Due to its nature of being simple, robust and secure, it is widely adopted in the industry.",
                "Our Java application development services extend usage with the best user experience. We implement innovative methodologies of software development and assure to make hiccup-free web and mobile applications with Java.",
            ]}
            bulletPoints={[
                "Platform independent language",
                "Rich standard library making it easy to code",
                "Automatic memory allocation and deallocation (garbage collection)",
                "Supports multithreading and concurrency for high performance",
                "Secure, simple, and enterprise-grade",
            ]}
            features={[
                { title: "Standalone Applications", description: "Desktop and window-based applications using AWT and Swing for rich user interfaces." },
                { title: "Web Applications", description: "Dynamic server-side applications using Servlet, JSP, Struts, Spring, Hibernate, and JSF." },
                { title: "Enterprise Applications", description: "Distributed applications like banking systems using EJB with high-level security and load balancing." },
                { title: "Mobile Applications", description: "Android and Java ME mobile application development for modern devices." },
                { title: "Microservices", description: "Scalable microservices architecture using Spring Boot and cloud-native Java frameworks." },
                { title: "API Development", description: "RESTful and GraphQL API development for seamless integration with modern frontends." },
            ]}
            whyUsContent="Our Java development team brings years of experience in building robust, scalable applications across all domains. We leverage the latest Java frameworks and best practices to deliver enterprise-grade solutions that perform flawlessly and scale effortlessly."
        />
    );
}
