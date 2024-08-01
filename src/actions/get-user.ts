"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import { IUser } from "@/types/user";

export default async function getUserSession(): Promise<IUser | null> {
  try {
    const { data } = await axiosInstance.get("/api/auth-user", {
      headers: {
        Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
      },
    });
    return data?.user;
  } catch (err) {
    return null;
  }
}
