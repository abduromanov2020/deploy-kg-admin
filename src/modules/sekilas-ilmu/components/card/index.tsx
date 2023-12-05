import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { DeteleArticleModal } from '@/modules/sekilas-ilmu/components/DeleteModal';

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
            <section className='flex justify-between items-center'>
              <Link href='/sekilas-ilmu/detail-artikel'>
                <Button className='bg-primary-500 hover:bg-primary-400'>
                  Detail Artikel
                </Button>
              </Link>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className='w-max p-0 bg-transparent hover:bg-transparent'>
                    <HiDotsVertical className='text-dark-900' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-32'>
                  <div className='bg-white rounded-md flex flex-col gap-3'>
                    <Link href='/sekilas-ilmu/edit-artikel'>
                      <div className='flex items-center gap-5 text-primary-500 hover:text-primary-400 cursor-pointer'>
                        <BiEdit />
                        <p className='text-start'>Edit</p>
                      </div>
                    </Link>
                    <DeteleArticleModal
                      modalTrigger={
                        <div className='flex items-center text-red-900 hover:text-red-700 gap-5 cursor-pointer'>
                          <FaTrash />
                          <p className='text-start'>Hapus</p>
                        </div>
                      }
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </section>
          </CardContent>
          <CardFooter className='pt-4'>
            <p className='text-dark-600'>12 Desember 2023</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
