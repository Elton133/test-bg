import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSG - Home",
  description:
    "We provide law students with a centralized platform, streamlining access to key resources for efficient bar exam preparation",
  keywords: [
    "law",
    "bar exam",
    "study",
    "guide",
    "lawyers",
    "students",
    "legal",
    "resources",
  ],
  robots: "follow, index",
};

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}