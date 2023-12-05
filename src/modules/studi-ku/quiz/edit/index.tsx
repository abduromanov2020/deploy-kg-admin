'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { ValidationsSchemaTambahQuizDescription } from '@/lib/validation/studi-ku/quiz';

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

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import { TAMBAH_QUIZ_MODULE_BREADCRUMBS } from '@/modules/studi-ku/quiz/constant';

import { TTambahQuizDescriptionPayload } from '@/types/studi-ku/quiz';

const TambahQuizModule = () => {
  const form = useForm<TTambahQuizDescriptionPayload>({
    resolver: zodResolver(ValidationsSchemaTambahQuizDescription),
  });

  const [date, setDate] = React.useState<Date>();

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  const onSubmit = (data: TTambahQuizDescriptionPayload) => {
    toast.success('Berhasil menambahkan quiz');
    console.log(data);
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={TAMBAH_QUIZ_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Tambah Quiz Mata Kuliah Manajemen Keuangan' />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <div className='grid grid-cols-2 w-full gap-5 items-start px-5'>
              <FormField
                control={form.control}
                name='start_date'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>Tanggal Mulai*</FormLabel>
                    <FormControl>
                      <Input {...field} type='date' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='end_date'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>Tanggal Berakhir*</FormLabel>
                    <FormControl>
                      <Input {...field} type='date' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='start_time'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>Waktu Mulai*</FormLabel>
                    <FormControl>
                      <Input {...field} type='time' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='end_time'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>Waktu Berakhir*</FormLabel>
                    <FormControl>
                      <Input {...field} type='time' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='duration'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>Durasi*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Masukkan Durasi dalam Detik'
                        type='number'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='count_question'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>Jumlah Soal*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Masukkan Jumlah Soal'
                        type='number'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex w-full justify-end gap-5 px-5'>
              <Button variant='primaryOutline'>Kembali</Button>

              <Button
                variant='primary'
                type='submit'
                className='bg-primary-500 text-white px-4 py-2 rounded-md'
              >
                Tambah Quiz
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TambahQuizModule;
