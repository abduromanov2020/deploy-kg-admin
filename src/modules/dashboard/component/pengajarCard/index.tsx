import React from 'react';

import { Button } from '@/components/ui/button';

import { TableDaftarPengajar } from '@/modules/dashboard/component/pengajarCard/TableDaftarPengajar';

export const PengajarCard = () => {
  return (
    <div className='bg-white rounded-md col-span-2'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Daftar Pengajar</span>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500'
        >
          Lihat Semua
        </Button>
      </div>
      <div className='p-8'>
        <TableDaftarPengajar />
      </div>
    </div>
  );
};
