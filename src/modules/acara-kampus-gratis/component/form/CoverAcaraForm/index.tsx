'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';

import { cn } from '@/lib/utils';
import { ValidationSchemaCoverEvent } from '@/lib/validation/acara-kampus-gratis';

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

import {
  activeTabAtom,
  coverFilledAtom,
} from '@/recoils/acara-kampus-gratis/atom';

import { TCoverAcara } from '@/types/acara-kampus-gratis/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const CoverAcaraForm = () => {
  const [date, setDate] = React.useState<Date>();
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);
  const [isCoverFilled, setCoverFilled] = useRecoilState(coverFilledAtom);

  const form = useForm<TCoverAcara>({
    resolver: zodResolver(ValidationSchemaCoverEvent()),
  });

  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorCoverChange = (editorState: EditorState) => {
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
    date &&
      form.setValue('date', date.toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
  }, [date]);

  function onSubmit(data: TCoverAcara) {
    console.log(data);
    setCoverFilled(true);
    toast.success('Form submitted!');
    setActiveTab('detail');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-white flex flex-col gap-5 rounded-md pb-5 '
      >
        <div className='grid grid-cols-2 w-full gap-5 items-start'>
          <FormField
            control={form.control}
            name='event_name'
            render={({ field }) => (
              <FormItem className='grid w-full items-center gap-1.5'>
                <FormLabel>Nama Acara*</FormLabel>
                <FormControl>
                  <Input placeholder='UI/UX Design untuk Pemula' {...field} />
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
            handleEditorCoverChange(editorState);
          }}
          label='Manfaat Acara*'
          error={form.formState.errors.benefit?.message}
        />
        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='thumbnail'>Unggah Thumbnail*</Label>
          <UploadField
            control={form.control}
            // required
            name='thumbnail'
            accepted='.jpg, .png, .jpeg'
            // label='Unggah Thumbnail*'
            message={form?.formState?.errors?.thumbnail?.message?.toString()}
            status={form?.formState?.errors?.thumbnail ? 'error' : 'none'}
            variant='md'
          />
        </div>{' '}
        <div className='flex w-full justify-end gap-5 px-5'>
          <Button variant='primaryOutline'>Kembali</Button>

          <Button
            variant='primary'
            type='submit'
            className='bg-primary-500 text-white px-4 py-2 rounded-md'
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </Form>
  );
};
