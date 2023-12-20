'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Pagination from '@/components/generals/pagination';
import { Input } from '@/components/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function ResponseListSection({ data }: { data: any }) {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const filteredData = data?.list_responses?.filter((_: any, index: number) => {
    return index >= (Number(page) - 1) * 10 && index < Number(page) * 10;
  });
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <div className='w-1/3 relative'>
          <Input type='text' placeholder='Search' className='pl-10' />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <AiOutlineSearch className='text-gray-400' size={20} />
          </div>
        </div>
      </div>
      <Table className='border rounded-lg text-xs max-w-full scrollbar-thumb-slate-300  scrollbar-track-slate-300 scrollbar-thumb-rounded-md'>
        <TableHeader>
          <TableRow>
            <TableHead className='font-semibold text-center'>No</TableHead>
            <TableHead className='font-semibold text-center'>
              Nama Mahasiswa
            </TableHead>
            <TableHead className='font-semibold text-center'>
              Tanggal Diunggah
            </TableHead>
            <TableHead className='font-semibold text-center'>
              Tanggapan
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData?.map((item: any, index: number) => (
            <Fragment key={index}>
              <TableRow>
                <TableCell className=' px-5 text-start align-center'>
                  {index + 1}
                </TableCell>
                <TableCell className=' font-semibold px-5 text-start align-top w-64'>
                  <div className='flex gap-4 items-center'>
                    <Image
                      alt='foto'
                      src={item?.user?.avatar}
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <p className='w-full'>{item?.user.name}</p>
                  </div>
                </TableCell>
                <TableCell className=' px-5 text-start align-center'>
                  {item?.date_uploaded}
                </TableCell>
                <TableCell className=' px-5 text-start align-center'>
                  <Link
                    href={`/studi-ku/refleksi-eksplorasi/response/${item?.id}`}
                    className='text-blue-500'
                  >
                    Detail
                  </Link>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-between place-items-center pt-5'>
        <p className='text-slate-500'>
          Menampilkan {page} hingga {Number(page) * 10} dari{' '}
          {data?.summary_answers?.length} entri
        </p>
        <Pagination
          currentPage={Number(page)}
          totalPages={Number(data?.summary_answers?.length / 10 + 1)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ResponseListSection;
