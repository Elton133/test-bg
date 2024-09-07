'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { useState } from 'react';
import LoaderButton from '@components/ui/loader-button';

interface ConfirmResetModalProps {
  resetCourse: (id: string) => Promise<any>;
  courseID: string;
}

const ConfirmResetModal = ({
  resetCourse,
  courseID,
}: ConfirmResetModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className={
          'border border-primary text-sm sm:text-base rounded-lg px-4 py-2 font-semibold'
        }
      >
        Reset my progress
      </DialogTrigger>
      <DialogContent className={'w-[95%]'}>
        <DialogHeader>
          <DialogTitle className={'text-2xl'}>
            Reset progress
          </DialogTitle>
        </DialogHeader>
        <div className={'flex flex-col gap-6'}>
          <div>
            <p>Are you sure you want to reset your course progress?</p>
          </div>
          <div className={'w-full flex justify-end items-center gap-3'}>
            {/*<Button*/}
            {/*  variant={'outline'}*/}
            {/*  className={'font-semibold flex items-center gap-2'}*/}
            {/*  onClick={async () => {*/}
            {/*    setLoading(true);*/}
            {/*    await resetCourse(courseID);*/}
            {/*    setLoading(false);*/}
            {/*    handleOpenChange();*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {loading && <LoaderCircle className={'animate-spin'} />}*/}
            {/*  Reset it*/}
            {/*</Button>*/}
            <LoaderButton
              loading={loading}
              variant={'outline'}
              onClick={async () => {
                setLoading(true);
                await resetCourse(courseID);
                setLoading(false);
                handleOpenChange();
              }}
            >
              Reset it
            </LoaderButton>
            <DialogTrigger
              className={
                'bg-primary px-4 py-2 rounded-lg text-white font-semibold'
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

export default ConfirmResetModal;
