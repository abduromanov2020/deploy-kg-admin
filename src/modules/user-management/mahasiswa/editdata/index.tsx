import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { z } from 'zod';

import { EditMahasiswaUserValidationSchema } from '@/lib/validation/user-management';
import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Checkbox } from '@/components/ui/checkbox';
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

const EditDataMahasiwaModule = () => {
  const ConstantEditMahasiswa = [
    {
      name: 'User Management',
      link: '',
    },
    {
      name: 'Mahasiswa',
      link: '/user-management/mahasiswa',
    },
    {
      name: 'Edit Mahasiswa',
      link: '',
    },
  ];
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useUserById(id);
  console.log(data);

  const form = useForm<z.infer<typeof EditMahasiswaUserValidationSchema>>({
    resolver: zodResolver(EditMahasiswaUserValidationSchema),
  });

  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantEditMahasiswa} className='lg:px-6' />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='bg-white py-6 px-6 rounded-md relative'>
          <h1 className='font-semibold text-lg border-b-2 pb-3'>
            Edit User Management Mahasiswa : {data?.data?.full_name}
          </h1>
          <Form {...form}>
            <form>
              <div className='pt-5 w-full'>
                <div className='grid grid-cols-3 gap-5'>
                  <div className='grid w-full max-w-sm items-center space-y-4'>
                    <FormField
                      control={form.control}
                      name='id_mahasiswa'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>ID Mahasiswa*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='bg-slate-300'
                              defaultValue={data?.data?.id}
                              disabled
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center space-y-4'>
                    <FormField
                      control={form.control}
                      name='full_name'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Nama Lengkap Mahasiswa*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              defaultValue={data?.data?.full_name}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center space-y-4'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              defaultValue={data?.data?.email}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center space-y-4'>
                    <FormField
                      control={form.control}
                      name='faculty'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Fakultas*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='bg-slate-300'
                              defaultValue={
                                data?.data?.faculty ?? 'Belum Ada Fakultas'
                              }
                              disabled
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center space-y-4'>
                    <FormField
                      control={form.control}
                      name='study_program'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Program Studi*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='bg-slate-300'
                              defaultValue={
                                data?.data?.major ?? 'Belum Ada Program Studi'
                              }
                              disabled
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <FormField
                      control={form.control}
                      name='lecturer'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Dosen Pembimbing*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              defaultValue={
                                data?.data?.lecturer ??
                                'Belum Ada Dosen Pembimbing'
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <FormField
                      control={form.control}
                      name='status'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Status*</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              defaultValue={data?.data?.status}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor='status'>PasFoto*</Label>
                    <Input
                      type='file'
                      id='file'
                      placeholder='Tidak Aktif'
                      className=' text-white'
                    />
                  </div>
                </div>
                <div className='space-y-5 pt-2'>
                  <p className='text-slate-600'>
                    Pastikan Informasi sudah benar!
                  </p>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms' />
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
                        <Link href={`/user-management/mahasiswa/detail/${id}`}>
                          Kembali
                        </Link>
                      </div>
                    </button>
                    <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
                      <div className='flex place-items-center gap-2'>
                        <FaEdit /> Edit Data
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default EditDataMahasiwaModule;
