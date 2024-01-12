'use client';

import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { EditFacultyModal } from '@/modules/rencana-studi/faculty/components/editFacultyModal';
import DeleteFacultyModal from '@/modules/rencana-studi/faculty/faculty-delete';

interface PopoverMajorsProps {
  facultyId: string;
}

export const PopoverFaculty: React.FC<PopoverMajorsProps> = ({ facultyId }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='bg-transparent text-gray-900 hover:bg-transparent hover:text-gray-900 px-2'>
          <IoMdMore size={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-48'>
        <div className='bg-white rounded-md flex flex-col gap-3'>
          <EditFacultyModal
            modalTrigger={
              <div className='flex items-center gap-5 text-primary-500 hover:text-primary-400 cursor-pointer'>
                <BiEdit />
                Edit Fakultas
              </div>
            }
            id={facultyId}
          />
          <hr />
          <DeleteFacultyModal
            modalTrigger={
              <div className='flex items-center text-red-900 hover:text-red-700 gap-5 cursor-pointer'>
                <FaTrash />
                <p className='text-start'>Hapus</p>
              </div>
            }
            id={facultyId}
          />
          {/* <Link
            href={`/rencana-studi/program-studi/1/edit-fakultas/${facultyId}`}
          >
            <div className='flex items-center gap-5 text-primary-500 hover:text-primary-400 cursor-pointer'>
              <BiEdit />
              <p className='text-start'>Edit</p>
            </div>
          </Link>
          <hr />
          <DeleteFacultyModal id={facultyId} /> */}
        </div>
      </PopoverContent>
    </Popover>
  );
};
