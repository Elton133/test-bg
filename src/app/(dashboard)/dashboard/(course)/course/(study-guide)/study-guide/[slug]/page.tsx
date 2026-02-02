import { getCourse, getNote } from '@/actions/courses';
import { ICourseDetail, ITopicDetail } from '@/types/course';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import NoteHeader from '@components/note/note-header';
import NoteViewer from '@components/note/note-viewer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BSG - Study Guide',
  description:
    'Access expertly crafted content tailored to ensure your success in the bar exam.',
  keywords: [
    'study guide',
    'the best study guide',
    'law',
    'study',
    'constitutional law',
    'family law',
    'students',
    'legal',
    'resources',
  ],
  robots: 'follow, index',
};

function nextTopicIndex(
  course: ICourseDetail,
  currentTopicIndex: number
): number {
  return currentTopicIndex + 1 < course.notes.length
    ? currentTopicIndex + 1
    : -1;
}

export default async function StudyGuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const topic: ITopicDetail = await getNote(params.slug);
  const course: ICourseDetail = await getCourse(
    topic?.course?.slug as string
  );
  const session = await getServerSession(authOptions);
  const currentTopicIndex = course.notes.findIndex(
    (note) => note.note.slug === topic.slug
  );
  const hasNext = nextTopicIndex(course, currentTopicIndex);

  return (
    <section className={'w-full'}>
      <NoteHeader
        topic={topic}
        userName={session?.user.name as string}
        nextTopic={hasNext !== -1 ? course.notes[hasNext].note : null}
      />
      <NoteViewer
        fileUrl={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${topic?.pdf}`}
      />
    </section>
  );
}
