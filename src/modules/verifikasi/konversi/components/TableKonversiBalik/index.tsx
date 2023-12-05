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
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


import { AccRejectModal } from '@/modules/verifikasi/konversi/components/AccRejectModal';
import { AccConfirmModal } from '@/modules/verifikasi/konversi/components/AccConfirmModal';

export const columns: ColumnDef<unknown>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: unknown) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label='Select all'
        className='mr-5'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='mr-5'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'no',
    header: 'NO',
    cell: ({ row }) => <div className='text-sm font-semibold'>{row.getValue('no')}</div>,
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
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='text-sm font-semibold'>{row.getValue('nama_mahasiswa')}</div>,
  },
  {
    accessorKey: 'prodi',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          PROGRAM STUDI
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='text-sm font-semibold'>{row.getValue('prodi')}</div>,
  },
  {
    accessorKey: 'biaya_konversi',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          BIAYA KONVERSI
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-sm font-semibold'>Rp. {row.getValue('biaya_konversi')}</div>
    ),
  },
  {
    accessorKey: 'id',
    header: () => {
      return <div className='text-center text-sm'>KONVERSI</div>;
    },
    cell: ({ row }) => (
      <Link href={`/verifikasi/konversi/detail-konversi-balik/${row.index}`}>
        <p className='text-primary-500 hover:underline font-semibold'>Detail</p>
      </Link>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return (
        <div className='flex gap-3'>
          <AccConfirmModal
            buttonTrigger={<Button className='bg-primary-500 hover:bg-primary-600'>Setuju</Button>}
            dialogTitle='Apakah Anda ingin menyetujui
Konversi Balik SKS ini?'
            buttonSubmit={
              <Button type='submit' className='bg-primary-500 hover:bg-primary-600 w-full'>
                Setuju
              </Button>
            }
          />
          <AccRejectModal
            buttonTrigger={<Button className='bg-red-800 hover:bg-red-900'>Tolak</Button>}
            dialogTitle='Apakah Anda ingin menolak
            Konversi Balik SKS ini?'
            buttonSubmit={
              <Button type='submit' className='bg-red-800 hover:bg-red-900 w-full'>
                Tolak
              </Button>
            }
          />
        </div>
      );
    },
  },
];

export const TableKonversiBalik: FC<{ data: unknown[] }> = ({ data }) => {
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
