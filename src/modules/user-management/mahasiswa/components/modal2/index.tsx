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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const PopUpPenaltyNext: React.FC = () => {
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
              <h6 className='text-center'>KWAOKOAWENOAWNEKAWEMOKWA</h6>
            </DialogTitle>

            <DialogDescription className='text-center'>
              Tinjau ulang bila ragu memberikan tindakan{' '}
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col  gap-4'>
              <Label htmlFor='name' className='text-start'>
                Name
              </Label>
              <Input
                id='name'
                placeholder='Pedro Duarte'
                className='col-span-3 bg-slate-300'
                disabled
              />
            </div>
            <div className='flex flex-col  gap-4'>
              <Label htmlFor='name' className='text-start'>
                Name
              </Label>
              <Input
                id='name'
                defaultValue='Pedro Duarte'
                className='col-span-3'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <Label htmlFor='username' className='text-start'>
                Username
              </Label>
              <Input
                id='username'
                defaultValue='@peduarte'
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
            <Button type='submit' className='bg-red-800 w-full'>
              Tindak
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default PopUpPenaltyNext;
