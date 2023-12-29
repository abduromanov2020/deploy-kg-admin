import { DialogClose } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

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
import { Separator } from '@/components/ui/separator';

export const ModalAddTeacher = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
          <div className='flex place-items-center gap-2'>Simpan Perubahan</div>
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Apakah Anda yakin informasi sudah sesuai ?
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali informasi acara dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang{'  '}
            </Button>
          </DialogClose>
          <AddTeacherModalConfirm />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const AddTeacherModalConfirm: React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/user-management/dosen');
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button type='submit' className='bg-blue-800 w-full'>
            Selesai
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] text-center p-12'>
          <DialogHeader>
            <DialogTitle className='text-center'>
              Dosen Telah di Tambahkan
            </DialogTitle>
            <div className='py-3'>
              <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
            </div>
            <DialogDescription className='text-center'>
              Kembali ke Halaman Utama
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='flex w-full justify-between'>
            <Button className='bg-primary-500 w-full' onClick={handleBack}>
              Kembali
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
