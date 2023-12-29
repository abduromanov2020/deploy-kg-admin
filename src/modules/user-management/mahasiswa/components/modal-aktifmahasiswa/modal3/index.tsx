import { Separator } from '@radix-ui/react-menubar';
import { useRouter } from 'next/navigation';

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

export const LastModalActiveStudent: React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/user-management/mahasiswa');
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button type='submit' className='bg-blue-800 w-full'>
            Selesai
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] text-center p-12'>
          <DialogHeader>
            <DialogTitle className='text-center'>
              Mahasiswa Telah di Aktifkan
            </DialogTitle>
            <div className='py-3'>
              <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
            </div>
            <DialogDescription className='text-center'>
              Kembali ke Halaman Utama
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='flex w-full justify-between'>
            <Button className='bg-primary-500 w-full' onClick={handleBack}>
              Kembali
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
