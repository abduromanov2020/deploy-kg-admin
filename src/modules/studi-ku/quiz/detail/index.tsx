'use client';

import { Edit } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

import {
  useQuizDetailRequest,
  useQuizParticipantsRequest,
} from '@/hooks/studi-ku/quiz/hook';

import { BreadCrumb, TCrumbItem } from '@/components/BreadCrumb';
import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  SubTitleModule,
  TitleModule,
} from '@/modules/studi-ku/modul/tambah/TitleModule';
import {
  DATA_TABLE_RESPONDENTS_QUIZ,
  QUIZ_MODULE_BREADCRUMBS,
} from '@/modules/studi-ku/quiz/detail/constant';

const DetailQuizModule = () => {
  const data = DATA_TABLE_RESPONDENTS_QUIZ;
  const [page, setPage] = useState(1);

  const { subject_id, session_id, quiz_id } = useParams();

  const { data: getQuiz } = useQuizDetailRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
  );

  const { data: getQuizParticipants } = useQuizParticipantsRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
    page,
  );

  const quizData = getQuiz?.data;
  const quizParticipantsData = getQuizParticipants?.data?.participants;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const filteredData = data.data.filter((item, index) => {
    return index >= (Number(page) - 1) * 10 && index < Number(page) * 10;
  });

  const BreadCrumbItems: TCrumbItem[] = [
    ...QUIZ_MODULE_BREADCRUMBS,
    {
      name: 'Daftar Quiz',
      link: `/studi-ku/quiz/${subject_id}/${session_id}`,
    },
    {
      name: 'Detail Quiz',
      link: `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BreadCrumbItems} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Detail Quiz' />
        </div>

        <div className='flex-col flex px-5 gap-2'>
          <Table className='rounded-xl border-2 shadow-sm'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>
                  Quiz Pertemuan
                </TableCell>
                <TableCell className='border-2'>
                  Pertemuan {quizData?.session?.session_no}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jumlah Responden</TableCell>
                <TableCell className='border-2'>
                  {quizData?.detail?.total_participants} Mahasiswa
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Durasi Quiz</TableCell>
                <TableCell className='border-2'>
                  {quizData?.detail?.duration} Menit
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Tanggal & Waktu Berlangsung
                </TableCell>
                <TableCell className='border-2'>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jumlah Soal</TableCell>
                <TableCell className='border-2'>
                  {quizData?.detail?.total_questions} Soal
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'></TableCell>
                <TableCell className='border-2 flex gap-2'>
                  <Button asChild variant='primary'>
                    <Link
                      href='/studi-ku/quiz/detail-soal'
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
        <div className='flex-col flex px-5 gap-2'>
          <SubTitleModule title='Detail Responden Quiz' />
          <Table className='border-2'>
            <TableHeader>
              <TableRow>
                <TableHead className='text-black font-bold'>No</TableHead>
                <TableHead className='text-black font-bold'>Nama</TableHead>
                <TableHead className='text-black font-bold'>
                  Tanggal Pengerjaan
                </TableHead>
                <TableHead className='text-black font-bold'>
                  Waktu Mengumpulkan
                </TableHead>
                <TableHead className='text-black font-bold'>Benar</TableHead>
                <TableHead className='text-black font-bold'>Salah</TableHead>
                <TableHead className='text-black font-bold'>Nilai</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizParticipantsData?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='font-medium'>
                    {index + 1 + (Number(page) - 1) * 10}
                  </TableCell>
                  <TableCell>{item.full_name}</TableCell>
                  <TableCell>
                    {new Date(item.timestamp_taken).toLocaleDateString(
                      'id-ID',
                      {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      },
                    )}{' '}
                  </TableCell>
                  <TableCell>
                    {new Date(item.timestamp_submitted).toLocaleDateString(
                      'id-ID',
                      {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      },
                    )}{' '}
                  </TableCell>
                  <TableCell>{item.total_correct}</TableCell>
                  <TableCell>{item.total_wrong}</TableCell>
                  <TableCell>{item.final_score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='flex justify-between place-items-center pt-5'>
            <p className='text-slate-500 text-sm'>
              Menampilkan 1 hingga {quizParticipantsData?.length} dari{' '}
              {getQuizParticipants?.meta.total_data} data
            </p>
            <Pagination
              currentPage={Number(page)}
              totalPages={getQuizParticipants?.meta?.max_page as number}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailQuizModule;
