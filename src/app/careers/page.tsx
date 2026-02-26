import type { Metadata } from "next";
import CareersPageContent from "./CareersPageContent";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Explore career opportunities at Kanshe Infotech. Join our award-winning IT staffing and software development team. Current job openings in Salesforce, Java, Azure, DevOps, AWS, and AI.",
    keywords: ["IT careers", "job openings", "IT jobs", "Kanshe Infotech careers", "software developer jobs", "Salesforce jobs", "DevOps jobs", "USA IT jobs"],
};

export default function CareersPage() {
    return <CareersPageContent />;
}
