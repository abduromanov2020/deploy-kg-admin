'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa6';

import { useGetStudyPlanMajorById } from '@/hooks/rencana-studi/majors/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { DeleteMajorModal } from '@/modules/rencana-studi/major/components/delete-major-modal';

const RencanaStudiDetailMajor = () => {
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
      name: 'Detail Prodi',
      link: '/rencana-studi/program-studi/1/detail/2',
    },
  ];

  const params = useParams();
  const { id_detail } = params;

  const { data, isLoading } = useGetStudyPlanMajorById(String(id_detail));

  console.log(data);

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>
            Detail Prodi {data?.data?.name}
          </p>
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
              <Button
                className='bg-primary-500 border-2 border-primary-500 hover:bg-primary-600 hover:border-primary-600 px-3 py-2 flex gap-2'
                asChild
              >
                <Link href='/rencana-studi/program-studi/1/edit-prodi/1'>
                  <BiEdit size={24} />
                  Edit Informasi
                </Link>
              </Button>
              <DeleteMajorModal
                modalTrigger={
                  <Button className='bg-white border-2 border-red-800 text-red-800 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base hover:bg-red-800 hover:text-white'>
                    <FaTrash size={20} />
                    <p className='leading-none'>Hapus Prodi</p>
                  </Button>
                }
              />
            </div>
          </section>
          <div className='my-8 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    ID Program Studi
                  </TableCell>
                  <TableCell className='border-2'>{data?.data?.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Nama Program Studi
                  </TableCell>
                  <TableCell className='border-2'>{data?.data?.name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='font-medium'>Deskripsi</TableCell>
                  <TableCell className='border-2'>
                    {data?.data?.description}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Jumlah Mata Kuliah
                  </TableCell>
                  <TableCell className='border-2'>
                    {data?.data?.total_subjects} 0 Mata Kuliah
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

export default RencanaStudiDetailMajor;
