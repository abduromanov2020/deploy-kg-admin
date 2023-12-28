import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { LastModalActiveStudent } from '@/modules/user-management/mahasiswa/components/modal-lulus/modal3';
const ModalPenaltyLoginFirstAdmin: React.FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button type='submit' className='bg-blue-600 w-full'>
            <p>Tindak</p>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] text-center p-12'>
          <DialogHeader>
            <DialogTitle>
              <h6 className='text-center'>Masukkan Akun Admin Utama</h6>
            </DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col  gap-4'>
              <Label htmlFor='name' className='text-start'>
                Nama Pengguna*
              </Label>
              <Input
                id='name'
                placeholder='Masukkan Nama Pengguna Admin Utama'
                className='col-span-3 '
              />
            </div>
            <div className='flex flex-col  gap-4'>
              <Label htmlFor='name' className='text-start'>
                Kata Sandi*
              </Label>
              <Input
                placeholder='Masukkan Kata Sandi Admin Utama'
                id='name'
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter className='flex w-full justify-between'>
            <DialogClose asChild>
              <Button variant='outline' className='w-full'>
                Tinjau Ulang
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <LastModalActiveStudent />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ModalPenaltyLoginFirstAdmin;
