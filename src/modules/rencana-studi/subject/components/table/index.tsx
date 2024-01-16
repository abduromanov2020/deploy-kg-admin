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

import { Button } from '@/components/ui/button';

import { DeleteSubjectModal } from '@/modules/rencana-studi/subject/components/delete-subject-modal';

import {
  TSubjectAllData,
  TSubjectItem,
} from '@/types/rencana-studi/subjects/types';

export const SubjectTable = ({ data }: TSubjectAllData) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const { id, id_major } = useParams();

  // console.log('hdjahdjh', data);

  const columns: ColumnDef<TSubjectItem>[] = [
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
    {
      accessorKey: 'code',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            KODE MATKUL
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className='text-start font-semibold text-sm'>
          {row.getValue('code')}
        </div>
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
            NAMA MATKUL
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
      accessorKey: 'major_name',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            PROGRAM STUDI
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className='text-start font-semibold text-sm'>
          {row.getValue('major_name')}
        </div>
      ),
    },
    {
      accessorKey: 'credit',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            SKS
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className='text-start font-semibold text-sm'>
          {row.getValue('credit')}
        </div>
      ),
    },
    {
      accessorKey: 'total_sessions',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            className='text-sm p-0 text-start font-semibold text-black'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            JUMLAH SESI
            <TiArrowSortedDown className='ml-2 h-4 w-4' />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className='text-start font-semibold text-sm'>
          {row.getValue('total_sessions')}
        </div>
      ),
    },
    // {
    //   accessorKey: 'sks',
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant='ghost'
    //         className='text-sm p-0 text-start font-semibold text-black'
    //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    //       >
    //         JUMLAH SKS
    //         <TiArrowSortedDown className='ml-2 h-4 w-4' />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => (
    //     <div className='text-start font-semibold text-sm'>
    //       {row.getValue('sks')} SKS
    //     </div>
    //   ),
    // },
    // {
    //   accessorKey: 'status',
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant='ghost'
    //         className='text-sm p-0 text-start font-semibold text-black'
    //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    //       >
    //         STATUS
    //         <TiArrowSortedDown className='ml-2 h-4 w-4' />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => {
    //     const status: string = row.getValue('status'); // Assuming 'status' is a string
    //     const badgeClassName = `rounded-md py-1 min-w-[70px] justify-center items-center ${
    //       status === 'Terkunci'
    //         ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
    //         : 'bg-green-100 text-green-600 hover:bg-green-200'
    //     }`;
    //     return (
    //       <Badge key={row.original.subject_id} className={badgeClassName}>
    //         {status}
    //       </Badge>
    //     );
    //   },
    // },
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
          href={`/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}/detail/${row.getValue(
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
          <div className='flex gap-3'>
            <DeleteSubjectModal
              modalTrigger={
                <Button variant='destructive'>
                  <div className='flex gap-2 items-center'>Hapus</div>
                </Button>
              }
              id={row.getValue('id')}
            />
            <Button
              className='bg-primary-500 w-full hover:bg-primary-600'
              asChild
            >
              <Link href='/rencana-studi/program-studi/1/mata-kuliah/1/edit-matkul/1'>
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
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </>
  );
};
