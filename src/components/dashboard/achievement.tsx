import Image from "next/image";
// import {getServerSession} from "next-auth/next";
// import {authOptions} from "@/app/api/auth/[...nextauth]/options";

export default async function Achievement() {
  // const session = await getServerSession(authOptions);

  return (
    <div className="w-full 2xl:w-[75%] mx-auto lg:min-h-[240px] relative bg-[#063231] lg:rounded-[20px] flex flex-col justify-center items-center p-6 lg:mt-24">
      <div
        className={
          "w-full h-full absolute top-0 left-0 bg-blend-overlay opacity-20"
        }
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721828471/BSG/d76a8943c5aeb3fd7598873b5ba28604_acnd3d.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className={"z-10 v-stack stack-center gap-6 text-white max-w-[458px] w-full"}>
        <p className={'text-lg font-bold'}>Your Achievements</p>
        <p className={'text-xs text-center'}>
          You achievements will appear here. Start your courses and earn badges
          as you progress. Let’s get started and fill this space with
          accomplishments
        </p>
          <div className={'h-stack gap-6 flex-wrap stack-center items-center'}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Image
            key={index}
            src={
              "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721859469/BSG/Frame_2_olaoiv.svg"
            }
            alt={"badge"}
            width={100}
            height={129}
          />
        ))}
          </div>
      </div>
    </div>
  );
}
