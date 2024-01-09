import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { EditModuleModal } from '@/modules/studi-ku/modul/edit/editModuleModal';

interface CardComponentProps {
  title: string;
  img: string;
  onEdit?: () => void;
  onDetail?: () => void;
  description: string;
  slug: string[];
  link: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  img,
  description,
  slug,
  link,
}) => {
  return (
    <Card>
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
          <Link href={link}>{title}</Link>
        </CardTitle>
        <CardDescription className='line-clamp-2'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-2 text-sm'>
        <Button asChild variant='primary'>
          <Link href={link} className='flex gap-2 items-center'>
            Detail Modul
          </Link>
        </Button>
        <EditModuleModal
          editModalTrigger={
            <div className='flex gap-2 items-center'>Edit Modul</div>
          }
        />
      </CardContent>
    </Card>
  );
};
