import React, { FC } from 'react';

import Dashboard from '~/svg/dashboard.svg';
import Logo from '~/svg/Logo.svg';

const Sidebar: FC = () => {
  // const itemClasses = {
  //   base: 'py-0 w-full',
  //   title: 'font-normal text-medium text-blue-500 pl-[20px]',
  //   trigger: ' py-0 data-[hover=true]:bg-blue-100 rounded-lg flex items-center',
  //   indicator: 'text-small',
  //   content: 'text-small py-0 ',
  // };
  return (
    <div className='w-[280px] min-h-screen py-10 bg-sidebar'>
      <div className='pl-[35px] pb-[30px]'>
        <Logo className='w-[96px] h-full' />
      </div>
      <div className='flex gap-6 flex-col'>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-sm font-medium text-white pl-[35px] '>UTAMA</p>
          <div className='flex gap-[10px]  py-[10px] pl-[35px]'>
            <Dashboard className='w-6 h-6' />
            <p className='text-medium font-medium text-white'>Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
