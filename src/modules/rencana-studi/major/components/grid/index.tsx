import Image from 'next/image';
import React from 'react';
import { IoMdMore } from 'react-icons/io';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import MajorImage from '~/images/rencana-studi/major/cover-prodi.png';
import Link from 'next/link';

const MajorGrid = () => {
  const CARDS = [0, 1, 2, 3, 4, 5];

  const ITEMS = [
    {
      label: '68 Mata Kuliah',
    },
    {
      label: '144 SKS',
    },
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
      {CARDS.map((_, index) => (
        <Card
          key={index}
          className='w-[350px] rounded-lg overflow-hidden mx-auto'
        >
          <CardHeader className='p-0'>
            <Image src={MajorImage} alt='artikel' width={350} height={200} />
          </CardHeader>
          <CardContent className='p-6'>
            <section className=' flex gap-2'>
              {ITEMS.map((item, index) => (
                <Badge
                  key={index}
                  className='rounded-md bg-dark-900 bg-opacity-[0.08] hover:bg-dark-300 text-dark-900 px-3 py-1'
                >
                  {item.label}
                </Badge>
              ))}
            </section>
            <section className='flex flex-col gap-3 mt-5'>
              <CardTitle>Blockchain</CardTitle>
              <CardDescription>
                Prodi Pembiayaan dan Optimalisasi Bisnis adalah ...
              </CardDescription>
            </section>
          </CardContent>
          <CardFooter className='flex gap-2 justify-between'>
            <div className='flex gap-2'>
              <Button className='bg-primary-500 hover:bg-primary-400'>
                Daftar Mata Kuliah
              </Button>
              <Button
                className='bg-white border-primary-500 border text-primary-500 hover:bg-gray-200 px-9'
                asChild
              >
                <Link href={'/rencana-studi/program-studi/1/detail/2'}>
                  Detail
                </Link>
              </Button>
            </div>
            <Button className='bg-transparent text-gray-900 hover:bg-transparent hover:text-gray-900 px-2'>
              <IoMdMore size={25} />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MajorGrid;
