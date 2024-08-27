'use client';

import React, {
  createContext,
  useEffect,
  useContext,
  useReducer,
  ReactNode,
  useState,
} from 'react';
import LocalStorage from '@/lib/local-storage';
import { IAnswer, IQuiz } from '@/types/course';
import dayjs from 'dayjs';
import { submitQuizResults } from '@/actions/courses';

type Action = {
  action: 'ADD_ANSWER' | 'REMOVE_ANSWER' | 'CLEAR_ANSWERS';
  payload: IAnswer & { currentQuestion?: number };
};

interface QuizContextProps {
  quiz?: IQuiz;
  answers: IAnswer[];
  dispatch: React.Dispatch<Action>;
  currentQuestion: number;
  quizEnded: boolean;
  timer: string;
  correctAnswers: number;
  handleQuestionChange: (type: 'next' | 'previous') => void;
  submitQuiz: () => void;
  isSubmitting: boolean;
  results: number;
  totalQuestions: number;
}

const QuizContext = createContext<QuizContextProps | null>(null);

const quizReducer = (state: IAnswer[], action: Action): IAnswer[] => {
  const storage = new LocalStorage<IAnswer[]>();
  switch (action.action) {
    case 'ADD_ANSWER':
      const newAnswers = [...state];
      if (action.payload.currentQuestion !== undefined) {
        newAnswers[action.payload.currentQuestion] = action.payload;
        storage.save(
          `__quiz_${action.payload.quiz_id}_qNo_${action.payload.currentQuestion}`,
          newAnswers
        );
      }
      return newAnswers;
    // case "REMOVE_ANSWER":
    //   const filteredItems = state.filter(
    //     (item) => item.id !== action.payload.id,
    //   );
    //   storage.save("answers", filteredItems);
    //   return state.filter((item) => item.id !== action.payload.id);
    // case "CLEAR_ANSWERS":
    //   storage.clear();
    //   return [];
    default:
      return state;
  }
};

export const QuizProvider = ({
  children,
  quiz,
}: {
  children: ReactNode;
  quiz?: IQuiz;
}) => {
  const [answers, dispatch] = useReducer(quizReducer, []);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [results, setResults] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [currentTimer, setCurrentTimer] =
    useState<dayjs.Dayjs>(dayjs());
  const [startTimer] = useState(dayjs());
  const storage = new LocalStorage<IAnswer[]>();

  // useEffect(() => {
  //   const storedAnswers = storage.get("answers");
  //   // if (storedAnswers) {
  //   //   storedAnswers.forEach((answer) => {
  //   //     dispatch({ action: "ADD_ANSWER", payload: answer });
  //   //   });
  //   // }
  // }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!quizEnded) {
      interval = setInterval(() => {
        setCurrentTimer(dayjs());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [quizEnded]);

  const handleQuestionChange = (type: 'next' | 'previous') => {
    if (type === 'next') {
      setCurrentQuestion((prev) => prev + 1);
    }
    if (type === 'previous') {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const getTimer = (): string => {
    const asMins = Math.floor(currentTimer.diff(startTimer, 'minutes'));
    const asSecs = Math.floor(currentTimer.diff(startTimer, 'seconds'));
    return asMins < 1 ? `${asSecs} secs` : `${asMins} mins`;
  };

  const correctAnswers = (): number => {
    let correctAnswers = 0;
    quiz?.questions.forEach((question, index) => {
      if (answers[index]?.correct === 1) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const submitQuiz = async () => {
    setIsSubmitting(true);
    const res = await submitQuizResults({
      quiz_id: quiz?.id as number,
      grade: correctAnswers(),
    });
    if (res?.status) {
      setResults(res?.grade);
    }
    setIsSubmitting(false);
    setQuizEnded(true);
  };

  return (
    <QuizContext.Provider
      value={{
        answers,
        dispatch,
        currentQuestion,
        handleQuestionChange,
        quiz,
        quizEnded,
        timer: getTimer(),
        correctAnswers: correctAnswers(),
        isSubmitting,
        submitQuiz,
        results,
        totalQuestions: quiz?.questions.length as number,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
