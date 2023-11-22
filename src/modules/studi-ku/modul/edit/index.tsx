'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { ValidationSchemaCoverModul } from '@/lib/validation/studi-ku';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Form } from '@/components/ui/form';

import { EDIT_MODULE_BREADCRUMBS } from '@/modules/studi-ku/daftar-modul/constant';

import { FormFields } from '@/types/studi-ku';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const EditModulModule = () => {
  const [countVideo, setCountVideo] = useState<number>(1);
  const [countDocument, setCountDocument] = useState<number>(1);

  const defaultValues: Record<string, string> = {
    cover_title: '',
    cover_description: '<p></p>\n',
  };

  for (let index = 0; index < countVideo; index++) {
    defaultValues[`video_title_${index + 1}`] = '';
    defaultValues[`video_link_${index + 1}`] = '';
    defaultValues[`video_description_${index + 1}`] = '<p></p>\n';
  }

  for (let index = 0; index < countDocument; index++) {
    defaultValues[`document_${index + 1}`] = '';
  }

  const form = useForm<FormFields>({
    resolver: zodResolver(
      ValidationSchemaCoverModul(countVideo, countDocument),
    ),
    defaultValues,
  });

  function onSubmit(data: FormFields) {
    console.log(data);

    toast.success('Form submitted!');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={EDIT_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-white flex flex-col gap-5 rounded-md pb-5 '
        ></form>
      </Form>
    </div>
  );
};

export default EditModulModule;
