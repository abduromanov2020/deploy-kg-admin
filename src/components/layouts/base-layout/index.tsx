'use client';

import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

import Navbar from '@/components/generals/navbar';
import Sidebar from '@/components/generals/sidebar';

const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  if (
    pathname === '/auth/login' ||
    pathname === '/auth/register' ||
    pathname === '/'
  ) {
    return <>{children}</>;
  } else {
    return (
      <div className='flex'>
        <Sidebar />
        <div className='w-[calc(100%-300px)]'>
          <Navbar />
          <div className='bg-background px-16 py-10 min-w-[calc(100%-280px)] min-h-[calc(100%-65px)]'>
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default BaseLayout;
