import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import Image from "next/image";

const StartQuizModal = () => {
  return (
    <Dialog defaultOpen>
      <DialogContent
        className={
          "max-w-[400px] w-[95%] max-h-[500px] h-full bg-[#FFFBF0] border border-[#DAE0E0] px-16"
        }
      >
        <div
          className={"flex flex-col items-center justify-between gap-6 py-8"}
        >
          <DialogHeader>
            <DialogTitle className={"text-2xl text-center"}>
              Best of luck!
            </DialogTitle>
          </DialogHeader>
          <div className={"max-w-[200px] w-full"}>
            <Image
              src={
                "https://res.cloudinary.com/dpyjjedao/image/upload/v1724256549/Standardized_test_as_method_of_assessment_btcrmj.png"
              }
              alt={"quiz icon"}
              width={200}
              height={200}
            />
          </div>
          <div className={"w-full flex justify-end items-center gap-3"}>
            <DialogTrigger
              className={
                "bg-brand-yellow-primary text-brand-text px-4 py-2 rounded-lg font-semibold w-full"
              }
            >
              Start quiz
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartQuizModal;
