import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { EditAdminUserValidationSchema } from '@/lib/validation/user-management';
import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
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

const EditDataAdminModule = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useUserById(id);
  console.log(data);

  const ConstantEditAdmin = [
    {
      name: 'User Management',
      link: '',
    },
    {
      name: 'Detail Admin',
      link: `/user-management/admin/detail/${id}`,
    },
    {
      name: 'Edit Admin',
      link: '',
    },
  ];
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };

  const form = useForm<z.infer<typeof EditAdminUserValidationSchema>>({
    resolver: zodResolver(EditAdminUserValidationSchema),
    defaultValues: {
      id_admin: '1',
      full_name: '2',
      email: '3',
      user_name: '4',
      status: '5',
    },
  });
  const onSubmit = (data: z.infer<typeof EditAdminUserValidationSchema>) => {
    console.log(data);
    toast.success('Form submitted!');
  };
  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantEditAdmin} className='lg:px-6' />
      </div>
      <div className='bg-white py-6 px-6 rounded-md relative'>
        <h1 className='font-semibold text-lg border-b-2 pb-3'>
          Edit User Management Mahasiswa : Admin
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='pt-5 w-full'>
              <div className='grid grid-cols-3 gap-5'>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='id_admin'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>ID Admin*</FormLabel>
                        <FormControl>
                          <Input placeholder='ID Admin' {...field} />
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
                        <FormLabel>Nama Lengkap Admin*</FormLabel>
                        <FormControl>
                          <Input placeholder='Nama Lengkap Admin*' {...field} />
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
                          <Input placeholder='Email' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <FormField
                    control={form.control}
                    name='user_name'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Nama Pengguna Akun*</FormLabel>
                        <FormControl>
                          <Input placeholder='Nama Pengguna Akun' {...field} />
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
                        <FormLabel>Status Admin*</FormLabel>
                        <FormControl>
                          <Input placeholder='Status*' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className='flex items-center space-x-2 pt-4'>
                <Checkbox id='terms' onClick={handleLookUp} />
                <label
                  htmlFor='terms'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Saya menyatakan data yang dirubah sudah benar
                </label>
              </div>
              <div className='space-y-5 pt-2'>
                <div className='flex space-x-5 justify-end'>
                  <button
                    onClick={handleBack}
                    type='button'
                    className='px-6 py-3 shadow-md border text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'
                  >
                    <div className='flex place-items-center gap-2'>Kembali</div>
                  </button>
                  {!isChecked ? (
                    <button
                      type='submit'
                      className='px-6 py-2 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'
                    >
                      <div className='flex place-items-center gap-2'>
                        Simpan
                      </div>
                    </button>
                  ) : (
                    <button
                      disabled
                      type='submit'
                      className='px-6 py-3 shadow-md text-slate-400 bg-slate-300 rounded-md'
                    >
                      <div className='flex place-items-center gap-2'>
                        Simpan
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default EditDataAdminModule;
