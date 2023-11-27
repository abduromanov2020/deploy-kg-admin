import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

export const KontakAcaraTabContent = () => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Nama Penanggung Jawab
          </TableCell>
          <TableCell>Abdul - Ketua Panitia</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Nomor Telepon
          </TableCell>
          <TableCell>+62 89647298234</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Email
          </TableCell>
          <TableCell>Lionelabdul@gmail.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
