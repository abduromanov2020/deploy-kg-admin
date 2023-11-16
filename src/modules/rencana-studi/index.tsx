'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai';
import {
  FaCalendarAlt,
  FaFileExport,
  FaFilter,
  FaPlus,
  FaPlusCircle,
} from 'react-icons/fa';
import { CiCirclePlus } from 'react-icons/ci';

import { IoGridOutline, IoListOutline } from 'react-icons/io5';

export const RencanaStudiModule = () => {
  const [showGrid, setShowGrid] = React.useState(false);

  return (
    <div className='bg-white rounded'>
      <div className='p-4 border-b-2'>
        <p className='text-base font-semibold'>Rencana Studi</p>
      </div>
      <div className='p-8'>
        <section className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input type='text' placeholder='Search' className='pl-10' />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Button className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
              <CiCirclePlus size={20} />
              <p className='leading-none'>Fakultas</p>
            </Button>
            <Button
              className={`${
                showGrid
                  ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                  : 'bg-white hover:bg-primary-500 hover:text-white'
              }   p-3`}
            >
              <IoGridOutline size={24} />
            </Button>
            <Button className='bg-primary-500 shadow-md hover:bg-white text-white hover:text-primary-500 p-3'>
              <IoListOutline size={24} />
            </Button>
          </div>
        </section>
        <section>TEST</section>
      </div>
    </div>
  );
};
