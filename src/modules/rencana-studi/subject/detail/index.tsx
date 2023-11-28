'use client';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidFileExport } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ArtikelImage from '~/images/sekilas-ilmu/artikel.png';
import Image from 'next/image';
import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import { DeleteSubjectModalDetail } from '@/modules/rencana-studi/subject/detail/components/delete-subject-modal-detail';

const RencanaStudiDetailSubject = () => {
  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: '/rencana-studi/program-studi/1',
    },
    {
      name: 'Daftar Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1',
    },
    {
      name: 'Detail Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1/detail/1',
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Detail Mata Kuliah</p>
        </div>
        <div className='p-8'>
          <section className='flex justify-between items-center'>
            <div className='w-1/3 relative'>
              <Input type='text' placeholder='Search' className='pl-10' />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Button className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button>
              <DeleteSubjectModalDetail />
              <Button className='shadow-md bg-white border-2 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiEdit size={24} />
                <p className='leading-none'>Edit Data</p>
              </Button>
            </div>
          </section>
          <div className='my-8 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    ID Mata Kuliah
                  </TableCell>
                  <TableCell className='border-2'>129391132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Nama Mata Kuliah
                  </TableCell>
                  <TableCell className='border-2'>Raul</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Kepala Dosen</TableCell>
                  <TableCell className='border-2'>440</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Jumlah SKS</TableCell>
                  <TableCell className='border-2'>144</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Jumlah Pertemuan
                  </TableCell>
                  <TableCell className='border-2'>14 Pertemuan</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Semester</TableCell>
                  <TableCell className='border-2'>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Program Studi</TableCell>
                  <TableCell className='border-2'>
                    Teknologi Ekonomi Digital
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RencanaStudiDetailSubject;
