import { Edit, PlayCircleIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaFileAlt } from 'react-icons/fa';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
          <AccordionContent className='w-full'>
            <Table className='w-full border border-gray-200'>
              <TableHeader></TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='lg:min-w-[350px]'>
                    Pendahuluan
                  </TableCell>
                  <TableCell>{data.introduction}</TableCell>
                </TableRow>
                <TableRow className='bg-dark-200'>
                  <TableCell className='lg:min-w-[350px]'>
                    Deskripsi Pendahuluan
                  </TableCell>
                  <TableCell>{data.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='lg:min-w-[350px]'>
                    Video Pendahuluan
                  </TableCell>
                  <TableCell>
                    <div className='flex flex-col w-[350px] overflow-hidden text-ellipsis'>
                      <p className='rounded-t-md shadow-md text-sm bg-white px-4 py-2 w-full'>
                        {data.video_link}
                      </p>
                      <Link
                        href={data.video_link}
                        target='_blank'
                        className='bg-dark-300 w-[350px] h-[180px] group rounded-b-md shadow-md flex items-center justify-center'
                      >
                        <PlayCircleIcon className='text-dark-600 w-8 h-8 group-hover:scale-110 transition-all duration-300' />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className='bg-dark-200'>
                  <TableCell className='lg:min-w-[350px]'>
                    Dokumen Pendahuluan
                  </TableCell>
                  <TableCell>
                    <div className='flex flex-col w-[350px] overflow-hidden text-ellipsis'>
                      <p className='rounded-t-md shadow-md text-sm bg-white px-4 py-2 w-full'>
                        {data.document_link}
                      </p>
                      <Link
                        href={data.document_link || '#'}
                        target='_blank'
                        className='bg-dark-300 w-[350px] h-[180px] group rounded-b-md shadow-md flex items-center justify-center'
                      >
                        <FaFileAlt className='text-dark-600 w-8 h-8 group-hover:scale-110 transition-all duration-300' />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='lg:min-w-[350px]'>
                    Deskripsi Pendahuluan
                  </TableCell>
                  <TableCell>
                    <Button asChild variant='primary'>
                      <Link
                        className='flex gap-2 items-center'
                        href='/studi-ku/pendahuluan/edit'
                      >
                        <Edit /> Edit Informasi
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
