'use client';

import { Button } from '@/components/ui/button';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';

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

interface InputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  styleInput: string;
  styleTitle: string;
}

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const FormSchema = z.object({
  subject_id: z.string().min(1, {
    message: 'Major count must be at least 1.',
  }),
  subject_name: z.string().min(2, {
    message: 'Faculty must be at least 2 characters.',
  }),
  major_name: z.string().min(2, {
    message: 'Faculty must be at least 2 characters.',
  }),
  lecturer: z.string().min(1, {
    message: 'A head of faculty is required.',
  }),
  sks: z.string().min(1, {
    message: 'Major count must be at least 1.',
  }),
  meeting_count: z.string().min(1, {
    message: 'Major count must be at least 1.',
  }),
  status: z.string().min(1, {
    message: 'Major count must be at least 1.',
  }),
});

interface EditorProps {
  editorStyle: string;
  editorInput: DraftEditorProps;
}
const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const AddSubjectModule = ({ editorInput }: any) => {
  const [uploadFile, setUploadFile] = useState<Array<{ upload: File | null }>>([
    { upload: null },
  ]);

  console.log('uploadFile', uploadFile);

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1',
    },
    {
      name: 'Tambah Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1/tambah-matkul',
    },
  ];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      subject_id: '',
      subject_name: '',
      major_name: '',
      lecturer: '',
      sks: '',
      meeting_count: '',
      status: '',
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data', data);
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
          <p className='text-base font-semibold'>Tambah Mata Kuliah</p>
        </div>
        <div className='p-8'>
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='grid grid-cols-3 gap-6'>
                    <FormField
                      control={form.control}
                      name='subject_id'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Mata Kuliah*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='subject_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Mata Kuliah*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='major_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program Studi*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lecturer'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dosen Mata Kuliah*</FormLabel>
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
                      name='sks'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah SKS*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='meeting_count'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah Pertemuan*</FormLabel>
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
                      name='status'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Status' />
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
                  </div>
                  <div className='my-8'></div>
                  <div className='flex justify-end gap-2'>
                    <Button
                      type='button'
                      asChild
                      className='text-primary-500 border border-primary-500 bg-white hover:bg-gray-200'
                    >
                      <Link
                        href={'/rencana-studi/program-studi/1/mata-kuliah/1'}
                      >
                        Kembali
                      </Link>
                    </Button>
                    <Button
                      type='submit'
                      className='bg-primary-500 hover:bg-primary-600'
                    >
                      Tambah Matkul
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
