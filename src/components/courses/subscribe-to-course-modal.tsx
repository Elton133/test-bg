'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import Link from 'next/link';

interface ConfirmResetModalProps {
  buttonText?: string;
}

const SubscribeToCourseModal = ({
  buttonText,
}: ConfirmResetModalProps) => {
  return (
    <Dialog>
      <DialogTrigger
        className={'text-base text-[#3A7FA8] hover:underline'}
      >
        {buttonText}
      </DialogTrigger>
      <DialogContent
        className={'w-[95%] bg-brand-text border-0 max-w-[800px]'}
      >
        <DialogHeader>
          <DialogTitle className={'text-2xl'}>
            Reset progress
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 justify-center py- text-white px-4 md:px-8">
          <p
            className={
              'text-white font-bold text-[28px] md:text-[32px]'
            }
          >
            🔐 Subscribe to this to unlock guide.
          </p>
          <ul className={'flex flex-col gap-4'}>
            <li className={'list-disc'}>
              <p>
                500+ Multiple Choice Questions to sharpen your memory of
                legal principles{' '}
              </p>
            </li>
            <li className={'list-disc'}>
              <p>
                Comprehensive study materials and resources curated by
                former Ghana School of Law students{' '}
              </p>
            </li>
            <li className={'list-disc'}>
              <p>
                Student-tailored exam preparation resources to prepare
                you for the Ghana Bar Examination
              </p>
            </li>
          </ul>
        </div>
        <div className={'w-full flex justify-center p-8'}>
          <Link
            href={'/dashboard/shop'}
            className={
              'bg-[#FDD66D] md:w-2/3 w-full p-4 rounded-lg text-sm font-bold text-center'
            }
          >
            Yes! Let’s proceed
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeToCourseModal;
