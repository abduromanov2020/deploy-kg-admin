'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { FC, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';

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
  CoverDataAtom,
  coverFilledAtom,
} from '@/recoils/acara-kampus-gratis/atom';

import { TEventItem } from '@/types/acara-kampus-gratis/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const CoverAcaraForm: FC<{ type: string; data?: TEventItem }> = ({
  type,
  data,
}) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);
  const [isCoverFilled, setCoverFilled] = useRecoilState(coverFilledAtom);
  const [coverData, setCoverData] = useRecoilState(CoverDataAtom);

  const form = useForm<z.infer<typeof ValidationSchemaCoverEvent>>({
    resolver: zodResolver(ValidationSchemaCoverEvent),
    defaultValues: {
      name: '',
      price: '',
      date: '',
      thumbnail: null,
    },
  });

  useEffect(() => {
    date &&
      form.setValue('date', date.toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
  }, [date]);

  useEffect(() => {
    if (data) {
      form.setValue('name', data.name);
      form.setValue('price', data.price.toString());
      const time = format(new Date(data.date_start), 'HH:mm');
      form.setValue('time', time);

      if (data.date_start && data.date_end) {
        setDate({
          from: new Date(data.date_start),
          to: new Date(data.date_end),
        });
      }
    }
  }, [data]);

  const onSubmit = (data: z.infer<typeof ValidationSchemaCoverEvent>) => {
    const [hours, minutes] = data.time.split(':').map(Number);

    const dateStart = date?.from ? addDays(new Date(date.from), 0) : null;
    const dateEnd = date?.to ? addDays(new Date(date.to), 0) : null;

    if (dateStart) {
      dateStart.setHours(hours);
      dateStart.setMinutes(minutes);
    }

    if (dateEnd) {
      dateEnd.setHours(hours);
      dateEnd.setMinutes(minutes);
    }

    setCoverData((prevData) => ({
      ...prevData,
      name: data.name,
      price: data.price.toString(),
      date_start: dateStart?.toISOString() || '',
      date_end: dateEnd?.toISOString() || '',
      thumbnail: data.thumbnail,
    }));
    setCoverFilled(true);
    // toast.success('Form submitted!');
    setActiveTab('detail');
  };
  // console.log(coverData);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-white flex flex-col gap-5 rounded-md pb-5 '
      >
        <div className='grid grid-cols-2 w-full gap-5 items-start'>
          <FormField
            control={form.control}
            name='name'
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
                  <div className='grid gap-2'>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id='date'
                          variant='outline'
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !date && 'text-muted-foreground',
                          )}
                        >
                          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                          {date?.from ? (
                            date.to ? (
                              <>
                                {format(date.from, 'LLL dd, y')} -{' '}
                                {format(date.to, 'LLL dd, y')}
                              </>
                            ) : (
                              format(date.from, 'LLL dd, y')
                            )
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          initialFocus
                          mode='range'
                          defaultMonth={date?.from}
                          selected={date}
                          onSelect={setDate}
                          numberOfMonths={2}
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
                  <Input {...field} type='time' placeholder='test' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <DraftEditor
          editorState={editorStateCover}
          setEditorState={(editorState) => {
            handleEditorCoverChange(editorState);
          }}
          label='Manfaat Acara*'
          error={form.formState.errors.benefit?.message}
        /> */}

        {type === 'edit' && data ? (
          <div>
            <p className='text-sm font-semibold mb-3'>Cover</p>
            <Image
              alt={data.thumbnail_id}
              src={data.thumbnail}
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto', maxWidth: '250px' }}
              sizes='100vh'
            />
            <div className='grid w-full items-center gap-1.5 mt-5'>
              <Label htmlFor='thumbnail'>Unggah Thumbnail Baru</Label>

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
            </div>
          </div>
        ) : (
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
          </div>
        )}

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
