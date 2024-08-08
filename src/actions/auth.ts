"use server";


import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import { IUser } from "@/types/user";
import { redirect } from "next/navigation";


export async function getUserSession(): Promise<IUser | null> {
  try {
    const { data } = await axiosInstance.get("/api/auth-user", {
      headers: {
        Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
      },
    });
    return data?.user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return null;
  }
}

export async function updateUserProfile(data: FormData): Promise<IUser | null> {
  try {
    const response = await axiosInstance.post("/api/update/profile", data, {
      headers: {
        Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
      },
    });
    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return null;
  }
}

export async function deleteUserAccount(id: string): Promise<boolean> {
  try {
    const response = await axiosInstance.delete(`/api/delete/account/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies().get("__bsg_session")?.value}`,
      },
    });
    if (response.data) {
      redirect("/account-deleted");
    }
    return response.data;
  } catch (err) {
    // temporary redirect
    redirect("/account-deleted");
    // return false;
  }
}
