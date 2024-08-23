"use client";

import { ArrowLeft, ArrowRight } from "iconsax-react";
import { Button } from "@components/ui/button";
import { useQuiz } from "@/context/quiz-context";
import { LoaderCircle } from "lucide-react";

export default function QuizNavigation() {
  const {
    currentQuestion,
    handleQuestionChange,
    quiz,
    quizEnded,
    submitQuiz,
    isSubmitting,
  } = useQuiz();

  return (
    <div
      className={
        "max-w-[760px] w-full mx-auto flex flex-col gap-4 justify-center items-center px-4"
      }
    >
      <div
        className={
          "flex w-full justify-between items-center place-self-end py-6"
        }
      >
        <button
          disabled={currentQuestion === 0}
          onClick={() => handleQuestionChange("previous")}
          className={
            "border-[0.5px] border-[#70787C] rounded-full p-1 w-8 h-8 flex justify-center items-center hover:scale-125"
          }
        >
          <ArrowLeft size={12} />
        </button>
        <p className={"font-Regular text-[#70787C]"}>
          {currentQuestion + 1 === quiz?.questions?.length
            ? "All done!"
            : `${quiz?.questions?.length - 1 - currentQuestion} questions left`}
        </p>
        <button
          disabled={
            currentQuestion === quiz?.questions?.length - 1 || quizEnded
          }
          onClick={() => handleQuestionChange("next")}
          className={
            "border-[0.5px] border-[#70787C] rounded-full p-1 w-8 h-8 flex justify-center items-center hover:scale-125"
          }
        >
          <ArrowRight size={12} />
        </button>
      </div>
      {quiz?.questions?.length - 1 === currentQuestion && (
        <Button
          onClick={submitQuiz}
          disabled={currentQuestion < quiz?.questions?.length - 1 || quizEnded}
          className={"h-stack gap-2"}
        >
          {isSubmitting && <LoaderCircle className={"animate-spin"} />}
          Get results
        </Button>
      )}
    </div>
  );
}
