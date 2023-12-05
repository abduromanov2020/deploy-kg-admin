import { FaEdit } from 'react-icons/fa';
import { IoWarningOutline } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const EditConfirmModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
          <div className='flex place-items-center gap-2'>
            <FaEdit /> Edit Data
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
              Apakah Anda yakin informasi sudah selesai ?{' '}
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali informasi acara dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Tinjau Ulang
          </Button>
          <Button type='submit' className='bg-red-800 w-full'>
            Selesai
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
