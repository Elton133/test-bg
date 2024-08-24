"use client";
import SendResetPasswordForm from "@/components/forms/reset-password-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axiosInstance from "@/lib/axios";

export default function ResetPassword({
  searchParams,
}: {
  searchParams: { email: string };
}) {
  const resendLink = () => {
    toast.promise(
      async () => {
        try {
          const res = await axiosInstance.post("/api/auth/forgot-password", {
            email: searchParams.email,
          });
          return res.data;
        } catch (error) {
          throw error;
        }
      },
      {
        loading: "Sending password reset link...",
        success: (data) => {
          if (data) {
            return data?.message;
          }
        },
        error: (error) => {
          return error?.response?.data?.message;
        },
        finally: () => {
          // setLoading(false);
        },
      },
    );
  };

  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-2 sm:py-[2%]">
      {!searchParams.email && (
        <div className={"v-stack gap-6 h-full"}>
          <div className={"v-stack"}>
            <h1 className="text-2xl font-semibold">Reset password</h1>
            <p className={"text-sm font-normal text-[#70787C]"}>
              We will send a link to the email address associated with this
              account.
            </p>
          </div>
          <SendResetPasswordForm />
        </div>
      )}
      {searchParams.email && (
        <div className={"v-stack gap-6 h-full py-[15%]"}>
          <div className={"v-stack stack-center"}>
            <Image
              src={
                "https://res.cloudinary.com/dpyjjedao/image/upload/v1724423613/48e4a41f537f121857078d0c4b002f45_nq9utc.gif"
              }
              width={110}
              height={83}
              alt={"loader"}
            />
            <p className={"text-xs font-medium"}>
              We have sent a reset link to {searchParams.email}
            </p>
            <p className={"text-muted text-xs"}>
              Didn&apos;t get the email?{" "}
              <Button
                className={"px-0 text-xs"}
                variant={"link"}
                onClick={resendLink}
              >
                Resend link
              </Button>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
