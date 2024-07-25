"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { IUser } from "@/types/user";
import swr from "swr";
import axiosInstance from "@/lib/axios";
import { useSession } from "next-auth/react";

interface UserProps {
  user: IUser | null | undefined;
}

const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const { data: user } = swr<IUser>(
    session?.user ? "/auth/me" : null,
    async () => {
      const data = await axiosInstance.get("/api/auth-user", {
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.access_token}`,
        },
      });
      // if (data.status === 200) {
      //   if (typeof window !== "undefined") {
      //     !localStorage.getItem("user") &&
      //       localStorage.setItem(
      //         "user",
      //         JSON.stringify({
      //           avatar: data.data?.user.avatar,
      //           name: `${data.data?.user.fname} ${data.data?.user.lname}`,
      //         }),
      //       );
      //   }
      // }
      return data.data?.user;
    },
  );
  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
