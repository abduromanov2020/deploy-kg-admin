import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { useDeleteModule } from '@/hooks/studi-ku/modul/hook';

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

interface HapusModuleModalProps {
  subject_id: string;
  session_id: string;
  module_id: string;
}

export default function HapusModuleModal({
  subject_id,
  session_id,
  module_id,
}: HapusModuleModalProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteModule } = useDeleteModule(
    subject_id,
    session_id,
    module_id,
  );

  const handleSubmitDelete = async () => {
    await deleteModule(module_id, {
      onSuccess: () => {
        toast.success('Modul Berhasil Dihapus!');
        queryClient.invalidateQueries(['get-modules-by-session-id'] as any);
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>Hapus Modul</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Hapus Modul</DialogTitle>
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
              Hapus Modul
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
