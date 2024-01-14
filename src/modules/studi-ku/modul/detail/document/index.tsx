'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

import { ValidationSchemaDocument } from '@/lib/validation/studi-ku';
import { useAddDocumentBulk } from '@/hooks/studi-ku/modul/hook';

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
  FormFields,
  TAddDocumentBulk,
  TAddDocumentPayload,
} from '@/types/studi-ku/modul';

export const TambahModulDokumen = () => {
  const [countDocument, setCountDocument] = useState<number>(1);
  const { subject_id, session_id, module_id } = useParams();
  const router = useRouter();

  const { mutate } = useAddDocumentBulk(
    subject_id as string,
    session_id as string,
    module_id as string,
  );

  const defaultValues: Record<string, string> = {};

  for (let index = 0; index < countDocument; index++) {
    defaultValues[`document_title_${index + 1}`] = '';
    defaultValues[`document_duration_${index + 1}`] = '';
    defaultValues[`document_link_${index + 1}`] = '';
  }

  const form = useForm<FormFields>({
    resolver: zodResolver(ValidationSchemaDocument(countDocument)),
    defaultValues,
  });

  function onSubmit(data: FormFields) {
    try {
      const document: TAddDocumentBulk[] = [];

      for (let index = 0; index < countDocument; index++) {
        document.push({
          title: data[`document_title_${index + 1}`] ?? '',
          duration: data[`document_duration_${index + 1}`] ?? '0',
          url: data[`document_link_${index + 1}`] ?? '',
        });
      }

      const payload: TAddDocumentPayload = {
        documents: document,
      };

      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success(`${countDocument} dokumen berhasil ditambahkan`);
            router.push(
              `/studi-ku/modul/${subject_id}/${session_id}/${module_id}`,
            );
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Dokumen!');
          },
        },
      );
    } catch {
      toast.error('Gagal menambahkan document');
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
      name: `Tambah Dokumen`,
      link: `/studi-ku/modul/${subject_id}/${session_id}/${module_id}/tambah-dokumen`,
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
                {Array(countDocument)
                  .fill('')
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className='pt-4'>
                        <h3 className='font-semibold text-dark-900'>
                          Dokumen Pembelajaran {index + 1}
                        </h3>
                      </div>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <FormField
                          control={form.control}
                          name={`document_title_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Judul document {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Judul document ${
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
                          name={`document_duration_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Durasi dokumen {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan durasi dokumen ${
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
                      <FormField
                        control={form.control}
                        name={`document_link_${index + 1}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Link document {index + 1}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={`Masukkan Link document ${
                                  index + 1
                                }`}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Fragment>
                  ))}
              </div>
              <div className='flex justify-end mt-2 gap-2'>
                <div
                  className='text-primary-500 cursor-pointer flex items-center'
                  onClick={() =>
                    setCountDocument((prev) => {
                      if (prev === 1) return prev;
                      return prev - 1;
                    })
                  }
                >
                  <BiMinusCircle className='inline-block text-xl mr-2' />
                  Kurangi Document
                </div>
                <div
                  className='text-primary-500 cursor-pointer flex items-center'
                  onClick={() => setCountDocument((prev) => prev + 1)}
                >
                  <BiPlusCircle className='inline-block text-xl mr-2' />
                  Tambah Document
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
              Tambah Dokumen
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
