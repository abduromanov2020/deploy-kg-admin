import Image from 'next/image';
import Link from 'next/link';
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
import { TGetAllArticle } from '@/types/sekilas-ilmu/types';

const CardComponent = ({ data }: TGetAllArticle) => {
  console.log(data);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {data.map((item, index) => (
        <Card
          key={item?.id}
          className='w-[350px] rounded-lg overflow-hidden mx-auto mt-4'
        >
          <CardHeader className='p-0 max-h-[200px] w-full overflow-hidden'>
            <Image
              src={item.thumbnail}
              alt='artikel'
              width={350}
              height={100}
              priority
              className='object-cover'
            />
          </CardHeader>
          <CardContent className='p-6'>
            <section className=' flex gap-2 overflow-x-hidden'>
              {item?.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className='rounded-md bg-dark-900 bg-opacity-[0.08] hover:bg-dark-300 text-dark-900 px-3 py-1'
                >
                  #{tag}
                </Badge>
              ))}
            </section>
            <section className='flex flex-col gap-3 mt-5'>
              <CardTitle className='line-clamp-1'>{item?.title}</CardTitle>
              <CardDescription
                className='line-clamp-3'
                dangerouslySetInnerHTML={{ __html: item?.content }}
              ></CardDescription>
            </section>
          </CardContent>
          <CardFooter>
            <Link href='/sekilas-ilmu/detail-artikel'>
              <Button className='bg-primary-500 hover:bg-primary-400'>
                Detail Artikel
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
