"use client";

import { Checkbox } from "@components/ui/checkbox";
import { Label } from "../ui/label";
import { IAnswer, ITopic } from "@/types/course";
import { useQuiz } from "@/context/quiz-context";
import QuizNavigation from "@components/quiz/quiz-navigation";
import QuizResults from "@components/quiz/quiz-results";
import { ArrowLeft } from "iconsax-react";
import { ArrowRightToLine, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSideBar } from "@/context/side-bar-context";
import { useNoteSidePanel } from "@/context/note-side-panel-context";
import NoteSidePanel from "@components/note/note-side-panel";

export default function QuizSession({
  topic,
  username,
}: {
  topic: ITopic;
  username: string;
}) {
  const { answers, dispatch, currentQuestion, quiz, quizEnded } = useQuiz();
  const router = useRouter();
  const { openSideBar } = useSideBar();
  const { toggleSidePanel, openSidePanel } = useNoteSidePanel();

  const handleOptionSelect = (option: IAnswer) => {
    dispatch({
      action: "ADD_ANSWER",
      payload: { ...option, currentQuestion },
    });
  };

  return (
    <div>
      <div
        className={
          "flex md:hidden text-sm font-bold justify-between px-4 border-b border-t py-3"
        }
      >
        <button
          onClick={() => {
            router.back();
          }}
          className={"flex gap-2 items-center w-[80%]"}
        >
          <ArrowLeft />
          <p className={"text-base font-semibold truncate"}>{quiz?.title}</p>
        </button>
        <div>
          <X />
        </div>
      </div>
      <div className={"hidden md:flex justify-center w-full relative py-4"}>
        <div className={"flex flex-col items-center"}>
          <p
            className={"text-sm font-Bold text-[#0B111C]"}
          >{`${currentQuestion + 1}/${quiz?.questions?.length}`}</p>
          <p className={"text-sm font-Bold text-[#70787C]"}>{quiz?.title}</p>
        </div>
        <button
          className={
            "absolute right-3 md:right-[100px] top-[14px] cursor-pointer"
          }
        >
          <X />
        </button>
      </div>
      {quizEnded && <QuizResults />}
      {!quizEnded && (
        <div
          className={
            "max-w-[760px] w-full mx-auto flex flex-col gap-[56px] my-8 py-8 bg-white px-6 md:rounded-2xl border"
          }
        >
          {quiz && (
            <div>
              <div className={"pb-4"}>
                <p className={"font-semibold text-base"}>
                  {quiz?.questions[currentQuestion]?.question}
                </p>
              </div>
              <div className={"flex flex-col gap-4"}>
                {quiz?.questions[currentQuestion]?.answers.map((option) => (
                  <div
                    key={option?.id}
                    className={"flex items-center gap-6 animate-fade-up"}
                  >
                    <Checkbox
                      id={option?.id + ""}
                      className={"rounded-full bg-white cursor-pointer"}
                      checked={answers[currentQuestion]?.id === option?.id}
                      onCheckedChange={() => handleOptionSelect(option)}
                    />
                    <Label
                      htmlFor={option?.id + ""}
                      className={
                        "border px-2 py-4 rounded-[12px] w-full cursor-pointer"
                      }
                    >
                      <p>{option?.answer}</p>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {/* Previous and next buttons */}
      {!quizEnded && <QuizNavigation />}

      {!openSideBar && (
        <button
          onClick={toggleSidePanel}
          className={
            "absolute hidden md:block top-0 left-1 border p-1 hover:scale-105 bg-white cursor-pointer"
          }
        >
          <ArrowRightToLine />
        </button>
      )}
      {openSidePanel && <NoteSidePanel topic={topic} userName={username} />}
    </div>
  );
}
