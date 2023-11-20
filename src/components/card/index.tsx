import Image from 'next/image';
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
          src={`${img === null ? '/images/new-tab-png' : img}`}
          alt={`${title}`}
          className=' object-fill w-full h-[200px]'
          width={200}
          height={200}
        />
      </div>
      <CardHeader>
        <div className='flex gap-2'>
          {slug.map((item, index) => {
            return (
              <span
                key={index}
                className='flex justify-center items-center bg-dark-200 p-2 rounded-md'
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
        <button
          className='border-2 rounded-md w-[170px] border-primary-500 px-3 py-2 text-primary-500'
          onClick={onEdit}
        >
          Edit
        </button>
      </CardContent>
    </Card>
  );
};
