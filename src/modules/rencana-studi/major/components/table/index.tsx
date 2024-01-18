'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
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

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
type Checked = DropdownMenuCheckboxItemProps['checked'];

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TiArrowSortedDown } from 'react-icons/ti';

import { DeleteMajorModal } from '@/modules/rencana-studi/major/components/delete-major-modal';

import { TMajorItem } from '@/types/rencana-studi/majors/types';

interface TProps {
  data: TMajorItem[];
  startingIndex: number;
}

export const MajorTable = ({ data }: TProps) => {
  const { id } = useParams();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<TMajorItem>[] = [
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
            NAMA PRODI
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
      accessorKey: 'total_subjects',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            JUMLAH MATKUL
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <Link
          href={`/rencana-studi/program-studi/${id}/mata-kuliah/${row.getValue(
            'id',
          )}`}
          className='text-start font-semibold text-sm text-primary-500'
        >
          {row.getValue('total_subjects')} Mata Kuliah
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
          href={`/rencana-studi/program-studi/${id}/detail/${row.getValue(
            'id',
          )}`}
          className='text-start font-semibold text-sm text-primary-500'
        >
          Lihat Detail
        </Link>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <div className='flex gap-3 justify-end'>
            <DeleteMajorModal
              modalTrigger={
                <Button variant='destructive'>
                  <div className='flex gap-2 items-center'>Hapus</div>
                </Button>
              }
              id={row.getValue('id')}
            />
            <Button
              className='bg-primary-500 w-1/3 hover:bg-primary-600'
              asChild
            >
              <Link
                href={`/rencana-studi/program-studi/${id}/edit-prodi/${row.getValue(
                  'id',
                )}`}
              >
                Edit
              </Link>
            </Button>
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
