import {
  getCourse,
  markNoteAsCompleted,
  markResourceAsCompleted,
  resetCourseProgress,
} from '@/actions/courses';
import { Progress } from '@components/ui/progress';
import { cn } from '@/lib/utils';
import TopicCard from '@components/courses/topic-card';
import ConfirmResetModal from '@components/courses/reset-course-modal';
import { ICourseDetail } from '@/types/course';

export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const course: ICourseDetail = await getCourse(params.slug);
  return (
    <section className={'w-full h-full'}>
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721780876/BSG/c0e407a535283456f382c1a9d2c0c822_w46jpj.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={'min-h-[180px] md:min-h-[380px] w-full'}
      />
      <div className={'py-8 md:py-12 px-4 sm:px-6 lg:px-16 min-h-full'}>
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
                value={course?.progress_percentage}
                className={cn('h-2', {
                  // "bg-primary": progress === 100,
                })}
              />
            </div>
            <ConfirmResetModal
              resetCourse={resetCourseProgress}
              courseID={course?.course?.id}
            />
          </div>
        </div>
        <div className={'py-6'}>
          <h2 className={'text-xl font-semibold'}>Topics</h2>
        </div>
        <div className={'v-stack gap-3'}>
          {course?.notes &&
            course?.notes.map((note) => (
              <TopicCard
                key={note?.note?.slug}
                note={note?.note}
                enrolled={course?.enroll_status === 'active'}
                noteStatuses={{
                  note_status: note?.note_status,
                  quiz_status: note?.quiz_status,
                  study_guide_status: note?.study_guide_status,
                  pqi_status: note?.pqi_status,
                  case_brief_status: note?.case_brief_status,
                }}
                markNoteAsCompleted={markNoteAsCompleted}
                markResourceAsCompleted={markResourceAsCompleted}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
