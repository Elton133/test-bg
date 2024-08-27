'use server';

import axiosInstance from '@/lib/axios';
import { cookies } from 'next/headers';
import {
  ICourse,
  ICourseDetail,
  IQuiz,
  ITopic,
  ITopicDetail,
} from '@/types/course';
import { revalidatePath } from 'next/cache';

const getCourses = async (): Promise<ICourse[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
      cache: 'no-cache',
      next: {
        tags: ['courses'],
      },
    }
  );
  // console.log(await response.json().then((data) => data))
  if (response.status !== 200) {
    // eslint-disable-next-line no-console
    console.log(response);
    return [] as ICourse[];
  }

  return await response.json().then((data) => data?.courses);
};

const getCourse = async (slug: string): Promise<ICourseDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/course/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
      cache: 'no-cache',
      next: {
        tags: ['courses'],
      },
    }
  );

  if (response.status !== 200) {
    return {} as ICourseDetail;
  }

  // if (response.ok) {
  // }
  return await response.json().then((data) => data);
};

const purchaseCourse = async (data: {
  course: string[];
  reference: string;
}) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/callback-page`,
      data,
      {
        headers: {
          Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // @ts-ignore
    // console.log('error', error);
    // // @ts-ignore
    // if (error?.response?.data) {
    //   return error?.response?.data;
    // }
    return null;
  }
};

const getNote = async (slug: string): Promise<ITopicDetail | any> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/note/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
      cache: 'no-cache',
      next: {
        tags: ['notes'],
      },
    }
  );

  if (!response.ok) {
    return {
      error: response.statusText,
    };
  }

  if (response.ok) {
    return (await response.json().then((data) => data?.note)) as ITopic;
  }
  return {} as ITopic;
};

const getQuiz = async (slug: string): Promise<IQuiz | any> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/quiz/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
      cache: 'no-cache',
      next: {
        tags: ['quiz'],
      },
    }
  );

  if (!response.ok) {
    return {
      error: response.statusText,
    };
  }

  if (response.ok) {
    return (await response.json().then((data) => data?.quiz)) as IQuiz;
  }
  return {} as IQuiz;
};

const submitQuizResults = async (data: {
  quiz_id: number;
  grade: number;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/submit/quiz/result`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return {
      error: response.json(),
    };
  }

  if (response.ok) {
    return await response.json().then((data) => data);
  }
};

interface IResourcesCompleted {
  study_guide_completed?: boolean;
  pqi_completed?: boolean;
  quiz_completed?: boolean;
  case_brief_completed?: boolean;
}

const markResourceAsCompleted = async (
  id: string,
  data: IResourcesCompleted
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/mark-item/${id}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return {
      error: response.json(),
    };
  }

  if (response.ok) {
    revalidatePath('/dashboard/course/[slug]');
    return await response.json().then((data) => data);
  }
};

const markNoteAsCompleted = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/note-completed/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    return {
      error: response.json(),
    };
  }

  if (response.ok) {
    revalidatePath('/dashboard/course/[slug]');
    return await response.json().then((data) => data);
  }
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
};
