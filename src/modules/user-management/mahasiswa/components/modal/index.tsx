import React from 'react';
import { CiWarning } from 'react-icons/ci';
import { IoWarningOutline } from 'react-icons/io5';

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

import PopUpPenaltyNext from '@/modules/user-management/mahasiswa/components/modal2';

export const PopUpPenaltyStudent: React.FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className='px-6 py-2  text-red-600 border-2 border-red-600 rounded-md  hover:text-white hover:bg-red-600 hover:transition'>
            <div className='flex place-items-center gap-2'>
              <CiWarning /> Berhentikan Mahasiswa
            </div>
          </button>
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
                Apakah Anda yakin akan memberikan tindakan kepada mahasiswa ?{' '}
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
              <PopUpPenaltyNext />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// export default PopUpPenaltyStudent;

export default PopUpPenaltyStudent;
