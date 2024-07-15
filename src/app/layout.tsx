import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "@components/core/nabar";

const poppins = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins"});

export const metadata: Metadata = {
    title: "The Best Study Guide",
    description: "We provide law students with a centralized platform, streamlining access to key resources for efficient bar exam preparation",
    keywords: ["law", "bar exam", "study", "guide", "lawyers", "students", "legal", "resources"],
    robots: "follow, index",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className}>
            <NavBar/>
            {children}
        </body>
        </html>
    );
}
