import { ITopicDetail } from '@/types/course';
import { getNote } from '@/actions/courses';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import NoteHeader from '@components/note/note-header';
import { Metadata } from 'next';
import PastQuestionsViewer from '@components/courses/past-questions-viewer';

export const metadata: Metadata = {
  title: 'BSG - Past Questions',
  description:
    'Access expertly crafted content tailored to ensure your success in the bar exam.',
  keywords: [
    'past question',
    'the best past question',
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

export default async function PastQuestionPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic: ITopicDetail = await getNote(params.slug);
  const session = await getServerSession(authOptions);
  return (
    <section className={'w-full'}>
      <NoteHeader
        topic={topic}
        userName={session?.user.name as string}
      />
      {/*<section*/}
      {/*  className={*/}
      {/*    'p-4 max-w-[1100px] mx-auto flex justify-center overflow-hidden'*/}
      {/*  }*/}
      {/*>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      'prose bg-white min-h-[600px] rounded-[20px] p-4 min-w-full prose-headings:underline'*/}
      {/*    }*/}
      {/*    dangerouslySetInnerHTML={{ __html: topic?.pqi }}*/}
      {/*  />*/}
      {/*</section>*/}
      <PastQuestionsViewer html={topic?.pqi} noteId={topic?.id} />
      {/*<CourseMenuBar />*/}
    </section>
  );
}
