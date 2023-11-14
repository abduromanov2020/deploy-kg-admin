import React, { FC, ReactNode } from 'react';

import Navbar from '@/components/generals/navbar';
import Sidebar from '@/components/generals/sidebar';

const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-[calc(100%-280px)]'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
