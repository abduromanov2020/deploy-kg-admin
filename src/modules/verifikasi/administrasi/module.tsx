'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaFileExport } from 'react-icons/fa6';

import { useGetPengjuanAdm } from '@/hooks/verifikasi/administrasi/hook';

import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { DateRangePicker } from '@/modules/verifikasi/administrasi/components/DateRangePicker';
import { TableFilter } from '@/modules/verifikasi/administrasi/components/Filter';
import { TableAdministrasi } from '@/modules/verifikasi/administrasi/components/TableAdministrasi';

const VerifikasiAdministrasiModule = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [filter, setFilter] = useState('');

  const page = Number(params.get('page')) || 1;
  const searchQuery = params.get('search') || '';

  const {
    data: pengajuan,
    refetch: refetchPengajuan,
    isLoading,
  } = useGetPengjuanAdm(page, searchQuery, 10, filter);

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    refetchPengajuan();
    router.push(`/verifikasi/administrasi?page=${page}`);
  };

  return (
    <div className='bg-white w-full rounded-md flex flex-col'>
      <div className='border-b border-dark-200 p-5'>
        <h3 className='font-semibold text-lg'>Verifikasi Administrasi</h3>
      </div>
      <div className='flex flex-col gap-7 p-7'>
        <div className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input type='text' placeholder='Search' className='pl-10' />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <DateRangePicker />
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
          {isLoading ? (
            <div className='w-full flex justify-center items-center pt-5'>
              <BiLoaderAlt className='animate-spin' size={30} />
            </div>
          ) : pengajuan && pengajuan?.data ? (
            <div>
              <TableAdministrasi data={pengajuan?.data} />
              <div className='flex items-center justify-end space-x-2 py-4'>
                <div className='flex-1 text-sm text-muted-foreground'>
                  <p>
                    Menampilkan {pengajuan?.data.length > 0 ? 1 : 0} hingga{' '}
                    {pengajuan?.data.length} data dari{' '}
                    {pengajuan?.meta.max_page} entries
                  </p>
                </div>
                <div className='space-x-2'>
                  <Pagination
                    currentPage={Number(page)}
                    totalPages={Number(pengajuan?.meta.max_page)}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='w-full flex justify-center items-center pt-5'>
              Tidak Ada Data
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifikasiAdministrasiModule;