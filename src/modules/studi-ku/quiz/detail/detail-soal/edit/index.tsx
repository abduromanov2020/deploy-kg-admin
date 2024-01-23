'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Edit2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiPlus } from 'react-icons/bi';
import { useRecoilState } from 'recoil';

import {
  ValidationSchemaQuizEditQuestion,
  validationSchemaQuizQuestion,
} from '@/lib/validation/studi-ku/quiz-question';

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
  TQuizEditQuestionPayload,
} from '@/types/studi-ku/quiz';
import { Textarea } from '@/components/ui/textarea';
import { FaPlus } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import {
  useQuizQuestionAddRequest,
  useQuizQuestionDetailRequest,
  useQuizQuestionEditRequest,
} from '@/hooks/studi-ku/quiz/hook';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

const EditSoalQuizModule = () => {
  const { subject_id, session_id, quiz_id, question_id } = useParams();
  const router = useRouter();

  const { mutate } = useQuizQuestionEditRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
    question_id as string,
  );

  const { data: getQuestionDetail } = useQuizQuestionDetailRequest(
    subject_id as string,
    session_id as string,
    quiz_id as string,
    question_id as string,
  );

  const questionDetailData = getQuestionDetail?.data;

  const correct_answer = questionDetailData?.answers.findIndex(
    (item) => item.is_correct,
  );

  const form = useForm<z.infer<typeof ValidationSchemaQuizEditQuestion>>({
    resolver: zodResolver(ValidationSchemaQuizEditQuestion),
  });

  const onSubmit = (data: z.infer<typeof ValidationSchemaQuizEditQuestion>) => {
    console.log(data);
    try {
      const payload: TQuizEditQuestionPayload = {
        question: data.quiz_question,
        answers: [
          {
            id: questionDetailData?.answers[0].id as string,
            answer: data.quiz_option_1,
            is_correct: data.quiz_correct === '1',
          },
          {
            id: questionDetailData?.answers[1].id as string,
            answer: data.quiz_option_2,
            is_correct: data.quiz_correct === '2',
          },
          {
            id: questionDetailData?.answers[2].id as string,
            answer: data.quiz_option_3,
            is_correct: data.quiz_correct === '3',
          },
          {
            id: questionDetailData?.answers[3].id as string,
            answer: data.quiz_option_4,
            is_correct: data.quiz_correct === '4',
          },
          {
            id: questionDetailData?.answers[4].id as string,
            answer: data.quiz_option_5,
            is_correct: data.quiz_correct === '5',
          },
        ],
      };

      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Berhasil Mengubah Pertanyaan!');
            router.push(
              `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal`,
            );
          },
          onError: (error) => {
            toast.error(error && 'Gagal Mengubah Pertanyaan!');
          },
        },
      );
    } catch {
      toast.error('Gagal Mengubah Pertanyaan!');
    }
  };

  useEffect(() => {
    form.reset({
      quiz_question: questionDetailData?.question,
      quiz_option_1: questionDetailData?.answers[0].answer,
      quiz_option_2: questionDetailData?.answers[1].answer,
      quiz_option_3: questionDetailData?.answers[2].answer,
      quiz_option_4: questionDetailData?.answers[3].answer,
      quiz_option_5: questionDetailData?.answers[4].answer,
      quiz_correct: ((correct_answer as number) + 1).toLocaleString(),
    });
  }, [questionDetailData]);

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
      name: 'Edit Soal',
      link: `/studi-ku/quiz/${subject_id}/${session_id}/${quiz_id}/detail-soal/edit-soal/${question_id}`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BREADCRUMB_ITEMS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-5 rounded-md pb-5 '>
        <div className='flex justify-between items-center  '>
          <TitleModule title={`Edit Soal Quiz`} />
        </div>
        <div className='px-5 flex flex-col gap-8'>
          <Form {...form}>
            <form
              className='flex flex-col gap-8'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className='flex flex-col gap-4'>
                <FormField
                  control={form.control}
                  name='quiz_question'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pertanyaan Kuis</FormLabel>
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
                  name='quiz_option_1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jawaban A</FormLabel>
                      <FormControl>
                        <Textarea placeholder='Jawaban A' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='quiz_option_2'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jawaban B</FormLabel>
                      <FormControl>
                        <Textarea placeholder='Jawaban B' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='quiz_option_3'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jawaban C</FormLabel>
                      <FormControl>
                        <Textarea placeholder='Jawaban C' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='quiz_option_4'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jawaban D</FormLabel>
                      <FormControl>
                        <Textarea placeholder='Jawaban D' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='quiz_option_5'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jawaban E</FormLabel>
                      <FormControl>
                        <Textarea placeholder='Jawaban E' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='quiz_correct'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel>Jawaban Benar</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='flex space-x-1'
                      >
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='1' />
                          </FormControl>
                          <FormLabel className='font-normal'>A</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='2' />
                          </FormControl>
                          <FormLabel className='font-normal'>B</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='3' />
                          </FormControl>
                          <FormLabel className='font-normal'>C</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='4' />
                          </FormControl>
                          <FormLabel className='font-normal'>D</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='5' />
                          </FormControl>
                          <FormLabel className='font-normal'>E</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex justify-end'>
                <div className='flex gap-4'>
                  <Button type='button' variant='primaryOutline'>
                    Batal
                  </Button>
                  <Button
                    type='submit'
                    variant='primary'
                    className='flex gap-2 items-center'
                  >
                    <Edit2 size={16} />
                    <span>Simpan Perubahan</span>
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

export default EditSoalQuizModule;
