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
import { FaTrash } from 'react-icons/fa';

export const DeleteMajorModalDetail = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='shadow-md bg-white border-2 border-red-800 text-red-800 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base hover:bg-red-800 hover:text-white'>
          <FaTrash size={20} />
          <p className='leading-none'>Hapus Prodi</p>
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
              Apakah Anda yakin akan menghapus Program Studi ?
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali informasi program studi dengan benar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang
            </Button>
          </DialogClose>

          <Button type='submit' className='bg-red-800 hover:bg-red-900 w-full'>
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
