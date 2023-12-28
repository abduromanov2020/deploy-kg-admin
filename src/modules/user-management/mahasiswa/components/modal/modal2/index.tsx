import { useParams } from 'next/navigation';
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

import PopUpPenaltyLoginFirstAdmin from '@/modules/user-management/mahasiswa/components/modal/modal3';
const PopUpPenaltyNext: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useUserById(id);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button type='submit' className='bg-red-800 w-full'>
            <p>Tindak</p>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] text-center p-12'>
          <DialogHeader>
            <div className='flex justify-center items-center'>
              <div className='p-3 rounded-full bg-red-200'>
                <IoWarningOutline className='text-red-800' size={24} />
              </div>
            </div>
            <DialogTitle>
              <h6 className='text-center'>Berikan Tindakan Pada Mahasiswa</h6>
            </DialogTitle>

            <DialogDescription className='text-center'>
              Tinjau ulang bila ragu memberikan tindakan{' '}
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col  gap-4'>
              <Label htmlFor='name' className='text-start'>
                Nama Mahasiswa
              </Label>
              <Input
                id='name'
                placeholder={data?.data?.full_name}
                className='col-span-3 bg-slate-300'
                disabled
              />
            </div>
            <div className='flex flex-col  gap-4'>
              <Label htmlFor='name' className='text-start'>
                Pelanggaran
              </Label>
              <Input id='name' className='col-span-3' />
            </div>
            <div className='flex flex-col gap-4'>
              <Label htmlFor='username' className='text-start'>
                Sanksi
              </Label>
              <Input id='username' className='col-span-3' />
            </div>
          </div>
          <DialogFooter className='flex w-full justify-between'>
            <DialogClose asChild>
              <Button variant='outline' className='w-full'>
                Tinjau Ulang
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <PopUpPenaltyLoginFirstAdmin />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default PopUpPenaltyNext;
