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
import { useRouter } from "next/navigation";

import {
  FloatingInput,
  FloatingLabel,
} from "@components/ui/floating-label-input";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import axiosInstance from "@/lib/axios";

export default function SendResetPasswordForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const schema = z.object({
    email: z.string().email({
      message: "Email address is required",
    }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    toast.promise(
      async () => {
        try {
          const res = await axiosInstance.post(
            "/api/auth/forgot-password",
            values,
          );
          return res.data;
        } catch (error) {
          throw error;
        }
      },
      {
        loading: "Sending password reset link...",
        success: (data) => {
          if (data) {
            router.push("/reset-password?email=" + values.email);
            return data?.message;
          }
        },
        error: (error) => {
          form.setError("email", {
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
        className={"v-stack gap-6 h-full"}
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
                <FloatingLabel
                  className={cn("", {
                    "peer-focus:text-destructive": form.formState.errors.email,
                  })}
                >
                  Email
                </FloatingLabel>
              </div>
              <FormMessage className={"text-xs"}>
                {form.formState.errors.email?.message}
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
