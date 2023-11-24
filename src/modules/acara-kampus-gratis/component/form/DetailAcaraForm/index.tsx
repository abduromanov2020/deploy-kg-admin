'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CiCirclePlus } from 'react-icons/ci';
import { useRecoilState } from 'recoil';

import { cn } from '@/lib/utils';
import { ValidationSchemaDetailEvent } from '@/lib/validation/acara-kampus-gratis';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

import {
  activeTabAtom,
  coverFilledAtom,
} from '@/recoils/acara-kampus-gratis/atom';

import { TDetailAcara } from '@/types/acara-kampus-gratis/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const DetailAcaraForm = () => {
  const [date, setDate] = React.useState<Date>();
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);
  const [isCoverFilled, setCoverFilled] = useRecoilState(coverFilledAtom);
  const formDetail = useForm<TDetailAcara>({
    resolver: zodResolver(ValidationSchemaDetailEvent()),
  });
  const [editorStateDetail, setEditorStateDetail] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorDetailChange = (editorState: EditorState) => {
    setEditorStateDetail(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    formDetail.setValue('description', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    date &&
      formDetail.setValue('date', date.toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
  }, [date]);

  function onSubmitDetail(data: TDetailAcara) {
    console.log(data);
    toast.success('Form submitted!');
  }
  return (
    <Form {...formDetail}>
      <form
        onSubmit={formDetail.handleSubmit(onSubmitDetail)}
        className='bg-white flex flex-col gap-5 rounded-md pb-5 '
      >
        <div className='p-5 bg-gray-100 rounded-lg'>
          <p className='font-semibold text-lg mb-5'>Informasi</p>
          <FormField
            control={formDetail.control}
            name='ticket_type'
            render={({ field }) => (
              <FormItem className='grid w-full items-center gap-1.5 mb-5'>
                <FormLabel>Tipe Pemesanan Tiket</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Tipe Pemesanan Tiket' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='online'>Online</SelectItem>
                    <SelectItem value='offline'>Offline</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 w-full gap-5 items-start'>
            <FormField
              control={formDetail.control}
              name='reservation_date_end'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5'>
                  <FormLabel>Batas Tanggal Pemesanan Tiket*</FormLabel>
                  <FormControl>
                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !date && 'text-muted-foreground',
                            )}
                          >
                            {/* <CalendarIcon className='mr-2 h-4 w-4' /> */}
                            {date ? (
                              format(date, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0'>
                          <Calendar
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            {...field}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetail.control}
              name='reservation_time_end'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5'>
                  <FormLabel>Batas Waktu Pemesanan TIket* </FormLabel>
                  <FormControl>
                    <Input {...field} type='time' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={formDetail.control}
            name='location'
            render={({ field }) => (
              <FormItem className='grid w-full items-center gap-1.5 my-5'>
                <FormLabel>Lokasi Acara</FormLabel>
                <FormControl>
                  <Input placeholder='Online (Zoom)' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 w-full gap-5 items-start'>
            <FormField
              control={formDetail.control}
              name='date'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5'>
                  <FormLabel>Tanggal Acara*</FormLabel>
                  <FormControl>
                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !date && 'text-muted-foreground',
                            )}
                          >
                            {/* <CalendarIcon className='mr-2 h-4 w-4' /> */}
                            {date ? (
                              format(date, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0'>
                          <Calendar
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            {...field}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetail.control}
              name='time'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5'>
                  <FormLabel>Waktu Acara*</FormLabel>
                  <FormControl>
                    <Input {...field} type='time' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='p-5 bg-gray-100 rounded-lg'>
          <p className='font-semibold text-lg mb-5'>Kontak</p>

          <div className='grid grid-cols-2 w-full gap-5 items-start'>
            <FormField
              control={formDetail.control}
              name='head_comittee'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5 my-5'>
                  <FormLabel>Ketua Panitia*</FormLabel>
                  <FormControl>
                    <Input placeholder='Abdul Ramadansyah' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formDetail.control}
              name='comittee_position'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5 my-5'>
                  <FormLabel>Jabatan*</FormLabel>
                  <FormControl>
                    <Input placeholder='Ketua Panitia' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetail.control}
              name='phone_number'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5 my-5'>
                  <FormLabel>No Telepon*</FormLabel>
                  <FormControl>
                    <Input placeholder='089647298234' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formDetail.control}
              name='email'
              render={({ field }) => (
                <FormItem className='grid w-full items-center gap-1.5 my-5'>
                  <FormLabel>Alamat Email*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='abdulramadansyah@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='p-5 bg-gray-100 rounded-lg'>
          <p className='font-semibold text-lg mb-5'>Deskripsi</p>
          <DraftEditor
            editorState={editorStateDetail}
            setEditorState={(editorState) => {
              handleEditorDetailChange(editorState);
            }}
            label='Deskripsi Acara*'
            error={formDetail.formState.errors.description?.message}
          />
        </div>

        <div className='flex w-full justify-end gap-5 px-5'>
          <Button variant='primaryOutline'>Kembali</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
                <CiCirclePlus className='w-[20px] h-[20px]' />
                <p className='leading-none'>Tambah Acara</p>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] text-center p-12'>
              <DialogHeader>
                <DialogTitle className='text-center'>
                  Apakah Anda yakin informasi sudah sesuai ?
                </DialogTitle>
                <div className='py-3'>
                  <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
                </div>
                <DialogDescription className='text-center'>
                  Cek kembali informasi acara dengan benar.{' '}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className='flex w-full justify-between'>
                <DialogClose>
                  <Button variant='outline' className='w-full'>
                    Tinjau Ulang{' '}
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button
                    onClick={() => {
                      formDetail.handleSubmit(onSubmitDetail)();
                      // setActiveTab('detail');
                    }}
                    type='submit'
                    className='bg-primary-500 w-full'
                  >
                    Selesai
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  );
};
