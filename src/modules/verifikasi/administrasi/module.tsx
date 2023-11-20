'use client';
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
import { format } from 'date-fns';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';
import { FaFileExport } from 'react-icons/fa6';
import { TiArrowSortedDown } from 'react-icons/ti';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
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

import Pagination from '@/components/generals/pagination';
import { Checkbox } from '@/components/ui/checkbox';
// import { useSearchParams } from 'next/navigation';
// import { useGetPengjuanAdm } from '@/hooks/verifikasi/administrasi/hook';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: unknown) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label='Select all'
        className='mr-5'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='mr-5'
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
    accessorKey: 'student_name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NAMA MAHASISWA
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>Mahasiswa {row.index + 1}</div>,
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <Button
        variant='ghost'
        className='text-xs'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        TANGGAL PENGAJUAN
        <TiArrowSortedDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: () => <div className='font-medium'>12/12/2023</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          EMAIL
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          STATUS
          <TiArrowSortedDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div
        className={`rounded-md p-1 text-center w-full font-semibold ${
          row.getValue('status') === 'success'
            ? 'bg-green-300 text-green-800'
            : row.getValue('status') === 'failed'
              ? 'bg-red-300 text-red-800'
              : 'bg-yellow-300 text-yellow-800'
        }`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => {
      return <div className='text-center'>BERKAS</div>;
    },
    cell: ({ row }) => (
      <Link href={`/verifikasi/administrasi/lihat-informasi/${row.index + 1}`}>
        <h3 className='text-primary-500 hover:underline font-medium'>Detail</h3>
      </Link>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return (
        <div className='flex gap-3'>
          <Button className='bg-red-800 hover:bg-red-900'>Tolak</Button>
          <Button className='bg-primary-500 hover:bg-primary-600'>
            Setuju
          </Button>
        </div>
      );
    },
  },
];

const VerifikasiAdministrasiModule = () => {
  const [date, setDate] = useState<Date>();
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const [position, setPosition] = React.useState('bottom');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  // const params = useSearchParams();
  // const [filter, setFilter] = useState('');

  // const page = Number(params.get('page')) || 1;
  // const searchQuery = params.get('search') || '';

  // const [option, setOption] = useState({
  //   search: '',
  //   limit: 10,
  // });

  // const {
  //   data: pengajuan,
  //   refetch: refetchPengajuan,
  //   isLoading,
  // } = useGetPengjuanAdm(page, option.search, option.limit, filter);

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

  const handleDropdownToggle = () => {
    setDropdownOpen(true);
  };

  const handleDropdownSelect = () => {
    setDropdownOpen(false);
  };

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    // refetchPengajuan();
    // router.push(`/pengajuan/administrasi?page=${page}`);
  };

  return (
    <div className='bg-white w-full rounded-md flex flex-col'>
      <div className='border-b border-dark-200 p-5'>
        <h3 className='font-semibold text-lg'>Verifikasi Administrasi</h3>
      </div>
      <div className='flex flex-col gap-7 p-7'>
        <div className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input type='text' placeholder='Search' className='pl-10' />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className={cn(
                    'text-primary-500 hover:text-primary-600 ',
                    'w-[280px] justify-start text-left font-normal shadow-md',
                    !date && '',
                  )}
                >
                  <FaCalendarAlt className='mr-2 h-4 w-4' />
                  {date ? format(date, 'PPP') : <span>Pilih Tanggal</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <DropdownMenu
              onOpenChange={handleDropdownToggle}
              open={dropdownOpen}
              // onSelect={handleDropdownSelect}
            >
              <DropdownMenuTrigger>
                <Button
                  variant='outline'
                  className='
                    text-primary-500 hover:text-primary-600 justify-start font-normal shadow-md '
                >
                  <FaFilter className='mr-2' />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Panel
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuLabel>Batch</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='bottom'>
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='right'>
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuItem
                  onSelect={handleDropdownSelect}
                  className='text-end border-none'
                >
                  <Button className='text-primary-500 bg-transparent hover:bg-transparent'>
                    Terapkan
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant='outline'
              className='bg-primary-500 shadow-md hover:bg-primary-600 text-white hover:text-white font-normal'
            >
              <FaFileExport className='mr-2' /> Unduh
            </Button>
          </div>
        </div>
        <div className='my-3'>
          <div className='w-full'>
            <div className='rounded-md border '>
              <Table className='text-xs'>
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
                        className='text-center'
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
                {table.getSelectedRowModel.length} of{' '}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className='space-x-2'>
                <Pagination
                  currentPage={2}
                  totalPages={10}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiAdministrasiModule;
