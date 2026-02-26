import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Kanshe Infotech. Contact us for IT staffing, software development, and consulting services. Located at 2039 N Mason Rd #604, Katy, TX 77449.",
    keywords: ["contact Kanshe Infotech", "IT staffing contact", "Katy TX IT company", "hire IT talent", "IT consulting contact"],
};

export default function ContactPage() {
    return <ContactPageContent />;
}
