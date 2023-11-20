import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileDownload, FaFilter } from 'react-icons/fa';

import { useUser } from '@/hooks/user-management/getuser/hook';

import Pagination from '@/components/generals/pagination';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const MahasiswaModule = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const router = useRouter();
  const { data, isLoading, refetch } = useUser(
    Number(page),
    10,
    searchQuery,
    'STUDENT',
  );
  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);

    router.push(`/user-management/mahasiswa?page=${page}`);
  };
  return (
    <>
      <div className='bg-white py-10 px-6 mx-auto rounded-md'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          User Management Mahasiswa
        </h1>
        <div className='pt-6 px-4'>
          <div className='flex place-items-center justify-between'>
            <div className='w-1/3 relative'>
              <Input type='text' placeholder='Search' className='pl-10' />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='space-x-8'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
                    <div className='flex place-items-center gap-2'>
                      <FaFilter /> Filter
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                  <DropdownMenuLabel>Select Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <span className='text-slate-800 bg-slate-300 px-4 rounded py-1 cursor-pointer'>
                        All Status
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className='text-green-800 bg-green-300 px-4 rounded py-1 cursor-pointer'>
                        Aktif
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className='text-red-800 bg-red-300 px-4 rounded py-1 cursor-pointer'>
                        Tidak Aktif
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className='text-yellow-800 bg-yellow-300 px-4 rounded py-1 cursor-pointer'>
                        Cuti
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
              <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white  hover:bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaFileDownload /> Unduh
                </div>
              </button>
            </div>
          </div>
          <div className='border-2 mt-2'>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='text-black font-bold'>No</TableHead>
                    <TableHead className='text-black font-bold '>
                      ID MAHASISWA
                    </TableHead>
                    <TableHead className='text-black font-bold '>
                      NAMA MAHASISWA
                    </TableHead>
                    <TableHead className='text-black font-bold '>
                      FAKULTAS
                    </TableHead>
                    <TableHead className='text-black font-bold '>
                      PROGRAM STUDI
                    </TableHead>
                    <TableHead className='text-black font-bold text-center '>
                      STATUS
                    </TableHead>
                    <TableHead className='text-black font-bold text-center  '>
                      INFORMASI
                    </TableHead>
                    <TableHead className='invisible'>Edit</TableHead>
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
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell>
                        <div className='bg-green-500 text-white px-4 py-1 rounded'>
                          Aktif
                        </div>
                      </TableCell>
                      <TableCell className='text-center'>
                        <Link
                          href={`/user-management/mahasiswa/detail/${user.id}`}
                          className='text-blue-600 font-semibold'
                        >
                          Detail
                        </Link>
                      </TableCell>
                      <TableCell>
                        <button className='px-6 py-2 shadow-md text-white bg-blue-600 rounded-md  hover:bg-blue-800 hover:transition'>
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
              Menampilkan {page} hingga {Number(page) * 10} dari{' '}
              {data?.data?.max_page} entri
            </p>
            <Pagination
              currentPage={Number(page)}
              totalPages={Number(data?.data?.max_page)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MahasiswaModule;
