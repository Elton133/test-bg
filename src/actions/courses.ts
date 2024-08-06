"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import {redirect} from "next/navigation";
import {ICourse, ICourseDetail} from "@/types/course";

const getCourses = async (): Promise<ICourse[]> => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, {
            headers: {
                Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
            },
            cache: "no-cache",
            next: {
                tags: ["courses"],
            }
        });
        if (response.status !== 200) {
            return [] as ICourse[];
        }
        return await response.json().then((data) => data?.courses);
}

const getCourse = async (slug: string): Promise<ICourseDetail> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/course-details/${slug}`, {
        headers: {
            Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
        },
        cache: "no-cache",
        next: {
            tags: ["courses"],
        }
    });
    if (response.status !== 200) {
        return {} as ICourseDetail;
    }
    return await response.json().then((data) => data?.course);

}

const purchaseCourse = async (data: {course: string[], reference: string}) => {
    try{
        const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/api/callback-page`, data, {
            headers: {
                Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
            },
        })
        if (response.data?.status) {
            redirect('/dashboard/my-learning')
        }
        return response.data;
    } catch (error) {
        // @ts-ignore
        throw error
    }
}

export { getCourses, purchaseCourse, getCourse };
