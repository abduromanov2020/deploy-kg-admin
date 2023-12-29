import toast from 'react-hot-toast';

import { useAccAdministrasi } from '@/hooks/verifikasi/administrasi/hook';

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

interface TProps {
  trigger: React.ReactNode;
  selectedIds: string[];
  refetch: () => void;
}

export const AccAllConfirmModal = ({
  trigger,
  selectedIds,
  refetch,
}: TProps) => {
  const payload = {
    administration_ids: selectedIds,
  };

  const { mutate } = useAccAdministrasi();

  const handleClick = () => {
    mutate(payload, {
      onSuccess: () => {
        toast.success('Berhasil Accept Administrasi Akun Yang Dipilih !');
        refetch();
        window.location.reload();
      },
      onError: () => {
        toast.error('Gagal Accept Administrasi Akun Yang Dipilih !');
      },
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Apakah Anda ingin menyetujui semua yang ditandai pada Administrasi
            ini?
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali administrasi bila dirasa belum benar.
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
              className='bg-primary-500 w-full hover:bg-primary-600'
            >
              Terima
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
