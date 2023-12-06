'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import logger from '@/lib/logger';
import { ValidationSchemaPendahuluan } from '@/lib/validation/studi-ku/pendahuluan';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Form } from '@/components/ui/form';

import { TAMBAH_PENDAHULUAN_BREADCRUMBS } from '@/modules/studi-ku/pendahuluan/constant';

import { FormFieldsPendahuluan } from '@/types/studi-ku/pendahuluan';

const TambahPendahuluanModule = () => {
  const form = useForm<FormFieldsPendahuluan>({
    resolver: zodResolver(ValidationSchemaPendahuluan),
    defaultValues: {
      title: '',
      description: '',
      video: '',
      document: undefined,
    },
  });

  const [document, setDocument] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleDocumentChange = (editorState: EditorState) => {
    setDocument(document);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('document', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = (data: FormFieldsPendahuluan) => {
    logger(data);
    toast.success('Form Submitted');
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={TAMBAH_PENDAHULUAN_BREADCRUMBS} className='!p-0 ' />
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

export default TambahPendahuluanModule;
