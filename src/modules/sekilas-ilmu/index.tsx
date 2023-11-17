'use client';

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosList } from 'react-icons/io';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import CardComponent from './card';
import FilterComponent from './filter';

const SekilasIlmuModule = () => {
  const ITESMS = [
    {
      name: 'Sekilas Ilmu',
      link: '/sekilas-ilmu',
    },
    {
      name: 'Daftar Artikel',
      link: '/sekilas-ilmu',
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white'>
        <BreadCrumb items={ITESMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white'>
        <section className='px-4 py-5 border-b-2'>Daftar Artikel</section>
        <section className='px-4 py-5'>
          <div className='flex justify-between items-center'>
            <section className='w-full'>
              <div className='w-1/2 relative'>
                <Input type='text' placeholder='Search' className='pl-10' />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <AiOutlineSearch className='text-gray-400' size={20} />
                </div>
              </div>
            </section>
            <section className='flex gap-2'>
              <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
                <CiCirclePlus className='w-[20px] h-[20px]' />
                <p className='leading-none'>Tambah Artikel</p>
              </Button>
              <FilterComponent />
              <Button className='p-2 bg-primary-500 hover:bg-primary-400'>
                <BsGrid size={25} className='text-dark-100' />
              </Button>
              <Button className='bg-white hover:bg-dark-100 shadow-md p-2 '>
                <IoIosList size={25} className='text-primary-500' />
              </Button>
            </section>
          </div>
        </section>
        <section className='px-4 pb-5 w-full mx-auto'>
          <CardComponent />
        </section>
      </div>
    </main>
  );
};

export default SekilasIlmuModule;
