import Link from 'next/link';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TambahAdminModule = () => {
  const ConstantEditDosen = [
    {
      name: 'User Management Admin',
      link: '/user-management/admin',
    },
    {
      name: 'Tambah Admin',
      link: ``,
    },
  ];
  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantEditDosen} className='lg:px-6' />
      </div>
      <div className='bg-white py-6 px-6 rounded-md relative'>
        <h1 className='font-semibold text-lg border-b-2 pb-3'>
          Tambah User Management Admin
        </h1>
        <form>
          <div className='pt-5 w-full'>
            <div className='grid grid-cols-3 gap-5'>
              <div className='grid w-full max-w-sm items-center space-y-4'>
                <Label htmlFor='id_mahasiswa'>ID Admin*</Label>
                <Input
                  type='text'
                  id='id_mahasiswa'
                  placeholder='#IDX1212'
                  defaultValue=''
                />
              </div>
              <div className='grid w-full max-w-sm items-center space-y-4'>
                <Label htmlFor='full_name'>Nama Lengkap Admin*</Label>
                <Input type='email' id='email' placeholder='Roberto' />
              </div>
              <div className='grid w-full max-w-sm items-center space-y-4'>
                <Label htmlFor='email'>Email*</Label>
                <Input
                  type='email'
                  id='email'
                  placeholder='aryo12356@gmail.com'
                />
              </div>
              <div className='grid w-full max-w-sm items-center space-y-4'>
                <Label htmlFor='faculty'>Nama Pengguna Akun*</Label>
                <Input type='text' id='name_user' placeholder='Test' />
              </div>
              <div className='grid w-full max-w-sm items-center space-y-4'>
                <Label htmlFor='major'>Program Studi*</Label>
                <Input type='email' id='email' placeholder='Bisnis Digital' />
              </div>
            </div>
            <div className='flex items-center space-x-3 pt-7'>
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
                  <Link href='/user-management/admin'>Kembali</Link>
                </div>
              </button>
              <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  Tambah Admin
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahAdminModule;
