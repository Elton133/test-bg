import type { Metadata } from "next";
import Link from "next/link";
// import GoogleLogo from "@assets/google_logo.png";
// import EmailIcon from "@assets/email_icon.png";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "BSG - Welcome",
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
    <main className="max-w-[500px] py-[5%] sm:py-[8%] w-full px-4 lg:px-8">
      <div className={"v-stack gap-6"}>
        <div className={"v-stack"}>
          <h1 className="text-2xl font-semibold">Welcome to BSG!</h1>
          <p className={"text-sm font-medium text-[#70787C] tracking-[0.25px]"}>
            Sign in or create an account to get access to resources.
          </p>
        </div>
        <div className={"v-stack gap-2"}>
          <Link
            href={"https://api.thebeststudyguide.com/api/auth/google/redirect"}
            className={"h-stack w-full stack-center py-2 border rounded-lg"}
          >
            {/* <Image
              src={GoogleLogo}
              alt={"google logo"}
              width={24}
              height={24}
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
            >
              <path
                d="M22.9531 9.5H21.9531H11.9531V13.5H17.9531C17.0462 16.0613 14.8258 18.5 11.9531 18.5C8.30828 18.5 4.95312 15.1448 4.95312 11.5C4.95312 7.85515 8.30828 4.5 11.9531 4.5C13.6356 4.5 14.7877 5.46325 15.9531 6.5L18.9531 3.5C16.9885 1.66905 14.8505 0.5 11.9531 0.5C5.87838 0.5 0.953125 5.42525 0.953125 11.5C0.953125 17.5747 5.87838 22.5 11.9531 22.5C18.0279 22.5 22.9531 17.5747 22.9531 11.5C22.9531 10.7625 23.0912 10.1968 22.9531 9.5Z"
                fill="#FFC107"
              />
              <path
                d="M1.98438 6.5L5.98438 9.5C6.94969 6.94565 9.24859 5.5 11.9844 5.5C13.6452 5.5 14.8339 5.40619 15.9844 6.5L18.9844 3.5C17.0451 1.56828 14.8445 0.5 11.9844 0.5C7.81364 0.5 3.80317 2.81296 1.98438 6.5Z"
                fill="#FF3D00"
              />
              <path
                d="M11.9844 22.5C14.7979 22.5 17.0515 21.3146 18.9844 19.5L15.9844 16.5C14.854 17.3909 13.4045 17.5012 11.9844 17.5C9.15122 17.5 6.89064 16.1126 5.98438 13.5L1.98438 16.5C3.78709 20.1557 7.75099 22.5 11.9844 22.5Z"
                fill="#4CAF50"
              />
              <path
                d="M22.9844 9.5H21.9844H11.9844V13.5H17.9844C17.5505 14.6772 17.0169 15.747 15.9844 16.5L18.9844 19.5C18.7435 19.7114 22.9844 16.8112 22.9844 11.5C22.9844 10.7878 23.1224 10.1729 22.9844 9.5Z"
                fill="#1976D2"
              />
            </svg>
            <p className={"text-sm"}>Continue with Google</p>
          </Link>
          <Link
            href={'/login'}
            className={"h-stack w-full stack-center py-2 border rounded-lg"}
          >
            {/* <Image src={EmailIcon} alt={"google logo"} width={24} height={24} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21 3.5H6C4.95424 3.5 4 4.46613 4 5.5V6.5H3C1.95424 6.5 1 7.46613 1 8.5V19.5C1 20.5339 1.95424 21.5 3 21.5H18C19.0458 21.5 20 20.5339 20 19.5V18.5H21C22.0458 18.5 23 17.5339 23 16.5V5.5C23 4.46613 22.0458 3.5 21 3.5ZM3 7.5H18C18.3539 7.5 18.7914 7.24875 19 7.5L11 14.5C10.5778 14.848 10.4222 14.848 10 14.5L2 7.5C2.20862 7.24875 2.6461 7.5 3 7.5ZM19 17.5L14 12.5L19 8.5V17.5ZM7 12.5L2 17.5V8.5L7 12.5ZM18 20.5H3C2.37262 20.5 2 20.1203 2 19.5V18.5L8 13.5L9 14.5C9.352 14.7895 9.56872 15.5 10 15.5C10.4313 15.5 11.648 14.7895 12 14.5L13 13.5L19 18.5V19.5C19 20.1203 18.6274 20.5 18 20.5ZM22 16.5C22 17.1202 21.6274 17.5 21 17.5H20V8.5C20 7.46613 19.0458 6.5 18 6.5H5V5.5C5 4.87975 5.37262 4.5 6 4.5H21C21.6274 4.5 22 4.87975 22 5.5V16.5Z"
                fill="#063231"
              />
              <path d="M7 19.5H15V20.5H7V19.5Z" fill="#063231" />
              <path
                d="M15.9997 9.5L10.9997 12.5C10.7217 12.7043 11.2778 12.7043 10.9997 12.5L5.99974 9.5C5.7182 9.29266 5.63859 8.5 5.99974 8.5H15.9997C16.3613 8.5 16.2817 9.29266 15.9997 9.5Z"
                fill="#063231"
              />
            </svg>
            <p className={"text-sm"}>Continue with Email</p>
          </Link>
        </div>
        <div className={"h-stack stack-center text-xs font-medium"}>
          <p>
            Don’t have an account?{" "}
            <Link href={"/register"} className={"text-[#3A7FA8]"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
