'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { cn } from '@/lib/utils';
import { useGetAllEventRequest } from '@/hooks/acara-kampus-gratis/hooks';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { CardAcara } from '@/modules/acara-kampus-gratis/component/CardAcara';
import { TableAcara } from '@/modules/acara-kampus-gratis/component/TableAcara';

export const AcaraKampusGratisModule = () => {
  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState<string>('grid');
  const newQuery = new URLSearchParams(query);

  const { data } = useGetAllEventRequest();
  useEffect(() => {
    if (query.get('view') === 'table') {
      setactive('table');
    } else {
      setactive('grid');
    }
  }, [query, active, router]);

  return (
    <div className='bg-white rounded-md'>
      <div className='border-b border-dark-200 p-4 flex items-center justify-between'>
        <span className='font-semibold '>Acara Kampus Gratis</span>
        <Link href='/acara-kampus-gratis/tambah-acara'>
          <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
            <CiCirclePlus className='w-[20px] h-[20px]' />
            <p className='leading-none'>Tambah Acara</p>
          </Button>
        </Link>
      </div>
      <div className='p-8'>
        <div className='flex justify-between'>
          <div className='w-1/3 relative'>
            <Input
              type='text'
              placeholder='Search'
              className='pl-10'
              // value={
              //   (table.getColumn('email')?.getFilterValue() as string) ?? ''
              // }
              // onChange={(event) =>
              //   table.getColumn('email')?.setFilterValue(event.target.value)
              // }
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <section className='flex gap-5 items-center'>
            {/* <AcaraFilter /> */}

            <Button
              className={cn(
                `p-3`,
                active === 'grid' || query.get('view') === null
                  ? 'bg-primary-500 hover:bg-primary-400 text-dark-100'
                  : 'bg-white hover:bg-dark-100 shadow-md text-primary-500',
              )}
              onClick={() => {
                newQuery.set('view', 'grid');
                router.push(`${pathName}?${newQuery.toString()}`);
                setactive('grid');
              }}
            >
              <IoGridOutline size={24} />{' '}
            </Button>
            <Button
              className={cn(
                `p-3`,
                active === 'table'
                  ? 'bg-primary-500 hover:bg-primary-400 text-dark-100'
                  : 'bg-white hover:bg-dark-100 shadow-md text-primary-500',
              )}
              onClick={() => {
                newQuery.set('view', 'table');
                router.push(`${pathName}?${newQuery.toString()}`);
                setactive('table');
              }}
            >
              <IoListOutline size={24} />
            </Button>
          </section>
        </div>
        <div className='my-8'>
          {query.get('view') === 'grid' ||
          query.get('view') === null ||
          (active === 'grid' && data) ? (
            <div className='grid grid-cols-3 gap-5'>
              {data?.data?.events.map((item, index) => (
                <CardAcara key={`event-${index}`} id={index} data={item} />
              ))}
            </div>
          ) : (
            data && <TableAcara data={data?.data.events} />
          )}
        </div>
      </div>
    </div>
  );
};
