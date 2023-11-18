'use client';

import { Button } from '@/components/ui/button';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

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
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
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
import { FacultyTable } from '@/modules/rencana-studi/table';
import FacultyGridCardComponent from '@/modules/rencana-studi/grid';

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
      <div className='text-center'>{row.getValue('major_count')}</div>
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
    cell: ({ row }) => <div>detail</div>,
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

export const RencanaStudiModule = () => {
  const [showGrid, setShowGrid] = React.useState(false);
  const [showList, setShowList] = React.useState(true);
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
    <div className='bg-white rounded'>
      <div className='p-4 border-b-2'>
        <p className='text-base font-semibold'>Rencana Studi</p>
      </div>
      <div className='p-8'>
        <section className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input type='text' placeholder='Search' className='pl-10' />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Button className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
              <CiCirclePlus size={20} />
              <p className='leading-none'>Fakultas</p>
            </Button>
            <Button
              className={`${
                showGrid
                  ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                  : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
              }   p-3`}
              onClick={() => {
                setShowGrid(!showGrid); // Fix: Use the new state value directly
                setShowList(!showList);
              }}
            >
              <IoGridOutline size={24} />
            </Button>
            <Button
              className={`${
                showList
                  ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                  : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
              }   p-3`}
              onClick={() => {
                setShowGrid(!showGrid);
                setShowList(!showList); // Fix: Use the new state value directly
              }}
            >
              <IoListOutline size={24} />
            </Button>
          </div>
        </section>
        <div className='my-8'>
          <div className='w-full'>
            {showGrid ? (
              <section>
                <FacultyGridCardComponent />
              </section>
            ) : (
              <section>
                <FacultyTable />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
