'use client';
import { Button } from '@components/ui/button';
import {
  getUserSession,
  resendVerificationEmail,
} from '@/actions/auth';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ResendEmail() {
  const { update } = useSession();
  const [loading, setLoading] = useState(false);
  return (
    <p className={'text-muted text-xs'}>
      Didn&apos;t get the email?{' '}
      <Button
        className={cn('px-0 text-xs', {
          'text-primary': !loading,
          'text-muted': loading,
        })}
        variant={'link'}
        onClick={async () => {
          // setLoading(true);
          // await resendVerificationEmail();
          // const user = await getUserSession();
          // if (user) {
          //   await update({
          //     user,
          //   });
          // }
          // setLoading(false);
          // toast.success('Verification email sent');
          toast.promise(
            async () => {
              setLoading(true);
              await resendVerificationEmail();
              const user = await getUserSession();
              if (user) {
                await update({
                  user,
                });
              }
              setLoading(false);
              return 'Verification email sent';
            },
            {
              loading: 'Sending verification email...',
              success: 'Verification email sent',
              error: 'Failed to send verification email',
            }
          );
        }}
        disabled={loading}
      >
        Resend link
      </Button>
    </p>
  );
}
