'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLoaderAlt, BiSolidFileExport } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { useGetArticle } from '@/hooks/sekilas-ilmu/hook';

import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import CardComponent from './components/card';
import DatePickerSekilasIlmu from './components/datepicker';
import FilterComponent from './components/filter';
import TableSekilasIlmu from './components/table';

const SekilasIlmuModule = () => {
  const [showGrid, setShowGrid] = React.useState(false);
  const [showList, setShowList] = React.useState(true);

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

  const page = Number(query.get('page')) || 1;
  const searchQuery = query.get('search') || '';

  // const [option, setOption] = useState({
  //   page: page,
  //   limit: 10,
  //   search: '',
  // });

  const { data, isLoading, refetch } = useGetArticle(page, 10, searchQuery, '');

  const dataArticle = data ? data?.data?.data : [];

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    refetch();
    console.log(page);

    router.push(`/sekilas-ilmu?page=${page}`);
  };

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white'>
        <section className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>Sekilas Ilmu</h3>
        </section>
        <section className='px-6 py-5'>
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
              {showList && (
                <Button className='flex gap-2 justify-center items-center bg-white hover:bg-dark-100 shadow-md text-primary-500'>
                  <BiSolidFileExport size={20} />
                  <p className='font-normal'>Unduh</p>
                </Button>
              )}
              <Button
                className={`${
                  showGrid
                    ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                    : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
                }   p-3`}
                onClick={() => {
                  setShowGrid(!showGrid); // Fix: Use the new state value directly
                  setShowList(!showList);
                }}
              >
                <IoGridOutline size={24} />
              </Button>
              <Button
                className={`${
                  showList
                    ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                    : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
                }   p-3`}
                onClick={() => {
                  setShowGrid(!showGrid);
                  setShowList(!showList); // Fix: Use the new state value directly
                }}
              >
                <IoListOutline size={24} />
              </Button>
            </section>
          </div>
        </section>
        <section className='p-6'>
          <div className='w-full'>
            {showGrid ? (
              <section>
                <CardComponent data={dataArticle} />
              </section>
            ) : (
              <section>
                {isLoading ? (
                  <div className='w-full flex justify-center items-center pt-5'>
                    <BiLoaderAlt className='animate-spin' size={30} />
                  </div>
                ) : data && data?.data ? (
                  <>
                    <TableSekilasIlmu data={dataArticle} />
                    <div className='flex items-center justify-end px-4 py-4'>
                      <div className='flex-1 text-sm text-muted-foreground'>
                        <p>
                          Menampilkan {data?.data?.data.length > 0 ? 1 : 0}{' '}
                          hingga {data?.data?.data.length} data dari{' '}
                          {data?.data?.max_page} entries
                        </p>
                      </div>
                      <div className='space-x-2'>
                        <Pagination
                          currentPage={Number(data?.data?.current_page)}
                          totalPages={Number(data?.data?.max_page)}
                          onPageChange={handlePageChange}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className='w-full flex justify-center items-center pt-5'>
                    Tidak Ada Data
                  </div>
                )}
              </section>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SekilasIlmuModule;
