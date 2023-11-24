'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiDownload, BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

import { ValidationSchemaCoverModul } from '@/lib/validation/studi-ku/edit-modul';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Input } from '@/components/input';
import { UploadField } from '@/components/input/upload-file';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { EDIT_MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import { EDIT_DATA_MODULE } from '@/modules/studi-ku/modul/edit/constant';
import {
  SubTitleModule,
  TitleModule,
} from '@/modules/studi-ku/modul/tambah/TitleModule';

import { FormFields } from '@/types/studi-ku/modul';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const EditModulModule = () => {
  const data = EDIT_DATA_MODULE;
  const [countVideo, setCountVideo] = useState<number>(
    data?.video?.length || 1,
  );
  const [countDocument, setCountDocument] = useState<number>(
    data?.document?.length || 1,
  );

  const defaultValues: Record<string, string | undefined> = {
    cover_title: data?.cover?.title || '',
    cover_description: data?.cover?.description || '<p></p>\n',
  };

  for (let index = 0; index < data?.video?.length; index++) {
    defaultValues[`video_title_${index + 1}`] = data?.video[index]?.title || '';
    defaultValues[`video_link_${index + 1}`] = data?.video[index]?.link || '';
    defaultValues[`video_description_${index + 1}`] =
      data?.video[index]?.description || '<p></p>\n';
  }

  for (let index = 0; index < data?.document?.length; index++) {
    defaultValues[`document_file_${index + 1}`] = undefined;
  }

  const form = useForm<FormFields>({
    resolver: zodResolver(
      ValidationSchemaCoverModul(countVideo, countDocument),
    ),
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

  /* End Video Pembelajaran */

  /* Default value WYSIWYG */
  useEffect(() => {
    if (data) {
      const contentState = stateFromHTML(data.cover.description);
      setEditorStateCover(EditorState.createWithContent(contentState));

      const newEditorState = [...editorStateVideo];

      for (let index = 0; index < data?.video?.length; index++) {
        const contentState = stateFromHTML(data.video[index].description);
        newEditorState[index] = EditorState.createWithContent(contentState);
      }

      // Set the state after the loop
      setEditorStateVideo(newEditorState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <SubTitleModule title='Dokumen Pembelajaran' />
              <div className='flex flex-col gap-4'>
                {Array(countDocument)
                  .fill('')
                  .map((_, index) => (
                    <div className='flex gap-4 items-center ' key={index}>
                      <div className='w-full'>
                        <UploadField
                          control={form.control}
                          // disabled={data?.document[index]?.file ? true : false}
                          name={`document_file_${index + 1}`}
                          accepted='.pdf'
                          label={`Dokumen ${index + 1}`}
                          variant='sm'
                          message={form?.formState?.errors?.[
                            `document_file_${index + 1}`
                          ]?.message?.toString()}
                          status={
                            form?.formState?.errors?.[
                              `document_file_${index + 1}`
                            ]
                              ? 'error'
                              : 'none'
                          }
                        />
                      </div>

                      {!form.getValues(`document_file_${index + 1}`) && (
                        <Link
                          target='_blank'
                          href={data?.document[index]?.file || '#'}
                          className='flex gap-2 items-center px-4 py-2 bg-primary-500 rounded-md mt-5 text-white font-semibold'
                        >
                          <BiDownload className='text-white text-2xl' />
                          Unduh
                        </Link>
                      )}
                    </div>
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
                  Kurangi Dokumen
                </div>
                <div
                  className='text-primary-500 cursor-pointer flex items-center'
                  onClick={() => setCountDocument((prev) => prev + 1)}
                >
                  <BiPlusCircle className='inline-block text-xl mr-2' />
                  Tambah Dokumen
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

export default EditModulModule;
