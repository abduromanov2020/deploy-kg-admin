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
import { FaInfoCircle } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import {
  ValidationSchemaCoverEvent,
  ValidationSchemaDetailEvent,
} from '@/lib/validation/acara-kampus-gratis';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
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
import { Label } from '@/components/ui/label';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { TCoverAcara, TDetailAcara } from '@/types/acara-kampus-gratis/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const TambahAcaraModule = () => {
  const [date, setDate] = React.useState<Date>();
  const [coverFilled, setCoverFilled] = useState(false);
  const [activeTab, setActiveTab] = useState('cover');

  const BreadcrumbItems = [
    {
      name: 'Acara Kampus Gratis',
      link: '/acara-kampus-gratis',
    },
    {
      name: 'Tambah Acara Kampus',
      link: `/acara-kampus-gratis/tambah-acara`,
    },
  ];

  const form = useForm<TCoverAcara>({
    resolver: zodResolver(ValidationSchemaCoverEvent()),
  });

  const formDetail = useForm<TDetailAcara>({
    resolver: zodResolver(ValidationSchemaDetailEvent()),
  });

  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorCoverChange = (editorState: EditorState) => {
    setEditorStateCover(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('benefit', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const [editorStateDetail, setEditorStateDetail] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorDetailChange = (editorState: EditorState) => {
    setEditorStateDetail(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('benefit', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    date &&
      form.setValue('date', date.toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
  }, [date]);

  function onSubmit(data: TCoverAcara) {
    // form.formState.errors {

    // }
    console.log(data);
    setCoverFilled(true);
    toast.success('Form submitted!');
    setActiveTab('detail');
  }

  function onSubmitDetail(data: TDetailAcara) {
    console.log(data);
    toast.success('Form submitted!');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Tambah Acara Kampus</span>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='cover' value={activeTab} className='w-full'>
            <TabsList className='flex gap-5 items-center'>
              <TabsTrigger
                value='cover'
                className={`flex gap-2 border-none ${
                  coverFilled && 'text-primary-500'
                }`}
                onClick={() => setActiveTab('cover')}
              >
                <FaInfoCircle />
                Cover Acara Kampus
              </TabsTrigger>
              <hr className='border-dark-600 w-20 border' />
              <TabsTrigger
                value='detail'
                disabled={!coverFilled}
                onClick={() => setActiveTab('detail')}
                className='border-none'
              >
                Detail Acara Kampus
              </TabsTrigger>
            </TabsList>
            <div className='mt-8'>
              <TabsContent value='cover'>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='bg-white flex flex-col gap-5 rounded-md pb-5 '
                  >
                    <div className='grid grid-cols-2 w-full gap-5 items-start'>
                      <FormField
                        control={form.control}
                        name='event_name'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Nama Acara*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='UI/UX Design untuk Pemula'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Biaya*</FormLabel>
                            <FormControl>
                              <Input placeholder='50.000' {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='date'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Tanggal Pelaksana*</FormLabel>
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
                        control={form.control}
                        name='time'
                        render={({ field }) => (
                          <FormItem className='grid w-full items-center gap-1.5'>
                            <FormLabel>Waktu Pelaksana*</FormLabel>
                            <FormControl>
                              <Input {...field} type='time' />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <DraftEditor
                      editorState={editorStateCover}
                      setEditorState={(editorState) => {
                        handleEditorCoverChange(editorState);
                      }}
                      label='Manfaat Acara*'
                      error={form.formState.errors.benefit?.message}
                    />
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='thumbnail'>Unggah Thumbnail*</Label>
                      <UploadField
                        control={form.control}
                        // required
                        name='thumbnail'
                        accepted='.jpg, .png, .jpeg'
                        // label='Unggah Thumbnail*'
                        message={form?.formState?.errors?.thumbnail?.message?.toString()}
                        status={
                          form?.formState?.errors?.thumbnail ? 'error' : 'none'
                        }
                        variant='md'
                      />
                    </div>{' '}
                    <div className='flex w-full justify-end gap-5 px-5'>
                      <Button variant='primaryOutline'>Kembali</Button>

                      <Button
                        variant='primary'
                        type='submit'
                        className='bg-primary-500 text-white px-4 py-2 rounded-md'
                      >
                        Selanjutnya
                      </Button>
                    </div>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value='detail'>
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
                              <FormLabel>
                                Batas Tanggal Pemesanan Tiket*
                              </FormLabel>
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
                              <FormLabel>
                                Batas Waktu Pemesanan TIket*{' '}
                              </FormLabel>
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
                                <Input
                                  placeholder='Abdul Ramadansyah'
                                  {...field}
                                />
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
                            <Button variant='outline' className='w-full'>
                              Tinjau Ulang{' '}
                            </Button>
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
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
