import { useParams } from 'next/navigation';
import React from 'react';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
const StudentInformationDetail = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useUserById(id);
  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='w-full'>
          <Table className='border-2'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Nama Mahasiswa</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.full_name ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>NIK</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.id ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jenis Kelamin</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gender ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Email</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.email ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Nomor Handphone</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.phone_number ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Status</TableCell>
                <TableCell className='border-2'>
                  <Badge
                    className={`${
                      data?.data?.status == 'active'
                        ? 'bg-green-100 text-green-800 py-2'
                        : 'bg-red-400 text-red-600'
                    } flex justify-center rounded-md w-[10%] text-center`}
                  >
                    <h1>
                      {data?.data?.status == 'active' ? 'Aktif' : 'Tidak Aktif'}
                    </h1>
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Keterangan</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.full_name ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Pendidikan Terakhir
                </TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Tempat Lahir</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Tanggal Lahir</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Alamat Lengkap</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Provinsi</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Kode Pos</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Universitas Asal</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>NIM/NPM</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Program Studi</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Semester</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gpa ?? '-'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default StudentInformationDetail;
