'use client';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

import { Filter } from '@/components/filter';
import Pagination from '@/components/generals/pagination';
import { Input } from '@/components/ui/input';

import { TableNilai } from '@/modules/nilai-sertifikat/nilai/components/TableNilai';

const NilaiModule = () => {
  const filterProdi = [
    { title: 'Blockchain', id: '1' },
    { title: 'Artificial Intelligence', id: '2' },
    { title: 'IOT', id: '3' },
  ];

  const filterMk = [
    { title: 'Matkul 1', id: '1' },
    { title: 'Matkul 2', id: '2' },
    { title: 'Matkul 3', id: '3' },
  ];

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/verifikasi/administrasi?page=${page}`);
  };

  const data = Array.from({ length: 50 }, (_, i) => ({
    no: i + 1,
    nim: 1234 + i,
    nama_mahasiswa: `Mahasiswa ${i + 1}`,
    skor: 88,
    ip: 3.87,
  }));

  return (
    <div className='bg-white w-full rounded-md flex flex-col gap-2'>
      <div className='border-b border-dark-200 p-5'>
        <h3 className='font-semibold text-lg'>Nilai</h3>
      </div>
      <div className='p-5 flex flex-col gap-2'>
        <div className='gap-x-10 gap-y-3 flex flex-row w-full p-5 border border-slate-200 rounded-lg mb-5 flex-wrap'>
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[180px] px-4'
            title='Program Studi'
            data={filterProdi}
          />
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[180px] px-4'
            title='Mata Kuliah'
            data={filterMk}
          />
        </div>
        <div className='w-1/3 relative'>
          <Input type='text' placeholder='Search' className='pl-10' />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <AiOutlineSearch className='text-gray-400' size={20} />
          </div>
        </div>
        <div className='my-3'>
          <TableNilai data={data} />
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
  );
};

export default NilaiModule;
