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

interface DeleteModalProps {
  modalTrigger: React.ReactNode;
  handleSubmitDelete: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  description: string;
}

export default function DeleteModal({
  modalTrigger,
  handleSubmitDelete,
  title,
  description,
}: DeleteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Batal</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type='submit'
              variant='destructive'
              onClick={handleSubmitDelete}
            >
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
