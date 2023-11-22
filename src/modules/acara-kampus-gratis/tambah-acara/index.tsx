'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaInfoCircle } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { ValidationSchemaCoverEvent } from '@/lib/validation/acara-kampus-gratis';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { TCoverAcara } from '@/types/acara-kampus-gratis/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const TambahAcaraModule = () => {
  const [date, setDate] = React.useState<Date>();

  const BreadcrumbItems = [
    {
      name: 'Acara Kampus Gratis',
      link: '/acara-kampus-gratis',
    },
    {
      name: 'Tambah Acara Kampus',
      link: `/acara-kampus-gratis/tambah-acara`,
    },
  ];

  const defaultValues: Record<string, string> = {
    cover_title: '',
    cover_description: '<p></p>\n',
  };

  const form = useForm<TCoverAcara>({
    resolver: zodResolver(ValidationSchemaCoverEvent()),
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

    form.setValue('benefit', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  function onSubmit(data: TCoverAcara) {
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
          <span className='font-semibold '>Tambah Acara Kampus</span>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='account' className='w-full'>
            <TabsList className='flex gap-5 items-center'>
              <TabsTrigger value='cover' className='flex gap-2'>
                <FaInfoCircle />
                Cover Acara Kampus
              </TabsTrigger>
              <hr className='border-dark-600 w-20 border' />
              <TabsTrigger value='detail'>Detail Acara Kampus</TabsTrigger>
            </TabsList>
            <div className='mt-8'>
              <TabsContent value='cover'>
                {/* <form action=''>
                  <div className='grid grid-cols-2 w-full gap-5'>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='namaAcara'>Nama Acara*</Label>
                      <Input
                        type='text'
                        id='namaAcara'
                        placeholder='UI/UX Design untuk Pemula'
                      />
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='biaya'>Biaya*</Label>
                      <Input type='text' id='biaya' placeholder='50.000' />
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='date'>Tanggal Pelaksana*</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !date && 'text-muted-foreground',
                            )}
                          >
                            <CalendarIcon className='mr-2 h-4 w-4' />
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
                          />
                        </PopoverContent>
                      </Popover>{' '}
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='biaya'>Waktu Pelaksana*</Label>
                      <Input type='text' id='biaya' placeholder='50.000' />
                    </div>
                  </div>
                  <div className='my-5 grid w-full items-center gap-1.5'>
                    <Label htmlFor='manfaat'>Manfaat Acara*</Label>
                    <Input
                      type='text'
                      id='manfaat'
                      placeholder='Manfaat Acara'
                    />
                  </div>
                  <div className='grid w-full items-center gap-1.5'>
                    <Label htmlFor='thumbnail'>Unggah Thumbnail*</Label>
                    <Input id='thumbnail' type='file' />
                  </div>
                </form> */}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='bg-white flex flex-col gap-5 rounded-md pb-5 '
                  >
                    <div className='grid grid-cols-2 w-full gap-5'>
                      <FormField
                        control={form.control}
                        name='event_name'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Nama Acara*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='UI/UX Design untuk Pemula'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Biaya*</FormLabel>
                            <FormControl>
                              <Input placeholder='50.000' {...field} />
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
                            <FormLabel>Tanggal Pelaksana*</FormLabel>
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
                        control={form.control}
                        name='time'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Waktu Pelaksana*</FormLabel>
                            <FormControl>
                              <Input {...field} type='time' />
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
                      label='Manfaat Acara'
                      error={form.formState.errors.benefit?.message}
                    />
                    <FormField
                      control={form.control}
                      name='thumbnail'
                      render={({ field }) => (
                        <FormItem className='grid w-full items-center gap-1.5'>
                          <FormLabel>Thumbnail*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='file'
                              name='thumbnail'
                              value={undefined}
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                form.setValue('thumbnail', file as File);
                              }}
                              className='file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md '
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
              </TabsContent>
              <TabsContent value='detail'>
                Change your password here.
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
