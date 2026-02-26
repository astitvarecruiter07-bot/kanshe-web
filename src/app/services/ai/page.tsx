import type { Metadata } from "next";
import AIPageContent from "./AIPageContent";

export const metadata: Metadata = {
    title: "Artificial Intelligence Services",
    description:
        "Kanshe Infotech delivers AI and Machine Learning solutions — advanced analytics, automation, ML algorithms, and intelligent application development for enterprises.",
    keywords: ["AI services", "artificial intelligence", "machine learning", "AI consulting", "ML development", "automation", "Kanshe Infotech AI"],
};

export default function AIPage() {
    return <AIPageContent />;
}
