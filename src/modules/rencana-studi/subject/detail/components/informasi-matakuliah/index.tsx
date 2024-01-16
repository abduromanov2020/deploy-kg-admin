import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale'; // Import locale for Indonesian
import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidFileExport } from 'react-icons/bi';
import { BiEdit } from 'react-icons/bi';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { DeleteSubjectModalDetail } from '@/modules/rencana-studi/subject/detail/components/delete-subject-modal-detail';

import { TSubjectDataById } from '@/types/rencana-studi/subjects/types';

export default function InformasiMataKuliah({
  subject,
}: {
  subject: TSubjectDataById;
}) {
  return (
    <div className='p-8'>
      <section className='flex justify-between items-center'>
        <div className='w-1/3 relative'>
          <Input type='text' placeholder='Search' className='pl-10' />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <AiOutlineSearch className='text-gray-400' size={20} />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Button className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
            <BiSolidFileExport size={24} />
            <p className='leading-none'>Unduh</p>
          </Button>
          <DeleteSubjectModalDetail />
          <Button className='shadow-md bg-white border-2 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
            <BiEdit size={24} />
            <p className='leading-none'>Edit Data</p>
          </Button>
        </div>
      </section>
      <div className='my-8 w-full'>
        <Table className='border-2'>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium w-[30%]'>
                ID Mata Kuliah
              </TableCell>
              <TableCell className='border-2'>{subject?.code}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Cover Program Prodi</TableCell>
              <TableCell className='border-2'>
                <Card
                  key='1'
                  className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'
                >
                  <CardTitle className='p-2 text-md'>Cover</CardTitle>
                  <CardHeader className='p-0 '>
                    <Image
                      src={
                        subject && subject.thumbnail ? subject.thumbnail : ''
                      }
                      alt={subject ? subject.slug : 'thumbnail'}
                      width={350}
                      height={200}
                      className='object-cover'
                    />
                  </CardHeader>
                </Card>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Nama Mata Kuliah</TableCell>
              <TableCell className='border-2'>{subject?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Deskripsi</TableCell>
              <TableCell className='border-2'>{subject?.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Jumlah SKS</TableCell>
              <TableCell className='border-2'>{subject?.credit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Pengajar</TableCell>
              <TableCell className='border-2'>
                {subject?.teacher?.full_name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Semester</TableCell>
              <TableCell className='border-2'>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Program Studi</TableCell>
              <TableCell className='border-2'>{subject?.major?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Indikator</TableCell>
              <TableCell className='border-2'>{subject?.indicator}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Pengalaman Belajar</TableCell>
              <TableCell className='border-2'>
                {subject?.study_experience}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Bahan Ajar</TableCell>
              <TableCell className='border-2'>
                {subject?.teaching_materials}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Tools Dibutuhkan</TableCell>
              <TableCell className='border-2'>
                {subject?.tools_needed}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Waktu Dibuat</TableCell>
              <TableCell className='border-2'>
                {subject?.created_at ? (
                  <div className='text-sm font-semibold'>
                    {format(parseISO(subject.created_at), 'dd MMMM yyyy', {
                      locale: id,
                    })}
                  </div>
                ) : (
                  <div className='text-sm font-semibold'>Invalid Date</div>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Waktu Diperbarui</TableCell>
              <TableCell className='border-2'>
                {subject?.updated_at ? (
                  <div className='text-sm font-semibold'>
                    {format(parseISO(subject.updated_at), 'dd MMMM yyyy', {
                      locale: id,
                    })}
                  </div>
                ) : (
                  <div className='text-sm font-semibold'>Invalid Date</div>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
