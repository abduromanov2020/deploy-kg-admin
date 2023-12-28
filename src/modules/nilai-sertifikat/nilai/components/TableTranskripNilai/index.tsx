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
    accessorKey: 'prodi',
    header: 'PROGRAM STUDI',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('prodi')}</div>
    ),
  },
  {
    accessorKey: 'kode_mk',
    header: 'KODE MATKUL',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('kode_mk')}</div>
    ),
  },
  {
    accessorKey: 'matakuliah',
    header: 'MATA KULIAH',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>{row.getValue('matakuliah')}</div>
    ),
  },
  {
    accessorKey: 'jumlah_sks',
    header: 'JUMLAH SKS',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('jumlah_sks')}
      </div>
    ),
  },
  {
    accessorKey: 'skor',
    header: 'SKOR',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('skor')}
      </div>
    ),
  },
  {
    accessorKey: 'nilai',
    header: 'NILAI',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('nilai')}
      </div>
    ),
  },
  {
    accessorKey: 'mutu',
    header: 'MUTU',
    cell: ({ row }) => (
      <div className='text-xs font-normal'>
        {row.getValue('mutu')}
      </div>
    ),
  },
];

export const TableTranskripNilai: FC<{ data: unknown[] }> = ({ data }) => {
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
