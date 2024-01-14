import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { useDeleteFaculty } from '@/hooks/rencana-studi/faculties/hook';

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

interface HapusFacultyModalProps {
  id: string;
  modalTrigger: React.ReactNode;
}

export default function DeleteFacultyModal({
  id,
  modalTrigger,
}: HapusFacultyModalProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteFaculty } = useDeleteFaculty(id);

  const handleSubmitDelete = async () => {
    await deleteFaculty(id, {
      onSuccess: () => {
        toast.success('Fakultas Berhasil Dihapus!');
        queryClient.invalidateQueries(['fakulties-get'] as any);
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Hapus Fakultas</DialogTitle>
          <DialogDescription>
            Apakah Anda Yakin Ingin Menghapus Modul Ini?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Batal</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type='submit'
              variant='destructive'
              onClick={handleSubmitDelete}
            >
              Hapus Fakultas
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
