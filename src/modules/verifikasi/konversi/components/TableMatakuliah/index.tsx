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
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('no')}</div>
    ),
  },
  {
    accessorKey: 'pertemuan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          PERTEMUAN
          <TiArrowSortedDown className='ml-1 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        Pertemuan {row.getValue('pertemuan')}
      </div>
    ),
  },
  {
    accessorKey: 'jumlah_module',
    header: 'JUMLAH MODULE VIDEO',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('jumlah_module')}</div>
    ),
  },
  {
    accessorKey: 'waktu_video',
    header: 'WAKTU MENONTON VIDEO',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('waktu_video')} Menit
      </div>
    ),
  },
  {
    accessorKey: 'jumlah_jurnal',
    header: 'JUMLAH JURNAL',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('jumlah_jurnal')}</div>
    ),
  },
  {
    accessorKey: 'waktu_jurnal',
    header: 'WAKTU MEMBACA JURNAL',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('waktu_jurnal')} Menit
      </div>
    ),
  },
  {
    accessorKey: 'penugasan_individu',
    header: 'PENUGASAN INDIVIDU',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('penugasan_individu')}
      </div>
    ),
  },
  {
    accessorKey: 'waktu_penugasan',
    header: 'WAKTU PENGERJAAN PENUGASAN INDIVIDU',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('waktu_penugasan')} Menit
      </div>
    ),
  },
  {
    accessorKey: 'penugasan_kelompok',
    header: 'PENUGASAN KELOMPOK',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('penugasan_kelompok')}</div>
    ),
  },
];

export const TableMatakuliahKonversi: FC<{ data: unknown[] }> = ({ data }) => {
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
            <TableRow>
              <TableCell colSpan={2} className='text-center font-semibold'>Total</TableCell>
              <TableCell className='text-center'>20</TableCell>
              <TableCell className='text-center'>600 Menit</TableCell>
              <TableCell className='text-center'>20 Jurnal</TableCell>
              <TableCell className='text-center'>600 Menit</TableCell>
              <TableCell className='text-center'>20 Tugas</TableCell>
              <TableCell className='text-center'>600 Menit</TableCell>
              <TableCell className='text-center'>20 Tugas</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
