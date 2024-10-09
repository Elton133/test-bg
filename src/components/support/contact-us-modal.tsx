'use client';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { Message2 } from 'iconsax-react';
import { Textarea } from '@components/ui/textarea';
import { useState } from 'react';
import * as React from 'react';
import { sendMessage } from '@/actions/contact-us';
import LoaderButton from '@components/ui/loader-button';

const ContactUsModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
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

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };

  return (
    <Dialog onOpenChange={openModal} open={open}>
      <DialogTrigger
        className={
          'bg-primary rounded-lg px-4 py-2 text-white text-sm font-medium'
        }
      >
        Contact Us
      </DialogTrigger>
      <DialogContent className={'w-[95%]'}>
        <DialogHeader>
          <DialogTitle className={'text-2xl'}>Contact Us</DialogTitle>
        </DialogHeader>
        <div className={'flex flex-col gap-12'}>
          <div className={'mx-auto v-stack items-center'}>
            <div
              className={
                'w-[80px] h-[80px] rounded-full bg-[#DAE0E0] flex justify-center items-center'
              }
            >
              <Message2
                size={24}
                variant={'Bold'}
                className={'text-primary'}
              />
            </div>
            <h3 className={'text-base font-bold'}>Send Us a Message</h3>
          </div>
          <div>
            <p className={'text-sm text-center'}>
              Please fill the form below . We will get back to you as
              soon as possible
            </p>
          </div>
          <div className={'w-full'}>
            <Textarea
              className={
                'min-h-[120px] max-h-[250px] placeholder:text-xs'
              }
              placeholder={'Your message goes here...'}
              onChange={handleMessageChange}
            />
          </div>
        </div>
        <DialogFooter className={'py-4'}>
          <LoaderButton
            loading={loading}
            variant={'default'}
            onClick={async () => {
              setLoading(true);
              const res = await sendMessage({
                message,
              });
              setLoading(false);
              setMessageSent(true);
              openModal();
            }}
            className={'w-full'}
          >
            Submit
          </LoaderButton>
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
      <DialogContent className={'w-[95%]'}>
        <div className={'flex justify-center py-8'}>
          <p>Your message has been sent.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
