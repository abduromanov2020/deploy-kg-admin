import { Input } from '@nextui-org/react';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export const VerifikasiRencanaStudiModule = () => {
  return (
    <div className='bg-dark-100 rounded-md'>
      <div className='border-b border-dark-200 p-4'>
        <span className='font-semibold '>Verifikasi Rencana Studi</span>
      </div>
      <div>
        <div>
          <Input
            type='email'
            label='Email'
            placeholder='you@example.com'
            labelPlacement='outside'
            startContent={
              <IoSearchOutline className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
            }
          />
        </div>
      </div>
    </div>
  );
};
