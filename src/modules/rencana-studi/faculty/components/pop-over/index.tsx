'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { DeleteFacultyModal } from '@/modules/rencana-studi/faculty/components/delete-faculty-modal';
import Link from 'next/link';
import { IoMdMore } from 'react-icons/io';

export function PopoverFaculty() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='bg-transparent text-gray-900 hover:bg-transparent hover:text-gray-900 px-2'>
          <IoMdMore size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-32'>
        <div className='grid gap-4'>
          <div className='space-y-2 w-full'>
            <DeleteFacultyModal />
            <Button
              className='bg-primary-500 w-full hover:bg-primary-600'
              asChild
            >
              <Link  href={'/rencana-studi/edit-fakultas/1'}>Edit</Link>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
