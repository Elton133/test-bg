import Image from "next/image";
import CourseCardList from "@components/courses/course-card-list";
import { Button } from "@components/ui/button";

export default function Overview() {
  return (
    <section className={"max-w-[920px] mx-auto w-full"}>
      <p className={"font-bold text-lg py-6"}>Overview</p>
      <div className={"v-stack lg:h-stack justify-between gap-6"}>
        <div
          className={
            "lg:max-w-[350px] w-full min-h-[252px] h-full bg-brand-yellow-accent px-8 py-6 v-stack justify-start items-center rounded-xl text-center animate-once animate-fade"
          }
        >
          <p className={"text-[#BEA152] font-semibold text-base"}>
            Your learning streak
          </p>
          <p className={"text-xs text-muted"}>
            Let’s get started! Begin your streak today and see how far you can
            go!
          </p>
          <Image
            src={
              "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721689006/a7f42597ebb9ef26eb917f88bd7c352c_nxaugi.gif"
            }
            alt={"flame"}
            width={30}
            height={40}
          />
          <p className={"text-base font-semibold"}>0 day</p>
          <p className={"text-muted text-sm"}>Jul 18</p>
        </div>
        <div className={"sm:w-full"}>
          <p className={"text-sm font-semibold"}>Pick up where you left off</p>
          <div className={"v-stack gap-4 pt-6"}>
            <CourseCardList
              courseName={"Civil Procedure"}
              progress={80}
              imageUrl={
                "https://res.cloudinary.com/dzpjlfcrq/image/upload/c_fill,w_300,h_300/v1721780876/c0e407a535283456f382c1a9d2c0c822_w46jpj.png"
              }
            />
            <CourseCardList
              courseName={"Legal"}
              progress={40}
              imageUrl={
                "https://res.cloudinary.com/dzpjlfcrq/image/upload/c_fill,w_300,h_300/v1721780876/c0e407a535283456f382c1a9d2c0c822_w46jpj.png"
              }
            />
          </div>
          {/* Empty State */}
          {/*{*/}
          {/*    <div className={'py-4'}>*/}
          {/*      <Button variant={'outline'} className={'text-primary bg-white px-12'}>Visit our shop</Button>*/}
          {/*    </div>*/}
          {/*}*/}
        </div>
      </div>
    </section>
  );
}
