import React from 'react';

import { cn } from '@/lib/utils';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  DATA_PRESENSI_DAN_NILAI,
  HEAD_TABLE_PRESENSI_DAN_NILAI,
} from '@/modules/studi-ku/presensi-dan-nilai/constant';

const EditTablePresensi = () => {
  const dataHeadTable = HEAD_TABLE_PRESENSI_DAN_NILAI;
  const data = DATA_PRESENSI_DAN_NILAI;

  const [checkedItems, setCheckedItems] = React.useState<boolean[]>(
    new Array(data.length).fill(false),
  );
  const isCheckAll = checkedItems.every(Boolean);

  const handleCheckAll = () => {
    setCheckedItems(new Array(data.length).fill(!isCheckAll));
  };

  const handleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const newCheckedItems = [...prev];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  return (
    <Table className='rounded-xl border shadow-sm text-dark-900'>
      <TableHeader>
        <TableRow>
          <TableCell className='w-[50px]'>
            <Checkbox
              className='font-semibold text-center'
              checked={isCheckAll}
              onCheckedChange={() => handleCheckAll()}
            />
          </TableCell>
          {dataHeadTable?.map((item, index) => (
            <TableCell
              key={index}
              className={cn(
                'text-center font-semibold',
                index === 0 ? 'w-[50px]' : '',
              )}
            >
              {item}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item, index) => (
          <TableRow key={index} className='font-medium'>
            <TableCell>
              <Checkbox
                className='font-semibold text-center'
                checked={checkedItems[index]}
                onCheckedChange={() => handleCheck(index)}
              />
            </TableCell>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.id_student}</TableCell>
            <TableCell>
              <p className='line-clamp-1'>{item.name}</p>
            </TableCell>
            <TableCell
              className={cn(
                item.assignment === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.assignment}
            </TableCell>
            <TableCell
              className={cn(
                item.quiz === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.quiz}
            </TableCell>
            <TableCell
              className={cn(
                item.activity === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.activity}
            </TableCell>
            <TableCell
              className={cn(
                item.average === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.average}
            </TableCell>
            <TableCell className='text-primary-500'>
              {item.reflection}
            </TableCell>
            <TableCell>
              <RadioGroup className='flex gap-2'>
                <div className='flex gap-2'>
                  <RadioGroupItem
                    value='ya'
                    // className='border-primary-500 focus:bg-primary-500 focus:text-white text-white'
                  />
                  <Label>YA</Label>
                </div>
                <div className='flex gap-2'>
                  <RadioGroupItem
                    value='tidak'
                    // className='border-primary-500 focus:bg-primary-500 focus:text-white text-white'
                  />
                  <Label>TIDAK</Label>
                </div>
              </RadioGroup>
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className='w-[110px]'>
                  <SelectValue placeholder='Pilih' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value='sakit'
                    className='focus:bg-primary-500 focus:text-white'
                  >
                    Sakit
                  </SelectItem>
                  <SelectItem
                    value='izin'
                    className='focus:bg-primary-500 focus:text-white'
                  >
                    Izin
                  </SelectItem>
                  <SelectItem
                    value='terlambat'
                    className='focus:bg-primary-500 focus:text-white'
                  >
                    Terlambat
                  </SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EditTablePresensi;
