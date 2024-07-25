import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import NavBar from "@components/core/navbar";
import SessionWrapper from "@/providers/session-wrapper";
import { InfoCircle } from "iconsax-react";
import { CircleCheck } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Best Study Guide",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen h-full`}>
        <SessionWrapper>
            <NavBar />
            {children}
            <Toaster
              icons={{
                error: <InfoCircle color={"red"} size={16} />,
                success: <CircleCheck color={"#063231"} size={16} />,
              }}
              position={"top-center"}
            />
        </SessionWrapper>
      </body>
    </html>
  );
}
