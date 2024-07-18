"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";

import {
  FloatingInput,
  FloatingLabel,
} from "@components/ui/floating-label-input";
import { useState } from "react";
import { EyeSlash, Eye } from "iconsax-react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import axiosInstance from "@/lib/axios";

export default function CreateNewPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const schema = z.object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
        password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    toast.promise(
      async () => {
        try {
            const payload = {
                password: values.password,
                token: searchParams.get("token"),
                email: searchParams.get("email"),
            };
          const res = await axiosInstance.post(
            "/api/auth/reset-password",
            payload,
          );
          return res.data;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
      {
        loading: "Resetting password...",
        success: (data) => {
          if (data) {
            // form.reset();
            // some stuff
            router.push("/new-password?reset=true");

            return data?.message;
          }
        },
        error: (error) => {
          form.setError("password", {
            type: "manual",
            message: error?.message,
          });
          if (error?.response?.data?.errors) {
            const errors = error.response.data.errors;
            for (const key in errors) {
              form.setError(key as any, {
                type: "manual",
                message: errors[key][0],
              });
            }
          }
          return error?.response?.data?.message;
        },
        finally: () => {
          setLoading(false);
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form
        className={"v-stack gap-3 h-full"}
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
                <FloatingLabel
                  className={cn("", {
                    "peer-focus:text-destructive":
                      form.formState.errors.password,
                  })}
                >
                  Password
                </FloatingLabel>
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
              <FormMessage className={"text-xs"}>
                {form.formState.errors.password?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className={"v-stack h-full justify-start sm:justify-start"}>
          <div className={"v-stack gap-4"}>
            <Button type={"submit"}>
              {loading ? (
                <LoaderCircle className={"animate-spin"} />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
