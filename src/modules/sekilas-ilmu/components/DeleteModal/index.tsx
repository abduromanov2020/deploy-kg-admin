import { IoWarningOutline } from 'react-icons/io5';

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
import { useDeleteArticle } from '@/hooks/sekilas-ilmu/delete-article/hook';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface modalTriggerProps {
  modalTrigger: React.ReactNode;
  articleId: string;
}

export const DeteleArticleModal = ({
  modalTrigger,
  articleId,
}: modalTriggerProps) => {
  interface modalTriggerProps {
    modalTrigger: React.ReactNode;
  }

  const queryClient = useQueryClient();

  const { mutate } = useDeleteArticle();

  const handleSubmitDelete = async () => {
    await mutate(articleId, {
      onSuccess: () => {
        queryClient.invalidateQueries(['article-get'] as any);
        toast.success('Artikel Berhasil Dihapus!');
      },
    });
  };

  console.log(articleId);

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
            <h6 className='text-center'>
              Apakah Anda yakin akan menghapus Artikel ?
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali informasi Artikel dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Tinjau Ulang
          </Button>
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
