import Link from 'next/link';
import React from 'react';
import Avatar from 'react-avatar';
import { TbEdit } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const IndividualMentoringTabItem = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Table className=' border border-gray-400'>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium align-top border-r w-[250px]'>
              Judul Mentoring
            </TableCell>
            <TableCell>Mentoring Sesi Class Blockchain</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium align-top border-r'>
              Tanggal
            </TableCell>
            <TableCell>17/08/2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium align-top border-r'>
              Waktu
            </TableCell>
            <TableCell>19.00 - 20.00 WIB (1 Jam)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium align-top border-r'>
              Via
            </TableCell>
            <TableCell>Zoom Meeting</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium align-top border-r'>
              Link Mentoring
            </TableCell>
            <TableCell>https://zoom.google.com/nyj-sdff-ezp</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium align-top border-r'>
              Peserta Mentoring
            </TableCell>
            <TableCell>8 Mahasiswa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium align-top border-r'></TableCell>
            <TableCell>
              {' '}
              <div className='flex gap-3'>
                <Link href='/studi-ku/tugas/edit-nilai/1'>
                  <Button variant='primary' className='flex gap-2'>
                    <TbEdit size={15} />
                    Edit Mentoring
                  </Button>
                </Link>
                <Link href='/studi-ku/tugas/edit'>
                  <Button
                    variant='outline'
                    className='flex gap-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white'
                  >
                    <TbEdit size={15} />
                    Hapus Mentoring
                  </Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className='w-full border border-gray-400 mt-8'>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Mahasiswa</TableHead>
            <TableHead>Dosen</TableHead>
            <TableHead>Jadwal Mentoring</TableHead>
            <TableHead>Diskusi</TableHead>
            <TableHead className='!text-wrap !truncate'>
              Rekaman Mentoring
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item}</TableCell>
              <TableCell>
                <Avatar
                  name='Mahasiswa-1'
                  size='30'
                  round={true}
                  className='mr-2'
                />
                Mahasiswa {item}
              </TableCell>
              <TableCell>Neneng Rohaye S.Kom</TableCell>
              <TableCell>25/02/2021 23:59:59</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>
                <p className='!text-wrap !truncate w-32'>
                  https://docs.google.com/spreadsheets/d/1mMJkFr3ldX0Ve9bx0S9643TrWYpFdaXKBy1PhksGHqk/edit#gid=0
                </p>
              </TableCell>
              <TableCell>
                <Link href='/studi-ku/tugas/edit'>
                  <Button variant='primary' className='flex '>
                    Edit{' '}
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
