import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { EditModuleModal } from '@/modules/studi-ku/modul/edit/editModuleModal';
import HapusModuleModal from '@/modules/studi-ku/modul/hapus';

interface CardComponentProps {
  title: string;
  img: string;
  description?: string;
  duration: number;
  slug: string[];
  subject_id: string;
  session_id: string;
  module_id: string;
  link: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  img,
  description,
  duration,
  slug,
  subject_id,
  session_id,
  module_id,
  link,
}) => {
  return (
    <Card className='flex flex-col'>
      <div className='w-full object-contain'>
        <Image
          src={`${img === null ? '/images/studi-ku/modul-default.png' : img}`}
          alt={`${title}`}
          className=' object-cover w-full h-[200px]'
          width={0}
          height={0}
          sizes='100vw'
        />
      </div>
      <CardHeader>
        <div className='flex gap-2'>
          {slug.map((item, index) => {
            return (
              <span
                key={index}
                className='flex justify-center items-center bg-dark-200 p-2 rounded-md mb-3'
              >
                {item}
              </span>
            );
          })}
        </div>
        <CardTitle className='flex justify-between items-center'>
          <Link href={link}>
            <h1>{title}</h1>
          </Link>
          <div className='text-base items-center'>
            <Popover>
              <PopoverTrigger>
                <FiMoreVertical />
              </PopoverTrigger>
              <PopoverContent className='w-48' align='end'>
                <div className='flex flex-col gap-2'>
                  <EditModuleModal
                    id={module_id}
                    title={title}
                    description={description as string}
                    duration={duration as unknown as string}
                  />
                  <hr className='border-slate-200' />
                  <HapusModuleModal
                    subject_id={subject_id}
                    session_id={session_id}
                    module_id={module_id}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardTitle>
        <CardDescription className='line-clamp-2'>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
