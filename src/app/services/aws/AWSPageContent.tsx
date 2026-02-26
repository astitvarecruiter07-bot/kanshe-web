"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Database } from "lucide-react";

export default function AWSPageContent() {
    return (
        <ServicePageLayout
            title="AWS"
            subtitle="Amazon Web Services"
            heroDescription="Scalable and reliable cloud solutions leveraging the comprehensive Amazon Web Services platform for agility, security, and competitive edge."
            iconElement={
                <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                    <Database className="w-7 h-7 text-amber-400" />
                </div>
            }
            mainContent={[
                "Kanshe Infotech leverages the power of Amazon Web Services (AWS) to provide scalable and reliable cloud solutions for your business needs. AWS offers a comprehensive suite of cloud services that enable organizations to innovate, reduce costs, and achieve agility.",
                "Amazon Web Services is not merely a cloud platform; it's a driving force behind digital innovation. By partnering with Kanshe Infotech for AWS services, your organization can gain the agility, security, and competitive edge required to excel in today's dynamic business landscape.",
                "Contact us today to learn how we can tailor AWS solutions to meet your specific business goals and achieve greater scalability, cost-efficiency while ensuring the security and reliability of your cloud-based applications.",
            ]}
            features={[
                { title: "Amazon EC2", description: "Deploy virtual servers on-demand with easy scaling of compute capacity to match your workload requirements." },
                { title: "Amazon S3", description: "Store and retrieve data securely and cost-effectively. Ideal for backup, data archiving, and serving static assets." },
                { title: "AWS Lambda", description: "Serverless computing — run code without provisioning servers, streamlining backend processes and reducing overhead." },
                { title: "Amazon CloudFront", description: "Deliver content quickly and securely worldwide with Amazon's CDN for improved performance and UX." },
                { title: "Amazon VPC", description: "Enhanced network security and isolation with a dedicated Virtual Private Cloud for secure communication." },
                { title: "AWS Elastic Beanstalk", description: "Simplify application deployment and management while AWS handles the underlying infrastructure." },
                { title: "Amazon RDS", description: "Managed relational database service for easy setup, operation, and scaling of databases in the cloud." },
                { title: "AWS IAM", description: "Granular access controls and permissions ensuring only authorized users access your AWS resources." },
            ]}
            whyUsContent="By partnering with Kanshe Infotech and harnessing the capabilities of AWS, your organization can achieve greater agility, scalability, and cost-efficiency while ensuring the security and reliability of your cloud-based applications and infrastructure."
        />
    );
}
