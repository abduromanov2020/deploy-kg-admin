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
import Link from 'next/link';
import React, { useState } from 'react';
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

import { EditFacultyModal } from '@/modules/rencana-studi/faculty/components/editFacultyModal';
import DeleteFacultyModal from '@/modules/rencana-studi/faculty/faculty-delete';

import {
  TFacultiesAllData,
  TFacultiesItem,
} from '@/types/rencana-studi/faculties/types';

export const FacultyTable = ({ data }: TFacultiesAllData) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<TFacultiesItem>[] = [
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
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            NAMA FAKULTAS
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className='text-start font-semibold text-sm'>
          {row.getValue('name')}
        </div>
      ),
    },
    {
      accessorKey: 'total_majors',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            JUMLAH PRODI
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <Link
          href={`/rencana-studi/program-studi/${row.getValue('id')}`}
          className='text-start font-semibold text-sm text-primary-500'
        >
          {row.getValue('total_majors')} Program Studi
        </Link>
      ),
    },
    {
      accessorKey: 'id',
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
          href={`/rencana-studi/fakultas/detail/${row.getValue('id')}`}
          className='text-start font-semibold text-sm text-primary-500'
        >
          Lihat Detail
        </Link>
      ),
    },
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          ></Button>
        );
      },
      cell: ({ row }) => {
        return (
          <div className='flex gap-3 justify-end'>
            <EditFacultyModal
              modalTrigger={
                <Button variant='primary'>
                  <div className='flex gap-2 items-center'>Edit Fakultas</div>
                </Button>
              }
              id={row.getValue('id')}
              name={row.getValue('name')}
              thumbnail={row.getValue('thumbnail')}
              slug={row.getValue('slug')}
            />
            <DeleteFacultyModal
              modalTrigger={
                <Button variant='destructive'>
                  <div className='flex gap-2 items-center'>Hapus Fakultas</div>
                </Button>
              }
              id={row.getValue('id')}
            />
          </div>
        );
      },
    },
  ];

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

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/pengajuan/administrasi?page=${page}`);
  };
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
    </>
  );
};
