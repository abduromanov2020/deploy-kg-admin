'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Checked = DropdownMenuCheckboxItemProps['checked'];
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddMajorValidationSchema } from '@/lib/validation/rencana-studi';
import { useGetStudyPlanFaculties } from '@/hooks/rencana-studi/faculties/hook';
import { useAddMajor } from '@/hooks/rencana-studi/majors/hook';
import { useUserByRole } from '@/hooks/user-management/getuser/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

import { TAddMajorPayload } from '@/types/rencana-studi/majors/types';

// const DraftEditor = dynamic(() => import('@/components/text-editor'), {
//   ssr: false,
// });

export const AddMajorModule = () => {
  const { id: id_faculty } = useParams();

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: `/rencana-studi/program-studi/${id_faculty}`,
    },
    {
      name: 'Tambah Prodi',
      link: '',
    },
  ];

  const degree = [
    {
      value: 'S1',
      label: 'S1',
    },
    {
      value: 'D3',
      label: 'D3',
    },
  ];

  const query = useSearchParams();

  const page = Number(query.get('page')) || 1;

  const [option, setOption] = useState({
    limit: 10,
    search: '',
  });

  const {
    data: useFaculties,
    isLoading,
    refetch,
  } = useGetStudyPlanFaculties(page, option.limit, option.search);

  const faculties = useFaculties?.data?.faculties.map(
    (faculty: { id: string; name: string }) => {
      return { value: faculty.id, label: faculty.name };
    },
  );

  const { mutate } = useAddMajor();
  const form = useForm<z.infer<typeof AddMajorValidationSchema>>({
    resolver: zodResolver(AddMajorValidationSchema),
  });

  const { data: useTeacher } = useUserByRole('TEACHER');

  const teachers = useTeacher?.data?.users.map((teacher) => {
    return { value: teacher.id, label: teacher.full_name };
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof AddMajorValidationSchema>) => {
    try {
      const payload: TAddMajorPayload = {
        name: data.name,
        degree: data.degree,
        description: data.description,
        major_head_id: data.head_major,
        faculty_id: data.faculty,
        thumbnail: data.thumbnail[0],
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Form submitted!');
            router.push('/rencana-studi');
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Program Studi!');
          },
        },
      );
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  // console.log(teachers);

  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };

  // const [editorStateCover, setEditorStateCover] = useState<EditorState>(
  //   EditorState.createEmpty(),
  // );

  // const handleEditorChange = (editorState: EditorState) => {
  //   setEditorStateCover(editorState);

  //   const contentState = editorState.getCurrentContent();
  //   const rawContentState = convertToRaw(contentState);
  //   const htmlContent = draftToHtml(rawContentState);

  //   form.setValue('description', htmlContent, {
  //     shouldValidate: true,
  //     shouldDirty: true,
  //   });
  // };

  // const handleFileChange = (file: File | null, index: number) => {
  //   setUploadFile((prevUploads) => {
  //     const newUploadFile = [...prevUploads];
  //     newUploadFile[index] = { upload: file };
  //     console.log('newUploadFile', newUploadFile[index].upload);

  //     return newUploadFile;
  //   });
  // };

  const onSubmitDialog = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>

      <div className='bg-white py-6 px-6 rounded-md relative'>
        <h1 className='font-semibold text-lg border-b-2 pb-3'>
          Tambah Program Studi
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='pt-5 w-full'>
              <div className='grid grid-cols-2 gap-5'>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Nama Program studi*</FormLabel>
                        <FormControl>
                          <Input placeholder='Nama Lengkap Admin*' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='degree'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jenjang*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Pilih Jenjang' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {degree?.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Deskripsi*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Masukkan Deskripsi Mata Kuliah'
                            className='resize-none'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='head_major'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kepala Program Studi*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Pilih Kepala Program Studi' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {teachers?.map((teacher) => (
                              <SelectItem
                                key={teacher.value}
                                value={teacher.value}
                              >
                                {teacher.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='faculty'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fakultas*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Pilih Fakultas' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {faculties?.map(
                              (faculty: { value: string; label: string }) => (
                                <SelectItem
                                  key={faculty.value}
                                  value={faculty.value}
                                >
                                  {faculty.label}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <Label>Unggah Thumbnail</Label>
                  <UploadField
                    control={form.control}
                    name='thumbnail'
                    accepted='.jpg, .jpeg, .png'
                    variant='sm'
                    message={form?.formState?.errors?.[
                      `thumbnail`
                    ]?.message?.toString()}
                    status={
                      form?.formState?.errors?.[`thumbnail`] ? 'error' : 'none'
                    }
                  />
                </div>
              </div>
              <div className='flex items-center space-x-3 pt-7'>
                <Checkbox id='terms' onClick={handleLookUp} />
                <label
                  htmlFor='terms'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Saya menyatakan data yang dirubah sudah benar
                </label>
              </div>
              <div className='flex space-x-5 justify-end'>
                <button className='px-6 py-3 shadow-md border text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
                  <div className='flex place-items-center gap-2'>
                    <Link href='/user-management/admin'>Kembali</Link>
                  </div>
                </button>
                {!isChecked ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
                        <div className='flex place-items-center gap-2'>
                          Tambahkan Program Studi
                        </div>
                      </button>
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
                        <DialogClose asChild>
                          <Button variant='outline' className='w-full'>
                            Tinjau Ulang
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button
                            onClick={onSubmitDialog}
                            className='bg-primary-500 w-full'
                          >
                            Selesai
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <button
                    disabled
                    className='px-6 py-3 shadow-md text-slate-400 bg-slate-300 rounded-md '
                  >
                    <div className='flex place-items-center gap-2'>
                      Tambahkan
                    </div>
                  </button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};
