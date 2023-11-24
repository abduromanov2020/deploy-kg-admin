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

export const AccSubmitModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary-500'>Setuju</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            Apakah Anda yakin informasi sudah sesuai ?
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali informasi acara dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Tinjau Ulang{' '}
          </Button>
          <Button type='submit' className='bg-primary-500 w-full'>
            Selesai
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
