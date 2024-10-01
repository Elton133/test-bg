import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth';
import axiosInstance from '@/lib/axios';
import { cookies } from 'next/headers';
import { IUser } from '@/types/user';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  // useSecureCookies: true,
  // cookies: {
  //     sessionToken: {
  //         name: '__bsg_session',
  //     }
  // },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/404',
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const res = await axiosInstance.post(
            '/api/auth/login',
            credentials
          );
          if (res.status) {
            // console.log(res.data)
            cookies().set('__bsg_session', res.data.token, {
              expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
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
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID! || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET! || '',
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user: IUser = token?.user as IUser;
      session.user = {
        firstName: user.fname,
        id: user?.id + '',
        lastName: user.lname,
        name: `${user.fname} ${user.lname}`,
        image: user.avatar,
        email: user.email,
        createdAt: user.created_at,
      };
      return session;
    },

    async jwt({ token, user, session, trigger }) {
      if (trigger === 'update' && session.user) {
        token.user = session.user;
        return token;
      }
      token = { ...token, ...user };
      return token;
    },
    async signIn({ account, profile }) {
      console.log(account, profile);
      return true;
    },
  },
};
