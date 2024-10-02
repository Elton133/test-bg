import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login',
  },
});
export const publicRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/welcome',
  '/verify-email',
  '/email-verified',
  '/',
];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isPublic = publicRoutes.some((route) =>
    route.startsWith(req.nextUrl.pathname)
  );
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(
      new URL('/login', req.nextUrl).toString()
    );
  }
  // @ts-ignore
  if (token?.user?.email_verified_at && isPublic) {
    return NextResponse.redirect(
      new URL('/dashboard', req.nextUrl).toString()
    );
  }
  if (
    token &&
    // @ts-ignore
    !token?.user?.email_verified_at &&
    req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(
      new URL(
        // @ts-ignore
        `/verify-email?email=${token?.user?.email}`,
        req.nextUrl
      ).toString()
    );
  }
  return NextResponse.next();
}
