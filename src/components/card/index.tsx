import Image from 'next/image';
import React from 'react';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { EditModuleModal } from '@/modules/studi-ku/modul/edit/editModuleModal';
import HapusModuleModal from '@/modules/studi-ku/modul/hapus';

interface CardComponentProps {
  title: string;
  img: string;
  description: string;
  duration: number;
  slug: string[];
  subject_id: string;
  session_id: string;
  module_id: string;
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
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>
        <CardDescription className='line-clamp-2'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex gap-2 text-sm items-center'>
        <EditModuleModal
          id={module_id}
          title={title}
          description={description}
          duration={duration as unknown as string}
        />
        <HapusModuleModal
          subject_id={subject_id}
          session_id={session_id}
          module_id={module_id}
        />
      </CardFooter>
    </Card>
  );
};
