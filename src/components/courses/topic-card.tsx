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
import SubscribeToCourseModal from '@components/courses/subscribe-to-course-modal';

interface TopicCardProps {
  note: ITopic;
  type?: string;
  noteStatuses: INoteStatuses;
  markNoteAsCompleted: (id: string) => void;
  markResourceAsCompleted: (
    id: string,
    data: IResourcesCompleted
  ) => void;
  enrolled?: boolean;
}

export default function TopicCard({
  note,
  noteStatuses,
  markNoteAsCompleted,
  markResourceAsCompleted,
  enrolled,
}: TopicCardProps) {
  return (
    <Accordion type={'single'} collapsible>
      <AccordionItem
        value={note?.slug}
        className={'bg-[#F1F2F2] px-4 md:px-8 py-2 rounded-lg'}
      >
        <div className={'relative items-center'}>
          {enrolled && (
            <Checkbox
              className={'absolute top-[20px] object-center'}
              onCheckedChange={() => {
                markNoteAsCompleted(note?.id);
              }}
              checked={noteStatuses?.note_status}
            />
          )}
          <AccordionTrigger className={'text-left'}>
            <p className={'text-base pl-6'}>{note?.noteTitle}</p>
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <div className={'pl-12'}>
            <div>
              <div className={'h-stack w-full items-center'}>
                {enrolled && (
                  <Checkbox
                    className={'rounded-sm'}
                    onCheckedChange={() => {
                      markResourceAsCompleted(note?.id, {
                        study_guide_completed:
                          !noteStatuses?.study_guide_status,
                      });
                    }}
                    checked={noteStatuses?.study_guide_status}
                  />
                )}
                {enrolled ? (
                  <Link
                    href={`/dashboard/course/study-guide/${note?.slug}`}
                    className={
                      'text-base text-[#3A7FA8] hover:underline'
                    }
                  >
                    Study Guide
                  </Link>
                ) : (
                  <SubscribeToCourseModal buttonText={'Study Guide'} />
                )}
              </div>
              <div className={'h-stack w-full items-center'}>
                {enrolled && (
                  <Checkbox
                    className={'rounded-sm'}
                    onCheckedChange={() => {
                      markResourceAsCompleted(note?.id, {
                        quiz_completed: !noteStatuses?.quiz_status,
                      });
                    }}
                    checked={noteStatuses?.quiz_status}
                  />
                )}
                {enrolled ? (
                  <Link
                    href={`/dashboard/course/quiz/${note?.slug}`}
                    className={
                      'text-base text-[#3A7FA8] hover:underline'
                    }
                  >
                    Multiple Choice Questions
                  </Link>
                ) : (
                  <SubscribeToCourseModal
                    buttonText={'Multiple Choice Questions'}
                  />
                )}
              </div>
              <div className={'h-stack w-full items-center'}>
                {enrolled && (
                  <Checkbox
                    className={'rounded-sm'}
                    onCheckedChange={() => {
                      markResourceAsCompleted(note?.id, {
                        pqi_completed: !noteStatuses?.pqi_status,
                      });
                    }}
                    checked={noteStatuses?.pqi_status}
                  />
                )}
                {enrolled ? (
                  <Link
                    href={`/dashboard/course/past-question/${note?.slug}`}
                    className={
                      'text-base text-[#3A7FA8] hover:underline'
                    }
                  >
                    Past Question Index
                  </Link>
                ) : (
                  <SubscribeToCourseModal
                    buttonText={'Past Question Index'}
                  />
                )}
              </div>
              <div className={'h-stack w-full items-center'}>
                {enrolled && (
                  <Checkbox
                    className={'rounded-sm'}
                    onCheckedChange={() => {
                      markResourceAsCompleted(note?.id, {
                        case_brief_completed:
                          !noteStatuses?.case_brief_status,
                      });
                    }}
                    checked={noteStatuses?.case_brief_status}
                  />
                )}
                {enrolled ? (
                  <p className={'text-base text-[#3A7FA8]'}>
                    Case Briefs
                  </p>
                ) : (
                  <SubscribeToCourseModal buttonText={'Case Briefs'} />
                )}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
