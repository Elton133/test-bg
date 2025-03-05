'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ICaseBrief, INoteStatuses, ITopic } from '@/types/course';
import { Checkbox } from '@components/ui/checkbox';
import Link from 'next/link';
import { IResourcesCompleted } from '@/actions/courses';
import SubscribeToCourseModal from '@components/courses/subscribe-to-course-modal';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface TopicCardProps {
  note: {
    note: ITopic;
    case_brief: ICaseBrief[];
  };
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
  const [openCaseBriefs, setOpenCaseBriefs] = useState(false);

  const handleToggleCaseBriefs = () => {
    setOpenCaseBriefs(!openCaseBriefs);
  };

  return (
    <Accordion type={'single'} collapsible>
      <AccordionItem
        value={note?.note?.slug}
        className={
          'bg-[#F1F2F2] px-4 md:px-8 py-2 rounded-lg animate-once animate-fade-up'
        }
      >
        <div className={'relative items-center'}>
          {enrolled && (
            <Checkbox
              className={'absolute top-[20px] object-center'}
              onCheckedChange={() => {
                markNoteAsCompleted(note?.note?.id);
              }}
              checked={noteStatuses?.note_status}
            />
          )}
          <AccordionTrigger className={'text-left'}>
            <p className={'text-base pl-6'}>{note?.note?.noteTitle}</p>
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
                      markResourceAsCompleted(note?.note?.id, {
                        study_guide_completed:
                          !noteStatuses?.study_guide_status,
                      });
                    }}
                    checked={noteStatuses?.study_guide_status}
                  />
                )}
                {enrolled ? (
                  <Link
                    href={`/dashboard/course/study-guide/${note?.note?.slug}`}
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
                      markResourceAsCompleted(note?.note?.id, {
                        quiz_completed: !noteStatuses?.quiz_status,
                      });
                    }}
                    checked={noteStatuses?.quiz_status}
                  />
                )}
                {enrolled ? (
                  <Link
                    href={`/dashboard/course/quiz/${note?.note?.slug}`}
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
                      markResourceAsCompleted(note?.note?.id, {
                        pqi_completed: !noteStatuses?.pqi_status,
                      });
                    }}
                    checked={noteStatuses?.pqi_status}
                  />
                )}
                {enrolled ? (
                  <Link
                    href={`/dashboard/course/past-question/${note?.note?.slug}`}
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
              {/* <div
                className={cn('h-stack w-full items-center', {
                  'items-start': openCaseBriefs,
                })}
              >
                {enrolled && (
                  <Checkbox
                    className={'rounded-sm'}
                    onCheckedChange={() => {
                      markResourceAsCompleted(note?.note?.id, {
                        case_brief_completed:
                          !noteStatuses?.case_brief_status,
                      });
                    }}
                    checked={noteStatuses?.case_brief_status}
                  />
                )}
                {enrolled ? (
                  <div>
                    <button
                      className={'text-base text-[#3A7FA8]'}
                      onClick={handleToggleCaseBriefs}
                    >
                      Case Briefs
                    </button>
                    {openCaseBriefs && (
                      <div className={'v-stack px-2 py-2'}>
                        {note?.case_brief?.map((caseBrief) => (
                          <Link
                            href={`/dashboard/course/case-briefs/${caseBrief.slug}?topic=${note?.note?.slug}`}
                            key={caseBrief.id}
                            className={cn(
                              'h-stack rounded-[5px] hover:underline animate-fade',
                              {}
                            )}
                          >
                            <p
                              className={
                                'text-sm truncate text-[#3A7FA8] hover:underline'
                              }
                            >
                              {caseBrief.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <SubscribeToCourseModal buttonText={'Case Briefs'} />
                )}
              </div> */}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
