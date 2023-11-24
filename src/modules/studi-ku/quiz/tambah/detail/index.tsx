'use client';

import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useRecoilState } from 'recoil';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';

import {
  SubTitleModule,
  TitleModule,
} from '@/modules/studi-ku/modul/tambah/TitleModule';
import { TAMBAH_DETAIL_SOAL_QUIZ_BREADCRUMBS } from '@/modules/studi-ku/quiz/constant';
import { quizDataAtom } from '@/recoils/studi-ku/quiz/atom';

const TambahDetailSoalQuizModule = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentQuestion(page);
  };

  const [quizData, setQuizData] = useRecoilState(quizDataAtom);

  const handleAddQuestion = () => {
    setQuizData([
      ...quizData,
      {
        id: (quizData.length + 1).toString(),
        question: '',
        number: quizData.length + 1,
        options: [
          {
            correct: false,
            option: '',
          },
          {
            correct: false,
            option: '',
          },
          {
            correct: false,
            option: '',
          },
          {
            correct: false,
            option: '',
          },
        ],
      },
    ]);
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb
          items={TAMBAH_DETAIL_SOAL_QUIZ_BREADCRUMBS}
          className='!p-0 '
        />
      </div>
      <div className='bg-white flex flex-col gap-5 rounded-md pb-5 '>
        <div className='flex justify-between items-center  '>
          <TitleModule title='Detail Modul 1 Mata Kuliah Management' />
        </div>
        <div className='px-5'>
          <div className='flex flex-col gap-2 rounded-lg border-2 p-5'>
            <SubTitleModule title='Daftar Soal' />
            <div className='flex gap-2 flex-wrap'>
              {quizData.map((item, index) => (
                <Button
                  variant={
                    index + 1 === currentQuestion ? 'primary' : 'outline'
                  }
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                onClick={handleAddQuestion}
                variant='primary'
                className='w-fit'
              >
                <BiPlus />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahDetailSoalQuizModule;
