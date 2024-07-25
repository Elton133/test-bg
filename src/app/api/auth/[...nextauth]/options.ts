import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import axiosInstance from "@/lib/axios";
import {cookies} from "next/headers";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  // useSecureCookies: true,
  // cookies: {
  //     sessionToken: {
  //         name: '__bsg_session',
  //     }
  // },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/404",
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const res = await axiosInstance.post("/api/auth/login", credentials);
          if (res.status) {
            // console.log(res.data)
            cookies().set('__bsg_session', res.data.token, {
              expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            });
            return res.data;
          }
        } catch (error) {
          // @ts-ignore
          throw new Error(error?.response.data.message);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log(session, token);
      session.user = token
      return session;
    },

    async jwt({ token, user, session }) {
      token = { ...token, ...user };
      return token;
    },
  },
};
