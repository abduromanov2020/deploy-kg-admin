'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddModuleValidationSchema } from '@/lib/validation/studi-ku/module';
import { useAddModule } from '@/hooks/studi-ku/modul/hook';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Separator } from '@/components/ui/separator';

import { TAddModulePayload } from '@/types/studi-ku/modul';

const TambahAdminModule = () => {
  // const ConstantEditDosen = [
  //   {
  //     name: 'User Management Admin',
  //     link: '/user-management/admin',
  //   },
  //   {
  //     name: 'Tambah Admin',
  //     link: ``,
  //   },
  // ];subjectGetById);
  const searchParams = useSearchParams();

  const subject_id = searchParams.get('subject_id') ?? '';
  const session_id = searchParams.get('session_id') ?? '';

  const { mutate } = useAddModule(subject_id, session_id);
  const form = useForm<z.infer<typeof AddModuleValidationSchema>>({
    resolver: zodResolver(AddModuleValidationSchema),
  });

  const onSubmit = (data: z.infer<typeof AddModuleValidationSchema>) => {
    try {
      const payload: TAddModulePayload = {
        title: data.title,
        description: data.description,
        duration: data.duration,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Form submitted!');
            router.push(
              `/studi-ku/modul?subject_id=${subject_id}&session_id=${session_id}`,
            );
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Admin!');
          },
        },
      );
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };
  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };
  const router = useRouter();
  const onSubmitDialog = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <>
      <div className='bg-white py-6 px-6 rounded-md relative'>
        <h1 className='font-semibold text-lg border-b-2 pb-3'>Tambah Modul</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='pt-5 w-full'>
              <div className='grid grid-cols-2 gap-5'>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Judul*</FormLabel>
                        <FormControl>
                          <Input placeholder='Masukkan Judul*' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Description*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Description'
                            type='description'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='duration'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Duration*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Duration'
                            type='number'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className='flex items-center space-x-3 pt-7'>
                <Checkbox id='terms' onClick={handleLookUp} />
                <label
                  htmlFor='terms'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Saya menyatakan data yang dirubah sudah benar
                </label>
              </div>
              <div className='flex space-x-5 justify-end'>
                <button className='px-6 py-3 shadow-md border text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
                  <div className='flex place-items-center gap-2'>
                    <Link href='/user-management/admin'>Kembali</Link>
                  </div>
                </button>
                {!isChecked ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
                        <div className='flex place-items-center gap-2'>
                          Tambahkan Admin
                        </div>
                      </button>
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
                        <DialogClose asChild>
                          <Button variant='outline' className='w-full'>
                            Tinjau Ulang
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button
                            onClick={onSubmitDialog}
                            className='bg-primary-500 w-full'
                          >
                            Selesai
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <button
                    disabled
                    className='px-6 py-3 shadow-md text-slate-400 bg-slate-300 rounded-md '
                  >
                    <div className='flex place-items-center gap-2'>
                      Tambahkan Admin
                    </div>
                  </button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default TambahAdminModule;
