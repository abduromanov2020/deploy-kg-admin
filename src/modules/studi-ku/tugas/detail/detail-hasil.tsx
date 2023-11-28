import Image from 'next/image';
import Avatar from 'react-avatar';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const DetailHasil = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Table className='w-full border border-gray-200'>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Mahasiswa</TableHead>
            <TableHead>Tanggal Diunggah</TableHead>
            <TableHead>Terakhir Diubah</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Nilai</TableHead>
            <TableHead>Berkas</TableHead>
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
              <TableCell>25/02/2021 23:59:59</TableCell>
              <TableCell>25/02/2021 23:59:59</TableCell>
              <TableCell>
                <span className='bg-green-200 text-green-700 rounded-md text-xs px-6 py-1'>
                  Selesai
                </span>
              </TableCell>
              <TableCell>100</TableCell>
              <TableCell>
                <a
                  href='#'
                  className='text-blue-500 hover:text-blue-700 hover:underline'
                >
                  Modul-1.pdf
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-end pt-5'>
        <Button variant='primary'>
          <Image
            src='/svg/edit.svg'
            alt='Tambah Hasil'
            width={20}
            height={20}
            className='mr-2'
          />
          Edit Hasil
        </Button>
      </div>
    </>
  );
};

export default DetailHasil;
