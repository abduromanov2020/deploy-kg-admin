import React, { FC } from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TEventItem } from '@/types/acara-kampus-gratis/types';

export const DeskripsiAcaraTabContent: FC<{ data: TEventItem }> = ({
  data,
}) => {
  return (
    <Table className=' border border-gray-400'>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium align-top border-r w-[250px]'>
            Deskripsi
          </TableCell>
          <TableCell>{data.description}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
