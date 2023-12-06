'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { CalendarIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
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
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { EditConfirmationModal } from '@/modules/studi-ku/tugas/components/EditConfirmationModal';

import { ITEMS } from './constant';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  deskripsi: z.string({
    required_error: 'A deskripsi is required.',
  }),
  file: z.string({
    required_error: 'A file is required.',
  }),
});

const EditTugasModule = () => {
  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorCoverChange = (editorState: EditorState) => {
    setEditorStateCover(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('deskripsi', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success('Form submitted!');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Edit Tugas : Tugas 1</span>
        </div>
        <div className='p-8'>
          {' '}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <div className='flex gap-4'>
                <FormField
                  control={form.control}
                  name='file'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Pertemuan</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='file'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Modul</FormLabel>
                      <FormControl>
                        <Input type='Modul' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DraftEditor
                editorState={editorStateCover}
                setEditorState={(editorState) => {
                  handleEditorCoverChange(editorState);
                }}
                label='Deskripsi Tugas*'
                error={form.formState.errors.deskripsi?.message}
              />
              <div className='flex gap-4'>
                <FormField
                  control={form.control}
                  name='dob'
                  render={({ field }) => (
                    <FormItem className='flex flex-col w-full '>
                      <FormLabel>Batas Pengumpulan</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className={cn(
                                'pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pilih Tanggal</span>
                              )}
                              <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
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
                <div className='grid w-full items-center gap-1.5'>
                  <Label>Terakhir Diubah</Label>
                  <Input
                    disabled
                    type='text'
                    placeholder='25/02/2023, 23:59 WIB'
                  />
                </div>
              </div>
              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='thumbnail'>Unggah Thumbnail*</Label>
                <UploadField
                  control={form.control}
                  // required
                  name='file'
                  accepted='.jpg, .png, .jpeg'
                  // label='Unggah Thumbnail*'
                  message={form?.formState?.errors?.file?.message?.toString()}
                  status={form?.formState?.errors?.file ? 'error' : 'none'}
                  variant='md'
                />
              </div>
              {/* <FormField
                control={form.control}
                name='file'
                render={({ field }) => (
                  <FormItem className='grid w-full items-center gap-1.5'>
                    <FormLabel>File Tugas</FormLabel>
                    <FormControl>
                      <Input type='file' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <div className='flex justify-end gap-4'>
                <Button variant='primaryOutline'>Kembali</Button>
                <EditConfirmationModal />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditTugasModule;
