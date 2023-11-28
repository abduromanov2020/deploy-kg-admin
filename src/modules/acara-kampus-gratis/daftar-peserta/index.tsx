'use client';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Input } from '@/components/ui/input';

import { PesertaFilter } from '@/modules/acara-kampus-gratis/component/PesertaFilter';
import { TablePeserta } from '@/modules/acara-kampus-gratis/component/TablePeserta';
import PesertaData from '@/modules/acara-kampus-gratis/component/TablePeserta/MOCK_DATA.json';

export const DaftarPesertaModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Acara Kampus Gratis',
      link: '/acara-kampus-gratis',
    },
    {
      name: 'Daftar Peserta',
      link: `/acara-kampus-gratis/daftar-peserta`,
    },
  ];
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Daftar Peserta</span>
        </div>
        <div className='p-8'>
          <div className='flex justify-between'>
            <div className='w-1/3 relative'>
              <Input
                type='text'
                placeholder='Search'
                className='pl-10'
                // value={
                //   (table.getColumn('email')?.getFilterValue() as string) ?? ''
                // }
                // onChange={(event) =>
                //   table.getColumn('email')?.setFilterValue(event.target.value)
                // }
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <section className='flex gap-5 items-center'>
              <PesertaFilter />
            </section>
          </div>
          <div className='my-8'>
            <TablePeserta data={PesertaData} />
          </div>
        </div>
      </div>
    </div>
  );
};
