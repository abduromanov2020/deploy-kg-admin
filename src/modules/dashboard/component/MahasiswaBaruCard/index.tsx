import React from 'react';

import { Button } from '@/components/ui/button';

import { TableMahasiswaBaru } from '@/modules/dashboard/component/MahasiswaBaruCard/TableMahasiswaBaru';

export const MahasiswaBaruCard = () => {
  return (
    <div className='bg-white rounded-md col-span-2'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Mahasiswa Baru</span>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500'
        >
          Lihat Semua
        </Button>
      </div>
      <div className='p-8'>
        <TableMahasiswaBaru />
      </div>
    </div>
  );
};
