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
import React, { FC, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

export const columns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('no')}</div>
    ),
  },
  {
    accessorKey: 'semester',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          SEMESTER
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('semester')}</div>
    ),
  },
  {
    accessorKey: 'sks',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          SKS DIAMBIL
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('sks')}</div>
    ),
  },
  {
    accessorKey: 'sks_lulus',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          SKS LULUS
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('sks_lulus')}</div>
    ),
  },
  {
    accessorKey: 'ip',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          IP SEMESTER
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('ip')}
      </div>
    ),
  },
  {
    accessorKey: 'keterangan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KETERANGAN
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div
        className={`rounded-md px-2 py-1 text-center w-max font-semibold mx-auto ${
          row.getValue('keterangan') === 'Lulus'
            ? 'bg-green-300 text-green-800'
            : row.getValue('keterangan') === 'Tidak Lulus'
              ? 'bg-red-300 text-red-800'
              : 'bg-yellow-300 text-yellow-800'
        }`}
      >
        {row.getValue('keterangan')}
      </div>
    ),
  },
  {
    accessorKey: 'id',
    header: () => {
      return <div className='text-center text-sm'>INFORMASI</div>;
    },
    cell: ({ row }) => (
      <Link href={`/nilai-dan-sertifikat/nilai/detail-mahasiswa/${row.index}`}>
        <p className='text-primary-500 hover:underline font-semibold'>Detail</p>
      </Link>
    ),
  },
];

export const TableInformasiMatakuliah: FC<{ data: unknown[] }> = ({ data }) => {
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
        <Table className='text-sm max-w-full'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='text-center'>
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
                    <TableCell key={cell.id} className='text-center'>
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
    </div>
  );
};
