import React, { FC, ReactNode } from 'react';

import Navbar from '@/components/generals/navbar';
import Sidebar from '@/components/generals/sidebar';

const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-[calc(100%-280px)]'>
        <Navbar />
        <div className='bg-background px-16 py-10 min-w-[calc(100%-280px)] min-h-[calc(100%-65px)]'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
