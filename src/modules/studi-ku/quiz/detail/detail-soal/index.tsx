'use client';

import { Edit2, PlusCircle } from 'lucide-react';
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
import { useQuizQuestionRequest } from '@/hooks/studi-ku/quiz/hook';
import { useParams } from 'next/navigation';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FiMoreVertical } from 'react-icons/fi';
import DeleteQuizModal from '@/modules/studi-ku/quiz/hapus';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { CiCirclePlus } from 'react-icons/ci';
import DeleteQuestionQuizModal from '@/modules/studi-ku/quiz/detail/detail-soal/hapus';

const DetailSoalQuizModule = () => {
  const { subject_id, session_id, quiz_id } = useParams();
  const { data: getQuizQuestion } = useQuizQuestionRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
  );

  const quizQuestionData = getQuizQuestion?.data?.questions;

  const BREADCRUMB_ITEMS = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Quiz',
      link: `/studi-ku/quiz/${subject_id}/${session_id}`,
    },
    {
      name: 'Detail Quiz',
      link: `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}`,
    },
    {
      name: 'Detail Soal',
      link: `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BREADCRUMB_ITEMS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center '>
          <TitleModule
            title={`Detail Soal ${getQuizQuestion?.data.quiz.title}`}
          />
          <div className='flex gap-2 border-b border-slate-200  py-2 px-4'>
            <Button asChild variant='primary'>
              <Link
                href={`/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal/tambah-soal`}
                className='flex gap-2 items-center'
              >
                <PlusCircle size={20} />
                Tambah Soal Quiz
              </Link>
            </Button>
          </div>
        </div>
        <div className='px-5'>
          <Table className='rounded-xl border-2 shadow-sm text-dark-900'>
            <TableBody>
              {quizQuestionData?.map((item, index) => (
                <Fragment key={index}>
                  <TableRow>
                    <TableCell className='font-semibold px-5 w-20 text-center align-top'>
                      {index + 1}
                    </TableCell>
                    <TableCell className='border flex flex-col gap-3 relative'>
                      <div className='flex flex-col gap-1'>
                        <p className='pb-2 font-semibold'>{item.question}</p>
                        <ol>
                          {item?.answers?.map((item, index) => (
                            <li key={index} className='py-2 flex gap-2'>
                              {index === 0
                                ? 'A.'
                                : index === 1
                                  ? 'B.'
                                  : index === 2
                                    ? 'C.'
                                    : index === 3
                                      ? 'D.'
                                      : index === 4
                                        ? 'E.'
                                        : ''}{' '}
                              <span>{item.answer}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className=''>
                        <p className='font-semibold'>Jawaban : </p>
                      </div>
                      <div className=''>
                        <p>
                          {
                            item?.answers?.filter(
                              (item) => item.is_correct === true,
                            )[0].answer
                          }
                        </p>
                      </div>
                      <div className='absolute right-5 top-3'>
                        <Popover>
                          <PopoverTrigger>
                            <FiMoreVertical />
                          </PopoverTrigger>
                          <PopoverContent className='w-48' align='end'>
                            <div className='flex flex-col gap-2'>
                              <Link
                                href={`/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal/edit-soal/${item.id}`}
                              >
                                <div className='flex gap-3 text-primary-500 items-center text-sm font-medium cursor-pointer'>
                                  <FaRegEdit
                                    fill='currentColor'
                                    className='w-4 h-4'
                                  />
                                  Edit
                                </div>
                              </Link>
                              <hr className='border-slate-200' />
                              <DeleteQuestionQuizModal id={item.id} />
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DetailSoalQuizModule;
