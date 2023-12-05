import { Edit } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  ItemDetailFile,
  ItemDetailModul,
  ItemDetailModul2,
} from '@/modules/studi-ku/modul/detail';

interface Data {
  title: string;
  icon: React.ReactNode;
  link: string;
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
        <AccordionItem value='item-1' className='border rounded-md'>
          <AccordionTrigger className='data-[state=open]:text-white px-5 data-[state=open]:rounded-t-md  data-[state=closed]:rounded-md data-[state=open]:bg-primary-500  data-[state=open]:shadow-md no-underline'>
            {title}
          </AccordionTrigger>
          <div className='flex flex-col gap-y-3 '>
            {data.map((item, index) => {
              return (
                <AccordionContent
                  className='flex justify-start items-center p-2 px-5'
                  key={index}
                >
                  <Link
                    href={item.link}
                    className='w-full flex gap-2 justify-start items-center'
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </AccordionContent>
              );
            })}
          </div>
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

type IntroductionData = {
  introduction: string;
  description: string;
  video_link: string;
  document_link?: string;
};

type AccordionModulIntroductionProps = {
  data: IntroductionData;
  title: string;
  className?: string;
};

export const AccourdionModulIntroduction: FC<
  AccordionModulIntroductionProps
> = ({ data, title, className }) => {
  return (
    <div className={`${className}`}>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border rounded-md'>
          <AccordionTrigger className='data-[state=open]:text-white px-5 data-[state=open]:rounded-t-md  data-[state=closed]:rounded-md data-[state=open]:bg-primary-500  data-[state=open]:shadow-md no-underline'>
            {title}
          </AccordionTrigger>
          <AccordionContent className='flex border-t-2 py-2 justify-end items-center '>
            <div className='flex flex-col '>
              <ItemDetailModul
                content={data.introduction}
                label='Pendahuluan'
              />
              <ItemDetailModul2
                content={data.description}
                // variant='dark'
                variant='dark'
                label='Deskripsi Pendahuluan'
              />
              <ItemDetailFile
                content={data.video_link}
                label='Video Pendahuluan'
                link={data.video_link}
                type='video'
                variant='light'
              />
              <ItemDetailFile
                content={data?.document_link || ''}
                label='Dokumen Pendahuluan'
                link={data?.document_link || ''}
                type='document'
                variant='dark'
              />
            </div>
          </AccordionContent>
          <AccordionContent className='flex border-t-2 p-2 justify-end items-center '>
            <div className='w-full flex gap-5 justify-end items-center text-white '>
              <button className='bg-primary-500 rounded-md px-3 py-2 flex gap-2'>
                <Edit /> Edit Informasi
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
