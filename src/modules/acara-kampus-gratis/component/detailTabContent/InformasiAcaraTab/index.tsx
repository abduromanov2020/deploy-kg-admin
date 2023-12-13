import { format } from 'date-fns';
import React, { FC } from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TEventItem } from '@/types/acara-kampus-gratis/types';

export const InformasiAcaraTabContent: FC<{ data: TEventItem }> = ({
  data,
}) => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[200px]'>
            Tipe Pemesanan Tiket
          </TableCell>
          <TableCell>{data.type_order}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Batas Pemesanan Tiket
          </TableCell>
          <TableCell>
            {format(new Date(data.registration_close_date), 'dd MMMM yyyy')} |{' '}
            {format(new Date(data.registration_close_date), 'HH:mm')} WIB
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[200px]'>
            Lokasi Acara
          </TableCell>
          <TableCell>Online (Zoom)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[200px]'>
            Waktu Acara
          </TableCell>
          <TableCell>
            {format(new Date(data.date_start), 'dd MMMM yyyy')} |{' '}
            {format(new Date(data.date_start), 'HH:mm')} WIB
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[200px]'>
            Jumlah Peserta
          </TableCell>
          <TableCell>1000/{data.capacity} peserta</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
