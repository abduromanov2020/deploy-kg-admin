'use client';

import React from 'react';
import { BiChevronDown, BiSolidFileExport } from 'react-icons/bi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Filter } from '@/components/filter';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TableSemester } from '@/modules/nilai-sertifikat/nilai/components/TableSemester';

const DetailSemesterModule = () => {
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
      name: 'Detail Semester',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa/1/detail-semester/2`,
    },
  ];

  const data = Array.from({ length: 10 }, (_, i) => ({
    no: i + 1,
    matakuliah: `Matakuliah ${i + 1}`,
    sks: 4,
    skor: 88,
    mutu: '12.00 / B (Baik)',
    nilai_uts: 100,
    nilai_uas: 100,
  }));

  const filter = [
    { title: 'Semester 1' },
    { title: 'Semester 2' },
    { title: 'Semester 3' },
    { title: 'Semester 4' },
    { title: 'Semester 5' },
    { title: 'Semester 6' },
    { title: 'Semester 7' },
    { title: 'Semester 8' },
  ];

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
          <h3 className='font-semibold text-lg'>Detail Semester</h3>
          <div className='flex gap-3 items-center'>
            <Filter
              icon={<BiChevronDown className='text-xl' />}
              className='border-2 py-3 w-[180px] px-4'
              title='Program Studi'
              data={filter}
            />
            <Button className='hover:bg-primary-600 shadow-md bg-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
              <BiSolidFileExport size={24} />
              <p className='leading-none'>Unduh</p>
            </Button>
          </div>
        </div>
        <div className='px-5 pb-5'>
          <div className='flex flex-col gap-5'>
            <h6 className='font-semibold'>Informasi Semester 1</h6>
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
                    Jumlah Mutu Semester ini
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
                    Semester
                  </TableCell>
                  <TableCell className='border-2'>1 (Satu)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h6 className='font-semibold'>Informasi Mata Kuliah</h6>
            <TableSemester data={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailSemesterModule;
