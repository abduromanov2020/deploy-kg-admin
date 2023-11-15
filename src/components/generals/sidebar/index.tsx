import { Accordion, AccordionItem } from '@nextui-org/react';
import React, { FC } from 'react';

import Logo from '~/svg/Logo.svg';
const Sidebar: FC = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className='w-[280px] min-h-screen py-10 bg-sidebar'>
      <div className='pl-[30px] pb-[30px]'>
        <Logo className='w-[96px] h-full' />
      </div>
      <div className='flex gap-6 flex-col'>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-sm font-medium text-white'>UTAMA</p>
          <div className='flex gap-[10px]'>
            <Accordion>
              <AccordionItem
                key='1'
                aria-label='Accordion 1'
                title='Accordion 1'
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key='2'
                aria-label='Accordion 2'
                title='Accordion 2'
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key='3'
                aria-label='Accordion 3'
                title='Accordion 3'
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
