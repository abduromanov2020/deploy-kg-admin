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
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

interface TProps {
  isOpen: boolean;
  onChangeModal: () => void;
  idAdmin: string | undefined;
  refetch: () => void;
}

export const AccConfirmModal = ({
  isOpen,
  onChangeModal,
  idAdmin,
  refetch,
}: TProps) => {
  const payload = {
    administration_ids: [idAdmin],
  };

  const { mutate } = useAccAdministrasi();

  const handleClick = () => {
    mutate(payload, {
      onSuccess: () => {
        toast.success('Berhasil Accept Administrasi Akun Ini !');
        refetch();
      },
      onError: () => {
        toast.error('Gagal Accept Administrasi Akun Ini !');
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChangeModal}>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Apakah Anda ingin menyetujui Verifikasi Administrasi ini?
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
              type='submit'
              onClick={handleClick}
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
