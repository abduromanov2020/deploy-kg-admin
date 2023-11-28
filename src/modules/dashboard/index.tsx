import React from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';

import { ArticleCard } from '@/modules/dashboard/component/ArticleCard';
import { DashboardCard } from '@/modules/dashboard/component/DashboardCard';
import { InformasiAkademikCard } from '@/modules/dashboard/component/InformasiAkademikCard';
import { KalenderMahasiswaCard } from '@/modules/dashboard/component/KalenderMahasiswaCard';
import { KonsultasiLayananCard } from '@/modules/dashboard/component/KonsultasiLayananCard';
import { MahasiswaBaruCard } from '@/modules/dashboard/component/MahasiswaBaruCard';
import { PapanScoreCard } from '@/modules/dashboard/component/PapanScoreCard';
import { PendaftaranChart } from '@/modules/dashboard/component/PendaftaranChart';
import { PengajarCard } from '@/modules/dashboard/component/pengajarCard';

export const DashboardModule = () => {
  const cardItems = [
    {
      title: 'Mahasiswa Aktif',
      data: '10.876',
      totalData: '/15.878',
      icon: <HiOutlineUserGroup size={24} className='text-secondary-500' />,
    },
    {
      title: 'Mata Kuliah Aktif',
      data: '76',
      totalData: '/30',
      icon: <HiOutlineUserGroup size={24} className='text-secondary-500' />,
    },
    {
      title: 'Prodi Terdaftar',
      data: '76',
      totalData: '/30',
      icon: <HiOutlineUserGroup size={24} className='text-secondary-500' />,
    },
    {
      title: 'Fakultas Terdaftar',
      data: '76',
      totalData: '/30',
      icon: <HiOutlineUserGroup size={24} className='text-secondary-500' />,
    },
  ];

  return (
    <div className='flex flex-col gap-5'>
      <div className='grid grid-cols-4 gap-3 overflow-auto'>
        {cardItems.map((item, index) => (
          <DashboardCard key={`card-${index}`} data={item} />
        ))}
      </div>
      <div className='grid grid-cols-5 gap-5'>
        <PendaftaranChart />
        <MahasiswaBaruCard />
      </div>
      <div className='grid grid-cols-7 gap-5'>
        <PengajarCard />
        <ArticleCard />
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <InformasiAkademikCard />
        <KalenderMahasiswaCard />
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <PapanScoreCard />
        <KonsultasiLayananCard />
      </div>
    </div>
  );
};
