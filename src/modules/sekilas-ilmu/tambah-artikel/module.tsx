'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BreadCrumb } from '@/components/BreadCrumb';
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

import { ITEMSTAMBAH } from '@/modules/sekilas-ilmu/constants';
import Link from 'next/link';
import { AccArticleModal } from '@/modules/sekilas-ilmu/components/AccArticleModal';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const FormSchema = z.object({
  article_title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  hashtag: z.string().min(2, {
    message: 'Hashtag must be at least 2 characters.',
  }),
  writer: z.string().min(2, {
    message: 'Penulis must be at least 2 characters.',
  }),
  created_at: z.string({
    required_error: 'Date is required.',
  }),
  file: z.string({
    required_error: 'A file is required.',
  }),
  article_content: z
    .string({
      required_error: 'A content description is required.',
    })
    .min(1, { message: 'A content description is required.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'A content description is required',
    }),
});

const TambahArtikelModule = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      article_title: '',
      hashtag: '',
      writer: '',
      created_at: new Date().toLocaleDateString(),
      article_content: '<p></p>\n',
      file: '',
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

    form.setValue('article_content', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data', data);

    toast.success('Form submitted!');
  }

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMSTAMBAH} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-sm'>Tambah Artikel</h3>
        </div>
        <div className='p-5'>
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='w-full flex flex-col gap-6'
                >
                  <div className='grid grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='article_title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Judul Artikel</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='hashtag'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hashtag</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='writer'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Penulis</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='created_at'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tanggal Unggah</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              defaultValue={
                                field.value || new Date().toLocaleDateString()
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DraftEditor
                    editorState={editorStateCover}
                    setEditorState={(editorState) => {
                      handleEditorChange(editorState);
                    }}
                    label='Isi Artikel'
                    error={form.formState.errors.article_content?.message}
                  />
                  <div className='w-full'>
                    <FormField
                      control={form.control}
                      name='file'
                      render={({ field }) => (
                        <FormItem className='grid w-full items-center gap-1.5'>
                          <FormLabel>Unggah Thumbnail</FormLabel>
                          <FormControl>
                            <Input type='file' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='flex justify-end gap-3 my-3'>
                    <Link href='/sekilas-ilmu'>
                      <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-primary-500 text-primary-500'>
                        Kembali
                      </Button>
                    </Link>
                    <AccArticleModal titleButton='Tambah Artikel' />
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TambahArtikelModule;
