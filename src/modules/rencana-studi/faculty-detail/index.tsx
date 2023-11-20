import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline } from 'react-icons/io5';
import { BiSolidFileExport } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';

const RencanaStudiDetailFaculty = () => {
  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Detail Fakultas',
      link: '/rencana-studi/detail/1',
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Nama Fakultas</p>
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
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button>
              <Button className='shadow-md bg-white border-2 border-red-800 text-red-800 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <FaTrash size={20} />
                <p className='leading-none'>Hapus Fakultas</p>
              </Button>
              <Button className='shadow-md bg-white border-2 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <p className='leading-none'>Edit Fakultas</p>
              </Button>
            </div>
          </section>
          <div className='my-8'>
            <h1>TEST</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RencanaStudiDetailFaculty;
