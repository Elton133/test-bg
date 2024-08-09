"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormMessage,
} from "@components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FloatingInput,
  FloatingLabel,
} from "@components/ui/floating-label-input";
import { cn } from "@/lib/utils";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import { Button } from "@components/ui/button";
import { changePassword } from "@/actions/auth";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
  });
  const [loading, setLoading] = useState(false);
  const schema = z.object({
    old_password: z.string().min(8, "Password must be at least 8 characters"),
    new_password: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    toast.promise(
      async () => {
        setLoading(true);
        const res = await changePassword(data);
        if (res?.status) {
          setLoading(false);
          return res?.message;
        }
        if (res?.error) {
          setLoading(false);
          throw new Error(res?.error?.message);
        }
      },
      {
        loading: "Changing password...",
        success: (res) => {
          setLoading(false);
          return res;
        },
        error: (err) => {
          setLoading(false);
          return err?.message;
        },
      },
    );
  };

  return (
    <section className={"max-w-[550px] w-full h-full"}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"v-stack items-start w-full h-full"}
        >
          <FormField
            control={form.control}
            name={"old_password"}
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormDescription className={"text-xs my-3 text-muted"}>
                  Enter your old password
                </FormDescription>
                <div className={"relative"}>
                  <FormControl>
                    <FloatingInput
                      type={showPassword.old ? "text" : "password"}
                      placeholder={""}
                      {...field}
                    />
                  </FormControl>
                  <FloatingLabel
                    className={cn("", {
                      "peer-focus:text-destructive": errors.old_password,
                    })}
                  >
                    Password
                  </FloatingLabel>
                  {showPassword.old ? (
                    <Eye
                      variant={"Bold"}
                      color={"#292D32"}
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          old: !prev?.old,
                        }))
                      }
                      className={"absolute right-2 top-0 translate-y-1/2"}
                    />
                  ) : (
                    <EyeSlash
                      variant={"Bold"}
                      color={"#292D32"}
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          old: !prev?.old,
                        }))
                      }
                      className={"absolute right-2 top-0 translate-y-1/2"}
                    />
                  )}
                </div>
                <FormMessage className={"text-xs"}>
                  {errors.old_password?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"new_password"}
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormDescription className={"text-xs my-3 text-muted"}>
                  Enter your new password
                </FormDescription>
                <div className={"relative"}>
                  <FormControl>
                    <FloatingInput
                      type={showPassword.new ? "text" : "password"}
                      placeholder={""}
                      {...field}
                    />
                  </FormControl>
                  <FloatingLabel
                    className={cn("", {
                      "peer-focus:text-destructive": errors.new_password,
                    })}
                  >
                    Password
                  </FloatingLabel>
                  {showPassword.new ? (
                    <Eye
                      variant={"Bold"}
                      color={"#292D32"}
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          new: !prev?.new,
                        }))
                      }
                      className={"absolute right-2 top-0 translate-y-1/2"}
                    />
                  ) : (
                    <EyeSlash
                      variant={"Bold"}
                      color={"#292D32"}
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          new: !prev?.new,
                        }))
                      }
                      className={"absolute right-2 top-0 translate-y-1/2"}
                    />
                  )}
                </div>
                <FormMessage className={"text-xs"}>
                  {errors.new_password?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <div
            className={
              "w-full h-full h-stack justify-center md:w-auto md:sticky"
            }
          >
            <Button
              variant={"default"}
              disabled={loading || Object.keys(errors).length > 0}
              className={
                "font-semibold flex w-full gap-1 items-center text-sm my-4"
              }
            >
              {loading && <LoaderCircle className={"animate-spin"} />}
              <p>Save changes</p>
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
