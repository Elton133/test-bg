'use client'

import Image from "next/image";
import {Button} from "@components/ui/button";
import {useSearchParams} from "next/navigation";


export default function VerifyEmail() {
  const queryParams = useSearchParams()

  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-[30%] sm:py-[15%]">
      <div className={"v-stack gap-6 h-full"}>
        <div className={"v-stack stack-center"}>
          <Image src={'https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721229538/qlwm2s5rqxxcusaxiego.gif'} width={110} height={83} alt={'loader'} />
          <p className={"text-xs font-medium"}>
            We have sent a verification link to {queryParams.get('email')}
          </p>
          <p className={'text-muted text-xs'}>Didn&apos;t get the email? <Button className={'px-0 text-xs'} variant={'link'}>Resend link</Button></p>
        </div>
      </div>
    </main>
  );
}
