import type { Metadata } from "next";
import AWSPageContent from "./AWSPageContent";

export const metadata: Metadata = {
    title: "AWS Services",
    description:
        "Kanshe Infotech leverages Amazon Web Services for scalable cloud solutions — EC2, S3, Lambda, CloudFront, RDS, VPC, IAM, and Elastic Beanstalk services.",
    keywords: ["AWS services", "Amazon Web Services", "AWS EC2", "AWS Lambda", "AWS S3", "cloud solutions", "Kanshe Infotech AWS"],
};

export default function AWSPage() {
    return <AWSPageContent />;
}
