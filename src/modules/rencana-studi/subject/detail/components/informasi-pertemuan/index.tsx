import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { TSessionItem } from '@/types/studi-ku/sessions/types';

export default function InformasiPertemuan({
  session,
}: {
  session: TSessionItem[];
}) {
  const { id, id_major, id_subject } = useParams();

  return (
    <section className='p-8'>
      <div className='flex justify-end pb-4'>
        <Link
          href={`/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}/detail/${id_subject}/tambah-pertemuan`}
        >
          <Button
            variant='primary'
            className='px-4 py-2 flex gap-2 items-center'
          >
            <BiPlusCircle size={24} />
            Tambah Pertemuan
          </Button>
        </Link>
      </div>
      {session.map((item, index) => (
        <Table
          className='w-full border border-gray-200 rounded-lg mb-8'
          key={index}
        >
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className='text-slate-900 font-semibold text-base py-4'
              >
                Pertemuan {index + 1}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='w-[300px] border-2'>
                Judul Pertemuan
              </TableCell>
              <TableCell>{item.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[300px] border-2'>Description</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </section>
  );
}
