'use client';

import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { useGetSubjectByMajorId } from '@/hooks/rencana-studi/subjects/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import Pagination from '@/components/generals/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import SubjectGrid from '@/modules/rencana-studi/subject/components/subject-grid';
import { SubjectTable } from '@/modules/rencana-studi/subject/components/table';

interface TProps {
  id: string;
}

const SubjectModule = ({ id }: TProps) => {
  const { id: id_faculty } = useParams();

  const [showGrid, setShowGrid] = React.useState(false);
  const [showList, setShowList] = React.useState(true);

  const query = useSearchParams();
  const router = useRouter();

  const page = Number(query.get('page')) || 1;

  const { data, isLoading, refetch } = useGetSubjectByMajorId(id, page);

  const subject = data ? data?.data?.subjects : [];

  // console.log(subject);

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    refetch();
    router.push(
      `/rencana-studi/program-studi/${id_faculty}/mata-kuliah/${id}?page=${page}`,
    );
  };

  // console.log(subject);

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: `/rencana-studi/program-studi/${id_faculty}`,
    },
    {
      name: 'Daftar Matkul',
      link: '',
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>
            Daftar Mata Kuliah Program Studi{' '}
            {subject.length > 0 ? subject[0]?.major_name : 'Kosong'}
          </p>
        </div>
        <div className='p-8'>
          <section className='flex justify-between items-center'>
            <div className='w-1/3 relative'>
              <Input
                type='text'
                placeholder='Cari Program Studi'
                className='pl-10'
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
                <Link
                  href={`/rencana-studi/program-studi/${id_faculty}/mata-kuliah/${id}/tambah-matkul`}
                >
                  <CiCirclePlus size={20} />
                  <p className='leading-none'>Tambah Mata Kuliah</p>
                </Link>
              </Button>
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
              {/* <FilterComponentMajor /> */}
            </div>
          </section>
          <div className='my-8 w-full'>
            {showGrid ? (
              <section>
                <SubjectGrid data={subject} />
              </section>
            ) : (
              <section>
                {isLoading ? (
                  <div className='w-full flex justify-center items-center pt-5'>
                    <BiLoaderAlt className='animate-spin' size={30} />
                  </div>
                ) : data && data?.data ? (
                  <>
                    <SubjectTable data={subject} />
                    <div className='flex items-center justify-end px-4 py-4'>
                      <div className='flex-1 text-sm text-muted-foreground'>
                        <p>
                          Menampilkan {subject?.length > 0 ? 1 : 0} hingga{' '}
                          {subject?.length} data dari {data?.meta?.page_size}{' '}
                          entries
                        </p>
                      </div>
                      <div className='space-x-2'>
                        <Pagination
                          currentPage={Number(data?.meta?.page) || 1}
                          totalPages={Number(data?.meta?.page_size) || 1}
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
    </main>
  );
};

export default SubjectModule;
