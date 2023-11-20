import React, { FC } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Data {
  title: string;
  icon: React.ReactNode;
}

interface AccordingModulProps {
  title: string;
  className?: string;
  data: Data[];
}

export const AccordingModul: FC<AccordingModulProps> = ({
  className,
  title,
  data,
}) => {
  return (
    <div className={`${className}`}>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-2 rounded-md '>
          <AccordionTrigger className='data-[state=open]:text-white px-5 data-[state=open]:rounded-t-md data-[state=closed]:border-2 data-[state=closed]:rounded-md data-[state=open]:bg-primary-500'>
            {title}
          </AccordionTrigger>
          {data.map((item, index) => {
            return (
              <AccordionContent
                className='flex justify-start items-center p-2'
                key={index}
              >
                <button className='w-full flex gap-2 justify-start items-center'>
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              </AccordionContent>
            );
          })}
          <AccordionContent className='flex border-t-2 p-2 justify-end items-center '>
            <div className='w-full flex gap-5 justify-end items-center text-white '>
              <button className='bg-green-500 rounded-md px-3 py-2'>
                Buka Pertemuan
              </button>
              <button className='bg-primary-500 rounded-md px-3 py-2'>
                Tambahkan Sesi
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
