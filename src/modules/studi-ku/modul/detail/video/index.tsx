'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

import { ValidationSchemaVideo } from '@/lib/validation/studi-ku';
import { useAddVideo } from '@/hooks/studi-ku/modul/hook';

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

import { DETAIL_MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';

import {
  TAddVideoItem,
  TAddVideoPayload,
  TVideoField,
} from '@/types/studi-ku/modul';

export const TambahModulVideo = () => {
  const [countVideo, setCountVideo] = useState<number>(1);
  const { subject_id, session_id, module_id } = useParams();
  const router = useRouter();

  const { mutate } = useAddVideo(
    subject_id as string,
    session_id as string,
    module_id as string,
  );

  const defaultValues: Record<string, string> = {};

  for (let index = 0; index < countVideo; index++) {
    defaultValues[`video_title_${index + 1}`] = '';
    defaultValues[`video_duration_${index + 1}`] = '';
    defaultValues[`video_link_${index + 1}`] = '';
    defaultValues[`video_description_${index + 1}`] = '';
  }

  const form = useForm<TVideoField>({
    resolver: zodResolver(ValidationSchemaVideo(countVideo)),
    defaultValues,
  });

  function onSubmit(data: TVideoField) {
    try {
      const video: TAddVideoItem[] = [];

      for (let index = 0; index < countVideo; index++) {
        video.push({
          title: data[`video_title_${index + 1}`] ?? '',
          duration: data[`video_duration_${index + 1}`] ?? '0',
          url: data[`video_link_${index + 1}`] ?? '',
          description: data[`video_description_${index + 1}`] ?? '',
        });
      }

      const payload: TAddVideoPayload = {
        videos: video,
      };

      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success(`${countVideo} video berhasil ditambahkan`);
            router.push(
              `/studi-ku/modul/${subject_id}/${session_id}/${module_id}`,
            );
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Video!');
          },
        },
      );
    } catch {
      toast.error('Gagal menambahkan video');
    }
  }

  const BreadCrumbItems: TCrumbItem[] = [
    ...DETAIL_MODULE_BREADCRUMBS,
    {
      name: 'Daftar Modul',
      link: `/studi-ku/modul/${subject_id}/${session_id}`,
    },
    {
      name: `Detail Modul`,
      link: `/studi-ku/modul/${subject_id}/${session_id}/${module_id}`,
    },
    {
      name: `Tambah Video`,
      link: `/studi-ku/modul/${subject_id}/${session_id}/${module_id}/tambah-video`,
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
          <TitleModule title='Daftar Modul Mata Kuliah Manajemen Keuangan' />

          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <div className='flex flex-col gap-4'>
                {Array(countVideo)
                  .fill('')
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className='pt-4'>
                        <h3 className='font-semibold text-dark-900'>
                          Video Pembelajaran {index + 1}
                        </h3>
                      </div>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <FormField
                          control={form.control}
                          name={`video_title_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Judul video {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Judul video ${
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
                          name={`video_duration_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Durasi video {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan durasi video ${
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
                          name={`video_description_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Deskripsi video {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Deskripsi video ${
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
                          name={`video_link_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Link video {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Link video ${
                                    index + 1
                                  }`}
                                  {...field}
                                />
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
                    setCountVideo((prev) => {
                      if (prev === 1) return prev;
                      return prev - 1;
                    })
                  }
                >
                  <BiMinusCircle className='inline-block text-xl mr-2' />
                  Kurangi Video
                </div>
                <div
                  className='text-primary-500 cursor-pointer flex items-center'
                  onClick={() => setCountVideo((prev) => prev + 1)}
                >
                  <BiPlusCircle className='inline-block text-xl mr-2' />
                  Tambah Video
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
              Tambah Video
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
