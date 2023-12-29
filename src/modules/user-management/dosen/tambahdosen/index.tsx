import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEdit, FaInfoCircle, FaPlusCircle } from 'react-icons/fa';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { EditorComponent } from '@/modules/user-management/dosen/editdata/component/card';
import { EditConfirmModal } from '@/modules/user-management/dosen/editdata/component/modal';
const AddTeacherModule = () => {
  const constantAddTeacher = [
    {
      name: 'User Management',
      link: '/user-management/dosen',
    },
    {
      name: 'Tambah Dosen',
      link: '/user-management/dosen/addteacher',
    },
  ];

  const [lookup, setLookup] = React.useState(false);
  const [lookup2, setLookup2] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleLookUp = () => {
    setLookup(true);
    setLookup2(false);
  };
  const handleLookUp2 = () => {
    setLookup(false);
    setLookup2(true);
  };
  const [inputs, setInputs] = useState<
    Array<{
      input1: string;
      input2: string;
    }>
  >([
    {
      input1: '',
      input2: '',
    },
  ]);
  const [jumlahModul, setJumlahModul] = useState(1);
  const tambahModul = () => {
    setJumlahModul(jumlahModul + 1);
    setInputs([
      ...inputs,
      {
        input1: '',
        input2: '',
      },
    ]);
  };

  const handleInput2 = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newInputs = [...inputs];
    newInputs[index].input2 = e.target.value;
    setInputs(newInputs);
  };

  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={constantAddTeacher} className='lg:px-6' />
      </div>
      <div className='bg-white py-5 px-8 rounded-b font-semibold'>
        <div className='flex text-blue-500 place-items-center justify-start space-x-2'>
          <FaInfoCircle /> <h1>Informasi Dosen</h1>{' '}
          <div className='h-[1.5px] w-[150px] bg-black'></div>
          <h1 className={!lookup ? 'text-slate-500' : 'text-blue-500'}>
            Mata Kuliah Ajar
          </h1>
        </div>
        <div className='pt-8'>
          <div>
            {lookup2 && (
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div className='grid w-full  items-center space-y-4'>
                    <Label htmlFor='full_name'>Nama Lengkap Mahasiswa*</Label>
                    <Input type='text' id='full_nam' placeholder='Roberto' />
                  </div>
                  <div className='grid w-full  items-center space-y-4'>
                    <Label htmlFor='email'>Email*</Label>
                    <Input
                      type='email'
                      id='email'
                      placeholder='aryo12356@gmail.com'
                    />
                  </div>
                  <div className='grid w-full  items-center space-y-4'>
                    <Label htmlFor='faculty'>Fakultas</Label>
                    <Input
                      type='text'
                      id='faculty'
                      placeholder='Teknik Informatika'
                    />
                  </div>
                  <div className='grid w-full  items-center space-y-4'>
                    <Label htmlFor='major'>Program Studi*</Label>
                    <Input
                      type='text'
                      id='major'
                      placeholder='Bisnis Digital'
                    />
                  </div>
                </div>
                <div>
                  <div className=' w-full items-center space-y-2 pt-2'>
                    <Label htmlFor='eacher_foto'>Pasfoto Dosen*</Label>
                    <Input type='file' id='teacher_foto' placeholder='Uchiha' />
                  </div>
                </div>
                <div className='flex space-x-5 justify-end pt-8'>
                  <button
                    onClick={handleBack}
                    className='px-6 py-3 shadow-md border text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'
                  >
                    <div className='flex place-items-center gap-2'>Kembali</div>
                  </button>
                  <button
                    onClick={handleLookUp}
                    className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'
                  >
                    <div className='flex place-items-center gap-2'>
                      Selanjutnya
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
          {lookup && (
            <div className='space-y-5'>
              <div className='space-y-5'>
                {inputs.map((input, index) => (
                  <div key={index}>
                    <EditorComponent
                      key={index}
                      titleMajor={`Mata Kuliah ${index + 1}`}
                      input1Props={{
                        title: `Mata Kuliah `,
                        value: input.input2,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInput2(e, index),
                        placeholder: `Kedokteran`,
                        styleInput:
                          'border-2 mt-3 border-dark-300 px-4 py-[5px] rounded-md ',
                        styleTitle: 'text-dark',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className='flex justify-between pt-5'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' onClick={() => setConfirm(!confirm)} />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Saya menyatakan data dosen yang ditambahkan sudah benar
                  </label>
                </div>
                <button
                  onClick={tambahModul}
                  className='flex place-items-center space-x-2 justify-end font-semibold text-blue-500 hover:bg-blue-500 px-4 py-2 hover:transition hover:text-white rounded-md'
                >
                  <FaPlusCircle />
                  <h1>Tambah Mata Kuliah ajar</h1>
                </button>
              </div>
              <div className='flex pt-6 space-x-5 justify-end'>
                <button
                  onClick={handleLookUp2}
                  className='px-6 py-3 shadow-md border text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'
                >
                  <div className='flex place-items-center gap-2'>Kembali</div>
                </button>

                {confirm ? (
                  <EditConfirmModal />
                ) : (
                  <button
                    disabled
                    className='px-6 py-3 shadow-md text-slate-500 rounded-md  bg-slate-300 '
                  >
                    <div className='flex place-items-center gap-2'>
                      <FaEdit /> Edit Data
                    </div>
                  </button>
                )}
                {/* <EditConfirmModal /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddTeacherModule;
