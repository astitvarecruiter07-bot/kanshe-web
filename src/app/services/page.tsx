import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore Kanshe Infotech's comprehensive IT services — Salesforce, Java, Azure, DevOps, AWS, and Artificial Intelligence solutions to transform your business.",
    keywords: [
        "IT services",
        "Salesforce consulting",
        "Java development",
        "Azure cloud services",
        "DevOps solutions",
        "AWS services",
        "AI development",
        "Kanshe Infotech services",
    ],
};

export default function ServicesPage() {
    return <ServicesPageContent />;
}
