'use client';

import { ICourseDetail } from '@/types/course';
import { Progress } from '@components/ui/progress';
import { cn } from '@/lib/utils';
import ConfirmResetModal from '@components/courses/reset-course-modal';
import { resetCourseProgress } from '@/actions/courses';
import useAnimatedProgress from '@hooks/useAnimatedProgress';

export default function CourseDetailHeader({
  course,
}: {
  course: ICourseDetail;
}) {
  const animatedProgress = useAnimatedProgress(
    course?.progress_percentage
  );

  return (
    <div className={'v-stack'}>
      <h1 className={'text-[28px] md:text-[40px] font-bold'}>
        {course?.course?.title}
      </h1>
      <div
        className={
          'v-stack lg:h-stack justify-between items-start lg:items-center space-y-6'
        }
      >
        <div className={'max-w-[400px] w-full space-y-2'}>
          <p className={'font-semibold text-base'}>
            {course?.progress_percentage?.toFixed(0)}% complete
          </p>
          <Progress
            value={animatedProgress}
            className={cn('h-2', {
              // "bg-primary": progress === 100,
            })}
          />
        </div>
        {course?.enroll_status === 'active' && (
          <ConfirmResetModal
            resetCourse={resetCourseProgress}
            courseID={course?.course?.id}
          />
        )}
      </div>
    </div>
  );
}
