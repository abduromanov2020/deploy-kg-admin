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
import React, { FC, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { TPesertaData } from '@/types/acara-kampus-gratis/types';

const formatDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const formatTime = (time: string) => {
  return format(new Date(time), 'HH:mm');
};

export const columns: ColumnDef<TPesertaData>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'name',
    header: ' NAMA PESERTA',
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'email',
    header: ' EMAIL',
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'phone_number',
    header: 'NOMOR TELEPON',
    cell: ({ row }) => <div>{row.getValue('phone_number')}</div>,
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
              (statusValue === 'lunas'
                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                : statusValue === 'belum_lunas'
                  ? 'bg-red-100 text-red-800 hover:bg-red-200'
                  : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200') +
              ' rounded-md w-full justify-center'
            }
          >
            {formattedStatus}
          </Badge>
        );
      }

      return <Badge>-</Badge>;
    },
  },
];

export const TablePeserta: FC<{ data: TPesertaData[] }> = ({ data }) => {
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
