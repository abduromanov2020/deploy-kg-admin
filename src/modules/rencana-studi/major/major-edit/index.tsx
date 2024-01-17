'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { EditMajorValidationSchema } from '@/lib/validation/rencana-studi';
import { useGetStudyPlanFaculties } from '@/hooks/rencana-studi/faculties/hook';
import {
  useEditMajor,
  useGetStudyPlanMajorById,
} from '@/hooks/rencana-studi/majors/hook';
import { useUserByRole } from '@/hooks/user-management/getuser/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
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

const EditMajorModule = () => {
  const params = useParams();
  const { id: id_faculty, id_prodi } = params;

  const { data: useGetMajor } = useGetStudyPlanMajorById(String(id_prodi));

  const major = useGetMajor?.data;

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
      name: 'Edit Prodi',
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

  const { data: useFaculties } = useGetStudyPlanFaculties();

  const faculties = useFaculties?.data?.faculties.map(
    (faculty: { id: string; name: string }) => {
      return { value: faculty.id, label: faculty.name };
    },
  );

  const { mutate } = useEditMajor(id_prodi);

  const form = useForm<z.infer<typeof EditMajorValidationSchema>>({
    resolver: zodResolver(EditMajorValidationSchema),
    defaultValues: {
      name: '',
      degree: '',
      description: '',
      head_major: '',
      faculty: '',
      thumbnail: '',
    },
  });

  useEffect(() => {
    if (major) {
      const defaultValues = {
        name: major.name ?? '-',
        degree: major.degree ?? '',
        description: major.description ?? '-',
        head_major: major.head_of_major?.id ?? ' ',
        faculty: major.faculty_id ?? '',
        thumbnail: major.thumbnail ?? '',
      };
      form.reset(defaultValues);
    }
  }, [major, form.reset]);

  const { data: useTeacher } = useUserByRole('TEACHER');

  const teachers = useTeacher?.data?.users.map((teacher) => {
    return { value: teacher.id, label: teacher.full_name };
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof EditMajorValidationSchema>) => {
    try {
      const payload = {
        name: data.name,
        degree: data.degree,
        description: data.description,
        major_head_id: data.head_major,
        faculty_id: data.faculty,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Program Studi Berhasil Di Ubah!');
            router.push(`/rencana-studi/program-studi/${id_faculty}`);
          },
          onError: (error) => {
            toast.error(error && 'Gagal Mengubah Program Studi!');
          },
        },
      );
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };

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
          Edit Program Studi
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
                              <SelectValue placeholder={field.value} />
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
                              <SelectValue
                                placeholder={major?.head_of_major?.full_name}
                              />
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
                              <SelectValue placeholder={major?.faculty_name} />
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
                          Edit Program Studi
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
                            type='submit'
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
                      Edit Program Studi
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

export default EditMajorModule;
