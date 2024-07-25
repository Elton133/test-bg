import Image from "next/image";
import { ArrowRight } from "iconsax-react";
import { Progress } from "@components/ui/progress";

interface CourseCardProps {
  courseName?: string;
  progress?: number;
  imageUrl?: string;
}

export default function CourseCard({
  courseName,
  progress,
  imageUrl,
}: CourseCardProps) {
  return (
    <div
      className={
        "h-stack p-[12.9px] lg:max-w-[460px] shadow-md w-full rounded-[18px] animate-once animate-fade-up"
      }
    >
      <div className={"v-stack stack-center"}>
        <Image
          src={
            imageUrl ||
            "https://res.cloudinary.com/dzpjlfcrq/image/upload/c_fill,w_300,h_300/v1721780876/c0e407a535283456f382c1a9d2c0c822_w46jpj.png"
          }
          alt={"course cover"}
          className={"rounded-lg"}
          width={70}
          height={70}
        />
      </div>
      <div className={"v-stack justify-between w-full"}>
        <div className={"flex justify-between w-full"}>
          <p className={"text-xs sm:text-sm font-semibold"}>{courseName}</p>
          <ArrowRight className={"text-muted text-base cursor-pointer"} />
        </div>
        <div className={"font-semibold text-xs sm:text-sm"}>
          <p className={""}>
            {`${progress || 0}% `}{" "}
            <span className={"text-muted"}>complete</span>
          </p>
          <Progress value={progress || 0} className={"h-2"} />
        </div>
      </div>
    </div>
  );
}
