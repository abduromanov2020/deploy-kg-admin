'use client';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { DiskusiCard } from '@/modules/studi-ku/diskusi/components/DiskusiCard';

export const StudikuDiskusiModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Diskusi',
      link: `/studi-ku/diskusi`,
    },
  ];
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>
            Daftar Topik Diskusi : Matkul Manajemen Keuangan
          </span>
        </div>
        <div className='p-8 grid grid-cols-3 gap-5'>
          <DiskusiCard />
          <DiskusiCard />
          <DiskusiCard />
        </div>
      </div>
    </div>
  );
};
