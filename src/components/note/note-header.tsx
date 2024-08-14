'use client'

import { Warning2 } from "iconsax-react";
import { Dot } from "lucide-react";

interface INoteHeaderProps {
  noteTitle: string;
  courseTitle: string;
  userName: string;
}
export default function NoteHeader({
  noteTitle,
  courseTitle,
  userName,
}: INoteHeaderProps) {
  return (
    <div
      className={
        "min-h-[180px] v-stack gap-y-3 w-full shadow-md px-4 lg:px-24 py-4  top-[70px] z-20 bg-white"
      }
    >
      <div
        className={
          "flex gap-x-3 items-center md:w-max p-3 border-brand-yellow-primary border rounded-xl"
        }
      >
        <div className={"p-2 bg-[#FFF9E9] rounded-[21px]"}>
          <Warning2
            variant={"Bold"}
            size={16}
            className={"text-brand-yellow-primary"}
          />
        </div>
        <div className={"w-[90%] sm:w-full"}>
          <p className={"text-sm text-muted text-ellipsis truncate "}>
            Capturing or sharing content from the Guides in any form is STRICTLY
            PROHIBITED.
          </p>
        </div>
      </div>
      <div>
        <h1 className={"text-base md:text-2xl font-semibold"}>{noteTitle}</h1>
      </div>
      <hr className={"border-t border-gray-200"} />
      <div className={"flex flex-col md:flex-row gap-3 md:items-center"}>
        <p className={"text-muted md:text-base"}>
          Course: <span className={"text-[#3A7FA8]"}>{courseTitle}</span>
        </p>
        <Dot className={"hidden md:block"} />
        <p className={"text-muted md:text-base"}>
          Reader:{" "}
          <span className={"text-primary font-semibold"}>{userName}</span>
        </p>
      </div>
    </div>
  );
}
