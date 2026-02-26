"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Workflow } from "lucide-react";

export default function SalesforcePageContent() {
    return (
        <ServicePageLayout
            title="Salesforce"
            subtitle="CRM Excellence"
            heroDescription="Expert Salesforce consulting, implementation, and customization services to boost your CRM output and revenue."
            iconElement={
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <Workflow className="w-7 h-7 text-blue-400" />
                </div>
            }
            mainContent={[
                "Customer service, marketing automation, analytics, and application development are the main areas of concentration for the complementary portfolio of corporate applications and customer relationship management services offered by Salesforce. Businesses are capable of meeting their needs and managing good consumer connections.",
                "With the aid of our Salesforce technology professionals, our Salesforce training courses assist you in boosting business sales. We assist undergrads and grads in gaining practical knowledge that enables them to face difficult issues in the CRM field.",
                "Kanshe Infotech recommends the Salesforce solution that is best appropriate for your company based on its thorough awareness of industry norms. We are a business that can implement digital transformation in your company and is technology independent with a clear strategy.",
                "With a successful Salesforce deployment, we can assist you in improving your company strategy and boosting ROI. With the aid of our products, you can generate fresh possibilities that will aid in the growth of your business.",
            ]}
            features={[
                { title: "Salesforce Implementation", description: "End-to-end Salesforce deployment tailored to your business processes and objectives." },
                { title: "Custom Development", description: "Cutting-edge solutions using Apex, Visualforce, Lightning components framework for seamless UX." },
                { title: "CRM Optimization", description: "Optimize your CRM workflows to boost productivity and drive better customer engagement." },
                { title: "Digital Transformation", description: "Technology-independent digital transformation strategies with clear, measurable outcomes." },
                { title: "Training & Support", description: "Comprehensive Salesforce training courses to empower your team with practical CRM knowledge." },
                { title: "Integration Services", description: "Seamlessly integrate Salesforce with your existing technology stack for unified data flow." },
            ]}
            whyUsContent="Kanshe Infotech provides the best and most creative solutions using top professionals in the field. Our team has vast experience in both customer relationship management and the software development life cycle. Project success is ensured by our knowledge and unmatched competency across domains, technologies, and applications."
        />
    );
}
