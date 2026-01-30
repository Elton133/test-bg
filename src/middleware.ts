import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

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
  const token = await getToken({ 
    req,
    secret: process.env.NEXTAUTH_SECRET || process.env.NEXT_PUBLIC_JWT_SECRET,
  });
  const isPublic = publicRoutes.some((route) =>
    route.startsWith(req.nextUrl.pathname)
  );
  
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
      )
    );
  }
  // @ts-ignore
  if (token?.user?.email_verified_at && isPublic) {
    return NextResponse.redirect(
      new URL('/dashboard', req.nextUrl)
    );
  }

  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(
      new URL('/login', req.nextUrl)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
