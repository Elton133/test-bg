import {NextRequest, NextResponse} from "next/server";
import { getToken } from 'next-auth/jwt';
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});
const publicRoutes = ['/login', '/register', '/forgot-password', '/reset-password', '/welcome', '/'];

export async function middleware(req: NextRequest) {
    // @ts-ignore
  const token = await getToken({ req });
  const isPublic = publicRoutes.some((route) => route.startsWith(req.nextUrl.pathname));
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.nextUrl).toString());
  }
    if (token && isPublic) {
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl).toString());
    }
    return NextResponse.next();
}
