'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
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
import { TAMBAH_DETAIL_SOAL_QUIZ_BREADCRUMBS } from '@/modules/studi-ku/quiz/constant';
import { quizDataAtom } from '@/recoils/studi-ku/quiz/atom';

import { TQuizDataQuestionForm } from '@/types/studi-ku/quiz';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const TambahDetailSoalQuizModule = () => {
  const [countQuestions, setCountQuestions] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentQuestion(page);
  };

  const [quizData, setQuizData] = useRecoilState(quizDataAtom);

  const handleAddQuestion = () => {
    setCountQuestions((prev) => prev + 1);
  };

  const defaultValues: Record<string, string | number> = {};

  for (let index = 0; index < countQuestions; index++) {
    defaultValues[`quiz_question_${index + 1}`] = '<p></p>\n';
    defaultValues[`quiz_option_${index + 1}_1`] = '';
    defaultValues[`quiz_option_${index + 1}_2`] = '';
    defaultValues[`quiz_option_${index + 1}_3`] = '';
    defaultValues[`quiz_option_${index + 1}_4`] = '';
    defaultValues[`quiz_correct_${index + 1}`] = 0;
  }

  const form = useForm<TQuizDataQuestionForm>({
    resolver: zodResolver(validationSchemaQuizQuestion(countQuestions)),
    defaultValues,
  });

  const [quizQuestion, setQuizQuestion] = useState<Array<EditorState>>([
    EditorState.createEmpty(),
  ]);

  const handleEditorChangeVideo = (editorState: EditorState, index: number) => {
    const newEditorState = [...quizQuestion];
    newEditorState[index] = editorState;
    setQuizQuestion(newEditorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue(`quiz_question_${index + 1}`, htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = (data: TQuizDataQuestionForm) => {
    console.log(data);
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
        <div className='px-5 flex flex-col gap-8'>
          <div className='flex flex-col gap-2 rounded-lg border-2 p-5'>
            <SubTitleModule title='Daftar Soal' />
            <div className='flex gap-2 flex-wrap'>
              {Array(countQuestions)
                .fill('')
                .map((item, index) => (
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
          <Form {...form}>
            <form
              className='flex flex-col gap-8'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <DraftEditor
                editorState={quizQuestion[currentQuestion - 1]}
                setEditorState={(editorState: EditorState) => {
                  handleEditorChangeVideo(editorState, currentQuestion);
                }}
                label={`Pertanyaan Kuis ${currentQuestion}`}
                error={
                  form.formState.errors[`quiz_question${currentQuestion}`]
                    ?.message
                }
              />
              <div className='flex flex-col gap-4'>
                <FormField
                  control={form.control}
                  name={`quiz_option_${currentQuestion}_1`}
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
                  name={`quiz_option_${currentQuestion}_2`}
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
                  name={`quiz_option_${currentQuestion}_3`}
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
                  name={`quiz_option_${currentQuestion}_4`}
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
              </div>
              <FormField
                control={form.control}
                name={`quiz_correct_${currentQuestion}`}
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel>Jawaban Benar</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        // defaultValue={field.value}
                        className='flex space-x-1'
                      >
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='A' />
                          </FormControl>
                          <FormLabel className='font-normal'>A</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='B' />
                          </FormControl>
                          <FormLabel className='font-normal'>B</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='C' />
                          </FormControl>
                          <FormLabel className='font-normal'>C</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-3 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='D' />
                          </FormControl>
                          <FormLabel className='font-normal'>D</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TambahDetailSoalQuizModule;
