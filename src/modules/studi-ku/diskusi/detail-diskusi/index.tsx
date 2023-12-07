'use client';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const StudikuDetailDiskusiModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Diskusi',
      link: `/studi-ku/diskusi`,
    },
    {
      name: 'Detail Diskusi',
      link: `/studi-ku/diskusi/detail-diskusi/1`,
    },
  ];
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Detail Diskusi : Modul 1 </span>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='diskusi-topik'>
            <TabsList>
              <TabsTrigger value='diskusi-topik'>Diskusi Topik</TabsTrigger>
              <TabsTrigger value='list-responden'>List Responden</TabsTrigger>
              <TabsTrigger value='laporan-tanggapan'>
                Laporan Tanggapan{' '}
              </TabsTrigger>
            </TabsList>
            <TabsContent value='diskusi-topik'>
              <div className='flex flex-col gap-3 mt-5'>
                <h4 className='font-bold'>Detail Tugas</h4>
                {/* <DetailTugas /> */}
              </div>
              <div className='flex flex-col gap-3 mt-5'>
                <h4 className='font-bold'>Detail Nilai</h4>
                {/* <DetailHasil /> */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
