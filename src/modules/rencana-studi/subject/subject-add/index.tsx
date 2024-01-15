'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React from 'react';

type Checked = DropdownMenuCheckboxItemProps['checked'];
import { useRouter, useSearchParams } from 'next/navigation';

import { useGetSubjectByMajorId } from '@/hooks/rencana-studi/subjects/hook';

import { BreadCrumb } from '@/components/BreadCrumb';

interface TProps {
  id: string;
}

export const AddSubjectModule = ({ id }: TProps) => {
  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1',
    },
    {
      name: 'Tambah Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1/tambah-matkul',
    },
  ];

  const query = useSearchParams();
  const router = useRouter();

  const page = Number(query.get('page')) || 1;

  const { data, isLoading, refetch } = useGetSubjectByMajorId(id, page);

  // const subject = data ? data?.data?.subjects : [];

  console.log(data);

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  //   defaultValues: {
  //     subject_id: '',
  //     subject_name: '',
  //     major_name: '',
  //     lecturer: '',
  //     sks: '',
  //     meeting_count: '',
  //     status: '',
  //   },
  // });

  // const headFaculty = [
  //   {
  //     value: '1',
  //     label: 'Head 1',
  //   },
  //   {
  //     value: '2',
  //     label: 'Head 2',
  //   },
  //   {
  //     value: '3',
  //     label: 'Head 3',
  //   },
  // ];

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log('data', data);
  // }

  // const handleFileChange = (file: File | null, index: number) => {
  //   setUploadFile((prevUploads) => {
  //     const newUploadFile = [...prevUploads];
  //     newUploadFile[index] = { upload: file };
  //     console.log('newUploadFile', newUploadFile[index].upload);

  //     return newUploadFile;
  //   });
  // };

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>

      {/* <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Tambah Mata Kuliah</p>
        </div>
        <div className='p-8'>
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='grid grid-cols-3 gap-6'>
                    <FormField
                      control={form.control}
                      name='subject_id'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Mata Kuliah*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='subject_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Mata Kuliah*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='major_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program Studi*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lecturer'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dosen Mata Kuliah*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Pilih Kepala Fakultas' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {headFaculty.map((head) => (
                                <SelectItem key={head.value} value={head.value}>
                                  {head.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='sks'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah SKS*</FormLabel>
                          <FormControl>
                            <Input placeholder='shadcn' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='meeting_count'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah Pertemuan*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Pilih Kepala Fakultas' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {headFaculty.map((head) => (
                                <SelectItem key={head.value} value={head.value}>
                                  {head.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='status'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Status' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {headFaculty.map((head) => (
                                <SelectItem key={head.value} value={head.value}>
                                  {head.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='my-8'></div>
                  <div className='flex justify-end gap-2'>
                    <Button
                      type='button'
                      asChild
                      className='text-primary-500 border border-primary-500 bg-white hover:bg-gray-200'
                    >
                      <Link href='/rencana-studi/program-studi/1/mata-kuliah/1'>
                        Kembali
                      </Link>
                    </Button>
                    <Button
                      type='submit'
                      className='bg-primary-500 hover:bg-primary-600'
                    >
                      Tambah Matkul
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};
