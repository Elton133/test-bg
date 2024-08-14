import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ITopic } from "@/types/course";
import { Checkbox } from "@components/ui/checkbox";
import Link from "next/link";

interface TopicCardProps {
  note: ITopic;
  type?: string;
}

export default function TopicCard({ note }: TopicCardProps) {
  return (
    <Accordion type={"single"} collapsible>
      <AccordionItem
        value={note?.slug}
        className={"bg-[#F1F2F2] px-4 md:px-8 py-2 rounded-lg"}
      >
        <div className={"relative items-center"}>
          <Checkbox className={"absolute top-[20px] object-center"} />
          <AccordionTrigger className={'text-left'}>
            <p className={"text-base pl-6"}>{note?.noteTitle}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <div className={"pl-12"}>
            <div>
              <div className={"h-stack w-full items-center"}>
                <Checkbox className={"rounded-sm"} />
                <Link href={`/dashboard/course/study-guide/${note?.slug}`} className={"text-base text-[#3A7FA8]"}>Study Guide</Link>
              </div>
              <div className={"h-stack w-full items-center"}>
                <Checkbox className={"rounded-sm"} />
                <p className={"text-base text-[#3A7FA8]"}>
                  Multiple Choice Questions
                </p>
              </div>
              <div className={"h-stack w-full items-center"}>
                <Checkbox className={"rounded-sm"} />
                <p className={"text-base text-[#3A7FA8]"}>
                  Past Question Index
                </p>
              </div>
              <div className={"h-stack w-full items-center"}>
                <Checkbox className={"rounded-sm"} />
                <p className={"text-base text-[#3A7FA8]"}>Case Briefs</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
