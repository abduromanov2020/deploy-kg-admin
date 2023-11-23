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

type DeleteDialogProps = {
  label: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export const DeleteDialog = ({
  label,
  title,
  description,
}: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-red-800 w-full hover:bg-red-900'>{label}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px] text-center p-12'>
        <DialogHeader>
          <div className='flex justify-center items-center'>
            <div className='p-3 rounded-full bg-red-200'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle>
            <p className='text-center tracking-wide'>{title}</p>
          </DialogTitle>

          <DialogDescription className='text-center'>
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang
            </Button>
          </DialogClose>

          <Button type='submit' className='bg-red-800 hover:bg-red-900 w-full'>
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
