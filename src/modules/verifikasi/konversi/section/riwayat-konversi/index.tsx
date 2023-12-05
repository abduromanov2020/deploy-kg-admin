import React from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileExport } from 'react-icons/fa6';
import { TableFilter } from '@/modules/verifikasi/konversi/components/Filter';
import Pagination from '@/components/generals/pagination';
import { TableRiwayatKonversi } from '@/modules/verifikasi/konversi/components/TableRiwayatKonversi';

const RiwayatKonversiSection = () => {
  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/verifikasi/administrasi?page=${page}`);
  };

  const data = Array.from({ length: 50 }, (_, i) => ({
    no: i + 1,
    nama_mahasiswa: `Mahasiswa ${i + 1}`,
    tanggal_permintaan: `12 Des 2023`,
    total_permintaan: 3,
    jenis_konversi: `Konversi Balik SKS`,
    status: `ACCEPTED`,
  }));

  return (
    <div className='w-full rounded-md flex flex-col'>
      <div className='flex flex-col gap-7 p-7'>
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
          <TableRiwayatKonversi data={data} />
          <div className='flex items-center justify-end space-x-2 py-4'>
                <div className='flex-1 text-sm text-muted-foreground'>
                  <p>
                    Menampilkan 10 hingga{' '}
                    10 data dari{' '}
                    10000 entries
                  </p>
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
  )
}

export default RiwayatKonversiSection