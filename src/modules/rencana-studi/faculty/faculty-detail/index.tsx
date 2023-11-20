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
import { BreadCrumb } from '@/components/BreadCrumb';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const RencanaStudiDetailFaculty = () => {
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
          <p className='text-base font-semibold'>Nama Fakultas</p>
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
              <Button className='shadow-md bg-white border-2 border-red-800 text-red-800 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <FaTrash size={20} />
                <p className='leading-none'>Hapus Fakultas</p>
              </Button>
              <Button className='shadow-md bg-white border-2 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <p className='leading-none'>Edit Fakultas</p>
              </Button>
            </div>
          </section>
          <div className='my-8 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    ID Fakultas
                  </TableCell>
                  <TableCell className='border-2'>129391132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Nama Fakultas</TableCell>
                  <TableCell className='border-2'>Raul</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Kepala Fakultas</TableCell>
                  <TableCell className='border-2'>440</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Jumlah Prodi</TableCell>
                  <TableCell className='border-2'>3.92</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Deskripsi</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Cover Fakultas</TableCell>
                  <TableCell className='border-2'>
                    <Card
                      key={'1'}
                      className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'
                    >
                      <CardTitle className='p-2 text-md'>Cover</CardTitle>
                      <CardHeader className='p-0 '>
                        <Image
                          src={ArtikelImage}
                          alt='artikel'
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
