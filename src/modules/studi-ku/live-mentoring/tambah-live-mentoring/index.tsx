'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { ValidationSchemaEventData } from '@/lib/validation/studi-ku/live-mentoring';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Input } from '@/components/input';
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const TambahLiveMentoringModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Live Mentoring',
      link: `/studi-ku/live-mentoring`,
    },
    {
      name: 'Tambah Live Mentoring',
      link: `/studi-ku/live-mentoring/tambah-live-mentoring`,
    },
  ];

  const [editorStateDetail, setEditorStateDetail] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorDetailChange = (editorState: EditorState) => {
    setEditorStateDetail(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('description', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const form = useForm<z.infer<typeof ValidationSchemaEventData>>({
    resolver: zodResolver(ValidationSchemaEventData),
  });

  const onSubmit = (data: z.infer<typeof ValidationSchemaEventData>) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4 flex items-center justify-between'>
          <span className='font-semibold '>Tambah Live Mentoring</span>
        </div>
        <div className='p-8'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='bg-white flex flex-col gap-5 rounded-md pb-5 '
            >
              <FormField
                control={form.control}
                name='jenis_mentoring'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5 mb-5'>
                    <FormLabel>Jenis Mentoring*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Jenis Mentoring' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='class_mentoring'>
                          Class Mentoring
                        </SelectItem>
                        <SelectItem value='group_mentoring'>
                          Group Mentoring
                        </SelectItem>
                        <SelectItem value='individual_mentoring'>
                          Individual Mentoring
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className='grid grid-cols-2 w-full gap-5 items-start'>
                <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Judul Mentoring</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Memahami Tumbuh Kembang Blockchain'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='session'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Sesi Mentoring</FormLabel>
                      <FormControl>
                        <Input placeholder='Sesi 1' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='mentor_name'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Nama Mentor</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Erif Michael Ramadansyah'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='meeting_platform'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Platform Mentoring</FormLabel>
                      <FormControl>
                        <Input placeholder='Zoom Meeting' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='date'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className={cn(
                                'w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                              {/* <CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> */}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='time'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Waktu Pelaksanaan</FormLabel>
                      <FormControl>
                        <Input {...field} type='time' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='link'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Link Mentoring</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='https://zoom.google.com/nyj-sdff-ezp'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='record_link'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Rekaman Mentoring</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Masukkan Link Rekaman Mentoring disini'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <FormDescription className='text-red-800'>
                        Isi bila mentoring selesai dilaksanakan.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <div className=''>
                <DraftEditor
                  editorState={editorStateDetail}
                  setEditorState={(editorState) => {
                    handleEditorDetailChange(editorState);
                  }}
                  label='Deskripsi Mentoring'
                  error={form.formState.errors.description?.message}
                />
              </div>

              <div className='flex w-full justify-end gap-5 px-5'>
                <Button variant='primaryOutline'>Kembali</Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
                      <CiCirclePlus className='w-[20px] h-[20px]' />
                      <p className='leading-none'>Tambah Sesi</p>
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
                            form.handleSubmit(onSubmit)();
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
