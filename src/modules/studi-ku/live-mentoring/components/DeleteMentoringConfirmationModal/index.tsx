import React from 'react';
import { TbEdit } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

export const DeleteMentoringConfirmationModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='flex gap-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white'
        >
          <TbEdit size={15} />
          Hapus Mentoring
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Apakah Anda yakin akan menghapus Mentoring ?{' '}
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-red-800 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali informasi acara dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang{' '}
            </Button>
          </DialogClose>
          <DialogClose>
            <Button
              // onClick={() => {
              //   form.handleSubmit(onSubmit)();
              //   // setActiveTab('detail');
              // }}
              type='submit'
              className='bg-red-800 w-full text-white hover:bg-red-900'
            >
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
