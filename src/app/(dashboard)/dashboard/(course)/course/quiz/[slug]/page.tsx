import { IQuiz, ITopic } from "@/types/course";
import { getNote, getQuiz } from "@/actions/courses";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

import QuizSession from "@components/quiz/quiz-session";
import { QuizProvider } from "@/context/quiz-context";
import StartQuizModal from "@components/quiz/start-quiz-modal";

export default async function PastQuestionPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic: ITopic = await getNote(params.slug);
  const session = await getServerSession(authOptions);

  return (
    <QuizProvider quiz={topic?.quiz}>
      <section className={"w-full relative"}>
        <div className={"py-1"}>
          <QuizSession topic={topic} username={session?.user?.name as string} />
        </div>
        <StartQuizModal />
      </section>
    </QuizProvider>
  );
}
