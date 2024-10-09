'use client';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserSession } from '@/actions/auth';
import { useRouter } from 'next/navigation';

export default function EmailVerified() {
  const { data: session, update, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const updateSession = async () => {
      setLoading(true);
      const res = await getUserSession();
      if (res) {
        if (res.email_verified_at) {
          await update({
            user: res,
          });
          setLoading(false);
          return res;
        }
        if (!res.email_verified_at) {
          // console.log('Email not verified');
          router.push('verify-email?email=' + res.email);
          setLoading(false);
          return res;
        }
      }
      setLoading(false);
      return res;
    };
    // toast.promise(updateSession(), {
    //   loading: 'Verifying email...',
    //   success: 'Email verified',
    //   error: 'Failed to verify email',
    // });
    updateSession();
    return () => {};
  }, []);

  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-[30%] sm:py-[15%]">
      <div className={'v-stack gap-6 h-full'}>
        <div className={'v-stack stack-center'}>
          <Image
            src={
              'https://res.cloudinary.com/dpyjjedao/image/upload/v1724423326/d37a0064cf4083d6dec48dc62a2f1881_phleei.gif'
            }
            width={86}
            height={78}
            alt={'loader'}
          />
          <p className={'text-xs font-medium'}>
            {loading && 'Verifying email...'}
            {status === 'authenticated' &&
              !loading &&
              'Your email has been verified successfully'}
          </p>
        </div>
        <Button
          variant={'secondary'}
          className={'py-6 w-full bg-[#E6EBEA]'}
        >
          <Link
            href={session?.user ? '/dashboard?verified=true' : '/login'}
            className={'animate-fade animate-once'}
          >
            {session?.user ? 'Go to dashboard' : null}
            {!session?.user ? 'Login' : null}
          </Link>
        </Button>
      </div>
    </main>
  );
}
