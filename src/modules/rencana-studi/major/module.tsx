'use client';

import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { DependencyList, useCallback, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { useGetMajorByFacultyId } from '@/hooks/rencana-studi/majors/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import MajorGrid from '@/modules/rencana-studi/major/components/grid';
import { MajorTable } from '@/modules/rencana-studi/major/components/table';

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number,
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

const MajorModule = () => {
  const { id } = useParams();

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: `/rencana-studi/program-studi/${id}`,
    },
  ];
  const [showGrid, setShowGrid] = React.useState(false);
  const [showList, setShowList] = React.useState(true);

  const query = useSearchParams();
  const router = useRouter();

  const page = Number(query.get('page')) || 1;
  const searchQuery = query.get('search') || '';

  const [option, setOption] = useState({
    limit: 10,
    search: '',
  });

  const [deb, setDeb] = useState(searchQuery);

  const { data, isLoading, refetch } = useGetMajorByFacultyId(
    id as string,
    page,
    option.limit,
    option.search,
  );
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(`/rencana-studi/program-studi/${id}?page=1&search=${deb}`);
    },
    [deb],
    700,
  );

  const dataMajors = data ? data.data.majors : [];
  const currentPage = Number(data?.meta?.page) || 1;

  const totalPages = Number(data?.meta?.per_page) || 1;
  const startingIndex = (currentPage - 1) * totalPages;

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    refetch();

    router.push(`/rencana-studi/program-studi/${id}?page=${page}`);
  };

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>
            <p className='text-base font-semibold'>
              Daftar Program Studi Fakultas{' '}
              {dataMajors.length > 0 ? dataMajors[0]?.faculty_name : 'Kosong'}
            </p>
          </p>
        </div>
        <div className='p-8'>
          <section className='flex justify-between items-center'>
            <div className='w-1/3 relative'>
              <Input
                type='text'
                placeholder='Cari Program Studi'
                className='pl-10'
                value={deb}
                onChange={(e) => setDeb(e.target.value)}
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Button
                className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'
                asChild
              >
                <Link href={`/rencana-studi/program-studi/${id}/tambah-prodi`}>
                  <CiCirclePlus size={20} />
                  <p className='leading-none'>Tambah Prodi</p>
                </Link>
              </Button>
              {/* <FilterComponentMajor />
              <Button className='bg-white shadow-md hover:bg-primary-500 text-primary-500 hover:text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button> */}
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
            </div>
          </section>
          <div className='my-8'>
            <div className='w-full'>
              {showGrid ? (
                <section>
                  <MajorGrid data={dataMajors} />
                </section>
              ) : (
                <section>
                  {isLoading ? (
                    <div className='w-full flex justify-center items-center pt-5'>
                      <BiLoaderAlt className='animate-spin' size={30} />
                    </div>
                  ) : data && data?.data ? (
                    <>
                      <MajorTable
                        data={dataMajors}
                        startingIndex={startingIndex}
                      />
                    </>
                  ) : (
                    <div className='w-full flex justify-center items-center pt-5'>
                      Tidak Ada Data
                    </div>
                  )}
                </section>
              )}
              <div className='flex items-center justify-end px-4 py-4'>
                <div className='flex-1 text-sm text-muted-foreground'>
                  <p>
                    Menampilkan {data?.data?.majors.length > 0 ? 1 : 0} hingga{' '}
                    {data?.data?.majors.length} data dari{' '}
                    {data?.data?.page_size} entries
                  </p>
                </div>
                <div className='space-x-2'>
                  <Pagination
                    currentPage={Number(data?.meta?.page)}
                    totalPages={Number(data?.meta?.page_size)}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MajorModule;
