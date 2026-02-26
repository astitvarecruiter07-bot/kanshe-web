"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield } from "lucide-react";

export default function DevOpsPageContent() {
    return (
        <ServicePageLayout
            title="DevOps"
            subtitle="Agility & Velocity"
            heroDescription="Bridging development and operations for 80% faster time-to-market with assured deployment quality and reduced SDLC costs."
            iconElement={
                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-green-400" />
                </div>
            }
            mainContent={[
                "Bridging the gap between what's next and what works, DevOps has brought in a new wave of transformation, making development and operations teams work in tandem to bring in agility and velocity to software development.",
                "Kanshe Infotech DevOps solution capability center is placed right at the crossroad, where software design, development, and deployment takes the DevOps route to deliver freedom of creativity, time efficiency, and improved operational performance.",
                "To overcome the challenges of constant market change, businesses must be 'changeable' too. This means having the agility to spot and seize opportunities fast, introduce new products on demand, revamp business processes, and create new business models. DevOps and Agile, when integrated at enterprise scale, can empower CIOs to drive continuous delivery.",
            ]}
            bulletPoints={[
                "Freedom of creativity and innovation",
                "Time efficiency to focus more on core business objectives",
                "About 80% faster time-to-market with assured deployment quality",
                "10 – 15% reduction in total cost of SDLC",
                "Improved operational efficiency across teams",
            ]}
            features={[
                { title: "AWS DevOps", description: "Cloud-native DevOps pipelines on Amazon Web Services for scalable, reliable deployments." },
                { title: "Google DevOps", description: "Leverage Google Cloud Platform's DevOps tools for modern cloud infrastructure management." },
                { title: "Azure DevOps", description: "End-to-end DevOps solutions on Microsoft Azure with integrated CI/CD and project management." },
                { title: "CI/CD Implementation", description: "Continuous Integration and Continuous Delivery pipelines for faster, safer releases." },
                { title: "Docker Containers", description: "Containerize your applications with Docker for consistent environments across development and production." },
                { title: "Kubernetes (K8s)", description: "Orchestrate containerized applications at scale with Kubernetes for high availability and auto-scaling." },
            ]}
            whyUsContent="Higher team productivity, better governance, and faster project completion, whether teams are in-house or outsourced, onshore or offshore. You get more control, lower costs, and better results with Kanshe Infotech's DevOps expertise."
        />
    );
}
