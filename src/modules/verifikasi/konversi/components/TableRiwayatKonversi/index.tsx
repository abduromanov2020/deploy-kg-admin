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

export const columns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
    cell: ({ row }) => <div className='text-xs font-normal'>{row.getValue('no')}</div>,
  },
  {
    accessorKey: 'nama_mahasiswa',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA MAHASISWA
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='text-xs font-normal'>{row.getValue('nama_mahasiswa')}</div>,
  },
  {
    accessorKey: 'tanggal_permintaan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          TANGGAL PERMINTAAN
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='text-xs font-normal'>{row.getValue('tanggal_permintaan')}</div>,
  },
  {
    accessorKey: 'total_permintaan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          TOTAL PERMINTAAN
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('total_permintaan')} Mata Kuliah</div>
    ),
  },
  {
    accessorKey: 'jenis_konversi',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JENIS KONVERSI
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('jenis_konversi')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          STATUS
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div
        className={`rounded-md p-1 text-center w-full font-semibold ${
          row.getValue('status') === 'ACCEPTED'
            ? 'bg-green-300 text-green-800'
            : row.getValue('status') === 'REJECTED'
              ? 'bg-red-300 text-red-800'
              : 'bg-yellow-300 text-yellow-800'
        }`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
  {
    accessorKey: 'id',
    header: () => {
      return <div className='text-center text-sm'>INFORMASI</div>;
    },
    cell: () => (
      // <Link href={`/verifikasi/konversi/detail-konversi/${row.index}`}>
        <p className='text-primary-500 hover:underline font-semibold'>Detail</p>
      // </Link>
    ),
  },
];

export const TableRiwayatKonversi: FC<{ data: unknown[] }> = ({ data }) => {
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
              <TableRow key={headerGroup.id} >
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
