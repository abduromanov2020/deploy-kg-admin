'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Textarea } from '@/components/ui/textarea';

import { ITEMS } from './constant';

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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success('Form submitted!');
  }

  return (
    <>
      <Card className='mb-5'>
        <CardHeader>
          <BreadCrumb items={ITEMS} className='!p-0' />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='border-b-2'>
          <CardTitle>
            <div className='flex items-center'>
              <h2 className='text-xl font-semibold'>
                Edit Tugas 1 Mata Kuliah Manajemen Keuangan
              </h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='deskripsi'
                render={({ field }) => (
                  <FormItem className='grid w-full gap-1.5'>
                    <FormLabel>Deskripsi Tugas 1</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Silahkan baca dan kerjakan tugas pada modul berikut ini. Berikan tanggapan bukti nyata kemudian sebutkan dan berikan contoh poin terhadap fenomena tersebut.'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
              <FormField
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
              />
              <div className='flex justify-end gap-4'>
                <Button variant='primaryOutline'>Kembali</Button>
                <Button variant='primary' type='submit'>
                  <Image
                    src='/svg/edit.svg'
                    alt='edit'
                    width={20}
                    height={20}
                    className='mr-2'
                  />
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default EditTugasModule;
