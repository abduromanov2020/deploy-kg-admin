import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useDeleteSession } from '@/hooks/rencana-studi/session/hook';

import { DeleteDialog } from '@/components/dialog/detele-dialog';

export default function DeleteSessionModal({ id }: { id: string }) {
  const { id_subject } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useDeleteSession(id_subject as string, id);

  const handleSubmit = () => {
    try {
      mutate(id, {
        onSuccess: () => {
          toast.success('Pertemuan Berhasil Dihapus!');
          queryClient.invalidateQueries(['sessions-get-by-subject-id'] as any);
        },
        onError: () => {
          toast.error('Pertemuan Gagal Dihapus!');
        },
      });
    } catch (err) {
      toast.error('Pertemuan Gagal Dihapus!');
    }
  };

  return (
    <DeleteDialog
      icons={true}
      title='Apakah Anda yakin akan menghapus dokumen ini ?'
      description='Cek kembali informasi dengan benar.'
      onClick={handleSubmit}
    />
  );
}
