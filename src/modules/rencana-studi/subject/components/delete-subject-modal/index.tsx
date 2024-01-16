import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { IoWarningOutline } from 'react-icons/io5';

import { useDeleteSubject } from '@/hooks/rencana-studi/subjects/hook';

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

export const DeleteSubjectModal = ({ modalTrigger, id }: modalTriggerProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteSubject } = useDeleteSubject(id);

  const handleSubmitDelete = async () => {
    await deleteSubject(id, {
      onSuccess: () => {
        toast.success('Mata Kuliah Berhasil Dihapus!');
        queryClient.invalidateQueries(['subject-get-by-major-id'] as any);
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
              Apakah Anda ingin menghapus mata kuliah ini?
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali mata kuliah bila dirasa belum benar.
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
