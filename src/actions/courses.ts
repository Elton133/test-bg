'use server';

import {
  ICourse,
  ICourseDetail,
  IQuiz,
  ITopicDetail,
} from '@/types/course';
import { revalidatePath } from 'next/cache';
import fetchWrapper from '@/lib/fetch-wrapper';

interface ICoursesRes {
  courses: ICourse[];
}

const getCourses = async (): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/courses`;
  const response = await fetchWrapper<ICoursesRes>(
    url,
    {},
    { tags: ['courses'] }
  );
  if ('error' in response) {
    console.error(response.error);
    return [];
  }
  return response.courses;
};

const getCourse = async (
  slug: string
): Promise<ICourseDetail | any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/course/${slug}`;
  const response = await fetchWrapper<ICourseDetail>(
    url,
    {},
    {
      tags: ['courses'],
    }
  );
  if ('error' in response) {
    return response;
  }
  return response;
};

const purchaseCourse = async (data: {
  course: string[];
  reference: string;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/callback-page`;
  const response = await fetchWrapper<any>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if ('error' in response) {
    return response;
  }
  return response;
};

const getNote = async (slug: string): Promise<ITopicDetail | any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/note/${slug}`;
  const response = await fetchWrapper<{ note: ITopicDetail }>(
    url,
    {},
    {
      tags: ['notes'],
    }
  );

  if ('error' in response) {
    return response;
  }
  return response?.note;
};

const getQuiz = async (slug: string): Promise<IQuiz | any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/quiz/${slug}`;
  const response = await fetchWrapper<{ quiz: IQuiz }>(
    url,
    {},
    {
      tags: ['quiz'],
    }
  );

  if ('error' in response) {
    return response;
  }
  return response?.quiz;
};

const submitQuizResults = async (data: {
  quiz_id: number;
  grade: number;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/submit/quiz/result`;
  const response = await fetchWrapper<any>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if ('error' in response) {
    return response;
  }

  return response;
};

export interface IResourcesCompleted {
  study_guide_completed?: boolean;
  pqi_completed?: boolean;
  quiz_completed?: boolean;
  case_brief_completed?: boolean;
}

const markResourceAsCompleted = async (
  id: string,
  data: IResourcesCompleted
) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/mark-item/${id}`;
  const response = await fetchWrapper<any>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if ('error' in response) {
    return response;
  }

  revalidatePath('/dashboard/course/[slug]', 'page');
  return response;
};

const markNoteAsCompleted = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/note-completed/${id}`;
  const response = await fetchWrapper<any>(url, {
    method: 'GET',
  });

  if ('error' in response) {
    return response;
  }

  revalidatePath('/dashboard/course/[slug]', 'page');
  return response;
};

const resetCourseProgress = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/reset-progress/${id}`;
  const response = await fetchWrapper<any>(url, {
    method: 'GET',
  });

  if ('error' in response) {
    return response;
  }

  revalidatePath('/dashboard/course/[slug]', 'page');
  return response;
};

export {
  getCourses,
  purchaseCourse,
  getCourse,
  getNote,
  getQuiz,
  submitQuizResults,
  markNoteAsCompleted,
  markResourceAsCompleted,
  resetCourseProgress,
};
