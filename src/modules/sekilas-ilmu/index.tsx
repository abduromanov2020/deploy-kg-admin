'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidFileExport } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosList } from 'react-icons/io';

import { cn } from '@/lib/utils';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import CardComponent from './components/card';
import DatePickerSekilasIlmu from './components/datepicker';
import FilterComponent from './components/filter';
import TableSekilasIlmu from './components/table';
import { ITESMS } from './constants';
import Pagination from '@/components/generals/pagination';
import { useGetArticle } from '@/hooks/sekilas-ilmu/hook';

const SekilasIlmuModule = () => {
  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState<string>('grid');
  const newQuery = new URLSearchParams(query);

  useEffect(() => {
    if (query.get('view') === 'table') {
      setactive('table');
    } else {
      setactive('grid');
    }
  }, [query, active, router]);

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/verifikasi/administrasi?page=${page}`);
  };

  const [option, setOption] = useState({
    page: 1,
    limit: 10,
    search: '',
  });

  const { data, isLoading } = useGetArticle(
    option.page,
    option.limit,
    option.search,
  );

  const dataTable = data ? data?.data?.data : [];
  console.log(dataTable);

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white'>
        <BreadCrumb items={ITESMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white'>
        <section className='px-4 py-5 border-b-2'>
          <p>Daftar Artikel</p>
        </section>
        <section className='px-4 py-5'>
          <div className='flex justify-between items-center'>
            <section className='w-full'>
              <div className='w-3/4 relative'>
                <Input type='text' placeholder='Search' className='pl-10' />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <AiOutlineSearch className='text-gray-400' size={20} />
                </div>
              </div>
            </section>
            <section className='flex gap-2'>
              <Link href='/sekilas-ilmu/tambah-artikel'>
                <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
                  <CiCirclePlus className='w-[20px] h-[20px]' />
                  <p className='leading-none'>Tambah Artikel</p>
                </Button>
              </Link>
              <DatePickerSekilasIlmu />
              <FilterComponent />
              {active === 'table' ? (
                <Button className='flex gap-2 justify-center items-center bg-white hover:bg-dark-100 shadow-md text-primary-500'>
                  <BiSolidFileExport size={20} />
                  <p className='font-normal'>Unduh</p>
                </Button>
              ) : null}
              <Button
                className={cn(
                  `p-2`,
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
                <BsGrid size={20} />
              </Button>
              <Button
                className={cn(
                  `p-2`,
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
                <IoIosList size={25} />
              </Button>
            </section>
          </div>
        </section>
        <section className='px-4 pb-5 w-full mx-auto'>
          {query.get('view') === 'grid' ||
          query.get('view') === null ||
          active === 'grid' ? (
            <CardComponent />
          ) : (
            <div className=''>
              <TableSekilasIlmu data={dataTable} />
              <div className='flex items-center justify-end space-x-2 py-4'>
                <div className='flex-1 text-sm text-muted-foreground pl-3'>
                  <p>Menampilkan 1 hingga 10 data dari 10000 entries</p>
                </div>
                <div className='space-x-2'>
                  <Pagination
                    currentPage={1}
                    totalPages={10}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default SekilasIlmuModule;
