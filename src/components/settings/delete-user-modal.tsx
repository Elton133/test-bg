"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { useState } from "react";
import { FloatingLabelInput } from "@components/ui/floating-label-input";
import { FormLabel } from "@components/ui/form";
import { Label } from "@components/ui/label";

const ConfirmDeleteUserModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const handleOpen = () => {
    setIsOpen(!open);
  };

  const handlePassword = () => {
    setOpenPassword(!openPassword);
  };

  return (
    <Dialog>
      <DialogTrigger
        className={
          "border-[#FF170A] border px-2 py-2 rounded-lg text-[#FF170A] font-normal hover:text-white hover:bg-red-500 hover:border-red-400"
        }
      >
        Delete account
      </DialogTrigger>
      <DialogContent className={"w-[95%]"}>
        <DialogHeader>
          <DialogTitle className={"text-2xl"}>Delete account</DialogTitle>
        </DialogHeader>
        <div className={"flex flex-col gap-6"}>
          <div>
            {!openPassword && (
              <p>
                Are you sure that you want to delete you account? Deleting your
                account will log you out immediately and prevent further access.
                You won&apos;t be able to log back in
              </p>
            )}
            {openPassword && (
              <div className={'v-stack gap-4'}>
                <Label className={""}>Enter your password to confirm</Label>
                <FloatingLabelInput
                  label={"Password"}
                  type={"password"}
                  placeholder={""}
                />
              </div>
            )}
          </div>
          <div className={"w-full flex justify-end items-center gap-3"}>
            <DialogTrigger
              className={
                "px-4 py-2 rounded-lg font-semibold border border-primary text-primary"
              }
            >
              Cancel
            </DialogTrigger>
            {!openPassword && (
              <Button
                variant={"default"}
                className={"font-semibold"}
                onClick={handlePassword}
              >
                Proceed
              </Button>
            )}
            {openPassword && (
              <Button variant={"default"} className={"font-semibold"}>
                Delete account
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteUserModal;
