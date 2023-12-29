import { useParams, useRouter } from 'next/navigation';
import { CiWarning } from 'react-icons/ci';
import { IoWarningOutline } from 'react-icons/io5';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const ModalActiveTeacher: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useUserById(id);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className='px-6 py-3 shadow-md text-blue-600 border border-blue-600 bg-white rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
            <div className='flex place-items-center gap-2'>
              <CiWarning />
              Aktifkan Dosen
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] text-center p-12'>
          <DialogHeader>
            <div className='flex justify-center items-center'>
              <div className='p-3 rounded-full bg-yellow-200'>
                <IoWarningOutline className='text-yellow-800' size={24} />
              </div>
            </div>
            <DialogTitle>
              <h6 className='text-center'>
                Apakah Anda yakin akan mengaktifkan Dosen ?{' '}
              </h6>
            </DialogTitle>

            <DialogDescription className='text-center'>
              Tinjau ulang bila ragu memberikan tindakan{' '}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className='flex w-full justify-between'>
            <DialogClose asChild>
              <Button variant='outline' className='w-full'>
                Tinjau Ulang
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <ModalActiveLoginFirstAdmin />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ModalActiveTeacher;

const ModalActiveLoginFirstAdmin: React.FC = () => {
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
              <LastModal />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const LastModal: React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/user-management/dosen');
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
              Dosen Telah Diaktifkan
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
