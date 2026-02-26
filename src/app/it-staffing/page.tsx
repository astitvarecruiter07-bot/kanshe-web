import type { Metadata } from "next";
import ITStaffingPageContent from "./ITStaffingPageContent";

export const metadata: Metadata = {
    title: "IT Staffing Services",
    description:
        "Kanshe Infotech offers permanent staffing, contract staffing, and contract-to-hire IT placement services. Top-tier talent acquisition with a commitment to quality and consistency.",
    keywords: ["IT staffing", "permanent staffing", "contract staffing", "contract to hire", "IT talent acquisition", "staff augmentation", "IT recruitment", "Kanshe Infotech staffing"],
};

export default function ITStaffingPage() {
    return <ITStaffingPageContent />;
}
