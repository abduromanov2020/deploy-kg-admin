'use client';

import { Edit2 } from 'lucide-react';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import {
  DATA_DETAIL_SOAL_QUIZ,
  DETAIL_SOAL_QUIZ_MODULE_BREADCRUMBS,
} from '@/modules/studi-ku/quiz/detail/constant';

const DetailSoalQuizModule = () => {
  const data = DATA_DETAIL_SOAL_QUIZ;

  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const filteredData = data.data.filter((item, index) => {
    return index >= (Number(page) - 1) * 10 && index < Number(page) * 10;
  });

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb
          items={DETAIL_SOAL_QUIZ_MODULE_BREADCRUMBS}
          className='!p-0 '
        />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center '>
          <TitleModule title='Detail Quiz Mata Kuliah Manajemen Keuangan' />
          <div className='flex gap-2 border-b border-slate-200  py-2 px-4'>
            <Button asChild variant='primaryOutline'>
              <Link
                href='/studi-ku/quiz/edit/detail'
                className='flex gap-2 items-center'
              >
                <Edit2 size={16} />
                Edit
              </Link>
            </Button>
          </div>
        </div>
        <div className='px-5'>
          <Table className='rounded-xl border-2 shadow-sm text-dark-900'>
            <TableBody>
              {filteredData.map((item, index) => (
                <Fragment key={index}>
                  <TableRow>
                    <TableCell className='font-semibold px-5 w-20 text-center align-top'>
                      {index + 1 + (Number(page) - 1) * 10}
                    </TableCell>
                    <TableCell className='border-2 flex flex-col gap-3'>
                      <div className='flex flex-col gap-1'>
                        <p>{item.question}</p>
                        <ol>
                          {item?.options?.map((item, index) => (
                            <li key={index}>
                              {index === 0
                                ? 'a.'
                                : index === 1
                                  ? 'b.'
                                  : index === 2
                                    ? 'c.'
                                    : 'd'}{' '}
                              {item.option}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className='flex gap-2'>
                        <p className='font-semibold'>Jawaban:</p>
                        <p>
                          {
                            /* filtered answer from options with correct true return option */
                            item?.options?.filter(
                              (item) => item.correct === true,
                            )[0].option
                          }
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
          <div className='flex justify-between place-items-center pt-5'>
            <p className='text-slate-500'>
              Menampilkan {page} hingga {Number(page) * 10} dari{' '}
              {data?.total_data} entri
            </p>
            <Pagination
              currentPage={Number(page)}
              totalPages={Number(data?.max_page)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSoalQuizModule;
