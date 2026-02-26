import type { Metadata } from "next";
import DevOpsPageContent from "./DevOpsPageContent";

export const metadata: Metadata = {
    title: "DevOps Services",
    description:
        "Kanshe Infotech DevOps solutions — CI/CD, Docker, Kubernetes, AWS DevOps, Azure DevOps, and Google DevOps consulting for 80% faster time-to-market.",
    keywords: ["DevOps services", "CI/CD", "Docker", "Kubernetes", "AWS DevOps", "Azure DevOps", "DevOps consulting", "Kanshe Infotech DevOps"],
};

export default function DevOpsPage() {
    return <DevOpsPageContent />;
}
