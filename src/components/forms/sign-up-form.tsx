'use client';

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  FloatingInput,
  FloatingLabel,
} from '@components/ui/floating-label-input';
import { useState } from 'react';
import { EyeSlash, Eye } from 'iconsax-react';
import Link from 'next/link';
// import Image from "next/image";
// import GoogleLogo from "@assets/google_logo.png";
import useRegister from '@hooks/use-register';
import { cn } from '@/lib/utils';
import LoaderButton from '@components/ui/loader-button';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { form, loading, errors, onSubmit } = useRegister();

  return (
    <Form {...form}>
      <form
        className={'v-stack gap-2 h-full'}
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
        <FormField
          control={form.control}
          name={'password'}
          render={({ field }) => (
            <FormItem>
              <div className={'relative'}>
                <FormControl>
                  <FloatingInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder={''}
                    {...field}
                  />
                </FormControl>
                <FloatingLabel
                  className={cn('', {
                    'peer-focus:text-destructive': errors.email,
                  })}
                >
                  Password
                </FloatingLabel>
                {showPassword ? (
                  <Eye
                    variant={'Bold'}
                    color={'#292D32'}
                    onClick={() => setShowPassword(false)}
                    className={'absolute right-2 top-0 translate-y-1/2'}
                  />
                ) : (
                  <EyeSlash
                    variant={'Bold'}
                    color={'#292D32'}
                    onClick={() => setShowPassword(true)}
                    className={'absolute right-2 top-0 translate-y-1/2'}
                  />
                )}
              </div>
              <FormMessage className={'text-xs'}>
                {errors.password?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'confirmPassword'}
          render={({ field }) => (
            <FormItem>
              <div className={'relative'}>
                <FormControl>
                  <FloatingInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder={''}
                    {...field}
                  />
                </FormControl>
                <FloatingLabel
                  className={cn('', {
                    'peer-focus:text-destructive': errors.email,
                  })}
                >
                  Confirm password
                </FloatingLabel>
                {showPassword ? (
                  <Eye
                    variant={'Bold'}
                    color={'#292D32'}
                    onClick={() => setShowPassword(false)}
                    className={'absolute right-2 top-0 translate-y-1/2'}
                  />
                ) : (
                  <EyeSlash
                    variant={'Bold'}
                    color={'#292D32'}
                    onClick={() => setShowPassword(true)}
                    className={'absolute right-2 top-0 translate-y-1/2'}
                  />
                )}
              </div>
              <FormMessage className={'text-xs'}>
                {errors.confirmPassword?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className={'place-self-center text-xs text-muted'}>
          By signing up, you agree to our{' '}
          <Link
            href={'/terms-and-conditions'}
            className={'text-[#CAAB57] hover:underline'}
          >
            terms & conditions
          </Link>{' '}
          and{' '}
          <Link
            href={'/privacy-policy'}
            className={'text-[#CAAB57] hover:underline'}
          >
            privacy policy
          </Link>
        </div>
        <div className={'v-stack h-full justify-end sm:justify-start'}>
          <div className={'v-stack gap-4'}>
            {/*<Button type={"submit"}>*/}
            {/*  {loading ? (*/}
            {/*    <LoaderCircle className={"animate-spin"} />*/}
            {/*  ) : (*/}
            {/*    "Create account"*/}
            {/*  )}*/}
            {/*</Button>*/}
            <LoaderButton loading={loading} type={'submit'}>
              Create account
            </LoaderButton>
            <p className={'text-xs text-center font-medium'}>
              Already have an account?{' '}
              <Link
                className={'text-[#3A7FA8] font-medium'}
                href={'/login'}
              >
                Sign in
              </Link>
            </p>
            {/* <div
              className={
                'flex justify-between items-center gap-12 text-[#ABB3BF]'
              }
            >
              <hr className={'border-[#ABB3BF] w-full my-4'} />
              <p className={'text-xs'}>OR</p>
              <hr className={'border-[#ABB3BF] w-full my-4'} />
            </div> */}
            {/* <Link
              href={
                'https://api.thebeststudyguide.com/api/auth/google/redirect'
              }
              className={
                'h-stack w-full stack-center py-2 border rounded-lg'
              }
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M22.9531 9.5H21.9531H11.9531V13.5H17.9531C17.0462 16.0613 14.8258 18.5 11.9531 18.5C8.30828 18.5 4.95312 15.1448 4.95312 11.5C4.95312 7.85515 8.30828 4.5 11.9531 4.5C13.6356 4.5 14.7877 5.46325 15.9531 6.5L18.9531 3.5C16.9885 1.66905 14.8505 0.5 11.9531 0.5C5.87838 0.5 0.953125 5.42525 0.953125 11.5C0.953125 17.5747 5.87838 22.5 11.9531 22.5C18.0279 22.5 22.9531 17.5747 22.9531 11.5C22.9531 10.7625 23.0912 10.1968 22.9531 9.5Z"
                  fill="#FFC107"
                />
                <path
                  d="M1.98438 6.5L5.98438 9.5C6.94969 6.94565 9.24859 5.5 11.9844 5.5C13.6452 5.5 14.8339 5.40619 15.9844 6.5L18.9844 3.5C17.0451 1.56828 14.8445 0.5 11.9844 0.5C7.81364 0.5 3.80317 2.81296 1.98438 6.5Z"
                  fill="#FF3D00"
                />
                <path
                  d="M11.9844 22.5C14.7979 22.5 17.0515 21.3146 18.9844 19.5L15.9844 16.5C14.854 17.3909 13.4045 17.5012 11.9844 17.5C9.15122 17.5 6.89064 16.1126 5.98438 13.5L1.98438 16.5C3.78709 20.1557 7.75099 22.5 11.9844 22.5Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.9844 9.5H21.9844H11.9844V13.5H17.9844C17.5505 14.6772 17.0169 15.747 15.9844 16.5L18.9844 19.5C18.7435 19.7114 22.9844 16.8112 22.9844 11.5C22.9844 10.7878 23.1224 10.1729 22.9844 9.5Z"
                  fill="#1976D2"
                />
              </svg>
              <p className={'text-sm'}>Continue with Google</p>
            </Link> */}
          </div>
        </div>
      </form>
    </Form>
  );
}
