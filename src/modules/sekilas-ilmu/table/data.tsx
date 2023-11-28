import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const data = Array.from({ length: 50 }, (_, i) => ({
  no: i + 1,
  judul_artikel: `Judul Artikel ${i + 1}`,
  penulis_artikel: `Penulis Artikel ${i + 1}`,
  created_at: new Date(),
  jumlah_disimpan: 10 + i,
  student_id: `123456789${i}`,
}));

export const columns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'judul_artikel',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUDUL ARTIKEL
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('judul_artikel')}</div>,
  },
  {
    accessorKey: 'penulis_artikel',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          PENULIS
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('penulis_artikel')}</div>,
  },
  {
    accessorKey: 'created_at',
    header: () => <div className=''>TANGGAL UNGGAHAN</div>,
    cell: ({ row }) => {
      const rawDate: unknown = row.getValue('created_at');

      if (rawDate instanceof Date) {
        const formatted = format(rawDate, 'PPP');
        return <div className=' font-medium'>{formatted}</div>;
      } else {
        return <div className=' font-medium'>Invalid Date</div>;
      }
    },
  },
  {
    accessorKey: 'jumlah_disimpan',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          JUMLAH DISIMPAN
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('jumlah_disimpan')}</div>,
  },
  {
    accessorKey: 'student_id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='text-xs'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          INFORMASi
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('student_id')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className='flex gap-3'>
          <Button className='bg-red-800'>Hapus</Button>
          <Button className='bg-primary-500'>Edit</Button>
        </div>
      );
    },
  },
];
