'use client';

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileExport } from 'react-icons/fa6';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { TableFilter } from '@/modules/verifikasi/konversi/components/Filter';
import Pagination from '@/components/generals/pagination';
import { TableDetailTransferKonversi } from '@/modules/verifikasi/konversi/components/TableDetailTransferKonversi';

const DetailTransferKonversiModule = () => {
  const DetailTransferKonversiBreadcrumb = [
    {
      name: 'Verifikasi Konversi',
      link: '/verifikasi/konversi',
    },
    {
      name: 'Detail Konversi',
      link: '/verifikasi/konversi/detail-konversi',
    },
  ];

  const data = Array.from({ length: 50 }, (_, i) => ({
    no: i + 1,
    matakuliah: `MK ${i + 1}`,
    jumlah_pertemuan: 14,
    semester: 3,
    total_sks: 4,
    nilai_akhir: `A`,
  }));

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/verifikasi/administrasi?page=${page}`);
  };
  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={DetailTransferKonversiBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>
            Detail Transfer Konversi SKS
          </h3>
        </div>
        <div className='w-full px-5 pb-4'>
          <div className='flex justify-between items-center'>
            <div className='w-1/3 relative'>
              <Input type='text' placeholder='Search' className='pl-10' />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <TableFilter />
              <Button
                variant='outline'
                className='bg-primary-500 shadow-md hover:bg-primary-600 text-white hover:text-white font-normal'
              >
                <FaFileExport className='mr-2' /> Unduh
              </Button>
            </div>
          </div>
          <div className='my-3'>
            <TableDetailTransferKonversi data={data} />
            <div className='flex items-center justify-end space-x-2 py-4'>
              <div className='flex-1 text-sm text-muted-foreground'>
                <p>Menampilkan 10 hingga 10 data dari 10000 entries</p>
              </div>
              <div className='space-x-2'>
                <Pagination
                  currentPage={1}
                  totalPages={10}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailTransferKonversiModule;
