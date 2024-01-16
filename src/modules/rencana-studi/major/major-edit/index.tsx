'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { EditMajorValidationSchema } from '@/lib/validation/rencana-studi';
import { useGetStudyPlanFaculties } from '@/hooks/rencana-studi/faculties/hook';
import { useGetMajorByFacultyId } from '@/hooks/rencana-studi/majors/hook';
import { useUserByRole } from '@/hooks/user-management/getuser/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { TDetailMajorData } from '@/types/rencana-studi/majors/types';

const EditMajorModule = () => {
  const { id, id_prodi } = useParams();
  const { data: getMajor } = useGetMajorByFacultyId(id_prodi as string);
  const { data: getTeacher } = useUserByRole('TEACHER');
  const { data: getFaculty } = useGetStudyPlanFaculties();

  const teachers = getTeacher?.data?.users.map((teacher) => {
    return { value: teacher.id, label: teacher.full_name };
  });

  const faculties = getFaculty?.data?.faculties.map(
    (faculty: { id: string; name: string }) => {
      return { value: faculty.id, label: faculty.name };
    },
  );

  const majorData: TDetailMajorData = getMajor?.data;

  console.log(majorData);

  const form = useForm<z.infer<typeof EditMajorValidationSchema>>({
    resolver: zodResolver(EditMajorValidationSchema),
    defaultValues: {
      name: '',
      description: '',
      duration: '',
      thumbnail: '',
      degree: '',
      head_major: '',
      faculty: '',
    },
  });

  useEffect(() => {
    form.reset({
      ...majorData,
      degree: majorData?.degree,
      head_major: majorData?.head_of_major?.full_name,
      faculty: majorData?.faculty_name,
    });
  }, [majorData, form.reset]);

  const onSubmit = async (data: z.infer<typeof EditMajorValidationSchema>) => {
    console.log(data);
  };

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

  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: `/rencana-studi/program-studi/${id}`,
    },
    {
      name: 'Edit Prodi',
      link: `/rencana-studi/program-studi/${id}/edit`,
    },
  ];

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>

      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Edit Fakultas</p>
        </div>
        <div className='p-8'>
          <div className='w-full'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex gap-4'>
                  <div className='grid items-center gap-4 w-full'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem className=''>
                          <FormLabel>Judul*</FormLabel>
                          <FormControl>
                            <Input placeholder='Masukkan Judul*' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid items-center gap-4 w-full'>
                    <FormField
                      control={form.control}
                      name='description'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Description*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Description'
                              className='resize-none'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className='flex gap-4 py-4'>
                  <div className='grid items-center gap-4 w-full'>
                    <FormField
                      control={form.control}
                      name='head_major'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Kepala Program Studi*</FormLabel>
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
                  <div className='grid items-center gap-4 w-full'>
                    <FormField
                      control={form.control}
                      name='thumbnail'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Thumbnail*</FormLabel>
                          <FormControl>
                            <Input placeholder='Thumbnail' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className='flex gap-4 py-4'>
                  <div className='grid items-center gap-4 w-full'>
                    <FormField
                      control={form.control}
                      name='degree'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
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
                  <div className='grid items-center gap-4 w-full'>
                    <FormField
                      control={form.control}
                      name='faculty'
                      render={({ field }) => (
                        <FormItem className='grid w-full gap-1.5'>
                          <FormLabel>Fakultas*</FormLabel>
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
                </div>
                <Button variant='primary'>Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditMajorModule;
