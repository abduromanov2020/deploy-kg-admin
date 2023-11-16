import Image from 'next/image';
import React from 'react';

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

import ArtikelImage from '~/images/sekilas-ilmu/artikel.png';

const CardComponent = () => {
  const CARDS = [0, 1, 2, 3, 4, 5];

  const ITEMS = [
    {
      label: '#Pendidikan',
    },
    {
      label: '#IlmuBaru',
    },
    {
      label: '#KampusGratis',
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
            <Image src={ArtikelImage} alt='artikel' width={350} height={200} />
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
              <CardTitle>Masih sering bingung...</CardTitle>
              <CardDescription>
                Public speaking atau berbicara di depan umum...
              </CardDescription>
            </section>
          </CardContent>
          <CardFooter>
            <Button className='bg-primary-500 hover:bg-primary-400'>
              Detail Artikel
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
