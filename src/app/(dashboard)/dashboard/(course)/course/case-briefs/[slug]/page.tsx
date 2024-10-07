import { ITopicDetail } from '@/types/course';
import { getNote } from '@/actions/courses';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import NoteHeader from '@components/note/note-header';
import { Metadata } from 'next';
import CaseBriefViewer from '@components/courses/case-brief-viewer';

export const metadata: Metadata = {
  title: 'BSG - Case Briefs',
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
  searchParams,
}: {
  params: { slug: string };
  searchParams: { topic: string };
}) {
  const topic: ITopicDetail = await getNote(searchParams.topic);
  const session = await getServerSession(authOptions);
  const caseBrief =
    topic &&
    topic?.case_briefs?.find((brief) => brief.slug === params.slug);
  return (
    <section className={'w-full'}>
      <NoteHeader
        topic={topic}
        userName={session?.user.name as string}
      />
      <CaseBriefViewer html={caseBrief?.citation || ''} />
      {/*<CourseMenuBar />*/}
    </section>
  );
}
