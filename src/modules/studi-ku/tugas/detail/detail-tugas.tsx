import Image from 'next/image';
import Link from 'next/link';
import { TbEdit } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const DetailTugas = () => {
  return (
    <Table className='w-full border border-gray-200'>
      <TableBody>
        <TableRow>
          <TableCell>Deskripsi Tugas</TableCell>
          <TableCell>Silahkan kerjakan quiz 1 dengan baik dan benar.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mata Kuliah</TableCell>
          <TableCell>Manajemen Keuangan</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Batas Pengumpulan</TableCell>
          <TableCell>25/02/2021 23:59:59</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Terakhir Diubah</TableCell>
          <TableCell>25/02/2021 23:59:59</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jumlah Responden</TableCell>
          <TableCell>20/30 Responden</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>File Tugas</TableCell>
          <TableCell>
            <Card className='w-3/4'>
              <CardHeader className='border-b-2 py-2 px-3'>
                <CardTitle className='p-0 text-base font-medium'>
                  Modul-1.pdf
                </CardTitle>
              </CardHeader>
              <CardContent className='bg-gray-500 flex justify-center h-[200px]'>
                <Image
                  src='/svg/file-lines.svg'
                  alt='file-lines'
                  width={50}
                  height={50}
                />
              </CardContent>
            </Card>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>
            <div className='flex gap-3'>
              <Link href='/studi-ku/tugas/edit'>
                <Button variant='primaryOutline' className='flex gap-2'>
                  <TbEdit size={15} />
                  Edit Informasi
                </Button>
              </Link>
              <Link href='/studi-ku/tugas/edit-nilai/1'>
                <Button variant='primary' className='flex gap-2'>
                  <TbEdit size={15} />
                  Edit Nilai
                </Button>
              </Link>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DetailTugas;
