import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { IoWarningOutline } from 'react-icons/io5';

import { useDeleteMajor } from '@/hooks/rencana-studi/majors/hook';

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

interface modalTriggerProps {
  id: string;
  modalTrigger: React.ReactNode;
}

export const DeleteMajorModal = ({ modalTrigger, id }: modalTriggerProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMajor } = useDeleteMajor(id);

  const handleSubmitDelete = async () => {
    await deleteMajor(id, {
      onSuccess: () => {
        toast.success('Program Studi Berhasil Dihapus!');
        queryClient.invalidateQueries(['major-get'] as any);
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-full bg-red-200'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle>
            <h6 className='text-center leading-5'>
              Apakah Anda ingin menghapus Program Studi ini?
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali Program Studi bila dirasa belum benar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang
            </Button>
          </DialogClose>
          <DialogClose className='w-full'>
            <Button
              type='submit'
              className='bg-red-800 hover:bg-red-900 w-full'
              onClick={handleSubmitDelete}
            >
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
