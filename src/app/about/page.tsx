import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Kanshe Infotech — a fast-emerging software development and consulting services provider focused on cost-effective, qualitative, and timely delivered solutions. Based in Katy, TX.",
    keywords: [
        "About Kanshe Infotech",
        "IT consulting company",
        "software development company",
        "Katy TX IT company",
        "IT staffing agency",
    ],
    openGraph: {
        title: "About Us | Kanshe Infotech",
        description:
            "Discover our story, expertise, and commitment to delivering world-class IT solutions and staffing services.",
    },
};

export default function AboutPage() {
    return <AboutPageContent />;
}
