import type { Metadata } from "next";
import AzurePageContent from "./AzurePageContent";

export const metadata: Metadata = {
    title: "Azure Cloud Services",
    description:
        "Kanshe Infotech offers comprehensive Microsoft Azure services — IaaS, PaaS, SaaS, DevOps, AI/ML, IoT, and Big Data solutions for modern enterprises.",
    keywords: ["Azure services", "Azure cloud", "Azure DevOps", "Azure Virtual Machines", "Azure AI", "cloud migration", "Kanshe Infotech Azure"],
};

export default function AzurePage() {
    return <AzurePageContent />;
}
