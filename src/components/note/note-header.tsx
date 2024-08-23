"use client";

import { Warning2 } from "iconsax-react";
import { ArrowRightToLine, Dot } from "lucide-react";
import NoteSidePanel from "@components/note/note-side-panel";
import { useNoteSidePanel } from "@/context/note-side-panel-context";
import { ITopic } from "@/types/course";
import {cn} from "@/lib/utils";
import {useSideBar} from "@/context/side-bar-context";

interface INoteHeaderProps {
  topic: ITopic;
  userName: string;
}
export default function NoteHeader({ topic, userName }: INoteHeaderProps) {
  const { openSidePanel, toggleSidePanel } = useNoteSidePanel();
  const {openSideBar} = useSideBar()

  return (
    <section>
      <div
        className={cn(
          "max-h-[180px] flex flex-col gap-y-3 w-full shadow-md px-4 lg:px-24 pt-4 pb-2 relative bg-white",
          {
            "hidden md:flex": openSidePanel,
          },
        )}
      >
        <div
          className={
            "flex gap-x-3 items-center md:w-max p-1 border-brand-yellow-primary border rounded-xl"
          }
        >
          <div
            className={
              "p-2 bg-[#FFF9E9] rounded-[21px] animate-pulse animate-iteration-3"
            }
          >
            <Warning2
              variant={"Bold"}
              size={16}
              className={"text-brand-yellow-primary"}
            />
          </div>
            <div className={"w-[90%] sm:w-full"}>
              <p className={"text-xs text-muted text-ellipsis truncate "}>
                Capturing or sharing content from the Guides in any form is
                STRICTLY PROHIBITED.
              </p>
            </div>
        </div>
        {/*<div>*/}
        {/*  <h1 className={"text-base font-semibold"}>*/}
        {/*    {topic?.noteTitle}*/}
        {/*  </h1>*/}
        {/*</div>*/}
        <hr className={"border-t border-gray-200"} />
        <div
          className={"flex flex-col md:flex-row gap-3 md:items-center text-sm"}
        >
          <div>
            <p className={"text-muted truncate"}>
              Topic: <span className={"text-[#3A7FA8]"}>{topic.noteTitle}</span>
            </p>
          </div>
          <Dot className={"hidden md:block"} />

          <p className={"text-muted truncate"}>
            Course:{" "}
            <span className={"text-[#3A7FA8]"}>{topic.course?.title}</span>
          </p>
          <Dot className={"hidden md:block"} />
          <p className={"text-muted"}>
            Reader:{" "}
            <span className={"font-semibold text-brand-text"}>{userName}</span>
          </p>
        </div>
        {!openSideBar && (
          <button
            onClick={toggleSidePanel}
            className={
              "absolute hidden md:block top-0 left-1 border p-1 hover:scale-105 bg-white cursor-pointer"
            }
          >
            <ArrowRightToLine />
          </button>
        )}
      </div>
      {openSidePanel && <NoteSidePanel topic={topic} userName={userName} />}
    </section>
  );
}
