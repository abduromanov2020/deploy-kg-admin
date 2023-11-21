import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Checkbox } from '@/components/ui/checkbox';
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
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useUserById(id);

  const handleBack = () => {
    router.back();
  };
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
          <form>
            <div className='pt-5 w-full'>
              <div className='grid grid-cols-3 gap-5'>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <Label htmlFor='id_mahasiswa'>ID Mahasiswa*</Label>
                  <Input
                    type='text'
                    id='id_mahasiswa'
                    placeholder='#IDX1212'
                    defaultValue={data?.data?.id}
                  />
                </div>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <Label htmlFor='full_name'>Nama Lengkap Mahasiswa*</Label>
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
                  <Label htmlFor='faculty'>Fakultas</Label>
                  <Input
                    type='email'
                    id='email'
                    placeholder='Teknik Informatika'
                  />
                </div>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <Label htmlFor='major'>Program Studi*</Label>
                  <Input type='email' id='email' placeholder='Bisnis Digital' />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='teacher'>Dosen Pembimbing*</Label>
                  <Input type='email' id='email' placeholder='Uchiha' />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='status'>Status Kuliah*</Label>
                  <Input type='email' id='email' placeholder='Tidak Aktif' />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='status'>Status Kuliah*</Label>
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
                  <button
                    onClick={handleBack}
                    className='px-6 py-3 shadow-md border text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'
                  >
                    <div className='flex place-items-center gap-2'>Kembali</div>
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
        </div>
      )}
    </>
  );
};

export default EditDataMahasiwaModule;
