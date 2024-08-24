import Image from "next/image";
import { Button } from "@/components/ui/button";
import CreateNewPassword from "@/components/forms/create-new-password";
import Link from "next/link";

export default function ResetPassword({
  searchParams,
}: {
  searchParams: { reset: boolean };
}) {
  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-2 sm:py-[2%]">
      {!searchParams.reset && (
        <div className={"v-stack gap-6 h-full"}>
          <div className={"v-stack"}>
            <h1 className="text-2xl font-semibold">Create a new password</h1>
            <p className={"text-sm font-normal text-[#70787C]"}>
              Type your new password below.
            </p>
          </div>
          <CreateNewPassword />
        </div>
      )}
      {searchParams.reset && (
        <div className={"v-stack gap-6 h-full py-[15%]"}>
          <div className={"v-stack stack-center"}>
            <Image
              src={
                "https://res.cloudinary.com/dpyjjedao/image/upload/v1724423326/d37a0064cf4083d6dec48dc62a2f1881_phleei.gif"
              }
              width={110}
              height={83}
              alt={"loader"}
            />
            <p className={"text-xs font-medium"}>
              Password was reset successfully
            </p>
            <Button
              variant={"secondary"}
              className={"py-6 w-full bg-[#E6EBEA]"}
            >
              <Link href={"/login"}>Go back to sign in</Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
