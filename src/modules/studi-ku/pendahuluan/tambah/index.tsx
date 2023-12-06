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
import { UploadField } from '@/components/input/upload-file';
import DraftEditor from '@/components/text-editor';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
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
        >
          <TitleModule title='Tambah Pendahuluan' />
          <div className='px-5 flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Modul</FormLabel>
                  <FormControl>
                    <Input placeholder='Modul 1' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DraftEditor
              editorState={document}
              setEditorState={(editorState) => {
                handleDocumentChange(editorState);
              }}
              label='Deskripsi Modul'
              error={form.formState.errors.description?.message}
            />
            <div className='grid grid-cols-2 gap-4'>
              <UploadField
                control={form.control}
                // required
                name='document'
                accepted='.pdf'
                label='Dokumen Pendahuluan'
                variant='sm'
                message={form?.formState?.errors?.document?.message?.toString()}
                status={form?.formState?.errors?.document ? 'error' : 'none'}
              />
              <UploadField
                control={form.control}
                // required
                name='video'
                accepted='.mp4, .webm, .ogg'
                label='Video Pendahuluan'
                variant='sm'
                message={form?.formState?.errors?.document?.message?.toString()}
                status={form?.formState?.errors?.document ? 'error' : 'none'}
              />
            </div>
          </div>
          <div className='flex w-full justify-end gap-3 px-5'>
            <Button variant='primaryOutline'>Kembali</Button>
            <Button
              variant='primary'
              type='submit'
              className='bg-primary-500 text-white px-4 py-2 rounded-md'
            >
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TambahPendahuluanModule;
