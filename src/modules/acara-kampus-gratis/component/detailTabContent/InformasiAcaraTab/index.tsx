import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

export const InformasiAcaraTabContent = () => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[200px]'>
            Tipe Pemesanan Tiket
          </TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Batas Pemesanan Tiket
          </TableCell>
          <TableCell>11 Maret 2023 | 18:00 WIB</TableCell>
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
          <TableCell>05 Maret 2024 | 08:00 WIB</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[200px]'>
            Jumlah Peserta
          </TableCell>
          <TableCell>1000/1080 peserta</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
