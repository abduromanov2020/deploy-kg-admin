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
import { format, parseISO } from 'date-fns';
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

import { AccConfirmModal } from '@/modules/verifikasi/administrasi/components/AccConfirmModal';
import { AccRejectModal } from '@/modules/verifikasi/administrasi/components/AccRejectModal';

import { TPengajuanAdm } from '@/types/verifikasi/administrasi';

export const columns: ColumnDef<TPengajuanAdm>[] = [
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
    cell: ({ row }) => (
      <div className='text-sm font-semibold'>{row.index + 1}</div>
    ),
  },
  {
    accessorKey: 'student_name',
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
    cell: ({ row }) => (
      <div className='text-sm font-semibold'>
        {row.original.user_administration.full_name}
      </div>
    ),
  },
  {
    accessorKey: 'major',
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
    cell: ({ row }) => (
      <div className='text-sm font-semibold'>{row.original.biodata?.major}</div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <Button
        variant='ghost'
        className='text-sm'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        TANGGAL PENGAJUAN
        <TiArrowSortedDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const rawDate: unknown = row.getValue('created_at');

      if (typeof rawDate === 'string') {
        const dateObject = parseISO(rawDate);
        const formatted = format(dateObject, 'PPP'); // Adjust the format as needed
        return <div className='text-sm font-semibold'>{formatted}</div>;
      } else {
        return <div className='text-sm font-semibold'>Invalid Date</div>;
      }
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          EMAIL
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-sm font-semibold'>
        {row.original.user_administration.email}
      </div>
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
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
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
      return <div className='text-center text-sm'>BERKAS</div>;
    },
    cell: ({ row }) => (
      <Link
        href={`/verifikasi/administrasi/lihat-informasi/${row.getValue('id')}`}
      >
        <p className='text-primary-500 hover:underline font-semibold'>Detail</p>
      </Link>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className='flex gap-3'>
          <AccConfirmModal
            trigger={
              <Button
                className='bg-primary-500 hover:bg-primary-600'
                disabled={
                  row.getValue('status') === 'ACCEPTED' ||
                  row.getValue('status') === 'REJECTED'
                }
              >
                Setuju
              </Button>
            }
          />
          <AccRejectModal
            trigger={
              <Button
                className='bg-red-800 hover:bg-red-900'
                disabled={
                  row.getValue('status') === 'ACCEPTED' ||
                  row.getValue('status') === 'REJECTED'
                }
              >
                Tolak
              </Button>
            }
          />
        </div>
      );
    },
  },
];

export const TableAdministrasi: FC<{ data: TPengajuanAdm[] }> = ({ data }) => {
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
