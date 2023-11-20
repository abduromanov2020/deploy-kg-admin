import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { FaEdit, FaInfoCircle, FaPlusCircle } from 'react-icons/fa';

import { BreadCrumb } from '@/components/BreadCrumb';
import InputSubject from '@/components/inputsubject';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EditDataDosenModule = () => {
  const params = useParams();
  const { id } = params;

  const ConstantEditDosen = [
    {
      name: 'User Management Dosen',
      link: '/user-management/dosen',
    },
    {
      name: 'Detail Dosen',
      link: `/user-management/dosen/detail/${id}`,
    },
    {
      name: 'Edit Dosen',
      link: '',
    },
  ];
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const dataDummy = [
    {
      study_program: 'Kedokteran',
      id_major: '2001726',
      major: 'Kedokteran',
    },
    {
      study_program: 'Kedokteran',
      id_major: '2001726',
      major: 'Kedokteran',
    },
    {
      study_program: 'Kedokteran',
      id_major: '2001726',
      major: 'Kedokteran',
    },
  ];
  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantEditDosen} className='lg:px-6' />
      </div>
      <div className='bg-white rounded-t px-3 border-b-2'>
        <h1 className='font-semibold text-md py-4 '>
          Edit user Management Dosen: Raul
        </h1>
      </div>
      <div className='bg-white py-5 px-8 rounded-b font-semibold'>
        <div className='flex text-blue-500 place-items-center justify-start space-x-2'>
          <FaInfoCircle /> <h1>Informasi Dosen</h1>{' '}
          <div className='h-[1.5px] w-[150px] bg-black'></div>
          <h1 className='text-blue-500'>Mata Kuliah Ajar</h1>
        </div>
        <div className='grid grid-rows-3 pt-8 gap-5'>
          {dataDummy.map((item, i: number) => (
            <div key={i} className='bg-slate-50 rounded px-5 py-5'>
              <h1 className='text-lg'>Mata Kuliah Ajar {i + 1}</h1>
              <div className='flex space-x-5 pt-5'>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <Label htmlFor='id_major'>Program Studi*</Label>
                  <InputSubject defaultValue={item.major} />
                </div>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <Label htmlFor='id_major'>ID Mata Kuliah*</Label>
                  <Input type='text' id='id_major' placeholder='2001726' />
                </div>
                <div className='grid w-full max-w-sm items-center space-y-4'>
                  <Label htmlFor='major'>Mata Kuliah*</Label>
                  <Input type='text' id='text' placeholder='Kedokteran' />
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-between'>
            <div className='flex items-center space-x-2'>
              <Checkbox id='terms' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Saya menyatakan data dosen yang ditambahkan sudah benar
              </label>
            </div>
            <button className='flex place-items-center space-x-2 justify-end font-semibold text-blue-500 hover:bg-blue-500 px-4 py-2 hover:transition hover:text-white rounded-md'>
              <FaPlusCircle />
              <h1>Tambah Mata Kuliah ajar</h1>
            </button>
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
    </>
  );
};

export default EditDataDosenModule;
