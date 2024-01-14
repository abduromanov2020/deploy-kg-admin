import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useDeleteVideo } from '@/hooks/studi-ku/modul/hook';

import { DeleteDialog } from '@/components/dialog/detele-dialog';

export default function DeleteVideoModal({ id }: { id: string }) {
  const { subject_id, session_id, module_id } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useDeleteVideo(
    subject_id as string,
    session_id as string,
    module_id as string,
  );

  const handleSubmit = () => {
    try {
      mutate(id, {
        onSuccess: () => {
          toast.success('Video Berhasil Dihapus!');
          queryClient.invalidateQueries(['get-video-by-module-id'] as any);
        },
        onError: () => {
          toast.error('Video Gagal Dihapus!');
        },
      });
    } catch (err) {
      toast.error('Video Gagal Dihapus!');
    }
  };

  return (
    <DeleteDialog
      icons={true}
      title='Apakah Anda yakin akan menghapus Video ini ?'
      description='Cek kembali informasi dengan benar.'
      onClick={handleSubmit}
    />
  );
}
