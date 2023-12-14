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

import { PopoverArticle } from '@/modules/sekilas-ilmu/components/PopOver';

import { TGetAllArticle } from '@/types/sekilas-ilmu/types';

const CardComponent = ({ data }: TGetAllArticle) => {
  const [formattedDate, setFormattedDate] = React.useState<string>('');

  const getMonthName = (monthIndex: number) => {
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    if (monthIndex >= 0 && monthIndex < months.length) {
      return months[monthIndex];
    } else {
      return 'Bulan tidak valid';
    }
  };

  console.log(data);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {data.map((item, index) => {
        // const rawDate: unknown = item.created_at;

        // if (typeof rawDate === 'string') {
        //   const dateObject = new Date(rawDate);

        //   if (!isNaN(dateObject.getTime())) {
        //     const formatted = `${dateObject.getDate()} ${getMonthName(
        //       dateObject.getMonth(),
        //     )} ${dateObject.getFullYear()}`;
        //     setFormattedDate(formatted);
        //   }
        // }
        return (
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
                {/* {item?.tags.map((tag, index) => ( */}
                <Badge
                  key={index}
                  className='rounded-md bg-dark-900 bg-opacity-[0.08] hover:bg-dark-300 text-dark-900 px-3 py-1'
                >
                  {item?.author?.full_name}
                </Badge>
                {/* ))} */}
              </section>
              <section className='flex flex-col gap-3 mt-5 min-h-[100px]'>
                <CardTitle className='line-clamp-1'>{item?.title}</CardTitle>
                <CardDescription
                  className='line-clamp-3'
                  dangerouslySetInnerHTML={{
                    __html: item?.content,
                  }}
                ></CardDescription>
              </section>
            </CardContent>
            <CardFooter className='flex gap-2 justify-between'>
              <div className='flex gap-2'>
                <Button className='bg-primary-500 hover:bg-primary-600' asChild>
                  <Link href={`/sekilas-ilmu/detail/${item.slug}`}>
                    Detail Artikel
                  </Link>
                </Button>
              </div>

              <PopoverArticle slug={item?.slug} articleId={item?.id} />
            </CardFooter>
            <hr />
            <div className='px-6 py-3'>
              <p>{item.created_at}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardComponent;
