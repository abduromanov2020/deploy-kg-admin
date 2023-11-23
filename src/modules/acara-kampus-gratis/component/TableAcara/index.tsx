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
import { format } from 'date-fns';
import { ArrowUpDown } from 'lucide-react';
import Link from 'next/link';
import React, { FC, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { DeleteConfirmModal } from '@/modules/acara-kampus-gratis/component/DeleteConfirmationModal';

const formatDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const formatTime = (time: string) => {
  return format(new Date(time), 'HH:mm');
};

export type TAcara = {
  event_name: string;
  description: string;
  status: string;
  dateTime: string;
  capacity: number;
  registered: number;
};
export const columns: ColumnDef<TAcara>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'event_name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA ACARA
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('event_name')}</div>,
  },
  {
    accessorKey: 'dateTime',
    header: 'TANGGAL ACARA',
    cell: ({ row }) => <div>{formatDate(row.getValue('dateTime'))}</div>,
  },
  {
    accessorKey: 'dateTime',
    header: 'WAKTU ACARA',
    cell: ({ row }) => <div>{formatTime(row.getValue('dateTime'))}</div>,
  },
  {
    accessorKey: 'registered',
    header: 'JUMLAH PESERTA',
    cell: ({ row }) => (
      <div>
        {row.original.registered}/{row.original.capacity}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const statusValue = row.original.status;

      // Add a null check to ensure that statusValue is defined
      if (statusValue) {
        const formattedStatus = statusValue
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <Badge
            className={
              (statusValue === 'berlangsung'
                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                : statusValue === 'segera_hadir'
                  ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  : 'bg-red-100 text-red-800 hover:bg-red-200') + 'rounded-md'
            }
          >
            {formattedStatus}
          </Badge>
        );
      }

      return <Badge>-</Badge>;
    },
  },
  {
    accessorKey: 'detail',
    header: 'INFORMASI',
    cell: ({ row }) => (
      <Link
        className='text-primary-500 font-medium cursor-pointer hover:underline'
        href={`/acara-kampus-gratis/${row.index}`}
      >
        Detail
      </Link>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className='flex gap-3'>
          <DeleteConfirmModal />
          <Link
            href={`/acara-kampus-gratis/edit-acara/${row.index}`}
            className='text-sm bg-primary-500 px-5 py-1 rounded-md text-white flex justify-center items-center gap-1 hover:bg-primary-400'
          >
            Edit
          </Link>
        </div>
      );
    },
  },
];

export const TableAcara: FC<{ data: TAcara[] }> = ({ data }) => {
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
        <Table className='text-xs max-w-full'>
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
      {/* <div className='flex items-center justify-end space-x-2 py-4'>
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
      </div> */}
    </div>
  );
};
