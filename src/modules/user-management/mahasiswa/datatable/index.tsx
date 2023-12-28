import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { useUser } from '@/hooks/user-management/getuser/hook';

import Pagination from '@/components/generals/pagination';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Search {
  searchQuery: string;
  major: string[];
}

const MahasiswaDataTable: React.FC<Search> = ({ searchQuery, major }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const router = useRouter();
  const { data, isLoading, refetch } = useUser(
    Number(page),
    10,
    'STUDENT',
    searchQuery,
    major,
  );
  console.log(data);

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    router.push(`/user-management/mahasiswa?page=${page}`);
  };

  const tableHead = [
    'No',
    'ID MAHASISWA',
    'NAMA MAHASISWA',
    'PROGRAM STUDI',
    'STATUS',
    'INFORMASI',
    '',
  ];
  return (
    <>
      <div className='border-2 mt-2'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {tableHead.map((head, i) => (
                  <TableHead key={i} className='text-black font-bold'>
                    {head}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.users.map((user, i) => (
                <TableRow key={i}>
                  <TableCell className='font-medium'>
                    {i + 1 + (Number(page) - 1) * 10}
                  </TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.full_name}</TableCell>
                  <TableCell>{user.faculty ?? '-'}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        user.status == 'active'
                          ? 'bg-green-100 text-green-800 py-2'
                          : 'bg-red-400 text-red-600'
                      } flex justify-center rounded-md w-full text-center`}
                    >
                      <h1>
                        {user.status == 'active' ? 'Aktif' : 'Tidak Aktif'}
                      </h1>
                    </Badge>
                  </TableCell>
                  <TableCell className='text-center'>
                    <button type='button'>
                      <Link
                        href={`/user-management/mahasiswa/detail/${user.id}`}
                        className='text-blue-600 font-semibold'
                      >
                        Detail
                      </Link>
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() =>
                        router.push(
                          `/user-management/mahasiswa/editdata/${user.id}`,
                        )
                      }
                      className='px-6 py-2 shadow-md text-white bg-blue-600 rounded-md  hover:bg-blue-800 hover:transition'
                    >
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <div className='flex justify-between place-items-center pt-5'>
        <p className='text-slate-500'>
          Menampilkan {1 + (Number(page) - 1) * 10} hingga {Number(page) * 10}{' '}
          dari {data?.data?.max_page} entri
        </p>
        <Pagination
          currentPage={Number(page)}
          totalPages={Number(data?.data?.max_page)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default MahasiswaDataTable;
