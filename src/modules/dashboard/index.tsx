import React from 'react';

import { DashboardCard } from '@/modules/dashboard/component/DashboardCard';
import { MahasiswaBaruCard } from '@/modules/dashboard/component/MahasiswaBaruCard';
import { PendaftaranChart } from '@/modules/dashboard/component/PendaftaranChart';
import { PengajarCard } from '@/modules/dashboard/component/pengajarCard';

export const DashboardModule = () => {
  const cardItems = [
    {
      title: 'Mahasiswa Aktif',
      data: '10.876',
      totalData: '/15.878',
    },
    {
      title: 'Mata Kuliah Aktif',
      data: '76',
      totalData: '/30',
    },
    {
      title: 'Prodi Terdaftar',
      data: '76',
      totalData: '/30',
    },
    {
      title: 'Fakultas Terdaftar',
      data: '76',
      totalData: '/30',
    },
  ];

  return (
    <div className='flex flex-col gap-5'>
      <div className='grid grid-cols-4 gap-3 overflow-auto'>
        {cardItems.map((item, index) => (
          <DashboardCard key={`card-${index}`} />
        ))}
      </div>
      <div className='grid grid-cols-5 gap-5'>
        <PendaftaranChart />
        <MahasiswaBaruCard />
      </div>
      <div className='grid grid-cols-7 gap-5'>
        <PengajarCard />
      </div>
    </div>
  );
};
