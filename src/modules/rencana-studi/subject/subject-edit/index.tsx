'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from 'react';

type Checked = DropdownMenuCheckboxItemProps['checked'];
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { EditSubjectValidationSchema } from '@/lib/validation/rencana-studi';
import { useGetMajorByFacultyId } from '@/hooks/rencana-studi/majors/hook';
import {
  useEditSubject,
  useGetSubjectById,
} from '@/hooks/rencana-studi/subjects/hook';
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

import { TAddSubjectPayload } from '@/types/rencana-studi/subjects/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const EditSubjectModule = () => {
  const { id, id_major, id_matkul } = useParams();

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
      name: 'Daftar Matkul',
      link: `/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}`,
    },
    {
      name: 'Edit Matkul',
      link: '',
    },
  ];

  const { data: useSubjects } = useGetSubjectById(String(id_matkul));
  const { data: useMajor } = useGetMajorByFacultyId(id as string);
  const { data: useTeacher } = useUserByRole('TEACHER');

  const subjects = useSubjects?.data;

  const majors = useMajor?.data?.majors.map(
    (major: { id: string; name: string }) => {
      return {
        value: major.id,
        label: major.name,
      };
    },
  );

  const teachers = useTeacher?.data?.users.map((teacher) => {
    return { value: teacher.id, label: teacher.full_name };
  });

  const { mutate } = useEditSubject(id_matkul);

  const form = useForm<z.infer<typeof EditSubjectValidationSchema>>({
    resolver: zodResolver(EditSubjectValidationSchema),
    defaultValues: {
      name: '',
      description: '',
      code: '',
      duration_hours: '',
      credit: 0,
      thumbnail: '',
      teacher_id: '',
      major_id: '',
      indicator: '',
      study_experience: '',
      teaching_materials: '',
      basic_competencies: '',
      tools_needed: '',
      scoring: '',
      level: '',
      semester: 0,
    },
  });

  useEffect(() => {
    if (subjects) {
      const defaultValues = {
        name: subjects.name ?? '-',
        description: subjects.description ?? '-',
        code: subjects.code ?? '-',
        duration_hours: subjects.duration_hours ?? '-',
        credit: subjects.credit ?? '-',
        thumbnail: subjects.thumbnail ?? '-',
        teacher_id: subjects.teacher?.id ?? '',
        major_id: subjects.major?.id ?? '',
        indicator: subjects.indicator ?? '-',
        study_experience: subjects.study_experience ?? '-',
        teaching_materials: subjects.teaching_materials ?? '-',
        basic_competencies: subjects.basic_competencies ?? '-',
        tools_needed: subjects.tools_needed ?? '-',
        scoring: subjects.scoring ?? '-',
        level: subjects.level ?? '-',
        semester: subjects.semester ?? '-',
      };
      form.reset(defaultValues);
    }
  }, [subjects, form.reset]);

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof EditSubjectValidationSchema>) => {
    try {
      const payload: TAddSubjectPayload = {
        name: data.name,
        description: data.description,
        code: data.code,
        duration_hours: data.duration_hours,
        credit: data.credit,
        thumbnail: data.thumbnail[0],
        teacher_id: data.teacher_id,
        major_id: data.major_id,
        indicator: data.indicator,
        study_experience: data.study_experience,
        teaching_materials: data.teaching_materials,
        basic_competencies: data.basic_competencies,
        tools_needed: data.tools_needed,
        scoring: data.scoring,
        level: data.level,
        semester: data.semester,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Berhasil Mengubah Mata Kuliah!');
            router.push(
              `/rencana-studi/program-studi/${id}/mata-kuliah/${id_major}`,
            );
          },
          onError: (error) => {
            toast.error(error && 'Gagal Mengubah Mata Kuliah!');
          },
        },
      );
    } catch (error) {
      toast.error('Gagal Menambahkan Mata Kuliah!');
    }
  };

  const [isChecked, setIsChecked] = useState(true);
  const handleLookUp = () => {
    setIsChecked(!isChecked);
  };

  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorChange = (editorState: EditorState) => {
    setEditorStateCover(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('description', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
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
          Tambah Mata Kuliah
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
                        <FormLabel>Nama Mata Kuliah*</FormLabel>
                        <FormControl>
                          <Input placeholder='Nama Mata Kuliah*' {...field} />
                        </FormControl>
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
                    name='code'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Kode Mata Kuliah*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Nama Mata Kuliah*'
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.value.toUpperCase())
                            }
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
                    name='duration_hours'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Durasi /jam*</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='Masukkan Durasi Mata Kuliah*'
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
                    name='credit'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>SKS*</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='Nama Mata Kuliah*'
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
                    name='teacher_id'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pengajar*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Pilih Pengajar' />
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
                    name='major_id'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Program Studi*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Pilih Program Studi' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {majors?.map(
                              (major: { value: string; label: string }) => (
                                <SelectItem
                                  key={major.value}
                                  value={major.value}
                                >
                                  {major.label}
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
                  <FormField
                    control={form.control}
                    name='level'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Level*</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='Masukkan Level*'
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
                    name='semester'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Semester*</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='Nama Mata Kuliah*'
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
                    name='indicator'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Indikator*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Masukkan Indikator Mata Kuliah'
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
                    name='study_experience'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Keluaran Belajar*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Pengalaman atau Output Yang Didapat'
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
                    name='teaching_materials'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Kriteria Kelulusan*</FormLabel>
                        <Textarea
                          placeholder='Masukkan Kriteria Kelulusan Mata Kuliah'
                          className='resize-none'
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid w-full  items-center space-y-4'>
                  <FormField
                    control={form.control}
                    name='basic_competencies'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Tujuan*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Masukkan Tujuan Mata Kuliah'
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
                    name='tools_needed'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Alat Yang Dibutuhkan*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Alat Yang Dibutuhkan*'
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
                    name='scoring'
                    render={({ field }) => (
                      <FormItem className='grid w-full gap-1.5'>
                        <FormLabel>Penilaian*</FormLabel>
                        <FormControl>
                          <Input placeholder='Penilaian*' {...field} />
                        </FormControl>
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
                          Tambahkan Admin
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
                      Tambahkan Admin
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