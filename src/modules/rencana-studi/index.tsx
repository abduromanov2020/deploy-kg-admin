'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { DependencyList, useCallback, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Checked = DropdownMenuCheckboxItemProps['checked'];

import { useRouter, useSearchParams } from 'next/navigation';
import { BiLoaderAlt, BiPlusCircle } from 'react-icons/bi';

import { useGetStudyPlanFaculties } from '@/hooks/rencana-studi/faculties/hook';

import Pagination from '@/components/generals/pagination';

import FacultyGridCardComponent from '@/modules/rencana-studi/faculty/components/grid';
import { FacultyTable } from '@/modules/rencana-studi/faculty/components/table';
import { AddFacultyModal } from '@/modules/rencana-studi/faculty/faculty-add/components/addFacultyModal';

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

export const RencanaStudiModule = () => {
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

  const { data, isLoading, refetch } = useGetStudyPlanFaculties(
    page,
    option.limit,
    option.search,
  );

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(`/rencana-studi?page=1&search=${deb}`);
    },
    [deb],
    700,
  );

  const dataFaculties = data ? data.data.faculties : [];

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    refetch();

    router.push(`/rencana-studi?page=${page}`);
  };

  return (
    <div className='bg-white rounded'>
      <div className='p-4 border-b-2'>
        <p className='text-base font-semibold'>Rencana Studi</p>
      </div>
      <div className='p-8'>
        <section className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input
              type='text'
              placeholder='Search'
              className='pl-10'
              value={deb}
              onChange={(e) => setDeb(e.target.value)}
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <AddFacultyModal
              modalTrigger={
                <div className='flex gap-2 items-center '>
                  <BiPlusCircle className='text-white text-xl' />
                  Tambah Fakultas
                </div>
              }
            />
            <Button
              className={`${
                showGrid
                  ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                  : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
              }   p-3`}
              onClick={() => {
                setShowGrid(!showGrid);
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
                setShowList(!showList);
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
                <FacultyGridCardComponent data={dataFaculties} />
              </section>
            ) : (
              <section>
                {isLoading ? (
                  <div className='w-full flex justify-center items-center pt-5'>
                    <BiLoaderAlt className='animate-spin' size={30} />
                  </div>
                ) : data && data?.data ? (
                  <>
                    <FacultyTable data={dataFaculties} />
                    <div className='flex items-center justify-end px-4 py-4'>
                      <div className='flex-1 text-sm text-muted-foreground'>
                        <p>
                          Menampilkan {data?.data?.faculties.length > 0 ? 1 : 0}{' '}
                          hingga {data?.data?.faculties.length} data dari{' '}
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
                  </>
                ) : (
                  <div className='w-full flex justify-center items-center pt-5'>
                    Tidak Ada Data
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
