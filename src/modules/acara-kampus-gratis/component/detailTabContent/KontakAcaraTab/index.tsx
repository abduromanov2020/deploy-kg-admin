import React, { FC } from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TEventItem } from '@/types/acara-kampus-gratis/types';

export const KontakAcaraTabContent: FC<{ data: TEventItem }> = ({ data }) => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Nama Penanggung Jawab
          </TableCell>
          <TableCell>{data.contact_person_name} - Ketua Panitia</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Nomor Telepon
          </TableCell>
          <TableCell>{data.contact_person_phone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Email
          </TableCell>
          <TableCell>{data.contact_person_email}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
