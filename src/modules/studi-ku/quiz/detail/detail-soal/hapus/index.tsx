import { DeleteDialog } from '@/components/dialog/detele-dialog';
import {
  useQuizDeleteRequest,
  useQuizQuestionDeleteRequest,
} from '@/hooks/studi-ku/quiz/hook';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';

export default function DeleteQuestionQuizModal({ id }: { id: string }) {
  const { subject_id, session_id, quiz_id } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useQuizQuestionDeleteRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
    id,
  );

  const handleDeleteQuestion = () => {
    try {
      mutate(id, {
        onSuccess: () => {
          toast.success('Pertanyaan Berhasil Dihapus!');
          queryClient.invalidateQueries(['get-quiz-question'] as any);
        },
        onError: (error) => {
          toast.error(error && 'Gagal Menghapus Pertanyaan!');
        },
      });
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  return (
    <DeleteDialog
      icons={true}
      title='Hapus Pertanyaan'
      description='Apakah Anda Yakin Ingin Menghapus Pertanyaan Ini?'
      onClick={handleDeleteQuestion}
    />
  );
}
