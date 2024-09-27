import Image from 'next/image';
import CourseCardList from '@components/courses/course-card-list';
import { Button } from '@components/ui/button';
import { getCourses } from '@/actions/courses';
import Link from 'next/link';
import { ICourse, Streak } from '@/types/course';
import { getStreak } from '@/actions/streak';
import dayjs from 'dayjs';

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default async function Overview() {
  const courses: ICourse[] = await getCourses();
  const streak: Streak = await getStreak();

  const purchasedCourses =
    courses &&
    courses.filter((item) => item.enroll_status === 'active');

  return (
    <section className={'max-w-[920px] mx-auto w-full'}>
      <p className={'font-bold text-lg py-6'}>Overview</p>
      <div className={'v-stack lg:h-stack justify-between gap-6'}>
        <div
          className={
            'lg:max-w-[350px] w-full min-h-[252px] h-full bg-brand-yellow-accent px-8 py-6 v-stack justify-start items-center shadow-md rounded-xl text-center animate-once animate-fade'
          }
        >
          <p className={'text-[#BEA152] font-semibold text-base'}>
            Your learning streak
          </p>
          <p className={'text-xs text-muted'}>
            Let’s get started! Begin your streak today and see how far
            you can go!
          </p>
          <Image
            src={
              'https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721689006/BSG/a7f42597ebb9ef26eb917f88bd7c352c_nxaugi.gif'
            }
            alt={'flame'}
            width={30}
            height={40}
          />
          <p className={'text-base font-semibold'}>
            {streak?.streak_count > 1
              ? `${streak?.streak_count} days`
              : `${streak?.streak_count} day`}
          </p>
          <p className={'text-muted text-sm'}>
            {streak?.streak_count > 1
              ? `${streak?.first_streak_date} - present`
              : dayjs().format('MMM D')}
          </p>
        </div>
        <div className={'sm:w-full'}>
          <p className={'text-sm font-semibold'}>
            Pick up where you left off
          </p>
          <div className={'v-stack gap-4 pt-6'}>
            {courses &&
              purchasedCourses
                .slice(0, 2)
                // .sort((a, b) => b.updated_at - a.updated_at)
                .map((course) => (
                  <CourseCardList
                    key={course.id}
                    courseName={course.title}
                    progress={course?.progress}
                    slug={course.slug}
                    imageUrl={`${STORAGE_URL}/${course.image}`}
                  />
                ))}
          </div>
          {courses && purchasedCourses.length === 0 && (
            <div className={'py-4'}>
              <Button
                variant={'outline'}
                className={'text-primary bg-white px-12'}
              >
                <Link href={'/dashboard/shop'}>Visit our shop</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
