'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Checked = DropdownMenuCheckboxItemProps['checked'];
import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { BreadCrumb } from '@/components/BreadCrumb';
import { DraftEditorProps } from '@/components/text-editor';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

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
  major_id: z.string().min(1, {
    message: 'Major count must be at least 1.',
  }),
  major_name: z.string().min(2, {
    message: 'Faculty must be at least 2 characters.',
  }),
  faculty_name: z.string().min(2, {
    message: 'Faculty must be at least 2 characters.',
  }),
  head_of_major: z.string().min(1, {
    message: 'A head of faculty is required.',
  }),
  sks: z.string().min(1, {
    message: 'Major count must be at least 1.',
  }),
  major_image: z.any(),
  // .refine(
  //   (files: File[]) => files !== undefined && files?.length >= 1,
  //   'Harus ada file yang di upload.',
  // )
  // .refine(
  //   (files: File[]) =>
  //     files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
  //   'Ukuran maksimun adalah 3mb.',
  // )
  // .refine(
  //   (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   'hanya menerima .jpg, .jpeg, dan .png.',
  // ),
  major_description: z
    .string({
      required_error: 'A content description is required.',
    })
    .min(1, { message: 'A content description is required.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'A content description is required',
    }),
});

interface EditorProps {
  editorStyle: string;
  editorInput: DraftEditorProps;
}
const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const EditMajorModule = ({ editorInput }: any) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };

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
      name: 'Daftar Prodi',
      link: '/rencana-studi/program-studi/1',
    },
    {
      name: 'Edit Prodi',
      link: '/rencana-studi/program-studi/1/edit-prodi/1',
    },
  ];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      major_id: '',
      major_name: '',
      faculty_name: '',
      head_of_major: '',
      sks: '',
      major_image: undefined,
      major_description: '<p></p>\n',
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

    form.setValue('major_description', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

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
          <p className='text-base font-semibold'>Edit Program Studi</p>
        </div>
        <div className='p-8'>
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='grid grid-cols-1 gap-6'>
                    <FormField
                      control={form.control}
                      name='major_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Program Studi*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Nama Program Studi'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='my-8'>
                    <DraftEditor
                      editorState={editorStateCover}
                      setEditorState={(editorState) => {
                        handleEditorChange(editorState);
                      }}
                      label='Deskripsi Program Studi*'
                      error={form.formState.errors.major_description?.message}
                    />
                  </div>
                  <div className='flex items-center space-x-3 '>
                    <Checkbox id='terms' onClick={handleLookUp} />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Saya menyatakan prodi yang ditambahkan sudah benar
                    </label>
                  </div>
                  <div className='flex justify-end gap-2'>
                    <Button
                      type='button'
                      asChild
                      className='text-primary-500 border border-primary-500 bg-white hover:bg-gray-200'
                    >
                      <Link href='/rencana-studi/program-studi/1'>Kembali</Link>
                    </Button>
                    {/* <Button
                      type='submit'
                      className='bg-primary-500 hover:bg-primary-600'
                    >
                      Tambah Prodi
                    </Button> */}
                    {!isChecked ? (
                      <Button
                        type='submit'
                        className='bg-primary-500 hover:bg-primary-600'
                      >
                        <div className='flex place-items-center gap-2'>
                          Edit Prodi
                        </div>
                      </Button>
                    ) : (
                      <Button
                        type='submit'
                        disabled
                        className='text-slate-400 bg-slate-300 rounded-md '
                      >
                        <div className='flex place-items-center gap-2'>
                          Tambah Prodi
                        </div>
                      </Button>
                    )}
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
