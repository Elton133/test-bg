import { Button } from '@components/ui/button';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import Link from 'next/link';
import { Streak } from '@/types/course';
import { getStreak } from '@/actions/streak';
import { getAchievements } from '@/actions/courses';

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default async function AccountPage() {
  const session = await getServerSession(authOptions);
  const streak: Streak = await getStreak();
  const achievements = await getAchievements();

  return (
    <section className={'py-6 lg:px-8'}>
      <div className={'v-stack px-4'}>
        <h1 className={'text-2xl font-semibold'}>Account</h1>
      </div>
      <div className={'max-w-3xl w-full mx-auto my-10'}>
        <div
          className={
            'flex flex-col items-start sm:flex-row sm:justify-between gap-3 pb-4 px-4'
          }
        >
          <div className={'flex flex-col'}>
            <h2 className={'text-lg font-medium'}>Profile insight</h2>
            {/*<Button className={"text-xs"}>Edit profile</Button>*/}
            <p className={'text-muted text-sm'}>
              An overview of your achievements.
            </p>
          </div>
          <Button className={'text-xs'}>
            <Link href={'/dashboard/account-settings'}>
              Edit profile
            </Link>
          </Button>
        </div>
        <hr />
        <div className={'flex flex-col gap-'}>
          <div
            className={
              'flex flex-col justify-center items-center py-4 gap-3'
            }
          >
            <Image
              src={`${session?.user.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${session?.user.image}` : `https://ui-avatars.com/api/?name=${session?.user.firstName}+${session?.user.lastName}&background=063231&color=fff`}`}
              alt={session?.user.name as string}
              className={'rounded-full'}
              width={120}
              height={120}
            />
            <p className={'text-sm font-semibold'}>
              {session?.user.name}
            </p>
          </div>
          <hr />
          <div
            className={
              'flex items-start w-full justify-around py-4 text-center px-4'
            }
          >
            <div className={'flex flex-col gap-2'}>
              <p className={'text-xs md:text-sm text-muted'}>
                Longest streak 🔥
              </p>
              <p className={'text-base'}>
                {streak?.streak_count > 1
                  ? `${streak?.streak_count} days`
                  : `${streak?.streak_count} day`}
              </p>
              <p className={'text-xs text-muted'}>
                {streak?.first_streak_date} - present
              </p>
            </div>
            <div className={'flex flex-col gap-2'}>
              <p className={'text-xs md:text-sm text-muted'}>
                Badges earned
              </p>
              <p className={'text-base'}>{achievements?.length}</p>
            </div>
            <div className={'flex flex-col gap-2'}>
              <p className={'text-xs md:text-sm text-muted'}>
                Completed courses
              </p>
              <p className={'text-base'}>{achievements?.length}</p>
            </div>
          </div>
          <hr />
          <div className={'py-3'}>
            <div className={'px-4'}>
              <p className={'text-sm font-semibold'}>Course Badges</p>
              <p className={'text-xs text-muted'}>
                Track your standing in each course to assess your
                readiness for the bar exam
              </p>
            </div>
            <div
              className={
                'flex justify-start items-center gap-x-6 py-4 px-4 max-w-[50px] w-full'
              }
            >
              {achievements?.length > 0 &&
                achievements.map((achievement, index) => (
                  <Image
                    key={`${achievement.course}-${index}`}
                    src={`${STORAGE_URL}/${achievement.badge}`}
                    alt={achievement.course}
                    width={70}
                    height={70}
                    // className={
                    //   'max-w-[70px] w-full max-h-[70px] h-full'
                    // }
                  />
                ))}
            </div>
            {achievements?.length === 0 && (
              <div className="v-stack items-center gap-4 text-sm">
                <div
                  className={
                    'h-stack gap-3 flex-wrap stack-center items-center'
                  }
                >
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Image
                      key={index}
                      src={
                        'https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721859469/BSG/Frame_2_olaoiv.svg'
                      }
                      alt={'badge'}
                      width={38}
                      height={50}
                    />
                  ))}
                </div>
                <p className="text-[#70787C] max-w-[280px] w-full text-center">
                  Your achievements will appear here when you complete a
                  course
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
