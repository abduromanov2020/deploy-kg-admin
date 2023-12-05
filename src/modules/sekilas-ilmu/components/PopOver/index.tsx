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
import { DeteleArticleModal } from '@/modules/sekilas-ilmu/components/DeleteModal';
import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa6';
import { IoMdMore } from 'react-icons/io';

export function PopoverArticle() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='bg-transparent text-gray-900 hover:bg-transparent hover:text-gray-900 px-2'>
          <IoMdMore size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-48'>
        <div className='bg-white rounded-md flex flex-col gap-3'>
          <Link href='/sekilas-ilmu/edit-artikel'>
            <div className='flex items-center gap-5 text-primary-500 hover:text-primary-400 cursor-pointer'>
              <BiEdit />
              <p className='text-start'>Edit</p>
            </div>
          </Link>
          <hr />
          <DeteleArticleModal
            modalTrigger={
              <div className='flex items-center text-red-900 hover:text-red-700 gap-5 cursor-pointer'>
                <FaTrash />
                <p className='text-start'>Hapus</p>
              </div>
            }
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
