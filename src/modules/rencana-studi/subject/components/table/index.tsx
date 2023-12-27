'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
type Checked = DropdownMenuCheckboxItemProps['checked'];

import Link from 'next/link';
import { TiArrowSortedDown } from 'react-icons/ti';

import Pagination from '@/components/generals/pagination';
import { Badge } from '@/components/ui/badge';

import { DeleteSubjectModal } from '@/modules/rencana-studi/subject/components/delete-subject-modal';

export type TSubject = {
  subject_id: string;
  subject_name: string;
  lecturer: string;
  sks: number;
  status: 'Aktif' | 'Terkunci';
};

const data: TSubject[] = [
  {
    subject_id: '#ASD1',
    subject_name: 'Sistem Basis Data',
    lecturer: 'Dr. John Doe',
    sks: 5,
    status: 'Aktif',
  },
  {
    subject_id: '#ASD2',
    subject_name: 'Sistem Basis Data',
    lecturer: 'Prof. Jane Smith',
    sks: 4,
    status: 'Aktif',
  },
  {
    subject_id: '#ASD3',
    subject_name: 'Sistem Basis Data',
    lecturer: 'Dr. Robert Johnson',
    sks: 3,
    status: 'Aktif',
  },
  {
    subject_id: '#ASD4',
    subject_name: 'Sistem Basis Data',
    lecturer: 'Prof. Emily Davis',
    sks: 7,
    status: 'Aktif',
  },
  {
    subject_id: '#ASD5',
    subject_name: 'Sistem Basis Data',
    lecturer: 'Dr. William Anderson',
    sks: 2,
    status: 'Terkunci',
  },
  {
    subject_id: '#ASD6',
    subject_name: 'Sistem Basis Data',
    lecturer: 'Prof. Sarah Brown',
    sks: 6,
    status: 'Terkunci',
  },
];

export const columns: ColumnDef<TSubject>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value: any) =>
  //         table.toggleAllPageRowsSelected(!!value)
  //       }
  //       aria-label='Select all'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value: any) => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'no',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NO
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-center font-semibold text-sm'>{row.index + 1}</div>
    ),
  },
  {
    accessorKey: 'subject_id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KODE MATKUL
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('subject_id')}
      </div>
    ),
  },
  {
    accessorKey: 'subject_name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA MATKUL
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('subject_name')}
      </div>
    ),
  },
  {
    accessorKey: 'lecturer',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA DOSEN
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('lecturer')}
      </div>
    ),
  },
  {
    accessorKey: 'sks',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUMLAH SKS
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('sks')} SKS
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          STATUS
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue('status'); // Assuming 'status' is a string
      const badgeClassName = `rounded-md py-1 min-w-[70px] justify-center items-center ${
        status === 'Terkunci'
          ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          : 'bg-green-100 text-green-600 hover:bg-green-200'
      }`;

      return (
        <Badge key={row.original.subject_id} className={badgeClassName}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'details',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          INFORMASI
        </Button>
      );
    },
    cell: ({ row }) => (
      <Link
        href='/rencana-studi/program-studi/1/mata-kuliah/1/detail/1'
        className='text-start font-semibold text-sm text-primary-500'
      >
        Lihat Detail
      </Link>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className='flex gap-3'>
          <DeleteSubjectModal />
          <Button
            className='bg-primary-500 w-full hover:bg-primary-600'
            asChild
          >
            <Link href='/rencana-studi/program-studi/1/mata-kuliah/1/edit-matkul/1'>
              Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
];

export const SubjectTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/pengajuan/administrasi?page=${page}`);
  };
  return (
    <>
      <div className='rounded-md border '>
        <Table className='text-xs'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Pagination
            currentPage={2}
            totalPages={10}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
