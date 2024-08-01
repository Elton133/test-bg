"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import {redirect} from "next/navigation";
import {ICourse} from "@/types/course";

const getCourses = async (): Promise<ICourse[]> => {
    try {
        const { data } = await axiosInstance.get("/api/courses", {
        headers: {
            Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
        },
        });
        return data?.courses;
    } catch (err) {
        // @ts-ignore
        throw err
    }
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

export { getCourses, purchaseCourse };
