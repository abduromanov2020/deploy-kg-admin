'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

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

type FormFields = {
  cover_title: string;
  cover_description: string;
  video_title_1: string;
  video_link_1: string;
  video_description_1: string;
  [key: string]: string; // This allows any string as a key
};

const TambahModul = () => {
  const [countVideo, setCountVideo] = useState<number>(1);
  const defaultValues: Record<string, string> = {
    cover_title: '',
    cover_description: '<p></p>\n',
  };

  for (let index = 0; index < countVideo; index++) {
    defaultValues[`video_title_${index + 1}`] = '';
    defaultValues[`video_link_${index + 1}`] = '';
    defaultValues[`video_description_${index + 1}`] = '<p></p>\n';
  }
  const form = useForm<FormFields>({
    resolver: zodResolver(ValidationSchemaCoverModul(countVideo)),
    defaultValues,
  });

  /* Start Cover  */
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
  /* End Cover */

  /* Start Video Pembelajaran */

  const [editorStateVideo, setEditorStateVideo] = useState<Array<EditorState>>([
    EditorState.createEmpty(),
  ]);

  const handleEditorChangeVideo = (editorState: EditorState, index: number) => {
    const newEditorState = [...editorStateVideo];
    newEditorState[index] = editorState;
    setEditorStateVideo(newEditorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue(`video_description_${index + 1}`, htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  // const handleAddVideo = () => {
  //   setCountVideo((prev) => prev + 1);
  // };

  /* End Video Pembelajaran */

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  function onSubmit(data: FormFields) {
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
          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <SubTitleModule title='Video Pembelajaran' />
              <div className='flex flex-col gap-4'>
                {Array(countVideo)
                  .fill('')
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <FormField
                          control={form.control}
                          name={`video_title_${index + 1}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Judul Video {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Judul Video ${
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
                              <FormLabel>Link Video {index + 1}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={`Masukkan Link Video ${
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
                      <DraftEditor
                        editorState={editorStateVideo[index]}
                        setEditorState={(editorState: EditorState) => {
                          handleEditorChangeVideo(editorState, index);
                        }}
                        label={`Deskripsi Video ${index + 1}`}
                        error={
                          form.formState.errors[
                            `video_description_${index + 1}`
                          ]?.message
                        }
                      />
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
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TambahModul;
