import React from 'react';
import { CiLock } from 'react-icons/ci';
import { IoWarning } from 'react-icons/io5';

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

import ModalActiveLoginFirstAdmin from '@/modules/user-management/mahasiswa/components/modal-aktifmahasiswa/modal2';

export const ModalActiveStudent: React.FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className='px-3 py-2 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
            <div className='flex place-items-center gap-2'>
              <CiLock /> Aktifkan Mahasiswa
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] text-center p-12'>
          <DialogHeader>
            <div className='flex justify-center items-center'>
              <div className='p-3 rounded-full bg-red-200'>
                <IoWarning className='text-yellow-800' size={24} />
              </div>
            </div>
            <DialogTitle>
              <h6 className='text-center'>
                Apakah Anda yakin akan mengaktifkan Mahasiswa ini ?{' '}
              </h6>
            </DialogTitle>

            <DialogDescription className='text-center'>
              Tinjau ulang bila ragu memberikan tindakan{' '}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='flex w-full justify-between'>
            <DialogClose asChild>
              <Button variant='outline' className='w-full'>
                Tinjau Ulang
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <ModalActiveLoginFirstAdmin />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalActiveStudent;
