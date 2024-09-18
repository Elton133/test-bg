'use client';

import Image from 'next/image';
import { ArrowRight } from 'iconsax-react';
import { Progress } from '@components/ui/progress';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import useAnimatedProgress from '@hooks/useAnimatedProgress';

interface CourseCardProps {
  courseName?: string;
  progress: number;
  imageUrl?: string;
  slug?: string;
}

export default function CourseCardList({
  courseName,
  progress,
  imageUrl,
  slug,
}: CourseCardProps) {
  const animatedProgress = useAnimatedProgress(progress);

  return (
    <div
      className={
        'h-stack p-[12.9px] lg:max-w-[460px] shadow-md w-full rounded-[18px] animate-once animate-fade-up'
      }
    >
      <div className={'v-stack stack-center max-w-[70px] max-h-[70px]'}>
        <Image
          src={
            imageUrl ||
            'https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721780876/BSG/c0e407a535283456f382c1a9d2c0c822_w46jpj.png'
          }
          alt={'course cover'}
          className={
            'rounded-lg max-w-[70px] max-h-[70px] w-full h-full object-cover'
          }
          width={70}
          height={70}
        />
      </div>
      <div className={'v-stack justify-between w-full'}>
        <Link
          href={`/dashboard/course/${slug}`}
          className={'flex justify-between w-full'}
        >
          <p className={'text-xs sm:text-sm font-semibold'}>
            {courseName}
          </p>
          <ArrowRight
            className={'text-muted text-base cursor-pointer'}
          />
        </Link>
        <div className={'font-semibold text-xs sm:text-sm v-stack'}>
          <div className={'flex items-center justify-between'}>
            <p className={''}>
              {`${progress || 0}% `}{' '}
              <span className={'text-muted'}>complete</span>
            </p>
            {animatedProgress === 100 && (
              <Check color={'#4CAF50'} size={16} strokeWidth={4} />
            )}
          </div>
          <Progress
            value={animatedProgress || 0}
            className={cn('h-2', {
              // 'bg-primary':
              //   progress !== undefined &&
              //   progressValue.toFixed() === '100.00',
            })}
          />
        </div>
      </div>
    </div>
  );
}
