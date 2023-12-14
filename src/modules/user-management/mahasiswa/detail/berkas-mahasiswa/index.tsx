import { useParams } from 'next/navigation';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
const FilesStudentDetail = () => {
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
                <TableCell className='font-medium'>
                  Kartu Tanda Penduduk (KTP)
                </TableCell>
                <TableCell className='border-2'>
                  {data?.data?.full_name ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Ijasah Terakhir</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.id ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Kartu Keluarga (KK)
                </TableCell>
                <TableCell className='border-2'>
                  {data?.data?.gender ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Transkrip Nilai Terbaru
                </TableCell>
                <TableCell className='border-2'>
                  {data?.data?.email ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Surat Rekomendasi</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.phone_number ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Pasfoto</TableCell>
                <TableCell className='border-2'>
                  <h1>test</h1>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default FilesStudentDetail;
