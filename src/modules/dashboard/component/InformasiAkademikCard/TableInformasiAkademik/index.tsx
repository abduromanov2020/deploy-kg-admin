'use client';
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
import { ArrowUpDown } from 'lucide-react';
import Link from 'next/link';
import React, { FC, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export type TInformasiAkademik = {
  id: string;
  prodi: string;
  head_prodi: string;
  matkul: string;
};

export const data: TInformasiAkademik[] = [
  {
    id: '001',
    prodi: 'Teknik Informatika',
    head_prodi: 'Dr. Ir. H. Muhammad Nur, M.T.',
    matkul: '76',
  },
  {
    id: '002',
    prodi: 'Teknik Sipil',
    head_prodi: 'Dr. Ir. H. Muhammad Nur, M.T.',
    matkul: '76',
  },
  {
    id: '003',
    prodi: 'Teknik Mesin',
    head_prodi: 'Dr. Ir. H. Muhammad Nur, M.T.',
    matkul: '76',
  },
  {
    id: '004',
    prodi: 'Teknik Elektro',
    head_prodi: 'Dr. Ir. H. Muhammad Nur, M.T.',
    matkul: '76',
  },
];

export const columns: ColumnDef<TInformasiAkademik>[] = [
  {
    accessorKey: 'number',
    header: 'NO.',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID PRODI
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'prodi',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA PRODI
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('prodi')}</div>,
  },
  {
    accessorKey: 'head_prodi',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KEPALA PRODI
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('head_prodi')}</div>,
  },
  {
    accessorKey: 'matkul',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUMLAH MATKUL
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('matkul')}</div>,
  },
  {
    accessorKey: 'detail',
    header: 'INFORMASI',
    cell: ({ row }) => (
      <Link
        className='text-primary-500 font-medium cursor-pointer hover:underline'
        href={`/verifikasi/rencana-studi/${row.index}`}
      >
        Detail
      </Link>
    ),
  },
];

export const TableInformasiAkademik: FC = () => {
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

  return (
    <div className='w-full '>
      <div className='rounded-md border '>
        <Table className='text-xs max-w-full scrollbar-thumb-primary-500  scrollbar-  scrollbar-track-sidebar scrollbar-thumb-rounded-md'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='font-semibold'>
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
                    <TableCell key={cell.id} className='py-2 px-4'>
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
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
