import Image from 'next/image';
import ResendEmail from '@components/auth/resend-email';
// import {useSearchParams} from "next/navigation";

export default async function VerifyEmail({
  searchParams,
}: {
  searchParams: { email: string };
}) {
  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full px-4 lg:px-8 py-[30%] sm:py-[15%]">
      <div className={'v-stack gap-6 h-full'}>
        <div className={'v-stack stack-center'}>
          <Image
            src={
              'https://res.cloudinary.com/dpyjjedao/image/upload/v1724423613/48e4a41f537f121857078d0c4b002f45_nq9utc.gif'
            }
            width={110}
            height={83}
            alt={'loader'}
          />
          <p className={'text-xs font-medium'}>
            We have sent a verification link to {searchParams.email}
          </p>
          {/*<p className={"text-muted text-xs"}>*/}
          {/*  Didn&apos;t get the email?{" "}*/}
          {/*  <Button className={"px-0 text-xs"} variant={"link"}>*/}
          {/*    Resend link*/}
          {/*  </Button>*/}
          {/*</p>*/}
          <ResendEmail />
        </div>
      </div>
    </main>
  );
}
