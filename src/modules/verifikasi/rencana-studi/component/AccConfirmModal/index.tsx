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

export const AccConfirmModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary-500'>Setuju</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle>
            <h6 className='text-center'>
              Apakah Anda ingin menyetujui Verifikasi Administrasi ini?
            </h6>
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali administrasi bila dirasa belum benar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Batal
          </Button>
          <Button type='submit' className='bg-primary-500 w-full'>
            Terima
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
