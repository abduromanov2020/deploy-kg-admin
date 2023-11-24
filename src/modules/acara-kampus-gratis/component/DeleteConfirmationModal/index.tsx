import { FC } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

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

export const DeleteConfirmModal: FC<{ type: string }> = ({ type }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {type === 'button' ? (
          <Button className='bg-red-800' size='sm'>
            Hapus
          </Button>
        ) : type === 'buttonIcon' ? (
          <Button
            className='text-red-800 border-red-800 flex gap-2 hover:text-white hover:bg-red-800'
            variant='outline'
          >
            <RiDeleteBin6Line size={20} />
            Hapus
          </Button>
        ) : (
          <Button
            variant='ghost'
            className=' px-3 py-2 flex justify-start items-center gap-2 text-red-800 min-w-[125px] hover:text-red-900 text-xs'
          >
            <RiDeleteBin6Line size={15} />
            Hapus
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-full bg-red-200'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle>
            <h6 className='text-center'>
              Apakah Anda yakin akan menghapus acara ?{' '}
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali informasi acara dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose className='w-full'>
            <Button variant='outline' className='w-full'>
              Batal
            </Button>
          </DialogClose>
          <Button type='submit' className='bg-red-800 w-full'>
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
