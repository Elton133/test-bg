import { ITopicDetail } from '@/types/course';
import { getNote } from '@/actions/courses';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

import QuizSession from '@components/quiz/quiz-session';
import { QuizProvider } from '@/context/quiz-context';
import StartQuizModal from '@components/quiz/start-quiz-modal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BSG - Quiz',
  description:
    'Access expertly crafted content tailored to ensure your success in the bar exam.',
  keywords: [
    'quiz',
    'the best quiz',
    'law',
    'study',
    'constitutional law',
    'family law',
    'students',
    'legal',
    'resources',
  ],
};

export default async function PastQuestionPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic: ITopicDetail = await getNote(params.slug);
  const session = await getServerSession(authOptions);

  return (
    <QuizProvider quiz={topic?.quiz} noteId={topic?.id}>
      <section className={'w-full relative'}>
        <div className={'py-1'}>
          <QuizSession
            topic={topic}
            username={session?.user?.name as string}
          />
        </div>
        <StartQuizModal />
      </section>
    </QuizProvider>
  );
}
