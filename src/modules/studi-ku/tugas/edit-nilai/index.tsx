'use client';
import Link from 'next/link';
import React from 'react';
import Avatar from 'react-avatar';
import { AiOutlineSearch } from 'react-icons/ai';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { EditConfirmationModal } from '@/modules/studi-ku/tugas/components/EditConfirmationModal';

import { ITEMS } from './constant';

export const EditNilaiModule = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Edit Nilai : Tugas 1</span>
        </div>
        <div className='p-8'>
          <div className='w-1/3 relative'>
            <Input
              type='text'
              placeholder='Search'
              className='pl-10'
              // value={
              //   (table.getColumn('email')?.getFilterValue() as string) ?? ''
              // }
              // onChange={(event) =>
              //   table.getColumn('email')?.setFilterValue(event.target.value)
              // }
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='my-5'>
            <Table className='w-full border border-gray-200'>
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Mahasiswa</TableHead>
                  <TableHead>Tanggal Diunggah</TableHead>
                  <TableHead>Terakhir Diubah</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Nilai</TableHead>
                  <TableHead>Berkas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>
                      <Avatar
                        name='Mahasiswa-1'
                        size='30'
                        round={true}
                        className='mr-2'
                      />
                      Mahasiswa {item}
                    </TableCell>
                    <TableCell>25/02/2021 23:59:59</TableCell>
                    <TableCell>25/02/2021 23:59:59</TableCell>
                    <TableCell>
                      <span className='bg-green-200 text-green-700 rounded-md text-xs px-6 py-1'>
                        Selesai
                      </span>
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        placeholder='Nilai'
                        className='max-w-[100px]'
                      />
                    </TableCell>
                    <TableCell>
                      <a
                        href='#'
                        className='text-blue-500 hover:text-blue-700 hover:underline'
                      >
                        Modul-1.pdf
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className='flex justify-end gap-4 mt-5'>
              <Link href='/studi-ku/tugas/detail'>
                <Button variant='primaryOutline'>Kembali</Button>
              </Link>
              <EditConfirmationModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
