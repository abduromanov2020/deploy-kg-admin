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

export type TFaculty = {
  faculty_id: string;
  faculty_name: string;
  head_of_faculty: string;
  major_count: number;
};

const data: TFaculty[] = [
  {
    faculty_id: '#ASD1',
    faculty_name: 'Fakultas Teknik',
    head_of_faculty: 'Dr. John Doe',
    major_count: 5,
  },
  {
    faculty_id: '#ASD2',
    faculty_name: 'Fakultas Ilmu Sosial',
    head_of_faculty: 'Prof. Jane Smith',
    major_count: 4,
  },
  {
    faculty_id: '#ASD3',
    faculty_name: 'Fakultas Ekonomi',
    head_of_faculty: 'Dr. Robert Johnson',
    major_count: 3,
  },
  {
    faculty_id: '#ASD4',
    faculty_name: 'Fakultas Kedokteran',
    head_of_faculty: 'Prof. Emily Davis',
    major_count: 7,
  },
  {
    faculty_id: '#ASD5',
    faculty_name: 'Fakultas Hukum',
    head_of_faculty: 'Dr. William Anderson',
    major_count: 2,
  },
  {
    faculty_id: '#ASD6',
    faculty_name: 'Fakultas Seni dan Humaniora',
    head_of_faculty: 'Prof. Sarah Brown',
    major_count: 6,
  },
];

export const columns: ColumnDef<TFaculty>[] = [
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
    header: 'NO',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'faculty_id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID FAKULTAS
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('faculty_id')}</div>
    ),
  },
  {
    accessorKey: 'faculty_name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA FAKULTAS
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('faculty_name')}</div>
    ),
  },
  {
    accessorKey: 'head_of_faculty',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KEPALA FAKULTAS
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('head_of_faculty')}</div>
    ),
  },
  {
    accessorKey: 'major_count',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUMLAH PRODI
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-center'>
        {row.getValue('major_count')} Program Studi
      </div>
    ),
  },
  {
    accessorKey: 'details',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          INFORMASI
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='text-center'>detail</div>,
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
    </>
  );
};
