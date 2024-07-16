"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  FloatingInput,
  FloatingLabel,
} from "@components/ui/floating-label-input";
import { useState } from "react";
import { EyeSlash, Eye } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "@assets/google_logo.png";
import { toast } from "sonner";
import {useRouter} from "next/navigation";
import {LoaderCircle} from "lucide-react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()

  const schema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
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
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        }).then((res) => {
          if (res?.ok) {
            return true;
          } else if (res?.error) {
            throw new Error(res.error);
          }
        }),
      {
        loading: "Signing in...",
        success: (data) => {
          if (data) {
            // form.reset();
            // some stuff
          router.push('/dashboard')
            return "Signed in successfully";
          }
        },
        error: (error) => {
          form.setError("email", {
            type: "manual",
            message: error?.message,
          });
          return error?.message;
        },
        finally: () => {
          setLoading(false)
          // router.push('/dashboard')
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form
        className={"v-stack gap-2 h-full"}
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <div className={"relative"}>
                <FormControl>
                  <FloatingInput type={"email"} placeholder={""} {...field} />
                </FormControl>
                <FloatingLabel>Email</FloatingLabel>
              </div>
              <FormMessage className={'text-xs'}>{errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <div className={"relative"}>
                <FormControl>
                  <FloatingInput
                    type={showPassword ? "text" : "password"}
                    placeholder={""}
                    {...field}
                  />
                </FormControl>
                <FloatingLabel>Password</FloatingLabel>
                {showPassword ? (
                  <Eye
                    variant={"Bold"}
                    color={"#292D32"}
                    onClick={() => setShowPassword(false)}
                    className={"absolute right-2 top-0 translate-y-1/2"}
                  />
                ) : (
                  <EyeSlash
                    variant={"Bold"}
                    color={"#292D32"}
                    onClick={() => setShowPassword(true)}
                    className={"absolute right-2 top-0 translate-y-1/2"}
                  />
                )}
              </div>
            </FormItem>
          )}
        />
        <Link
          href={"/forgot-password"}
          className={"text-[#3A7FA8] place-self-end text-xs"}
        >
          Forgot password?
        </Link>
        <div className={"v-stack h-full justify-end sm:justify-start"}>
          <div className={"v-stack gap-4"}>
            <Button type={"submit"}>
              {loading ? <LoaderCircle className={'animate-spin'} /> : "Sign in"}
            </Button>
            <p className={"text-xs text-center"}>
              Don&apos;t have an account?{" "}
              <Link className={"text-[#3A7FA8] font-medium"} href={"/register"}>
                Sign up
              </Link>
            </p>
            <div
              className={
                "flex justify-between items-center gap-12 text-[#ABB3BF]"
              }
            >
              <hr className={"border-[#ABB3BF] w-full my-4"} />
              <p className={"text-xs"}>OR</p>
              <hr className={"border-[#ABB3BF] w-full my-4"} />
            </div>
            <Link
              href={"/login"}
              className={"h-stack w-full stack-center py-2 border rounded-lg"}
            >
              <Image
                src={GoogleLogo}
                alt={"google logo"}
                width={24}
                height={24}
              />
              <p className={"text-sm"}>Continue with Google</p>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
