import { DeleteDialog } from '@/components/dialog/detele-dialog';
import { useQuizDeleteRequest } from '@/hooks/studi-ku/quiz/hook';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';

export default function DeleteQuizModal({ id }: { id: string }) {
  const { subject_id, session_id } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useQuizDeleteRequest(
    subject_id as string,
    session_id as string,
    id,
  );

  const handleDeleteQuiz = () => {
    try {
      mutate(id, {
        onSuccess: () => {
          toast.success('Quiz Berhasil Dihapus!');
          queryClient.invalidateQueries(['get-modules-by-session-id'] as any);
        },
        onError: (error) => {
          toast.error(error && 'Gagal Menghapus Quiz!');
        },
      });
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  return (
    <DeleteDialog
      icons={true}
      title='Hapus Quiz'
      description='Apakah Anda Yakin Ingin Menghapus Quiz Ini?'
      onClick={handleDeleteQuiz}
    />
  );
}
