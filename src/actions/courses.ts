"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import {ICourse, ICourseDetail, IQuiz, ITopic} from "@/types/course";

const getCourses = async (): Promise<ICourse[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
      },
      cache: "no-cache",
      next: {
        tags: ["courses"],
      },
    },
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/course-details/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
      },
      cache: "no-cache",
      next: {
        tags: ["courses"],
      },
    },
  );
  if (response.status !== 200) {
    return {} as ICourseDetail;
  }
  return await response.json().then((data) => data?.course);
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
          Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
        },
      },
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

const getNote = async (slug: string) : Promise<ITopic | any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/note/${slug}`, {
        headers: {
            Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
        },
        cache: "no-cache",
        next: {
            tags: ["notes"],
        },
    });

    if (!response.ok) {
        return {
            error: response.statusText
        };
    }

    if (response.ok) {
        return await response.json().then((data) => data?.note) as ITopic;
    }
    return {} as ITopic;
}

const getQuiz = async (slug: string) : Promise<IQuiz | any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quiz/${slug}`, {
        headers: {
            Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
        },
        cache: "no-cache",
        next: {
            tags: ["quiz"],
        },
    });

    if (!response.ok) {
        return {
            error: response.statusText
        };
    }

    if (response.ok) {
        return await response.json().then((data) => data?.quiz) as IQuiz;
    }
    return {} as IQuiz;
}

const submitQuizResults = async (data: {quiz_id: number; grade: number}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submit/quiz/result`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

   if (!response.ok) {
       return {
           error: response.json()
       };
   }

   if (response.ok) {
         return await response.json().then((data) => data);
   }

}

export { getCourses, purchaseCourse, getCourse, getNote, getQuiz, submitQuizResults };
