import { FaTrash } from 'react-icons/fa';
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
  icons?: boolean;
  label?: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export const DeleteDialog = ({
  icons,
  label,
  title,
  description,
  onClick,
}: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {icons ? (
          <div className='flex gap-3 text-red-700 items-center text-sm font-medium cursor-pointer'>
            <FaTrash fill='currentColor' className='w-4 h-4' />
            Hapus
          </div>
        ) : (
          <Button className='bg-red-800 hover:bg-red-900'>{label}</Button>
        )}
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

          <DialogClose asChild>
            <Button
              type='submit'
              className='bg-red-800 hover:bg-red-900 w-full'
              onClick={onClick}
            >
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
