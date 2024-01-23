import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { useDeleteModule } from '@/hooks/studi-ku/modul/hook';

import { DeleteDialog } from '@/components/dialog/detele-dialog';

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
    <DeleteDialog
      icons={true}
      title='Hapus Modul'
      description='Apakah Anda Yakin Ingin Menghapus Modul Ini?'
      onClick={handleSubmitDelete}
    />
  );
}
