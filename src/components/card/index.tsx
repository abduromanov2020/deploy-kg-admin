import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface formatSlug {
  slug: string;
}

interface CardComponentProps {
  title: string;
  img: string;
  onEdit?: () => void;
  onDetail?: () => void;
  description: string;
  slug: formatSlug[];
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  img,
  onEdit,
  onDetail,
  description,
  slug,
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
                {item.slug}
              </span>
            );
          })}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='line-clamp-2'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex gap-2 text-sm'>
        <button
          className='px-3 py-2 rounded-md w-[170px] bg-primary-500 text-white'
          onClick={onDetail}
        >
          Detail Modul
        </button>
        <Link
          href='/studi-ku/modul/edit'
          className='border-2 rounded-md w-[170px] border-primary-500 px-3 py-2 text-primary-500 text-center'
        >
          Edit
        </Link>
      </CardContent>
    </Card>
  );
};
