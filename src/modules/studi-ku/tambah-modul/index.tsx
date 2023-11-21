'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { ValidationSchemaCoverModul } from '@/lib/validation/studi-ku';

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

// import { Input } from '@/components/ui/input';
import { TAMBAH_MODULE_BREADCRUMBS } from '@/modules/studi-ku/daftar-modul/constant';
import {
  SubTitleModule,
  TitleModule,
} from '@/modules/studi-ku/tambah-modul/TitleModule';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const TambahModul = () => {
  const form = useForm<z.infer<typeof ValidationSchemaCoverModul>>({
    resolver: zodResolver(ValidationSchemaCoverModul),
    defaultValues: {
      cover_title: '',
      cover_description: '<p></p>\n',
    },
  });

  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorChange = (editorState: EditorState) => {
    setEditorStateCover(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('cover_description', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {}, [form.formState.errors]);

  function onSubmit(data: z.infer<typeof ValidationSchemaCoverModul>) {
    console.log(data);

    toast.success('Form submitted!');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={TAMBAH_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-white flex flex-col gap-5 rounded-md pb-5 '
        >
          <TitleModule title='Daftar Modul Mata Kuliah Manajemen Keuangan' />
          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <SubTitleModule title='Cover' />
              <div className='flex flex-col gap-4'>
                <FormField
                  control={form.control}
                  name='cover_title'
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
                  editorState={editorStateCover}
                  setEditorState={(editorState) => {
                    handleEditorChange(editorState);
                  }}
                  label='Deskripsi Modul'
                  error={form.formState.errors.cover_description?.message}
                />
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
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TambahModul;
