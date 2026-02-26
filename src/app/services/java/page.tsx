import type { Metadata } from "next";
import JavaPageContent from "./JavaPageContent";

export const metadata: Metadata = {
    title: "Java Development Services",
    description:
        "Kanshe Infotech delivers expert Java application development for web, mobile, enterprise, and standalone applications with innovative methodologies and best UX.",
    keywords: ["Java development", "Java application development", "enterprise Java", "web application development", "mobile app development", "Kanshe Infotech Java"],
};

export default function JavaPage() {
    return <JavaPageContent />;
}
