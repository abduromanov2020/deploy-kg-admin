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

export const DeleteConfirmModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-red-800' size='sm'>
          Hapus
        </Button>
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
          <Button variant='outline' className='w-full'>
            Batal
          </Button>
          <Button type='submit' className='bg-red-800 w-full'>
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
