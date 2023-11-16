import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileDownload, FaFilter } from 'react-icons/fa';

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
  const invoices = [
    {
      name: 'Viper',
      paymentStatus: 'Paid',
      faculty: 'Tata Boga',
      id_mahasiswa: '1283798123',
      status: 'AKTIF',
    },
    {
      name: 'Iso',
      paymentStatus: 'Pending',
      faculty: 'Mancing Mania',
      id_mahasiswa: '1239281390',
      status: 'AKTIF',
    },
    {
      name: 'Reyna',
      paymentStatus: 'Unpaid',
      faculty: 'Tahu Borax',
      id_mahasiswa: '9128309123',
      status: 'AKTIF',
    },
    {
      name: 'Jett',
      paymentStatus: 'Paid',
      faculty: 'Mata mata',
      id_mahasiswa: '91239018390',
      status: 'AKTIF',
    },
    {
      name: 'Deadlock',
      paymentStatus: 'Paid',
      faculty: 'Nganggur',
      id_mahasiswa: '9128390123',
      status: 'AKTIF',
    },
    {
      name: 'Breach',
      paymentStatus: 'Pending',
      faculty: 'Nganggur',
      id_mahasiswa: '9120938123',
      status: 'CUTI',
    },
    {
      name: 'Omen',
      paymentStatus: 'Unpaid',
      faculty: 'Teknik mancing',
      id_mahasiswa: '912830912',
      status: 'AKTIF',
    },
    {
      name: 'Astra',
      paymentStatus: 'Unpaid',
      faculty: 'au dah',
      id_mahasiswa: '91283091823',
      status: 'TIDAK AKTIF',
    },
    {
      name: 'Cyper',
      paymentStatus: 'Unpaid',
      faculty: 'au dah',
      id_mahasiswa: '91283091823',
      status: 'TIDAK AKTIF',
    },
    {
      name: 'Brimstone',
      paymentStatus: 'Unpaid',
      faculty: 'au dah',
      id_mahasiswa: '91283091823',
      status: 'TIDAK AKTIF',
    },
  ];
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
                {invoices.map((invoice, i) => (
                  <TableRow key={i}>
                    <TableCell className='font-medium'>{i + 1}</TableCell>
                    <TableCell>{invoice.id_mahasiswa}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.faculty}</TableCell>
                    <TableCell>{invoice.faculty}</TableCell>
                    <TableCell>
                      <div
                        className={`text-center ${
                          invoice.status == 'AKTIF'
                            ? 'bg-green-300 text-green-800'
                            : invoice.status == 'TIDAK AKTIF'
                              ? 'bg-red-500 text-red-800'
                              : 'bg-yellow-300 text-yellow-800'
                        } font-semibold rounded-md py-1`}
                      >
                        {invoice.status == 'AKTIF'
                          ? 'Aktif'
                          : invoice.status == 'TIDAK AKTIF'
                            ? 'Tidak Aktif'
                            : 'Cuti'}
                      </div>
                    </TableCell>
                    <TableCell className='text-center'>
                      <Link
                        href={`/user-management/mahasiswa/detail/${i + 1}`}
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
          </div>
          <div className='flex justify-between place-items-center pt-5'>
            <p className='text-slate-500'>
              Menampilkan 1 hingga 10 dari 4 entri
            </p>
            <p>paginasi </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MahasiswaModule;
