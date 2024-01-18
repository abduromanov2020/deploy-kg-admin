'use client';

import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { DeleteSubjectModal } from '@/modules/rencana-studi/subject/components/delete-subject-modal';

interface PopOverSubjectProps {
  majorId: string | string[];
  facultyId: string | string[];
  subjectId: string | string[];
}

export const PopOverSubject: React.FC<PopOverSubjectProps> = ({
  majorId,
  facultyId,
  subjectId,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='bg-transparent text-gray-900 hover:bg-transparent hover:text-gray-900 px-2'>
          <IoMdMore size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-48'>
        <div className='bg-white rounded-md flex flex-col gap-3'>
          <Link
            href={`/rencana-studi/program-studi/${facultyId}/mata-kuliah/${majorId}/edit-matkul/${subjectId}`}
          >
            <div className='flex items-center gap-5 text-primary-500 hover:text-primary-400 cursor-pointer'>
              <BiEdit />
              <p className='text-start'>Edit</p>
            </div>
          </Link>
          <hr />
          <DeleteSubjectModal
            modalTrigger={
              <div className='flex items-center text-red-900 hover:text-red-700 gap-5 cursor-pointer'>
                <FaTrash />
                <p className='text-start'>Hapus</p>
              </div>
            }
            id={`${subjectId}`}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
