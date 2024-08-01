import { Metadata } from "next";
import getUserSession from "@/actions/get-user";
import Image from "next/image";
import dayjs from "dayjs";
import Announcement from "@components/dashboard/announcement";
import Overview from "@components/dashboard/overview";
import Achievement from "@components/dashboard/achievement";
import { IUser } from "@/types/user";
import GetSupport from "@components/get-support";

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

export default async function Dashboard() {
  const user = await getUserSession();

  return (
    <main className="h-full v-stack gap-6 pb-8 lg:px-8 lg:py-6">
      <div className="max-w-screen-[1440px] mx-auto w-full 2xl:w-[75%] lg:h-[220px] relative bg-brand-yellow-primary lg:rounded-[20px] flex flex-col justify-center items-center">
        <div
          className={
            "w-full h-full absolute top-0 left-0 bg-blend-overlay opacity-40"
          }
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dzpjlfcrq/image/upload/c_fill,w_1440,h_600/v1721666326/d76a8943c5aeb3fd7598873b5ba28604_wysvb0.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={
            "lg:w-2/3 pt-[10%] sm:pt-[8%] lg:pt-0 pb-12 lg:pb-0 z-10 px-6 flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between"
          }
        >
          <div className={"flex gap-4 items-center"}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${user?.avatar}`}
              alt={"user avatar"}
              width={120}
              height={120}
              className={
                "w-20 h-20 sm:w-auto sm:h-auto rounded-[5px] border border-black"
              }
            />
            <div>
              <p
                className={
                  "text-primary text-lg sm:text-2xl font-bold animate-fade animate-once"
                }
              >
                Welcome, {`${user?.fname}`} to your BSG Hub
              </p>
              <p
                className={"text-primary text-sm animate-once animate-fade-up"}
              >
                Joined since {`${dayjs(user?.created_at).format("MMMM YYYY")}`}
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721831113/logo_rnup6z.svg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className={"w-[120px] h-[120px] mx-8"}
          />
          {/*<Image*/}
          {/*  src={*/}
          {/*    "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721831113/logo_rnup6z.svg"*/}
          {/*  }*/}
          {/*  alt={"bsg logo"}*/}
          {/*  width={120}*/}
          {/*  height={120}*/}
          {/*/>*/}
        </div>
      </div>
      <div className={"lg:px-4 v-stack gap-6"}>
        <div className={"px-4"}>
          <Announcement />
        </div>
        <div className={"px-4"}>
          <Overview />
        </div>
        <div className={''}>
          <Achievement user={user as IUser} />
        </div>
        <div className={"px-4 mx-auto"}>
          <GetSupport />
        </div>
      </div>
    </main>
  );
}
