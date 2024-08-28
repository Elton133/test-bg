'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { INoteStatuses, ITopic } from '@/types/course';
import { Checkbox } from '@components/ui/checkbox';
import Link from 'next/link';
import { IResourcesCompleted } from '@/actions/courses';

interface TopicCardProps {
  note: ITopic;
  type?: string;
  noteStatuses: INoteStatuses;
  markNoteAsCompleted: (id: string) => void;
  markResourceAsCompleted: (
    id: string,
    data: IResourcesCompleted
  ) => void;
}

export default function TopicCard({
  note,
  noteStatuses,
  markNoteAsCompleted,
  markResourceAsCompleted,
}: TopicCardProps) {
  return (
    <Accordion type={'single'} collapsible>
      <AccordionItem
        value={note?.slug}
        className={'bg-[#F1F2F2] px-4 md:px-8 py-2 rounded-lg'}
      >
        <div className={'relative items-center'}>
          <Checkbox
            className={'absolute top-[20px] object-center'}
            onCheckedChange={async () => {
              const res = await markNoteAsCompleted(note?.id);
            }}
            defaultChecked={noteStatuses?.note_status}
          />
          <AccordionTrigger className={'text-left'}>
            <p className={'text-base pl-6'}>{note?.noteTitle}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <div className={'pl-12'}>
            <div>
              <div className={'h-stack w-full items-center'}>
                <Checkbox
                  className={'rounded-sm'}
                  onCheckedChange={async () => {
                    const res = await markResourceAsCompleted(
                      note?.id,
                      {
                        study_guide_completed:
                          !noteStatuses?.study_guide_status,
                      }
                    );
                    console.log(res);
                  }}
                  defaultChecked={noteStatuses?.study_guide_status}
                />
                <Link
                  href={`/dashboard/course/study-guide/${note?.slug}`}
                  className={'text-base text-[#3A7FA8] hover:underline'}
                >
                  Study Guide
                </Link>
              </div>
              <div className={'h-stack w-full items-center'}>
                <Checkbox
                  className={'rounded-sm'}
                  onCheckedChange={async () => {
                    const res = await markResourceAsCompleted(
                      note?.id,
                      {
                        quiz_completed: !noteStatuses?.quiz_status,
                      }
                    );
                  }}
                  defaultChecked={noteStatuses?.quiz_status}
                />
                <Link
                  href={`/dashboard/course/quiz/${note?.slug}`}
                  className={'text-base text-[#3A7FA8] hover:underline'}
                >
                  Multiple Choice Questions
                </Link>
              </div>
              <div className={'h-stack w-full items-center'}>
                <Checkbox
                  className={'rounded-sm'}
                  onCheckedChange={async () => {
                    const res = await markResourceAsCompleted(
                      note?.id,
                      {
                        pqi_completed: !noteStatuses?.pqi_status,
                      }
                    );
                  }}
                  defaultChecked={noteStatuses?.pqi_status}
                />
                <Link
                  href={`/dashboard/course/past-question/${note?.slug}`}
                  className={'text-base text-[#3A7FA8] hover:underline'}
                >
                  Past Question Index
                </Link>
              </div>
              <div className={'h-stack w-full items-center'}>
                <Checkbox
                  className={'rounded-sm'}
                  onCheckedChange={async () => {
                    const res = await markResourceAsCompleted(
                      note?.id,
                      {
                        case_brief_completed:
                          !noteStatuses?.case_brief_status,
                      }
                    );
                  }}
                  defaultChecked={noteStatuses?.case_brief_status}
                />
                <p className={'text-base text-[#3A7FA8]'}>
                  Case Briefs
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
