import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useDeleteDocument } from '@/hooks/studi-ku/modul/hook';

import { DeleteDialog } from '@/components/dialog/detele-dialog';

export default function DeleteDocumentModal({ id }: { id: string }) {
  const { subject_id, session_id, module_id } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useDeleteDocument(
    subject_id as string,
    session_id as string,
    module_id as string,
    id,
  );

  const handleSubmit = () => {
    try {
      mutate(id, {
        onSuccess: () => {
          toast.success('Dokumen Berhasil Dihapus!');
          queryClient.invalidateQueries(['get-document-by-module-id'] as any);
        },
        onError: () => {
          toast.error('Dokumen Gagal Dihapus!');
        },
      });
    } catch (err) {
      toast.error('Dokumen Gagal Dihapus!');
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
