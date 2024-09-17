import {
  getCourse,
  markNoteAsCompleted,
  markResourceAsCompleted,
} from '@/actions/courses';
import TopicCard from '@components/courses/topic-card';
import { ICourseDetail } from '@/types/course';
import CourseDetailHeader from '@components/courses/course-detail-header';

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

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
          backgroundImage: `url(${STORAGE_URL}/${course?.course?.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={'min-h-[180px] md:min-h-[380px] w-full'}
      />
      <div className={'py-8 md:py-12 px-4 sm:px-6 lg:px-16 min-h-full'}>
        <CourseDetailHeader course={course} />
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
