import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const ValidasiUnivSection = () => {
  return (
    <div className='my-3 w-full'>
      <Table className='border-2'>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium w-[30%]'>
              Nama Perguruan Tinggi Asal
            </TableCell>
            <TableCell className='border-2'>129391132</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>Program Studi Asal</TableCell>
            <TableCell className='border-2'>Raul</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>Jurusan Asal</TableCell>
            <TableCell className='border-2'>440</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>NIM Asal</TableCell>
            <TableCell className='border-2'>3.92</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>IPK Asal</TableCell>
            <TableCell className='border-2'>122</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>
              Program Studi di Kampus Gratis
            </TableCell>
            <TableCell className='border-2'>122</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ValidasiUnivSection;
