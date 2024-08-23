export interface ICourse {
  id: string;
  title: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  slug: string;
  notes_count: number;
  quizzes_count: number;
  question_count: number;
  enroll_status: string;
}

export interface ICaseBrief {
  id: number;
  note_id: number;
  title: string;
  citation: string;
  details: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  slug: string | null;
}

export interface ITopic {
  id: string;
  course_id: string;
  noteTitle: string;
  pdf: string;
  pqi: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  slug: string;
  course?: ICourse;
  case_briefs?: ICaseBrief[];
  quiz?: IQuiz[];
}

export interface ICourseDetail extends ICourse {
  notes: ITopic[];
}

export interface IAnswer {
  id: number;
  quiz_id: number;
  quiz_question_id: number;
  answer: string;
  correct: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface IQuestion {
  id: number;
  question: string;
  image: string | null;
  quiz_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  answers: IAnswer[];
}

export interface IQuiz {
  id: number;
  note_id: number;
  title: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  slug: string;
  note: ITopic;
  questions: IQuestion[];
}
