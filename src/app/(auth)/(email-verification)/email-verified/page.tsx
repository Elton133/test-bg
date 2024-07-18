import Image from "next/image";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function EmailVerified() {
  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-[30%] sm:py-[15%]">
      <div className={"v-stack gap-6 h-full"}>
        <div className={"v-stack stack-center"}>
          <Image
            src={
              "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721229538/qlwm2s5rqxxcusaxiego.gif"
            }
            width={86}
            height={78}
            alt={"loader"}
          />
          <p className={"text-xs font-medium"}>
            Your email has been verified successfully
          </p>
        </div>
        <Button variant={"secondary"} className={"py-6 w-full bg-[#E6EBEA]"}>
          <Link href={"/dashboard?verified=true"}>Go to dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
