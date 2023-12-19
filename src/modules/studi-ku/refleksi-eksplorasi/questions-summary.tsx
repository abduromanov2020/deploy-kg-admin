'use client';

import Image from 'next/image';
import React, { Fragment } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

import { Filter } from '@/components/filter';
import { Input } from '@/components/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import DropdownFilter from '@/modules/studi-ku/refleksi-eksplorasi/component/dropdown-filter';

function QuestionSummarySection({ data }: { data: any }) {
  const filter = [{ title: 'Fajar FE' }];
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <div className='w-1/3 relative'>
          <Input type='text' placeholder='Search' className='pl-10' />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <AiOutlineSearch className='text-gray-400' size={20} />
          </div>
        </div>
        <div className='flex gap-4'>
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[180px] px-4'
            title='Pilih Mahasiswa'
            data={filter}
          />
          <DropdownFilter />
        </div>
      </div>
      <Table className='border rounded-lg text-xs max-w-full scrollbar-thumb-slate-300  scrollbar-track-slate-300 scrollbar-thumb-rounded-md'>
        <TableHeader>
          <TableRow>
            <TableHead className='font-semibold text-center w-64'>
              Responden
            </TableHead>
            <TableHead className='font-semibold text-center'>Respons</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.summary_answers.map((item: any, index: number) => (
            <Fragment key={index}>
              <TableRow>
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
                <TableCell className=' px-5 text-start align-top'>
                  <div
                    className='col-span-4 text-dark-900 text-sm wrapper-dangerously-html'
                    dangerouslySetInnerHTML={{
                      __html: item?.response,
                    }}
                  ></div>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default QuestionSummarySection;
