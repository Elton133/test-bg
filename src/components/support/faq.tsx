"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/ui/collapsible";
import { Add } from "iconsax-react";
import { useState } from "react";
import {faq} from "@components/support/faq.data";
import {Minus} from "lucide-react";

export default function Faq() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faq.length).fill(false),
  );

  const toggleState = (index: number) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <div className={"v-stack gap-4 w-full"}>
      {faq.map((_, index) => (
        <Collapsible
          open={openStates[index]}
          onOpenChange={() => toggleState(index)}
          key={index}
          className={"bg-gray-100 min-w-full p-3 rounded-[12px]"}
        >
          <CollapsibleTrigger className={""}>
            <div className={"flex gap-2"}>
              {!openStates[index] ?
                 ( <Add className={""} />)
                  :
                  ( <Minus className={""} />)
              }
              <p className={"text-base font-semibold"}>
                How do I find course materials?
              </p>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent
            className={"animate-once animate-fade transition-all px-8"}
          >
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}
