'use client';

import { Edit } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import {
  SubTitleModule,
  TitleModule,
} from '@/modules/studi-ku/modul/tambah/TitleModule';
import { QUIZ_MODULE_BREADCRUMBS } from '@/modules/studi-ku/quiz/constant';

const QuizModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={QUIZ_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-5 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Quiz Mata Kuliah Manajemen Keuangan' />
        </div>

        <div className='flex-col flex px-5 gap-2'>
          <SubTitleModule title='Detail Quiz' />
          <Table className='rounded-xl border-2 shadow-sm'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>
                  Quiz Pertemuan
                </TableCell>
                <TableCell className='border-2'>Pertemuan 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jumlah Responden</TableCell>
                <TableCell className='border-2'>30/40 Responden</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Durasi Quiz</TableCell>
                <TableCell className='border-2'>10 Menit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Tanggal & Waktu Berlangsung
                </TableCell>
                <TableCell className='border-2'>
                  17/08/2023, 16.30 - 17.30
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jumlah Soal</TableCell>
                <TableCell className='border-2'>20 Soal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'></TableCell>
                <TableCell className='border-2 flex gap-2'>
                  <Button asChild variant='primary'>
                    <Link
                      href='/studi-ku/quiz/detail'
                      className='flex gap-2 items-center'
                    >
                      Detail Soal
                    </Link>
                  </Button>
                  <Button asChild variant='primaryOutline'>
                    <Link
                      href='/studi-ku/quiz/edit'
                      className='flex gap-2 items-center'
                    >
                      <Edit className='w-4 h-4' /> Edit Quiz
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default QuizModule;
