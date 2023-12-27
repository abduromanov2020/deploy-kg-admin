import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

import { useUser } from '@/hooks/user-management/getuser/hook';

import Pagination from '@/components/generals/pagination';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
const DataTableAdmin = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const router = useRouter();
  const { data, isLoading } = useUser(Number(page), 10, 'ADMIN', searchQuery, [
    '',
  ]);

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);

    router.push(`/user-management/admin?page=${page}`);
  };
  const tableHead = [
    'No',
    'ID ADMIN',
    'NAMA ADMIN',
    'EMAIL',
    'INFORMASI',
    'EDIT',
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
                  <TableCell className='w-[30%]'>{user.id}</TableCell>
                  <TableCell>{user.full_name}</TableCell>
                  <TableCell>{user.role}</TableCell>

                  <TableCell className='text-center'>
                    <Link
                      href={`/user-management/admin/detail/${user.id}`}
                      className='text-blue-600 font-semibold'
                    >
                      Detail
                    </Link>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() =>
                        router.push(
                          `/user-management/admin/editdata/${user.id}`,
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

export default DataTableAdmin;
