'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

import { ValidationSchemaSession } from '@/lib/validation/rencana-studi/session';
import {
  useAddSession,
  useGetSessions,
} from '@/hooks/rencana-studi/session/hook';

import { BreadCrumb, TCrumbItem } from '@/components/BreadCrumb';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';

import {
  TAddSessionItem,
  TAddSessionPayload,
} from '@/types/rencana-studi/sessions/type';
import { FormFields } from '@/types/studi-ku/modul';

export const TambahPertemuanRencanaStudi = () => {
  const [countSession, setCountSession] = useState<number>(1);

  const { id, id_major, id_subject } = useParams();
  const { mutate } = useAddSession(id_subject as string);
  const { data } = useGetSessions(id_subject as string);

  const sessionLength = data?.data?.sessions?.length;

  const router = useRouter();

  const defaultValues: Record<string, string> = {};

  for (let index = 0; index < countSession; index++) {
    defaultValues[`session_title_${index + 1}`] = '';
    defaultValues[`session_duration_${index + 1}`] = '';
    defaultValues[`session_description_${index + 1}`] = '';
    defaultValues[`session_type_${index + 1}`] = '';
  }

  const form = useForm<FormFields>({
    resolver: zodResolver(ValidationSchemaSession(countSession)),
    defaultValues,
  });

  function onSubmit(data: FormFields) {
    try {
      const session: TAddSessionItem[] = [];

      for (let index = 0; index < countSession; index++) {
        session.push({
          title: data[`session_title_${index + 1}`] as string,
          duration: parseInt(data[`session_duration_${index + 1}`] as string),
          description: data[`session_description_${index + 1}`] as string,
          type: data[`session_type_${index + 1}`] as string,
          is_sync: true,
          session_no: (sessionLength as number) + index + 1,
        });
      }

      const payload: TAddSessionPayload = {
        sessions: session,
      };

      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success(`${countSession} pertemuan berhasil ditambahkan`);
            router.push(
              `/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}/detail/${id_subject}`,
            );
          },
          onError: (error) => {
            toast.error(error.message);
          },
        },
      );
    } catch {
      toast.error('Gagal menambahkan pertemuan');
    }
  }

  const BreadCrumbItems: TCrumbItem[] = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: `/rencana-studi/program-studi/${id}`,
    },
    {
      name: 'Daftar Matkul',
      link: `/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}`,
    },
    {
      name: 'Detail Matkul',
      link: `/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}/detail/${id_subject}`,
    },
    {
      name: 'Tambah Pertemuan',
      link: `/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}/detail/${id_subject}/tambah-pertemuan`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BreadCrumbItems} className='!p-0 ' />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-white flex flex-col gap-5 rounded-md pb-5 '
        >
          <TitleModule title='Tambah Pertemuan' />

          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <div className='flex flex-col gap-4'>
                {Array(countSession)
                  .fill('')
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className='pt-4'>
                        <h3 className='font-semibold text-dark-900'>
                          Tambah Pertemuan
                        </h3>
                      </div>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <FormField
                          control={form.control}
                          name={`session_title_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Judul Pertemuan</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Judul Pertemuan ${
                                    index + 1
                                  }`}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`session_duration_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Durasi Pertemuan</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan durasi Pertemuan ${
                                    index + 1
                                  }`}
                                  type='number'
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <FormField
                          control={form.control}
                          name={`session_description_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Deskripsi Pertemuan</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Deskripsi Pertemuan ${
                                    index + 1
                                  }`}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`session_type_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipe Pertemuan</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder='Pilih Tipe Pertemuan' />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectItem value='OVERVIEW'>
                                        OVERVIEW
                                      </SelectItem>
                                      <SelectItem value='REGULAR'>
                                        REGULAR
                                      </SelectItem>
                                      <SelectItem value='MIDTERM_EXAM'>
                                        MIDTERM_EXAM
                                      </SelectItem>
                                      <SelectItem value='FINAL_EXAM'>
                                        FINAL_EXAM
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </Fragment>
                  ))}
              </div>
              <div className='flex justify-end mt-2 gap-2'>
                <div
                  className='text-primary-500 cursor-pointer flex items-center'
                  onClick={() =>
                    setCountSession((prev) => {
                      if (prev === 1) return prev;
                      return prev - 1;
                    })
                  }
                >
                  <BiMinusCircle className='inline-block text-xl mr-2' />
                  Kurangi Pertemuan
                </div>
                <div
                  className='text-primary-500 cursor-pointer flex items-center'
                  onClick={() => setCountSession((prev) => prev + 1)}
                >
                  <BiPlusCircle className='inline-block text-xl mr-2' />
                  Tambah Pertemuan
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-end gap-5 px-5'>
            <Button variant='primaryOutline'>Kembali</Button>
            <Button
              variant='primary'
              type='submit'
              className='bg-primary-500 text-white px-4 py-2 rounded-md'
            >
              Tambah Pertemuan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
