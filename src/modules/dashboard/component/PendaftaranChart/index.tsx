'use client';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  tension: 0.5,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Array.from({ length: labels.length }, () =>
        Math.floor(Math.random() * 100),
      ),
      borderColor: '#3758F9',
      backgroundColor: '#3758F9',
    },
  ],
};

export const PendaftaranChart = () => {
  return (
    <div className='bg-white rounded-md col-span-3'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Grafik Pendaftaran</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='outline' className='w-32 flex justify-between'>
              Bulan <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {labels.map((item) => (
              <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='p-8'>
        <p className='text-2xl font-bold'>9.198</p>
        <p className='text-neutral-400'>+3.454 Dalam Satu bulan</p>
        <div>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};
