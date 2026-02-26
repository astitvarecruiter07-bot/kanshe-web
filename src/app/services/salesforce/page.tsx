import type { Metadata } from "next";
import SalesforcePageContent from "./SalesforcePageContent";

export const metadata: Metadata = {
    title: "Salesforce Services",
    description:
        "Kanshe Infotech delivers expert Salesforce consulting, implementation, and customization services using Apex, Visualforce, Lightning components. Boost your CRM output and revenue.",
    keywords: ["Salesforce consulting", "Salesforce implementation", "Salesforce customization", "CRM solutions", "Apex development", "Lightning components", "Kanshe Infotech Salesforce"],
};

export default function SalesforcePage() {
    return <SalesforcePageContent />;
}
