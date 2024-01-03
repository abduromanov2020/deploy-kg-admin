'use client';

import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidFileExport } from 'react-icons/bi';

import { useGetFacultyById } from '@/hooks/rencana-studi/faculties/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { DeleteFacultyModalDetail } from './components/delete-faculty-modal-detail';

interface TProps {
  id: string;
}

const RencanaStudiDetailFaculty = ({ id }: TProps) => {
  const { data, isLoading, refetch } = useGetFacultyById(id);

  const faculty = data?.data;
  console.log(faculty?.thumbnail);

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Detail Fakultas',
      link: '/rencana-studi/detail/1',
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>
            FAKULTAS {faculty ? faculty.name.toUpperCase() : ''}
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
              <Button className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button>
              <DeleteFacultyModalDetail />

              <Button className='shadow-md bg-white border-2 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base hover:bg-primary-500 hover:text-white'>
                <p className='leading-none'>Edit Fakultas</p>
              </Button>
            </div>
          </section>

          <div className='my-8 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nama Fakultas
                  </TableCell>
                  <TableCell className='border-2'>
                    {faculty ? faculty.name : ''}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Total Program Studi
                  </TableCell>
                  <TableCell className='border-2'>
                    {faculty ? faculty.total_majors : ''}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Cover Fakultas</TableCell>
                  <TableCell className='border-2'>
                    <Card
                      key='1'
                      className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'
                    >
                      <CardTitle className='p-2 text-md'>Cover</CardTitle>
                      <CardHeader className='p-0 '>
                        <Image
                          src={
                            faculty && faculty.thumbnail
                              ? faculty.thumbnail
                              : ''
                          }
                          alt={faculty ? faculty.slug : 'thumbnail'}
                          width={350}
                          height={200}
                          className='object-cover'
                        />
                      </CardHeader>
                    </Card>
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

export default RencanaStudiDetailFaculty;
