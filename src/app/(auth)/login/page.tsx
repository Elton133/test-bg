import type { Metadata } from "next";
import SignInForm from "@components/forms/sign-in-form";

export const metadata: Metadata = {
  title: "BSG - Login",
  description: "Login to your BSG account",
  keywords: [
    "login",
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

export default function LoginPage() {
  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-2 sm:py-[2%]">
      <div className={"v-stack gap-6 h-full"}>
        <div className={"v-stack"}>
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className={"text-sm font-medium text-[#70787C]"}>
            Your journey to legal mastery begins here!
          </p>
        </div>
        <SignInForm />
      </div>
    </main>
  );
}
