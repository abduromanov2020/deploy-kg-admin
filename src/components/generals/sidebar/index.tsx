import React, { FC } from 'react';

import Logo from '~/svg/Logo.svg';
const Sidebar: FC = () => {
  return (
    <div className='w-[280px] min-h-screen py-10 bg-sidebar'>
      <div className='pl-[30px] pb-[30px]'>
        <Logo className='w-[96px] h-full' />
      </div>
      <div className='flex gap-6 flex-col'>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-sm font-medium'>UTAMA</p>
          <div className='flex gap-[10px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
