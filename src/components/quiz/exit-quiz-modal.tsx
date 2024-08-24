'use client'

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@components/ui/dialog";
import {Button} from "@components/ui/button";
import {X} from "lucide-react";
import {useRouter} from "next/navigation";

const ExitQuizModal = () => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger className={""}>
        <X />
      </DialogTrigger>
      <DialogContent className={'w-[95%]'}>
        <DialogHeader>
          <DialogTitle className={"text-2xl"}>End quiz ?</DialogTitle>
        </DialogHeader>
        <div className={"flex flex-col gap-6"}>
          <div>
            <p>Are you sure you want to end the quiz?</p>
          </div>
          <div className={"w-full flex justify-end items-center gap-3"}>
            <Button onClick={() => router.back()} variant={"outline"} className={"font-semibold"}>
              Yes
            </Button>
            <DialogTrigger
              className={
                "bg-primary px-4 py-2 rounded-lg text-white font-semibold"
              }
            >
              No
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitQuizModal;