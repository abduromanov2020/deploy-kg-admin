'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { ITEMSEDIT } from '@/modules/sekilas-ilmu/constants';

const FormSchema = z.object({
  article_title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  hashtag: z.string().min(2, {
    message: 'Hashtag must be at least 2 characters.',
  }),
  writer: z.string().min(2, {
    message: 'Penulis must be at least 2 characters.',
  }),
  created_at: z.string({
    required_error: 'Date is required.',
  }),
  file: z.string({
    required_error: 'A file is required.',
  }),
});

const EditArtikelModule = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      article_title: '',
      hashtag: '',
      writer: '',
      created_at: new Date().toLocaleDateString(),
      file: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data', data);
  }

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMSEDIT} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-sm'>Tambah Artikel</h3>
        </div>
        <div className='p-5'>
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='grid grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='article_title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Judul Artikel</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='hashtag'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hashtag</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='writer'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Penulis</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='created_at'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tanggal Unggah</FormLabel>
                          <FormControl>
                            <Input {...field} defaultValue={field.value || new Date().toLocaleDateString()} />
                          </FormControl>
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

export default EditArtikelModule;
