import Image from "next/image";

export default function NotFound() {
  return (
    <main className={"v-stack sm:h-stack stack-center my-auto h-[calc(100vh_-_80px)]"}>
      <div className={"v-stack stack-center max-w-[365px]"}>
        <p className={"text-8xl font-bold"}>404</p>
        <p className={"text-2xl text-center"}>
          Uh-oh! The page you requested cannot be found
        </p>
      </div>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721310058/jelly-character-cant-find-the-right-page_1_1_l3rcwb.png"
          }
          alt={"error icon"}
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}
