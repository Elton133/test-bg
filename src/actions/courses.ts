"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
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
        throw new Error(err?.response?.data?.message);
    }
}

export { getCourses };
