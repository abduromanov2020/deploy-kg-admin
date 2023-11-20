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

export const AccRejectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-red-800'>Tolak</Button>
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
              Apakah Anda ingin menolak Verifikasi Administrasi ini?
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali administrasi bila dirasa belum benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Batal
          </Button>
          <Button type='submit' className='bg-red-800 w-full'>
            Tolak
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
