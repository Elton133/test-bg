import Image from 'next/image';
import CourseCardWithButtons from '@components/courses/course-card-with-buttons';
import { getCourses } from '@/actions/courses';
import { Metadata } from 'next';
import { ICourse } from '@/types/course';

export const metadata: Metadata = {
  title: 'BSG - Shop',
  description:
    'Buy our courses now and access expertly crafted content tailored to ensure your success in the bar exam.',
  keywords: [
    'law',
    'buy courses',
    'study',
    'constitutional law',
    'family law',
    'students',
    'legal',
    'resources',
  ],
  robots: 'follow, index',
};

export default async function ShopPage() {
  const courses: ICourse[] = await getCourses();

  return (
    <div className={'h-full'}>
      <section
        className={
          'bg-primary w-full min-[710px] min--[calc(100vh_-_56px)] md:min-h-[360px] pt-8 px-4 md:px-12 md:py-12 pb-2'
        }
      >
        <div
          className={
            'flex flex-col md:flex-row h-full gap-12 sm:gap-2 2xl:px-24 justify-between'
          }
        >
          <div className={'flex flex-col gap-6 md:gap-y-12'}>
            <div className={'flex flex-col gap-2'}>
              <h1
                className={
                  'text-brand-yellow-primary text-[40px] font-black'
                }
              >
                BSG SHOP
              </h1>
              <p
                className={
                  'text-brand-yellow-accent font-medium text-base'
                }
              >
                Buy our courses now and access expertly crafted content
                tailored to ensure your success in the bar exam.
              </p>
            </div>
            <div className={'flex flex-col gap-4'}>
              <p className={'text-brand-yellow-primary'}>
                Here are our rates
              </p>
              <div
                className={
                  'grid grid-cols-3 lg:grid-flow-col gap-y-4 gap-x-[56px] justify-between'
                }
              >
                <PriceCard amount={1} price={120} />
                <PriceCard amount={3} price={300} />
                <PriceCard amount={5} price={450} />
                <PriceCard amount={7} price={600} />
              </div>
            </div>
          </div>
          <div
            className={
              'mx-auto animate-fade-up animate-once flex md:flex-col justify-center md:items-end w-full lg:w-1/2'
            }
          >
            <Image
              src={
                'https://res.cloudinary.com/dzpjlfcrq/image/upload/v1722344809/BSG/logo_rqte3l.png'
              }
              className={
                'max-w-[180px] max-h-[180px] w-full h-full md:max-w-[220px] md:max-h-[220px] lg:max-w-[290px] lg:max-h-[290px]'
              }
              alt={'BSG logo'}
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
      <section
        className={
          'w-full grid grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols- 2xl:grid-cols-5 px-4 md:px-8 py-8'
        }
      >
        {courses &&
          courses.map((course) => (
            <CourseCardWithButtons
              key={course.id}
              courseName={course.title}
              courseID={course.id}
              slug={course.slug}
              purchased={course.enroll_status === 'active'}
              // imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/public/courses/${course.image}`}
              progress={20}
            />
          ))}
      </section>
    </div>
  );
}

interface PriceCardProps {
  amount: number;
  price: number;
}

const PriceCard = ({ amount, price }: PriceCardProps) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <p className={'text-[#B2BFBF] text-sm'}>
        {amount > 1 ? `${amount} subjects` : `${amount} subject`}{' '}
      </p>
      <p className={'text-white font-bold'}>GHS {price}</p>
    </div>
  );
};
