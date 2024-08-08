import { Button } from "@components/ui/button";
import { getServerSession } from "next-auth/next"
import Image from "next/image";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);
  return (
    <section className={"py-6 lg:px-8"}>
      <div className={"v-stack px-4"}>
        <h1 className={"text-2xl font-semibold"}>Account</h1>
      </div>
      <div className={"max-w-3xl w-full mx-auto my-10"}>
        <div
          className={
            "flex flex-col items-start sm:flex-row sm:justify-between gap-3 pb-4 px-4"
          }
        >
          <div className={"flex flex-col"}>
            <h2 className={"text-lg font-medium"}>Profile insight</h2>
            {/*<Button className={"text-xs"}>Edit profile</Button>*/}
            <p className={"text-muted text-sm"}>
              An overview of your achievements.
            </p>
          </div>
          <Button className={"text-xs"}>
            <Link href={'/dashboard/account-settings'}>Edit profile</Link>
          </Button>
        </div>
        <hr />
        <div className={"flex flex-col gap-"}>
          <div
            className={"flex flex-col justify-center items-center py-4 gap-3"}
          >
            <Image
              src={session?.user ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${session?.user.image}` : `https://ui-avatars.com/api/?name=${session?.user.firstName}+${session?.user.lastName}&background=random&color=fff`}
              alt={session?.user.name as string}
              className={"rounded-full"}
              width={120}
              height={120}
            />
            <p className={"text-sm font-semibold"}>{session?.user.name}</p>
          </div>
          <hr />
          <div
            className={
              "flex items-start w-full justify-around py-4 text-center px-4"
            }
          >
            <div className={"flex flex-col gap-2"}>
              <p className={"text-xs md:text-sm text-muted"}>
                Longest streak 🔥
              </p>
              <p className={"text-base"}>20 days</p>
              <p className={"text-xs text-muted"}>May 16 - Jun 4</p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-xs md:text-sm text-muted"}>Badges earned</p>
              <p className={"text-base"}>2</p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"text-xs md:text-sm text-muted"}>
                Completed courses
              </p>
              <p className={"text-base"}>2</p>
            </div>
          </div>
          <hr />
          <div className={"py-3"}>
            <div className={"px-4"}>
              <p className={"text-sm font-semibold"}>Course Badges</p>
              <p className={"text-xs text-muted"}>
                Track your standing in each course to assess your readiness for
                the bar exam
              </p>
            </div>
            <div className={"flex justify-start items-center gap-x-6 py-4 px-4"}>
              <Image
                src={
                  "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721922927/BSG/a42885293a2f85666136f794ef551792_a84nnu.png"
                }
                alt={"course badges"}
                className={"max-w-[51px]"}
                width={300}
                height={300}
              />
              <Image
                src={
                  "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721922927/BSG/a42885293a2f85666136f794ef551792_a84nnu.png"
                }
                alt={"course badges"}
                className={"max-w-[51px]"}
                width={300}
                height={300}
              />
              <Image
                src={
                  "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721922927/BSG/a42885293a2f85666136f794ef551792_a84nnu.png"
                }
                alt={"course badges"}
                className={"max-w-[51px]"}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
