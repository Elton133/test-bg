'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { logout } from '@/actions/auth';

export default function AccountDeleted() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    setTimeout(async () => {
      await signOut({ redirect: false });
      await logout();
      window.location.href = '/';
    }, 5000);
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main
      className={
        'flex flex-col justify-center items-center min-h-[calc(100vh_-_100px)] my-auto mx-auto'
      }
    >
      <div className={'grid gap-y-12 justify-items-center'}>
        <h1 className={'text-2xl font-bold animate-fade animate-once'}>
          GOODBYE!...
        </h1>
        <p
          className={'text-muted text-center animate-fade animate-once'}
        >
          Your account has been deleted. You will be redirected to the
          homepage in {count < 0 ? 0 : count} seconds.
        </p>
        <Image
          src={
            'https://res.cloudinary.com/dzpjlfcrq/image/upload/v1723154583/BSG/social-grave_1_myzba8.png'
          }
          className={'animate-once animate-fade-up'}
          alt={'graveyard'}
          width={350}
          height={350}
        />
      </div>
    </main>
  );
}
