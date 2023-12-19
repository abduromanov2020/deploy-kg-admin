import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

interface TProps {
  isOpen: boolean;
  onChangeModal:()=>void
  idAdmin:string
}

export const AccConfirmModal = ({ isOpen, onChangeModal, idAdmin }: TProps) => {
  
  return (
    <Dialog open={isOpen} onOpenChange={onChangeModal}>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle className='text-center'>
          Apakah Anda ingin menyetujui Verifikasi Administrasi ini?
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali administrasi bila dirasa belum benar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose className='w-full'>
            <Button variant='outline' className='w-full'>
              Batal
            </Button>
          </DialogClose>
          <Button type='submit' className='bg-primary-500 w-full hover:bg-primary-600'>
            Terima
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
