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
  progress: number;
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
}

export interface ITopicDetail extends ITopic {
  course?: ICourse;
  case_briefs?: ICaseBrief[];
  quiz?: IQuiz;
}

export interface ICourseDetail {
  course: ICourse;
  progress_percentage: number;
  notes: {
    note: ITopic;
    quiz: IQuiz;
    case_briefs: ICaseBrief[];
    note_status: boolean;
    quiz_status: boolean;
    study_guide_status: boolean;
    pqi_status: boolean;
    case_brief_status: boolean;
  }[];
  enroll_status: 'active' | null;
}

export interface INoteStatuses {
  note_status: boolean;
  quiz_status: boolean;
  study_guide_status: boolean;
  pqi_status: boolean;
  case_brief_status: boolean;
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

export interface IAnnouncement {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  type: string;
  url: string | null;
}

export interface IAchievement {
  course: string;
  badge: string;
}

export type Streak = {
  streak_count: number;
  first_streak_date: string;
};
