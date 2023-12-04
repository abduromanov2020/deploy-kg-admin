import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const TableCapaian = () => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRow>
          <TableHead className='border'>No</TableHead>
          <TableHead className='border'>Kriteria Penilaian</TableHead>
          <TableHead className='border'>Nilai</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='text-center border'>1</TableCell>
          <TableCell className='border'>
            Mampu Membuat desain yang berpusat pada pengguna dengan memahami
            persyaratan project, dan umpan balik pengguna.
          </TableCell>
          <TableCell className='border text-center'>90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='text-center border'>2</TableCell>
          <TableCell className='border'>
            Mampu membuat alur pengguna, kerangka gambar, prototipe, dan maket
          </TableCell>
          <TableCell className='border text-center'>90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='text-center border'>3</TableCell>
          <TableCell className='border'>
            Membuat Prototype dari design UI yang telah dibuat
          </TableCell>
          <TableCell className='border text-center'>90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='text-center border'>4</TableCell>
          <TableCell className='border'>
            Mampu mengidentifikasi dan memecahkan masalah UX Desain (Daya
            tanggap)
          </TableCell>
          <TableCell className='border text-center'>90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='text-center border'>5</TableCell>
          <TableCell className='border'>
            Memiliki kemampuan berkomunikasi secara visual melalui design UI/UX
          </TableCell>
          <TableCell className='border text-center'>90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='text-center border'>6</TableCell>
          <TableCell className='border'>
            Kemampuan berkomunikasi efektif: baik secara interpersonal dan
            digital
          </TableCell>
          <TableCell className='border text-center'>90</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCapaian;
