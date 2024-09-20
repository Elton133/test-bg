import { ITopicDetail } from '@/types/course';
import { getNote } from '@/actions/courses';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import NoteHeader from '@components/note/note-header';

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
    topic?.case_brief?.find((brief) => brief.slug === params.slug);
  return (
    <section className={'w-full'}>
      <NoteHeader
        topic={topic}
        userName={session?.user.name as string}
      />
      <section
        className={
          'p-4 max-w-[1100px] mx-auto flex justify-center overflow-hidden'
        }
      >
        <div
          className={
            'prose bg-white min-h-[600px] rounded-[20px] p-4 min-w-full prose-headings:underline'
          }
          dangerouslySetInnerHTML={{
            __html:
              (caseBrief?.citation as string) ||
              `
            <p>Case Brief Not Found</p>
          `,
          }}
        />
      </section>
    </section>
  );
}
