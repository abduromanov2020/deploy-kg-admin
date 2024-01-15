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
  return (
    <section className='p-8'>
      <div className='flex justify-end pb-4'>
        <Button variant='primary' className='px-4 py-2 flex gap-2'>
          <BiPlusCircle size={24} />
          Tambah Pertemuan
        </Button>
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
              <TableCell>Judul Pertemuan</TableCell>
              <TableCell>{item.subject_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>{item.type}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </section>
  );
}
