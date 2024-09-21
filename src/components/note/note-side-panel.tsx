import { ArrowRightToLine } from 'lucide-react';
import { useNoteSidePanel } from '@/context/note-side-panel-context';
import { ITopicDetail } from '@/types/course';
import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { DocumentText, Warning2 } from 'iconsax-react';
import { usePathname } from 'next/navigation';
import StudyGuide from '@components/icons/study-guide';
import QuestionsIcon from '@components/icons/questions';
import SparklingIcon from '@components/icons/sparkling';
import CaseBriefIcon from '@components/icons/case-brief';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import CaseBriefsMenu from '@components/case-briefs/case-briefs-menu';

export type NotePanelNavItem = {
  name: string;
  icon: JSX.Element;
  url: string;
};
const animationVariants = {
  open: {
    minWidth: '250px',
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 500,
      damping: 30,
      duration: 0.5,
    },
  },
  close: {
    minWidth: '0px',
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 500,
      damping: 30,
      duration: 0.5,
    },
  },
};

export default function NoteSidePanel({
  topic,
  userName,
  nextTopic,
}: {
  topic: ITopicDetail;
  userName: string;
  nextTopic?: ITopicDetail | null;
}) {
  const { toggleSidePanel, openSidePanel } = useNoteSidePanel();
  const controls = useAnimationControls();
  const path = usePathname();

  useEffect(() => {
    if (openSidePanel) {
      controls.start('open');
    } else {
      controls.start('close');
    }
  }, [controls, openSidePanel]);

  const resources = [
    {
      name: 'Study Guide',
      icon: <StudyGuide />,
      url: `/dashboard/course/study-guide/${topic?.slug}`,
    },
    {
      name: 'Past Question Index',
      icon: <QuestionsIcon />,
      url: `/dashboard/course/past-question/${topic?.slug}`,
    },
    {
      name: 'Multiple Choice',
      icon: <SparklingIcon />,
      url: `/dashboard/course/quiz/${topic?.slug}`,
    },
    {
      name: 'Case Briefs',
      icon: <CaseBriefIcon />,
      url: `/dashboard/course/case-briefs/${topic?.slug}`,
    },
  ];

  return (
    <motion.div
      className={
        'md:max-w-[250px] md:fixed left-[96px] top-[78px] border-[0.5px] z-20 h-full bg-white animate-fade-down md:animate-none'
      }
      animate={controls}
      variants={animationVariants}
    >
      <button
        onClick={toggleSidePanel}
        className={cn(
          'absolute hidden md:block -right-[34px] z-50 border-[0.5px] p-1 hover:scale-105 bg-white cursor-pointer rotate-180',
          {}
        )}
      >
        <ArrowRightToLine />
      </button>
      <div className={'md:hidden w-full flex justify-end px-4 py-2'}>
        <button
          className={cn(
            'rounded-full border right-4 flex justify-center items-center min-w-8 min-h-8',
            {
              'place-self-end': openSidePanel,
            }
          )}
          onClick={toggleSidePanel}
        >
          <ArrowRightToLine size={16} color={'#706F66 '} />
        </button>
      </div>
      <div
        className={
          'v-stack gap-6 p-3 no-scrollbar overflow-y-scroll h-full'
        }
      >
        <h1 className={'text-lg font-semibold'}>{topic?.noteTitle}</h1>
        <hr className={'border-t border-gray-200'} />
        <div className={'v-stack gap-y-4 text-sm'}>
          <p className={'text-muted font-medium'}>
            Course:{' '}
            <span className={'text-[#3A7FA8]'}>
              {topic?.course?.title}
            </span>
          </p>
          <p className={'text-muted'}>
            Reader:{' '}
            <span className={'text-primary font-semibold'}>
              {userName}
            </span>
          </p>
        </div>
        <div
          className={
            'flex gap-x-3 items-center p-3 border-brand-yellow-primary border rounded-xl'
          }
        >
          <div
            className={
              'p-2 bg-[#FFF9E9] place-self-start rounded-[21px] animate-pulse animate-iteration-3'
            }
          >
            <Warning2
              variant={'Bold'}
              size={16}
              className={'text-brand-yellow-primary'}
            />
          </div>
          <div className={''}>
            <p className={'text-xs text-muted'}>
              Capturing or sharing content from the Guides in any form
              is STRICTLY PROHIBITED.
            </p>
          </div>
        </div>
        <div className={'v-stack'}>
          <h1 className={'text-base font-semibold'}>Resources</h1>
          <hr className={'border-t border-gray-200'} />
          <div className={'v-stack py-2'}>
            {resources.map((item, index) => {
              if (item.name === 'Case Briefs') {
                return (
                  <CaseBriefsMenu
                    navItem={item}
                    key={index}
                    caseBriefs={topic?.case_brief}
                    topicSlug={topic?.slug}
                  />
                );
              }
              return (
                <Link
                  href={item.url}
                  key={index}
                  className={cn(
                    'h-stack p-3 rounded-[5px] hover:scale-105 transition-all',
                    {
                      'bg-[#FEF2D2] hover:scale-0 transition-none':
                        path === item.url,
                    }
                  )}
                  onClick={toggleSidePanel}
                >
                  {item.icon}
                  <p className={'text-sm'}>{item.name}</p>
                </Link>
              );
            })}
          </div>
          {nextTopic && (
            <div className={'v-stack gap-3 md:pb-24 pb-4'}>
              <h1 className={'text-base font-semibold'}>Next Topic</h1>
              <hr className={'border-t border-gray-200'} />
              <Link
                href={`/dashboard/course/study-guide/${nextTopic?.slug}`}
                onClick={toggleSidePanel}
                className={
                  'text-[#3A7FA8] inline-flex items-center text-sm gap-1 hover:underline'
                }
              >
                <DocumentText variant={'Bold'} size={16} />
                {nextTopic?.noteTitle}
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
