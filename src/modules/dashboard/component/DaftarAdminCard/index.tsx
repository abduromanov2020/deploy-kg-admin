'use client';
import React from 'react';

import { Button } from '@/components/ui/button';

import { AdminCard } from '@/modules/dashboard/component/DaftarAdminCard/AdminCard';

const filter = ['Top Global', 'Top Fakultas', 'Top Prodi'];

export const DaftarAdminCard = () => {
  return (
    <div className='bg-white rounded-md col-span-1'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Daftar Admin</span>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500'
        >
          Lihat Semua
        </Button>
      </div>
      <div className='p-8'>
        {/* <TablePapanScore /> */}
        <AdminCard />
        <AdminCard />
      </div>
    </div>
  );
};
