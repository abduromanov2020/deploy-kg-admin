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
// type Checked = DropdownMenuCheckboxItemProps['checked'];
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

import { DeleteFacultyModal } from '@/modules/rencana-studi/faculty/components/delete-faculty-modal';

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
    // {
    //   id: 'select',
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={table.getIsAllPageRowsSelected()}
    //       onCheckedChange={(value: any) =>
    //         table.toggleAllPageRowsSelected(!!value)
    //       }
    //       aria-label='Select all'
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value: any) => row.toggleSelected(!!value)}
    //       aria-label='Select row'
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
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
    // {
    //   accessorKey: 'faculty_id',
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant='ghost'
    //         className='text-sm p-0 text-start font-semibold text-black'
    //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    //       >
    //         ID FAKULTAS
    //         <TiArrowSortedDown className='ml-2 h-4 w-4' />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => (
    //     <div className='text-start font-semibold text-sm'>
    //       {row.getValue('faculty_id')}
    //     </div>
    //   ),
    // },
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
    // {
    //   accessorKey: 'head_of_faculty',
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant='ghost'
    //         className='text-sm p-0 text-start font-semibold text-black'
    //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    //       >
    //         KEPALA FAKULTAS
    //         <TiArrowSortedDown className='ml-2 h-4 w-4' />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => (
    //     <div className='text-start font-semibold text-sm'>
    //       {row.getValue('head_of_faculty')}
    //     </div>
    //   ),
    // },
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
          href='/rencana-studi/program-studi/1'
          className='text-start font-semibold text-sm text-primary-500'
        >
          {row.getValue('total_majors')} Program Studi
        </Link>
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
          href='/rencana-studi/detail/1'
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
        const payment = row.original;

        return (
          <div className='flex gap-3 justify-end'>
            <DeleteFacultyModal
              modalTrigger={<Button className='bg-red-800 w-1/3'>Hapus</Button>}
            />
            <Button
              className='bg-primary-500 w-1/3 hover:bg-primary-600'
              asChild
            >
              <Link href='/rencana-studi/edit-fakultas/1'>Edit</Link>
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
