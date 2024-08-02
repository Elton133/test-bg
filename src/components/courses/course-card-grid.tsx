import Image from "next/image";
import { Progress } from "@components/ui/progress";
import {cn} from "@/lib/utils";
import {Check} from "lucide-react";
import {ArrowRight} from "iconsax-react";

interface CourseCardProps {
  courseName?: string;
  progress?: number;
  imageUrl?: string;
}

export default function CourseCardGrid({
  courseName,
  progress,
  imageUrl,
}: CourseCardProps) {
  return (
    <div
      className={
        "v-stack p-3 sm:max-w-[280px] bg-white shadow-md w-full rounded-[18px] animate-once animate-flip-up animate-duration-300 animate-delay-200"
      }
    >
      <div className={"v-stack stack-center"}>
        <Image
          src={
            imageUrl ||
            "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721780876/c0e407a535283456f382c1a9d2c0c822_w46jpj.png"
          }
          alt={"course cover"}
          className={
            "rounded-lg w-full max-h-[180px] object-center object-cover"
          }
          width={303}
          height={180}
        />
      </div>
      <div className={"v-stack justify-between w-full py-4 gap-2"}>
        <div className={"flex justify-between w-full"}>
          <p className={"text-xs sm:text-sm font-semibold"}>{courseName}</p>
          {progress !== 100 && <ArrowRight className={"text-muted text-base cursor-pointer"} />}
        </div>
        <div className={"font-semibold text-xs sm:text-sm v-stack"}>
          <div className={"flex items-center justify-between"}>
            <p className={""}>
              {`${progress || 0}% `}{" "}
              <span className={"text-muted"}>complete</span>
            </p>
            {progress === 100 && (
              <Check color={"#4CAF50"} size={16} strokeWidth={4} />
            )}
          </div>
          <Progress
            value={progress || 0}
            className={cn("h-2", {
              "bg-primary": progress === 100,
            })}
          />
        </div>
      </div>
    </div>
  );
}
