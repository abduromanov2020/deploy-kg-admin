import { format } from 'date-fns';
import Image from 'next/image';
import React, { FC } from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TEventItem } from '@/types/acara-kampus-gratis/types';

export const PreviewAcaraTabContent: FC<{ data: TEventItem }> = ({ data }) => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Nama Acara
          </TableCell>
          <TableCell>{data.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Benefit
          </TableCell>
          <TableCell>
            <ul className='list-disc list-inside'>
              <li>Sertifikat</li>
              <li>
                Pemahaman tentang Cyber Security Ilmu langsung dari seorang
                Cyber
              </li>
              <li>Security</li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Biaya
          </TableCell>
          <TableCell>Gratis</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Tanggal
          </TableCell>
          <TableCell>
            {format(
              new Date(data.registration_close_date),
              'dd MMMM yyyy HH:mm',
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r'>
            Cover
          </TableCell>
          <TableCell>
            <div className='border border-gray-400 p-3 rounded-md w-fit'>
              <div className='flex justify-between mb-3'>
                <span>Cover</span>
                <span className='text-primary-500 cursor-pointer hover:underline'>
                  Unduh
                </span>
              </div>
              <Image
                alt='thumbnail'
                src='/images/acara-kampus-gratis/cover.png'
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                sizes='100vh'
              />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
