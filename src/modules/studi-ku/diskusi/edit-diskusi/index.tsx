'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { cn } from '@/lib/utils';
import { ValidationSchemaEditDiskusi } from '@/lib/validation/studi-ku/diskusi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

import { TDiskusi } from '@/types/studi-ku/diskusi/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const StudikuEditDiskusiModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Diskusi',
      link: `/studi-ku/diskusi`,
    },
    {
      name: 'Edit Diskusi',
      link: `/studi-ku/diskusi/edit-diskusi/1`,
    },
  ];

  const [date, setDate] = useState<Date>();

  const formDetail = useForm<TDiskusi>({
    resolver: zodResolver(ValidationSchemaEditDiskusi()),
  });

  const [editorStateDetail, setEditorStateDetail] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorDetailChange = (editorState: EditorState) => {
    setEditorStateDetail(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    formDetail.setValue('description', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    date &&
      formDetail.setValue('deadline', date.toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
  }, [date]);

  function onSubmitDetail(data: TDiskusi) {
    console.log(data);
    toast.success('Form submitted!');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>
            Edit Diskusi : Diskusi Modul 1{' '}
          </span>
        </div>
        <div className='p-8'>
          <Form {...formDetail}>
            <form
              onSubmit={formDetail.handleSubmit(onSubmitDetail)}
              className='bg-white flex flex-col gap-5 rounded-md pb-5 '
            >
              <FormField
                control={formDetail.control}
                name='topic'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5 my-5'>
                    <FormLabel>Topik Diskusi</FormLabel>
                    <FormControl>
                      <Input placeholder='Keuangan di Indonesia' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='bg-gray-100 rounded-lg'>
                <p className='font-semibold text-lg mb-5'>Deskripsi</p>
                <DraftEditor
                  editorState={editorStateDetail}
                  setEditorState={(editorState) => {
                    handleEditorDetailChange(editorState);
                  }}
                  label='Deskripsi Diskusi'
                  error={formDetail.formState.errors.description?.message}
                />
              </div>
              <div className='flex gap-5'>
                <FormField
                  control={formDetail.control}
                  name='deadline'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Batas Diskusi</FormLabel>
                      <FormControl>
                        <div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant='outline'
                                className={cn(
                                  'w-full justify-start text-left font-normal',
                                  !date && 'text-muted-foreground',
                                )}
                              >
                                {/* <CalendarIcon className='mr-2 h-4 w-4' /> */}
                                {date ? (
                                  format(date, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-auto p-0'>
                              <Calendar
                                mode='single'
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                {...field}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formDetail.control}
                  name='diskusi_antarMahasiswa'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Diskusi antar Mahasiswa</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Diskusi antar Mahasiswa' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='online'>Online</SelectItem>
                          <SelectItem value='offline'>Offline</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={formDetail.control}
                name='sembunyikan_nilai_mahasiswa'
                render={({ field }) => (
                  <FormItem className='grid items-center gap-1.5 mb-5 w-1/2'>
                    <FormLabel>Sembunyikan Nilai Mahasiswa</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Sembunyikan Nilai Mahasiswa' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='online'>Online</SelectItem>
                        <SelectItem value='offline'>Offline</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className='flex w-full justify-end gap-5 px-5'>
                <Button variant='primaryOutline'>Kembali</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
                      {/* <CiCirclePlus className='w-[20px] h-[20px]' /> */}
                      <p className='leading-none'>Simpan Perubahan</p>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[425px] text-center p-12'>
                    <DialogHeader>
                      <DialogTitle className='text-center'>
                        Apakah Anda yakin informasi sudah sesuai ?
                      </DialogTitle>
                      <div className='py-3'>
                        <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
                      </div>
                      <DialogDescription className='text-center'>
                        Cek kembali informasi acara dengan benar.{' '}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='flex w-full justify-between'>
                      <DialogClose>
                        <Button variant='outline' className='w-full'>
                          Tinjau Ulang{' '}
                        </Button>
                      </DialogClose>
                      <DialogClose>
                        <Button
                          onClick={() => {
                            formDetail.handleSubmit(onSubmitDetail)();
                            // setActiveTab('detail');
                          }}
                          type='submit'
                          className='bg-primary-500 w-full'
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
  );
};
