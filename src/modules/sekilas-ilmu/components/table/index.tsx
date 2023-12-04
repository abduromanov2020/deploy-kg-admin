import {
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

import {
  TArticleData,
  TArticleItem,
  TGetAllArticle,
} from '@/types/sekilas-ilmu/types';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import Link from 'next/link';
import { DeteleArticleModal } from '@/modules/sekilas-ilmu/components/DeleteModal';
import { TiArrowSortedDown } from 'react-icons/ti';

const getMonthName = (monthIndex: number) => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  if (monthIndex >= 0 && monthIndex < months.length) {
    return months[monthIndex];
  } else {
    return 'Bulan tidak valid';
  }
};

export const columns: ColumnDef<TArticleItem>[] = [
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
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUDUL ARTIKEL
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('title')}
      </div>
    ),
  },
  {
    accessorKey: 'author.full_name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          PENULIS
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.original.author.full_name}
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: () => (
      <div className='text-sm text-start font-semibold text-black'>
        TANGGAL UNGGAHAN
      </div>
    ),
    cell: ({ row }) => {
      const rawDate: unknown = row.getValue('created_at');

      if (typeof rawDate === 'string') {
        const dateObject = new Date(rawDate);

        if (!isNaN(dateObject.getTime())) {
          const formatted = `${dateObject.getDate()} ${getMonthName(
            dateObject.getMonth(),
          )} ${dateObject.getFullYear()}`;
          return (
            <div className='text-start font-semibold text-sm'>{formatted}</div>
          );
        }
      }

      return (
        <div className='text-start font-semibold text-sm'>Invalid Date</div>
      );
    },
  },

  {
    accessorKey: 'jumlah_disimpan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm p-0 text-start font-semibold text-black'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUMLAH DISIMPAN
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-start font-semibold text-sm'>
        {row.getValue('jumlah_disimpan')}
      </div>
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
        href={''}
        className='text-start font-semibold text-sm text-primary-500'
      >
        Detail
      </Link>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return (
        <div className='flex gap-3'>
          <DeteleArticleModal />
          <Link href='/sekilas-ilmu/edit-artikel'>
            <Button className='bg-primary-500'>Edit</Button>
          </Link>
        </div>
      );
    },
  },
];

const TableSekilasIlmu = ({ data }: TGetAllArticle) => {
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
    <div className='w-full'>
      <div className='rounded-md border '>
        <Table className='text-xs'>
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
export default TableSekilasIlmu;
