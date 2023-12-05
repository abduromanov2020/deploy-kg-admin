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

interface TProps {
  buttonTrigger: React.ReactNode;
  dialogTitle: string;
  buttonSubmit: React.ReactNode;
}

export const AccConfirmModal = ({ buttonTrigger, dialogTitle, buttonSubmit }: TProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {buttonTrigger}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <DialogTitle>
            <h6 className='text-center'>
              {dialogTitle}
            </h6>
          </DialogTitle>
          <div className='py-3'>
            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
          </div>
          <DialogDescription className='text-center'>
            Cek kembali bila dirasa belum benar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <Button variant='outline' className='w-full'>
            Tinjau Ulang
          </Button>
          {buttonSubmit}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
