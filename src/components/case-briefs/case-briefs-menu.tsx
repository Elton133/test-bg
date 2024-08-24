'use client';

import { NotePanelNavItem } from '@components/note/note-side-panel';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { ICaseBrief } from '@/types/course';
import Link from 'next/link';

interface CaseBriefsMenuProps {
  navItem: NotePanelNavItem;
  caseBriefs?: ICaseBrief[];
  topicSlug: string;
}

export default function CaseBriefsMenu({
  navItem,
  caseBriefs,
  topicSlug,
}: CaseBriefsMenuProps) {
  const path = usePathname();

  return (
    <div className={'v-stack gap-2 w-full'}>
      <Accordion
        type={'single'}
        collapsible
        className={'min-w-full px-3 rounded-xl hover:no-underline'}
      >
        <AccordionItem
          value={navItem.name}
          className={'hover:no-underline border-b-0'}
        >
          <AccordionTrigger className={''}>
            <div
              className={cn(
                'h-stack rounded-[5px] items-center justify-between',
                {
                  'bg-[#DAE0E0]': path === navItem.url,
                }
              )}
            >
              {navItem.icon}
              <p className={'text-sm'}>{navItem.name}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={'animate-once animate-fade transition-all px-'}
          >
            <div className={'v-stack'}>
              {caseBriefs?.map((caseBrief) => (
                <Link
                  href={`/dashboard/course/case-briefs/${caseBrief.slug}?topic=${topicSlug}`}
                  key={caseBrief.id}
                  className={cn('h-stack rounded-[5px]', {
                    'bg-[#DAE0E0]':
                      path === `/case-briefs/${caseBrief.id}`,
                  })}
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
