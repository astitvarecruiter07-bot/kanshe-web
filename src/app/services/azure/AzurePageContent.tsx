"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Cloud } from "lucide-react";

export default function AzurePageContent() {
    return (
        <ServicePageLayout
            title="Azure"
            subtitle="Cloud Services"
            heroDescription="Comprehensive Microsoft Azure cloud services including IaaS, PaaS, SaaS, DevOps, AI/ML, and IoT solutions for modern enterprises."
            iconElement={
                <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center">
                    <Cloud className="w-7 h-7 text-sky-400" />
                </div>
            }
            mainContent={[
                "We offer a wide range of cloud services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). These services enable businesses to build, deploy, and manage applications and services with ease, using Microsoft's global data center infrastructure.",
                "Azure Virtual Machines (VMs) provide scalable computing power in the cloud. You can deploy Windows or Linux VMs, customize them to your needs, and run your applications securely and efficiently.",
                "We develop with Azure App Services — a fully managed platform for building, deploying, and scaling web apps. It supports various programming languages and frameworks and offers features like automatic scaling and continuous integration.",
            ]}
            features={[
                { title: "Azure Virtual Machines", description: "Deploy and manage scalable VMs in the cloud with Windows or Linux for secure, efficient operations." },
                { title: "Azure App Service", description: "Fully managed platform for building, deploying, and scaling web apps with auto-scaling and CI/CD." },
                { title: "Azure DevOps Services", description: "Tools for agile planning, version control, continuous integration and delivery, and project management." },
                { title: "AI & Machine Learning", description: "Azure Machine Learning, Cognitive Services, and Databricks for building intelligent applications." },
                { title: "Azure IoT", description: "Connect, monitor, and manage IoT devices at scale with IoT Hub, IoT Central, and IoT Edge." },
                { title: "Big Data & Analytics", description: "Azure Synapse Analytics, Data Lake Storage, and HDInsight for deriving insights from your data." },
            ]}
            whyUsContent="Kanshe Infotech provides a wide range of Azure services tailored to diverse business requirements. Our certified Azure professionals help organizations leverage the full power of Microsoft's cloud platform to achieve digital transformation, operational efficiency, and competitive advantage."
        />
    );
}
