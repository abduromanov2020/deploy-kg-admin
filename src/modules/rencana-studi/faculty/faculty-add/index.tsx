'use client';

import { Button } from '@/components/ui/button';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';

type Checked = DropdownMenuCheckboxItemProps['checked'];
import { BreadCrumb } from '@/components/BreadCrumb';
import { FaInfoCircle } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { DraftEditorProps } from '@/components/text-editor';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { UploadField } from '@/components/input/upload-file';
import toast from 'react-hot-toast';

interface InputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  styleInput: string;
  styleTitle: string;
}

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const FormSchema = z.object({
  faculty_name: z.string().min(1, { message: 'Nama Fakultas Harus Diisi' }),
  head_of_faculty: z.string().min(1, {
    message: 'Kepala Fakultas Harus Diisi',
  }),
  major_count: z.string().min(1, {
    message: 'Jumlah Program Studi Harus Diisi',
  }),
  faculty_image: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.',
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'hanya menerima .jpg, .jpeg, dan .png.',
    ),
  faculty_description: z
    .string({
      required_error: 'Deskripsi Fakultas Harus Diisi',
    })
    .min(1, { message: 'Deskripsi Fakultas Harus Diisi' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi Fakultas Harus Diisi',
    }),
});

interface EditorProps {
  editorStyle: string;
  editorInput: DraftEditorProps;
}

export const AddFacultyModule = () => {
  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Tambah Fakultas',
      link: '/rencana-studi/tambah-fakultas',
    },
  ];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      faculty_name: '',
      head_of_faculty: '',
      major_count: '',
      faculty_image: undefined,
      faculty_description: '<p></p>\n',
    },
  });

  const headFaculty = [
    {
      value: '1',
      label: 'Head 1',
    },
    {
      value: '2',
      label: 'Head 2',
    },
    {
      value: '3',
      label: 'Head 3',
    },
  ];

  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorChange = (editorState: EditorState) => {
    setEditorStateCover(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('faculty_description', htmlContent, {
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

  // const handleFileChange = (file: File | null, index: number) => {
  //   setUploadFile((prevUploads) => {
  //     const newUploadFile = [...prevUploads];
  //     newUploadFile[index] = { upload: file };
  //     console.log('newUploadFile', newUploadFile[index].upload);

  //     return newUploadFile;
  //   });
  // };

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>

      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Tambah Fakultas</p>
        </div>
        <div className='p-8'>
          <div className='flex text-blue-500 place-items-center justify-center space-x-2'>
            <FaInfoCircle /> <h1>Info Fakultas</h1>{' '}
            <div className='h-[1.5px] w-[150px] bg-black'></div>
            <h1 className='text-blue-500'>Info Program Studi</h1>
          </div>
          <div className='my-8 w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='grid grid-cols-3 gap-6'>
                    <FormField
                      control={form.control}
                      name='faculty_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Fakultas</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='head_of_faculty'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kepala Fakultas*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Pilih Kepala Fakultas' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {headFaculty.map((head) => (
                                <SelectItem key={head.value} value={head.value}>
                                  {head.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='major_count'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah Prodi</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='my-8 flex flex-col gap-y-8'>
                    <label htmlFor='' className='text-sm font-semibold'>
                      Gambar Cover*
                      <UploadField
                        control={form.control}
                        name='faculty_image'
                        accepted='.jpg, .png'
                        variant='sm'
                        message={form?.formState?.errors?.[
                          `faculty_image`
                        ]?.message?.toString()}
                        status={
                          form?.formState?.errors?.[`faculty_image`]
                            ? 'error'
                            : 'none'
                        }
                      />
                    </label>
                    <DraftEditor
                      editorState={editorStateCover}
                      setEditorState={(editorState) => {
                        handleEditorChange(editorState);
                      }}
                      label='Deskripsi Fakultas'
                      error={form.formState.errors.faculty_description?.message}
                    />
                  </div>
                  <div className='flex justify-end gap-2'>
                    <Button
                      type='button'
                      asChild
                      className='text-primary-500 border border-primary-500 bg-white hover:bg-gray-200'
                    >
                      <Link href={'/rencana-studi'}>Kembali</Link>
                    </Button>
                    <Button
                      type='submit'
                      className='bg-primary-500 hover:bg-primary-600'
                    >
                      Tambah Fakultas
                    </Button>
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