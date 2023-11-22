'use client';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Button } from '@/components/ui/button';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidFileExport } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';
import { MajorTable } from '@/modules/rencana-studi/major/components/table';
import { FilterComponentMajor } from '@/modules/rencana-studi/major/components/filter';
import MajorGrid from '@/modules/rencana-studi/major/components/grid';
import { SubjectTable } from '@/modules/rencana-studi/subject/components/table';

const SubjectModule = () => {
  const [showGrid, setShowGrid] = React.useState(false);
  const [showList, setShowList] = React.useState(true);

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: '/rencana-studi/program-studi/1',
    },
    {
      name: 'Daftar Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1',
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Prodi Nama Prodi</p>
        </div>
        <div className='p-8'>
          <section className='flex justify-between items-center'>
            <div className='w-1/3 relative'>
              <Input
                type='text'
                placeholder='Cari Program Studi'
                className='pl-10'
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Button className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <CiCirclePlus size={20} />
                <p className='leading-none'>Tambah Mata Kuliah</p>
              </Button>
              <FilterComponentMajor />
              <Button className='bg-white shadow-md hover:bg-primary-500 text-primary-500 hover:text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button>
            </div>
          </section>
          <div className='my-8 w-full'>
            <SubjectTable />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubjectModule;
