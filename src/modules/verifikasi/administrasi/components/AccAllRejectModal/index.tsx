import toast from 'react-hot-toast';
import { IoWarningOutline } from 'react-icons/io5';

import { useRejectAdministrasi } from '@/hooks/verifikasi/administrasi/hook';

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

interface TProps {
  trigger: React.ReactNode;
  selectedIds: string[];
  refetch: () => void;
}

export const AccAllRejectModal = ({
  trigger,
  selectedIds,
  refetch,
}: TProps) => {
  const payload = {
    administration_ids: [selectedIds],
  };

  const { mutate } = useRejectAdministrasi();

  const handleClick = () => {
    mutate(payload, {
      onSuccess: () => {
        toast.success('Berhasil Reject Administrasi Akun Ini !');
        refetch();
      },
      onError: () => {
        toast.error('Gagal Reject Administrasi Akun Ini !');
      },
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-full bg-red-200'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle className='text-center'>
            Apakah Anda ingin menolak semua yang ditandai pada Administrasi ini?
          </DialogTitle>
          <DialogDescription className='text-center'>
            Cek kembali administrasi bila dirasa belum benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose className='w-full'>
            <Button variant='outline' className='w-full'>
              Batal
            </Button>
          </DialogClose>
          <DialogClose className='w-full'>
            <Button
            onClick={handleClick}
              type='submit'
              className='bg-red-800 w-full hover:bg-red-900'
            >
              Tolak
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
