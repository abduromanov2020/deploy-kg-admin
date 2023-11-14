import React, { FC } from 'react';

import Logo from '~/svg/Logo.svg';
const Sidebar: FC = () => {
  return (
    <div className='w-[280px] min-h-screen py-10 bg-gray-800'>
      <div className='pl-[30px] pb-[30px]'>
        <Logo className='w-[96px] h-full' />
      </div>
    </div>
  );
};

export default Sidebar;
