'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Edit2, PlusCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiPlus } from 'react-icons/bi';
import { useRecoilState } from 'recoil';

import { validationSchemaQuizQuestion } from '@/lib/validation/studi-ku/quiz-question';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Input } from '@/components/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import {
  SubTitleModule,
  TitleModule,
} from '@/modules/studi-ku/modul/tambah/TitleModule';
import { quizDataAtom } from '@/recoils/studi-ku/quiz/atom';

import {
  TQuizAddAnswerItem,
  TQuizAddQuestionItem,
  TQuizAddQuestionPayload,
  TQuizDataQuestionForm,
} from '@/types/studi-ku/quiz';
import { Textarea } from '@/components/ui/textarea';
import { FaPlus } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import { useQuizQuestionAddRequest } from '@/hooks/studi-ku/quiz/hook';
import { toast } from 'react-hot-toast';

const TambahSoalQuizModule = () => {
  const { subject_id, session_id, quiz_id } = useParams();
  const [countQuestions, setCountQuestions] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const router = useRouter();

  const { mutate } = useQuizQuestionAddRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
  );

  const defaultValues: Record<string, string | number> = {};

  for (let index = 0; index < countQuestions.length; index++) {
    defaultValues[`quiz_question_${index + 1}`] = '';
    defaultValues[`quiz_option_${index + 1}_1`] = '';
    defaultValues[`quiz_option_${index + 1}_2`] = '';
    defaultValues[`quiz_option_${index + 1}_3`] = '';
    defaultValues[`quiz_option_${index + 1}_4`] = '';
    defaultValues[`quiz_correct_${index + 1}`] = '';
  }

  const form = useForm<TQuizDataQuestionForm>({
    resolver: zodResolver(validationSchemaQuizQuestion(countQuestions)),
  });

  const onSubmit = (data: TQuizDataQuestionForm) => {
    try {
      const question: TQuizAddQuestionItem[] = [];

      for (let index = 0; index < countQuestions.length; index++) {
        question.push({
          question: data[`quiz_question_${countQuestions[index]}`] ?? '',
          answers: [
            {
              answer: data[`quiz_option_${countQuestions[index]}_1`] ?? '',
              is_correct: data[`quiz_correct_${countQuestions[index]}`] === '1',
            },
            {
              answer: data[`quiz_option_${countQuestions[index]}_2`] ?? '',
              is_correct: data[`quiz_correct_${countQuestions[index]}`] === '2',
            },
            {
              answer: data[`quiz_option_${countQuestions[index]}_3`] ?? '',
              is_correct: data[`quiz_correct_${countQuestions[index]}`] === '3',
            },
            {
              answer: data[`quiz_option_${countQuestions[index]}_4`] ?? '',
              is_correct: data[`quiz_correct_${countQuestions[index]}`] === '4',
            },
            {
              answer: data[`quiz_option_${countQuestions[index]}_5`] ?? '',
              is_correct: data[`quiz_correct_${countQuestions[index]}`] === '5',
            },
          ],
        });
      }

      const payload: TQuizAddQuestionPayload = {
        questions: question,
      };

      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success(
              `${countQuestions.length} pertanyaan berhasil ditambahkan`,
            );
            router.push(
              `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal`,
            );
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Pertanyaan!');
          },
        },
      );
    } catch {
      toast.error('Gagal menambahkan document');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentQuestion(page);
  };

  const handleAddQuestion = () => {
    setCountQuestions((prev) => [...prev, prev[prev.length - 1] + 1]);
    console.log(countQuestions);
  };

  const handleRemoveQuestion = () => {
    setCountQuestions((prev) =>
      prev.filter((item) => item !== currentQuestion),
    );
    setCurrentQuestion(countQuestions[0]);
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

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
    {
      name: 'Tambah Soal',
      link: `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal/tambah-soal`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BREADCRUMB_ITEMS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-5 rounded-md pb-5 '>
        <div className='flex justify-between items-center  '>
          <TitleModule title={`Tambah Soal Quiz`} />
        </div>
        <div className='px-5 flex flex-col gap-8'>
          <div className='flex flex-col gap-2 rounded-lg border-2 p-5'>
            <SubTitleModule title='Daftar Soal' />
            <div className='flex gap-2 flex-wrap'>
              {countQuestions.map((item, index) => (
                <Button
                  variant={
                    currentQuestion === item ? 'primary' : 'primaryOutline'
                  }
                  key={index}
                  onClick={() => handlePageChange(item)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                onClick={handleAddQuestion}
                variant='primary'
                className='px-3.5 font-semibold text-sm'
              >
                <FaPlus />
              </Button>
            </div>
          </div>
          <Form {...form}>
            <form
              className='flex flex-col gap-8'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {countQuestions.map(
                (item, idx) =>
                  item === currentQuestion && (
                    <Fragment key={idx}>
                      <div className='flex flex-col gap-4'>
                        <FormField
                          control={form.control}
                          name={`quiz_question_${item as number}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pertanyaan Kuis {idx + 1}</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder='Masukan Petanyaan Kuis'
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`quiz_option_${item as number}_1`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Jawaban A</FormLabel>
                              <FormControl>
                                <Input placeholder='Jawaban A' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`quiz_option_${item as number}_2`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Jawaban B</FormLabel>
                              <FormControl>
                                <Input placeholder='Jawaban B' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`quiz_option_${item as number}_3`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Jawaban C</FormLabel>
                              <FormControl>
                                <Input placeholder='Jawaban C' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`quiz_option_${item as number}_4`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Jawaban D</FormLabel>
                              <FormControl>
                                <Input placeholder='Jawaban D' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`quiz_option_${item as number}_5`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Jawaban E</FormLabel>
                              <FormControl>
                                <Input placeholder='Jawaban E' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name={`quiz_correct_${item as number}`}
                        render={({ field }) => (
                          <FormItem className='space-y-3'>
                            <FormLabel>Jawaban Benar</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                className='flex space-x-1'
                              >
                                <FormItem className='flex items-center space-x-3 space-y-0'>
                                  <FormControl>
                                    <RadioGroupItem value='1' />
                                  </FormControl>
                                  <FormLabel className='font-normal'>
                                    A
                                  </FormLabel>
                                </FormItem>
                                <FormItem className='flex items-center space-x-3 space-y-0'>
                                  <FormControl>
                                    <RadioGroupItem value='2' />
                                  </FormControl>
                                  <FormLabel className='font-normal'>
                                    B
                                  </FormLabel>
                                </FormItem>
                                <FormItem className='flex items-center space-x-3 space-y-0'>
                                  <FormControl>
                                    <RadioGroupItem value='3' />
                                  </FormControl>
                                  <FormLabel className='font-normal'>
                                    C
                                  </FormLabel>
                                </FormItem>
                                <FormItem className='flex items-center space-x-3 space-y-0'>
                                  <FormControl>
                                    <RadioGroupItem value='4' />
                                  </FormControl>
                                  <FormLabel className='font-normal'>
                                    D
                                  </FormLabel>
                                </FormItem>
                                <FormItem className='flex items-center space-x-3 space-y-0'>
                                  <FormControl>
                                    <RadioGroupItem value='5' />
                                  </FormControl>
                                  <FormLabel className='font-normal'>
                                    E
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Fragment>
                  ),
              )}
              <div className='flex justify-between'>
                <Button
                  type='button'
                  variant='destructive'
                  onClick={handleRemoveQuestion}
                  className='flex gap-2 items-center'
                >
                  <FaTrash />
                  <span>Hapus Soal</span>
                </Button>
                <div className='flex gap-4'>
                  <Button type='button' variant='primaryOutline'>
                    Batal
                  </Button>
                  <Button
                    type='submit'
                    variant='primary'
                    className='flex gap-2 items-center'
                  >
                    <PlusCircle size={16} />
                    <span>Tambah Pertanyaan</span>
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TambahSoalQuizModule;
