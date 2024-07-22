import Image from "next/image";

export default function Loading() {
  return (
    <main className="max-w-[455px] h-[calc(100vh_-_80px)] w-full mx-auto">
        <div className={"v-stack stack-center h-full"}>
          <Image
            src={
              "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721308573/64e99b60b7c54884e4fc4a3d9e6f68f1_ekfc6d.gif"
            }
            width={72}
            height={58}
            alt={"loader"}
          />
          <div className={"text-xs font-medium v-stack stack-center"}>
            <p className={'text-muted'}>Did you know</p>
            <p className={"text-center"}>Did you know Abraham Lincoln was a bar examiner, and judged to be a very lenient one</p>
          </div>
        </div>
    </main>
  );
}
