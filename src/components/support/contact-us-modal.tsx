"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Message2 } from "iconsax-react";
import { Textarea } from "@components/ui/textarea";
import { useState } from "react";
import * as React from "react";

const ContactUsModal = () => {
  const [open, setOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };
  if (messageSent) {
    return (
      <MessageSentModal
        open={messageSent}
        onClose={() => setMessageSent(!messageSent)}
      />
    );
  }
  return (
    <Dialog onOpenChange={openModal} open={open}>
      <DialogTrigger
        className={
          "bg-primary rounded-lg px-4 py-2 text-white text-sm font-medium"
        }
      >
        Contact Us
      </DialogTrigger>
      <DialogContent className={"w-[95%]"}>
        <DialogHeader>
          <DialogTitle className={"text-2xl"}>Contact Us</DialogTitle>
        </DialogHeader>
        <div className={"flex flex-col gap-12"}>
          <div className={"mx-auto v-stack items-center"}>
            <div
              className={
                "w-16 h-16 rounded-full bg-[#DAE0E0] flex justify-center items-center"
              }
            >
              <Message2 size={24} variant={"Bold"} className={"text-primary"} />
            </div>
            <h3 className={"text-base font-bold"}>Send Us a Message</h3>
          </div>
          <div>
            <p className={"text-sm text-center"}>
              Please fill the form below . We will get back to you as soon as
              possible
            </p>
          </div>
          <div className={"w-full"}>
            <Textarea className={""} />
          </div>
        </div>
        <DialogFooter className={"py-4"}>
          <Button
            variant={"default"}
            onClick={() => {
              setMessageSent(true);
              openModal();
            }}
            className={"w-full"}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const MessageSentModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={"w-[95%]"}>
        <div className={"flex justify-center py-8"}>
          <p>Your message has been sent.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
