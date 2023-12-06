'use client';

import React from 'react';
import { BiSolidFileExport } from 'react-icons/bi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TableTranskripNilai } from '@/modules/nilai-sertifikat/nilai/components/TableTranskripNilai';

const TranskripNilaiMahasiswaModule = () => {
  const TranskripNilaiBreadcrumb = [
    {
      name: 'Nilai',
      link: '/nilai-dan-sertifikat/nilai',
    },
    {
      name: 'Detail Mahasiswa',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa/1`,
    },
    {
      name: 'Transkrip Nilai',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa/1/transkrip-nilai/2`,
    },
  ];

  const data = Array.from({ length: 20 }, (_, i) => ({
    no: i + 1,
    prodi: `Prodi ${i + 1}`,
    kode_mk: `MK ${123 + i}`,
    matakuliah: `Matakuliah ${i + 1}`,
    jumlah_sks: 4,
    skor: 88,
    nilai: 'A (Baik)',
    mutu: '12.00',
  }));

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={TranskripNilaiBreadcrumb}
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
                    IPK/Yudisium
                  </TableCell>
                  <TableCell className='border-2'>1.85 (Memuaskan)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Semester Saat Ini
                  </TableCell>
                  <TableCell className='border-2'>Semester 7</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h6 className='font-semibold'>Informasi Mata Kuliah</h6>
            <TableTranskripNilai data={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TranskripNilaiMahasiswaModule;
