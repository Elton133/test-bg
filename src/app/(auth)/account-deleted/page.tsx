import Image from "next/image";

export default async function AccountDeleted() {
  return (
    <main
      className={
        "flex flex-col justify-center items-center min-h-[calc(100vh_-_100px)] my-auto mx-auto"
      }
    >
      <div className={'grid gap-y-12'}>
        <h1 className={'text-2xl font-bold animate-fade animate-once'}>GOODBYE!...</h1>
        <Image
          src={
            "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1723154583/BSG/social-grave_1_myzba8.png"
          }
          className={'animate-once animate-fade-up'}
          alt={"graveyard"}
          width={350}
          height={350}
        />
      </div>
    </main>
  );
}
