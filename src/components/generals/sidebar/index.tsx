import { Accordion, AccordionItem } from '@nextui-org/react';
import { MonitorCheck } from 'lucide-react';
import React, { FC } from 'react';

import Dashboard from '~/svg/dashboard.svg';
import Logo from '~/svg/Logo.svg';

const Sidebar: FC = () => {
  const itemClasses = {
    base: 'py-0 w-full',
    title: 'font-normal text-medium text-white',
    trigger:
      'px-2 py-0 data-[hover=true]:bg- rounded-lg h-14 flex items-center',
    indicator: 'text-small',
    content: 'text-small px-2',
  };
  return (
    <div className='w-[280px] min-h-screen py-10 bg-sidebar'>
      <div className='pl-[35px] pb-[30px]'>
        <Logo className='w-[96px] h-full' />
      </div>
      <div className='flex gap-6 flex-col'>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-sm font-medium text-white pl-[35px] '>UTAMA</p>
          <div className='flex gap-[10px] pl-[35px]'>
            <Dashboard className='w-6 h-6' />
            <p className='text-medium font-medium text-white'>Dashboard</p>
          </div>
          <Accordion
            showDivider={false}
            className='p-2 flex flex-col gap-1 w-full max-w-[300px]'
            variant='shadow'
            itemClasses={itemClasses}
          >
            <AccordionItem
              key='1'
              aria-label='Connected devices'
              startContent={
                <MonitorCheck className='text-primary text-blue-500' />
              }
              subtitle={
                <p className='flex'>
                  2 issues to <p className='text-primary ml-1'>fix now</p>
                </p>
              }
              title='Connected devices'
            >
              Halo
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
