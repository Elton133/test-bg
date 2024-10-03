'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { ChangeEvent, useState } from 'react';
import { FloatingLabelInput } from '@components/ui/floating-label-input';
import { Label } from '@components/ui/label';
import { deleteUserAccount } from '@/actions/auth';
import { LoaderCircle } from 'lucide-react';

const ConfirmDeleteUserModal = ({ userID }: { userID: string }) => {
  const [openPassword, setOpenPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handlePassword = () => {
    setOpenPassword(!openPassword);
  };

  const handleDelete = async () => {
    try {
      if (!password) {
        setError('Password is required');
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      setLoading(true);
      const res = await deleteUserAccount({ password });
      // @ts-ignore
      if (!res?.status) {
        // @ts-ignore
        setError(res?.message);
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className={
          'border-[#FF170A] border px-2 py-2 rounded-lg text-[#FF170A] font-normal hover:text-white hover:bg-red-500 hover:border-red-400'
        }
      >
        Delete account
      </DialogTrigger>
      <DialogContent className={'w-[95%]'}>
        <DialogHeader>
          <DialogTitle className={'text-2xl'}>
            Delete account
          </DialogTitle>
        </DialogHeader>
        <div className={'flex flex-col gap-6'}>
          <div>
            {!openPassword && (
              <p>
                Are you sure that you want to delete you account?
                Deleting your account will log you out immediately and
                prevent further access. You won&apos;t be able to log
                back in
              </p>
            )}
            {openPassword && (
              <div className={'v-stack gap-4'}>
                <Label className={''}>
                  Enter your password to confirm
                </Label>
                <FloatingLabelInput
                  label={'Password'}
                  type={'password'}
                  placeholder={''}
                  minLength={6}
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                  }}
                  onBlur={() => {
                    setPassword(password.trim());
                  }}
                />
                {error && <p className={'text-red-500'}>{error}</p>}
              </div>
            )}
          </div>
          <div className={'w-full flex justify-end items-center gap-3'}>
            <DialogTrigger
              className={
                'px-4 py-2 rounded-lg font-semibold border border-primary text-primary'
              }
            >
              Cancel
            </DialogTrigger>
            {!openPassword && (
              <Button
                variant={'default'}
                className={'font-semibold'}
                onClick={handlePassword}
              >
                Proceed
              </Button>
            )}
            {openPassword && (
              <Button
                variant={'default'}
                className={'font-semibold flex gap-1 items-center'}
                onClick={handleDelete}
              >
                {loading && <LoaderCircle className={'animate-spin'} />}
                <p>Delete account</p>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteUserModal;
