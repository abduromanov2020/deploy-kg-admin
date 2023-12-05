import { IoWarningOutline } from 'react-icons/io5';

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

interface TProps {
  buttonTrigger: React.ReactNode;
  dialogTitle: string;
  buttonSubmit: React.ReactNode;
}

export const AccRejectModal = ({ buttonTrigger, dialogTitle, buttonSubmit }: TProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {buttonTrigger}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-center p-12'>
        <DialogHeader>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-full bg-red-200'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle>
            <h6 className='text-center'>
              {dialogTitle}
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali administrasi bila dirasa belum benar.{' '}
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
