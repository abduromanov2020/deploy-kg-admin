'use client';

import { Button } from '@/components/ui/button';

import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
type Checked = DropdownMenuCheckboxItemProps['checked'];

import { ArrowUpDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import Pagination from '@/components/generals/pagination';
import { TiArrowSortedDown } from 'react-icons/ti';
import Link from 'next/link';

export type TMajor = {
  major_id: string;
  major_name: string;
  head_of_major: string;
  subject_count: number;
};

const data: TMajor[] = [
  {
    major_id: '#ASD1',
    major_name: 'Blockchain',
    head_of_major: 'Dr. John Doe',
    subject_count: 5,
  },
  {
    major_id: '#ASD2',
    major_name: 'Blockchain',
    head_of_major: 'Prof. Jane Smith',
    subject_count: 4,
  },
  {
    major_id: '#ASD3',
    major_name: 'Blockchain',
    head_of_major: 'Dr. Robert Johnson',
    subject_count: 3,
  },
  {
    major_id: '#ASD4',
    major_name: 'Blockchain',
    head_of_major: 'Prof. Emily Davis',
    subject_count: 7,
  },
  {
    major_id: '#ASD5',
    major_name: 'Blockchain',
    head_of_major: 'Dr. William Anderson',
    subject_count: 2,
  },
  {
    major_id: '#ASD6',
    major_name: 'Blockchain',
    head_of_major: 'Prof. Sarah Brown',
    subject_count: 6,
  },
];

export const columns: ColumnDef<TMajor>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: 'major_id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID PRODI
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('major_id')}
      </div>
    ),
  },
  {
    accessorKey: 'major_name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA PRODI
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('major_name')}
      </div>
    ),
  },
  {
    accessorKey: 'head_of_major',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KEPALA PRODI
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('head_of_major')}
      </div>
    ),
  },
  {
    accessorKey: 'subject_count',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUMLAH MATKUL
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Link
        href={'/rencana-studi/program-studi/1/mata-kuliah/1'}
        className='text-start font-semibold text-sm text-primary-500'
      >
        {row.getValue('subject_count')} Mata Kuliah
      </Link>
    ),
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
        href={'/rencana-studi/program-studi/1/detail/2'}
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
          <Button className='bg-red-800'>Hapus</Button>
          <Button className='bg-primary-500'>Edit</Button>
        </div>
      );
    },
  },
];

export const MajorTable = () => {
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
