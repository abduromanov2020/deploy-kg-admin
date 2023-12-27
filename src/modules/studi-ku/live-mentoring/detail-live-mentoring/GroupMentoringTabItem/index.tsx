import Link from 'next/link';
import React from 'react';
import { TbEdit } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { DeleteMentoringConfirmationModal } from '@/modules/studi-ku/live-mentoring/components/DeleteMentoringConfirmationModal';

export const GroupMentoringTabItem = () => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Nama Grup
          </TableCell>
          <TableCell>Grup 1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Judul Mentoring
          </TableCell>
          <TableCell>Mentoring Sesi Class Blockchain</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Pengajar
          </TableCell>
          <TableCell>Neneng Rohaye S.Kom</TableCell>
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
          <TableCell className='font-medium align-top border-r'>Via</TableCell>
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
            Link Rekaman Ulang
          </TableCell>
          <TableCell>
            https://docs.google.com/spreadsheets/d/1mMJkFr3ldX0Ve9bx0S9643TrWYpFdaXKBy1PhksGHqk/edit#gid=0{' '}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Peserta Mentoring
          </TableCell>
          <TableCell>
            Michaelsyah, Syahnaz, Ahmad, Rafif, Wisnu, Almira, Dinarsyah,
            Ramadansyah
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Diskusi
          </TableCell>
          <TableCell>Lihat Detail</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'></TableCell>
          <TableCell>
            {' '}
            <div className='flex gap-3'>
              <Link href='/studi-ku/live-mentoring/edit-live-mentoring/group-mentoring/1'>
                <Button variant='primary' className='flex gap-2'>
                  <TbEdit size={15} />
                  Edit Informasi
                </Button>
              </Link>
              <DeleteMentoringConfirmationModal />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
