import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type modalProps = {
  titleButton: string
}

export const AccArticleModal = ({titleButton}: modalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary-500 hover:bg-primary-600'>{titleButton}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12 z-[9999]'>
        <DialogHeader>
          <DialogTitle>
            <h6 className='text-center'>
            Apakah Anda yakin informasi sudah sesuai ?
            </h6>
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
          Cek kembali informasi Acara dengan benar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Tinjau Ulang
          </Button>
          <Button type='submit' className='bg-primary-500 hover:bg-primary-600 w-full'>
            Selesai
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
