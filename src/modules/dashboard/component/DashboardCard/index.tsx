import React from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';

export const DashboardCard = () => {
  return (
    <div className='bg-white p-5 rounded-md '>
      <div className='flex items-center gap-3 '>
        <div className='flex justify-center items-center bg-gray-300 p-2 rounded-sm'>
          <HiOutlineUserGroup size={24} className='text-secondary-500' />
        </div>
        <p className='font-bold text-lg'>Mahasiswa Aktif</p>
      </div>
      <div className='flex mt-3 items-end font-bold'>
        <p className=' text-xl'>10.876</p>
        <p className='text-sm text-neutral-400'>/15.878</p>
      </div>
    </div>
  );
};
