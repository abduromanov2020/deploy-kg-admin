'use client';

import Link from 'next/link';
import React from 'react';
import { BiSolidFileExport } from 'react-icons/bi';

import { BreadCrumb } from '@/components/BreadCrumb';
import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TableInformasiMatakuliah } from '@/modules/nilai-sertifikat/nilai/components/TableInformasiMk';

const DetailMahasiswaModule = () => {
  const DetailMahasiswaBreadcrumb = [
    {
      name: 'Nilai',
      link: '/nilai-dan-sertifikat/nilai',
    },
    {
      name: 'Detail Mahasiswa',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa`,
    },
  ];

  const data = Array.from({ length: 50 }, (_, i) => ({
    no: i + 1,
    semester: `Semester ${i + 1}`,
    sks: 4,
    sks_lulus: 4,
    ip: 3.6,
    keterangan: 'Lulus',
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
          items={DetailMahasiswaBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='flex justify-between items-center border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>Detail Mahasiswa</h3>
          <Button className='hover:bg-primary-600 shadow-md bg-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
            <BiSolidFileExport size={24} />
            <p className='leading-none'>Unduh</p>
          </Button>
        </div>
        <div className='px-5'>
          <div className='flex flex-col gap-5'>
            <h6 className='font-semibold'>Informasi Mahasiswa</h6>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nama Mahasiswa
                  </TableCell>
                  <TableCell className='border-2'>Erif</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Jumlah SKS
                  </TableCell>
                  <TableCell className='border-2'>120/144</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Jumlah Mutu
                  </TableCell>
                  <TableCell className='border-2'>490</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Indeks Prestasi (IP)
                  </TableCell>
                  <TableCell className='border-2'>1.85 (Memuaskan)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Transkrip Nilai
                  </TableCell>
                  <TableCell className='border-2'>
                    <Link href='/nilai-dan-sertifikat/nilai/detail-mahasiswa/1/transkrip-nilai/2'>
                      <p className='text-primary-500 hover:underline font-semibold'>
                        Detail
                      </p>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h6 className='font-semibold'>Informasi Mata Kuliah</h6>
            <TableInformasiMatakuliah data={data} />
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

export default DetailMahasiswaModule;
