'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  FloatingInput,
  FloatingLabel,
} from '@components/ui/floating-label-input';
import { cn } from '@/lib/utils';
import { Button } from '@components/ui/button';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Input } from '@components/ui/input';
import { updateUserProfile, getUserSession } from '@/actions/auth';
import { toast } from 'sonner';
import LoaderButton from '@components/ui/loader-button';

interface UpdateProfileFormProps {
  name?: string;
  email?: string;
  image?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
}

export default function UpdateProfileForm({
  image,
  firstName,
  lastName,
  email,
}: UpdateProfileFormProps) {
  const { update } = useSession();
  const schema = z.object({
    email: z.string().email({
      message: 'Please enter a valid email address',
    }),
    fname: z.string().min(3, {
      message: 'Your first name must be at least 3 characters long',
    }),
    lname: z.string().min(3, {
      message: 'Last name must be at least 2 characters long',
    }),
    avatar: z.any().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: email,
      fname: firstName,
      lname: lastName,
      avatar: null,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const data = new FormData();
    data.append('email', values.email);
    data.append('fname', values.fname);
    data.append('lname', values.lname);
    if (values.avatar?.length > 0) {
      data.append('avatar', values.avatar[0]);
    }
    const res = await updateUserProfile(data);
    if (res) {
      const user = await getUserSession();
      if (user) {
        await update({
          user,
        });
        toast.success('Your changes has been saved.');
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className={
          'v-stack gap-3 h-full max-w-[455px] w-full justify-start'
        }
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name={'avatar'}
          render={({ field }) => (
            <FormItem>
              <div className={'flex flex-col gap-3'}>
                <h4 className={'text-lg font-medium'}>Profile photo</h4>
                <div
                  className={
                    'w-[86px] h-[86px] md:w-[120px] md:h-[120px] border-2 border-[#7943BC]/20 outline-red-700 outline-2 rounded-full'
                  }
                >
                  <Image
                    className={
                      'rounded-full w-full max-w-[120px] max-h-[120px] object-cover border-[6px] border-gray-100'
                    }
                    src={
                      form.getValues('avatar')
                        ? URL.createObjectURL(
                            form.getValues('avatar')?.[0]
                          )
                        : `${image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${image}` : `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=063231&color=fff`}`
                    }
                    alt={'user avatar'}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={'h-stack'}>
                  <Button type={'button'}>
                    <FormLabel
                      className={'cursor-pointer'}
                      htmlFor={'avatar'}
                    >
                      Change photo
                    </FormLabel>
                  </Button>
                  <Input
                    id={'avatar'}
                    type={'file'}
                    formEncType={'multipart/form-data'}
                    accept={'image/*'}
                    {...register('avatar')}
                    className={'text-xs py-2 hidden'}
                  />
                  <Button
                    type={'button'}
                    // onClick={() => {
                    //   toast.success("Account deleted successfully");
                    // }}
                    variant={'outline'}
                    className={'text-xs py-2'}
                  >
                    Remove photo
                  </Button>
                </div>
                <p className={'text-xs text-muted py-2'}>
                  Supported formats: jpg, png, HEIC.
                </p>
              </div>
              <FormMessage className={'text-xs'}>
                {errors.fname?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'fname'}
          render={({ field }) => (
            <FormItem>
              <div className={'relative'}>
                <FormControl>
                  <FloatingInput
                    type={'text'}
                    placeholder={''}
                    {...field}
                  />
                </FormControl>
                <FloatingLabel
                  className={cn('', {
                    'peer-focus:text-destructive': errors.email,
                  })}
                >
                  First name
                </FloatingLabel>
              </div>
              <FormMessage className={'text-xs'}>
                {errors.fname?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'lname'}
          render={({ field }) => (
            <FormItem>
              <div className={'relative'}>
                <FormControl>
                  <FloatingInput
                    type={'text'}
                    placeholder={''}
                    {...field}
                  />
                </FormControl>
                <FloatingLabel
                  className={cn('', {
                    'peer-focus:text-destructive': errors.email,
                  })}
                >
                  Last name
                </FloatingLabel>
              </div>
              <FormMessage className={'text-xs'}>
                {errors.lname?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <div className={'relative'}>
                <FormControl>
                  <FloatingInput
                    type={'email'}
                    placeholder={''}
                    {...field}
                  />
                </FormControl>
                <FloatingLabel
                  className={cn('', {
                    'peer-focus:text-destructive': errors.email,
                  })}
                >
                  Email
                </FloatingLabel>
              </div>
              <FormMessage className={'text-xs'}>
                {errors.email?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className={'flex justify-start py-6'}>
          {/*<Button*/}
          {/*  type={'submit'}*/}
          {/*  className={'w-full md:w-auto rounded-xl'}*/}
          {/*  disabled={form.formState.isSubmitting}*/}
          {/*>*/}
          {/*  {form.formState.isSubmitting ? (*/}
          {/*    <LoaderCircle className={'animate-spin'} />*/}
          {/*  ) : (*/}
          {/*    'Save changes'*/}
          {/*  )}*/}
          {/*</Button>*/}
          <LoaderButton
            loading={form.formState.isSubmitting}
            type={'submit'}
            className={'w-full md:w-auto rounded-xl'}
          >
            Save changes
          </LoaderButton>
        </div>
      </form>
    </Form>
  );
}
