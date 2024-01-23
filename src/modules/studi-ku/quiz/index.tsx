'use client';

import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import {
  useQuizDeleteRequest,
  useQuizRequest,
} from '@/hooks/studi-ku/quiz/hook';

import { BreadCrumb, TCrumbItem } from '@/components/BreadCrumb';
import { CardComponent } from '@/components/card';
import { LoadingSpinner } from '@/components/LoadingSpinner';

import { MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import { AddModuleModal } from '@/modules/studi-ku/modul/tambah/addModuleModal';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FiMoreVertical } from 'react-icons/fi';
import { DeleteDialog } from '@/components/dialog/detele-dialog';
import { AddQuizModal } from '@/modules/studi-ku/quiz/tambah';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import DeleteQuizModal from '@/modules/studi-ku/quiz/hapus';
import { EditQuizModal } from '@/modules/studi-ku/quiz/edit';

export const ListQuiz = () => {
  const { subject_id, session_id } = useParams();
  const pathname = usePathname();

  const { data: getQuiz, isLoading } = useQuizRequest(
    subject_id as string,
    session_id as string,
  );

  const quizData = getQuiz?.data;

  const BreadCrumbItems: TCrumbItem[] = [
    ...MODULE_BREADCRUMBS,
    {
      name: 'Daftar Quiz',
      link: `/studi-ku/quiz/${subject_id}/${session_id}`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BreadCrumbItems} className='!p-0' />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='bg-white w-full rounded-md shadow-md'>
          <div className='flex justify-between w-full  border-b border-slate-200 p-4 items-center'>
            <p className='text-dark-900 font-semibold '>
              {`Daftar Quiz Mata Kuliah ${quizData?.subject?.name}`}
            </p>
            <AddQuizModal
              modalTrigger={
                <div className='flex gap-2 items-center '>
                  <BiPlusCircle className='text-white text-xl' />
                  Tambah Quiz
                </div>
              }
            />
          </div>
          <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 p-5'>
            {quizData?.quizzes.map((item) => {
              return (
                <Card className='flex flex-col' key={item.id}>
                  <div className='w-full object-contain'>
                    <Image
                      src={`${
                        getQuiz?.data.subject.thumbnail === null
                          ? '/images/studi-ku/modul-default.png'
                          : getQuiz?.data.subject.thumbnail
                      }`}
                      alt={`${item.title}`}
                      className=' object-cover w-full h-[200px]'
                      width={0}
                      height={0}
                      sizes='100vw'
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className='flex justify-between items-center'>
                      <Link href={`${pathname}/${item.id}`}>
                        <h1>{item.title}</h1>
                      </Link>
                      <div className='text-base items-center'>
                        <Popover>
                          <PopoverTrigger>
                            <FiMoreVertical />
                          </PopoverTrigger>
                          <PopoverContent className='w-48' align='end'>
                            <div className='flex flex-col gap-2'>
                              <EditQuizModal
                                quiz_id={item.id}
                                title={item.title}
                                duration={item.duration}
                              />
                              <hr className='border-slate-200' />
                              <DeleteQuizModal id={item.id} />
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='flex gap-4 items-center'>
                      <div className='flex flex-col'>
                        <span className='text-black font-medium'>
                          {item.duration}
                        </span>
                        Menit
                      </div>
                      <div className='border h-8'></div>
                      <div className='flex flex-col'>
                        <span className='text-black font-medium'>
                          {item.total_questions}
                        </span>
                        Pertanyaan
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
