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
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Avatar from 'react-avatar';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export type TMahasiswa = {
  name: string;
  email: string;
  rank: number;
  point: number;
  image?: string | null;
};

export const data: TMahasiswa[] = [
  {
    name: 'Mahasiswa 1',
    email: 'mahasiswa1@mail.com',
    rank: 1,
    point: 700,
    image: null,
  },
  {
    name: 'Mahasiswa 2',
    email: 'mahasiswa2@mail.com',
    rank: 2,
    point: 600,
    image: null,
  },
  {
    name: 'Mahasiswa 3',
    email: 'mahasiswa3@mail.com',
    rank: 3,
    point: 500,
    image: null,
  },
  {
    name: 'Mahasiswa 4',
    email: 'mahasiswa4@mail.com',
    rank: 4,
    point: 400,
    image: null,
  },
  {
    name: 'Mahasiswa 5',
    email: 'mahasiswa5@mail.com',
    rank: 5,
    point: 300,
    image: null,
  },
  {
    name: 'Mahasiswa 6',
    email: 'mahasiswa6@mail.com',
    rank: 6,
    point: 200,
    image: null,
  },
];

export const columns: ColumnDef<TMahasiswa>[] = [
  {
    accessorKey: 'rank',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          PERINGKAT
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('rank')}</div>,
  },
  {
    accessorKey: 'mahasiswa',
    header: 'MAHASISWA',
    cell: ({ row }) => (
      <div className='flex gap-2'>
        <div>
          {row?.original.image !== null ? (
            <Image
              src={row?.original.image as string}
              width={35}
              height={35}
              alt='avatar'
              className='w-10 h-10 rounded-md object-cover bg-center'
            />
          ) : (
            <Avatar
              name={row?.original?.name || 'a'}
              color='#F26800'
              className='rounded-md'
              size='35'
            />
          )}
        </div>
        <div className='flex flex-col justify-between'>
          <p>{row?.original?.name}</p>
          <p className='text-[10px]'>{row?.original?.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'point',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          POIN
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('point')}</div>,
  },
];

export const TablePapanScore: FC = () => {
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
      <div className='flex items-center justify-end space-x-2 py-4 '>
        <div className='flex-1 text-xs text-muted-foreground'>
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
