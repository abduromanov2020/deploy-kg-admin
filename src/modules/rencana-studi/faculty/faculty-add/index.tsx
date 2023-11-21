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

const FormSchema = z.object({
  faculty_name: z.string().min(2, {
    message: 'Faculty must be at least 2 characters.',
  }),
  head_of_faculty: z.string().min(2, {
    message: 'Head of faculty must be at least 2 characters.',
  }),
  major_count: z.string().min(0, {
    message: 'Major count must be at least 0.',
  }),
  file: z.string({
    required_error: 'A file is required.',
  }),
});

export const AddFacultyModule = () => {
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
      file: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data', data);
  }

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
          <div className='flex text-blue-500 place-items-center justify-center space-x-2'>
            <FaInfoCircle /> <h1>Info Fakultas</h1>{' '}
            <div className='h-[1.5px] w-[150px] bg-black'></div>
            <h1 className='text-blue-500'>Info Program Studi</h1>
          </div>
          <div className='my-8 w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='grid grid-cols-3 gap-6'>
                    <FormField
                      control={form.control}
                      name='faculty_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Fakultas</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='head_of_faculty'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kepala Fakultas</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='major_count'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah Prodi</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='my-8'>
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
                  </div>
                  <Button type='submit'>Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
