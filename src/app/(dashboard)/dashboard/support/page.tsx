import { Metadata } from "next";
import Faq from "@components/support/faq";
import ContactUsModal from "@components/support/contact-us-modal";

export const metadata: Metadata = {
  title: "BSG - Support",
  description: "Get answers to your questions or reach out to our support team",
  robots: "follow, index",
};

export default async function SupportPage() {
  return (
    <section className={"py-12 px-4 lg:px-8 w-full min-h-[calc(100vh_-_50px)]"}>
      <h1 className={"text-2xl font-semibold"}>BSG Support</h1>
      <div
        className={
          "max-w-2xl w-full flex flex-col items-start mx-auto py-12 gap-6"
        }
      >
        <div className={"w-full flex justify-between items-center"}>
          <p>Do you have any questions? </p>
          <ContactUsModal />
        </div>
        <div
          className={
            "flex w-full justify-between items-center gap-12 text-[#ABB3BF]"
          }
        >
          <hr className={"border-[#ABB3BF] w-full my-4"} />
          <p className={"text-xs"}>OR</p>
          <hr className={"border-[#ABB3BF] w-full my-4"} />
        </div>
        <div>
          <p className={"text-sm text-left"}>
            Browse our FAQs for solutions or feel free to reach out to our
            support team!{" "}
          </p>
        </div>
        <div className={"w-full"}>
          <Faq />
        </div>
      </div>
    </section>
  );
}
