"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Brain } from "lucide-react";

export default function AIPageContent() {
    return (
        <ServicePageLayout
            title="Artificial Intelligence"
            subtitle="AI & Machine Learning"
            heroDescription="Deep industry expertise with advanced analytics, automation and AI services to operate with agility from front office to back office."
            iconElement={
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-purple-400" />
                </div>
            }
            mainContent={[
                "Our deep industry expertise combined with advanced analytics, automation and AI services helps you operate with agility from front office to back office.",
                "It all begins with a strong AI strategy that empowers you to invest in the right systems, build responsible practices, and prepare your business and your people for tomorrow.",
                "We implement Artificial Intelligence techniques to aid enterprises to derive relevant insights from the information collected and processed from Big Data. We improve your operations and processors by deploying ML algorithms created by us within your software solutions.",
            ]}
            bulletPoints={[
                "Observe and analyze clients' preferences",
                "Point out patterns and inconsistencies",
                "Predict and decide with data-driven intelligence",
                "Automate repetitive processes for efficiency",
                "Build responsible AI practices for sustainable growth",
            ]}
            features={[
                { title: "AI Strategy", description: "Develop a comprehensive AI strategy that empowers you to invest in the right systems and build responsible practices." },
                { title: "Machine Learning", description: "Deploy ML algorithms to improve operations and processes with intelligent automation and predictions." },
                { title: "Advanced Analytics", description: "Derive relevant insights from Big Data using advanced analytics and pattern recognition." },
                { title: "Process Automation", description: "Automate front-to-back office operations with intelligent AI-driven workflows." },
                { title: "Predictive Modeling", description: "Build predictive models that forecast trends and enable proactive business decisions." },
                { title: "Natural Language Processing", description: "Implement NLP solutions for chatbots, sentiment analysis, and text understanding." },
            ]}
            whyUsContent="We guide you to avail the full range of advantages of machine learning. Our team of experts utilizes the machine learning service to develop superior quality software and deploy the best technology and statistical methods for your company."
        />
    );
}
