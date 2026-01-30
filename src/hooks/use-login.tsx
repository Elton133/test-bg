import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { z } from 'zod';

export default function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const schema = z.object({
    email: z.string().email({
      message: 'Please enter a valid email address',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters long',
    }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    toast.promise(
      async () =>
        await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
          callbackUrl: '/dashboard',
        }).then(async (res) => {
          // console.log(res);
          if (res?.ok) {
            // Wait a brief moment for cookies to be set
            await new Promise(resolve => setTimeout(resolve, 100));
            return true;
          } else if (res?.error) {
            throw new Error(res.error);
          }
        }),
      {
        loading: 'Signing in...',
        success: async (data) => {
          if (data) {
            // Use router.push for client-side navigation which preserves cookies
            // Fallback to window.location if router doesn't work
            try {
              router.push('/dashboard');
              // Small delay to ensure navigation happens
              await new Promise(resolve => setTimeout(resolve, 50));
            } catch (error) {
              if (typeof window !== 'undefined') {
                window.location.href = '/dashboard';
              }
            }
            return 'Signed in successfully';
          }
        },
        error: (error) => {
          form.setError('email', {
            type: 'manual',
            message: error?.message,
          });
          return error?.message;
        },
        finally: () => {
          setLoading(false);
        },
      }
    );
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    form,
    schema,
  };
}
