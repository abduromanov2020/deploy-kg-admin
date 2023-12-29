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
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
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
  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };

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
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <FormField
                    control={form.control}
                    name='faculty_name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Fakultas*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Masukan Nama Fakultas disini'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                  <div className='flex items-center space-x-3 '>
                    <Checkbox id='terms' onClick={handleLookUp} />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Saya menyatakan fakultas yang ditambahkan sudah benar
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
                    {!isChecked ? (
                      <Button
                        type='submit'
                        className='bg-primary-500 hover:bg-primary-600'
                      >
                        <div className='flex place-items-center gap-2'>
                          Tambah Fakultas
                        </div>
                      </Button>
                    ) : (
                      <Button
                        type='submit'
                        disabled
                        className='text-slate-400 bg-slate-300 rounded-md '
                      >
                        <div className='flex place-items-center gap-2'>
                          Tambah Fakultas
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
