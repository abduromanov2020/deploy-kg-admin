'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { ITEMSTAMBAH } from '@/modules/sekilas-ilmu/constants';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_MEDIA_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const FormSchema = z.object({
  article_title: z
    .string({
      required_error: 'Title harus diisi.',
    })
    .min(2, {
      message: 'Title harus di isi minimal 2 karakter',
    }),
  hashtag: z
    .string({
      required_error: 'Hashtag harus diisi.',
    })
    .min(2, {
      message: 'Hashtag harus di isi minimal 2 karakter',
    }),
  writer: z
    .string({
      required_error: 'Penulis harus diisi.',
    })
    .min(2, {
      message: 'Penulis harus di isi minimal 2 karakter',
    }),
  created_at: z.string({
    required_error: 'Tanggal harus di isi',
  }),
  file: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine((files: File[]) => {
      return files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Ukuran maksimun adalah 3mb.')
    .refine(
      (files: File[]) => ACCEPTED_MEDIA_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, .png, dan .webp',
    ),
  article_content: z
    .string({
      required_error: 'Deskripsi harus di isi',
    })
    .min(5, { message: 'Deskripsi harus di isi minimal 5 karakter' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi harus di isi',
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
      file: undefined,
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
                            <Input placeholder='Isi Judul Disini' {...field} />
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
                            <Input placeholder='Isi Hashtag Disini' {...field} />
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
                            <Input placeholder='Isi Penulis Disini' {...field} />
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
                    <Label>Unggah Thumbnail</Label>
                    <UploadField
                      control={form.control}
                      name='file'
                      accepted='.jpg, .jpeg, .png'
                      variant='sm'
                      message={form?.formState?.errors?.[
                        `file`
                      ]?.message?.toString()}
                      status={
                        form?.formState?.errors?.[`file`] ? 'error' : 'none'
                      }
                    />
                  </div>
                  <div className='flex justify-end gap-3 my-3'>
                    <Link href='/sekilas-ilmu'>
                      <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-primary-500 text-primary-500'>
                        Kembali
                      </Button>
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className='bg-primary-500 hover:bg-primary-600'>
                          Tambah Artikel
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='sm:max-w-[425px] text-center p-12 z-[9999]'>
                        <DialogHeader>
                          <DialogTitle className='text-center'>
                            Apakah Anda yakin informasi sudah sesuai ?
                          </DialogTitle>
                          <div className='py-3'>
                            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
                          </div>
                          <DialogDescription className='text-center'>
                            Cek kembali informasi Acara dengan benar.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className='flex w-full justify-between'>
                          <Button variant='outline' className='w-full'>
                            Tinjau Ulang
                          </Button>
                          <DialogClose className='w-full'>
                            <Button
                              onClick={() => form.handleSubmit(onSubmit)()}
                              type='submit'
                              className='bg-primary-500 hover:bg-primary-600 w-full'
                            >
                              Selesai
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
