'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { convertToRaw, EditorState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useGetCategories } from '@/hooks/sekilas-ilmu/categories/hooks';
import { useEditArticle } from '@/hooks/sekilas-ilmu/edit-article/hook';
import { useGetArticleBySlug } from '@/hooks/sekilas-ilmu/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { UploadField } from '@/components/input/upload-file';
import { Button } from '@/components/ui/button';
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

import InputBadge from '@/modules/sekilas-ilmu/components/badge';
import { ITEMSEDIT } from '@/modules/sekilas-ilmu/constants';

import { TEditArticlePayload } from '@/types/sekilas-ilmu/types';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_MEDIA_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const FormSchema = z.object({
  title: z
    .string({
      required_error: 'Title harus diisi.',
    })
    .min(2, {
      message: 'Title harus di isi minimal 2 karakter',
    }),
  tags: z.any().optional(),
  category_id: z.string().min(1, { message: 'Kategori Harus Dipilih' }),
  author: z
    .string({
      required_error: 'Penulis harus diisi.',
    })
    .min(2, {
      message: 'Penulis harus di isi minimal 2 karakter',
    }),
  created_at: z.string({
    required_error: 'Tanggal harus di isi',
  }),
  thumbnail: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine((files: File[]) => {
      return files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Ukuran maksimun adalah 3mb.')
    .refine(
      (files: File[]) => ACCEPTED_MEDIA_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, .png, dan .webp',
    )
    .optional(),
  content: z
    .string({
      required_error: 'Deskripsi harus di isi',
    })
    .min(5, { message: 'Deskripsi harus di isi minimal 5 karakter' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi harus di isi',
    }),
});

type NameCategories = {
  id: string;
  name: string;
};

const EditArtikelModule = () => {
  const params = useParams();
  const { slug } = params;
  const { data } = useGetCategories();
  const { data: articleBySlug, isLoading } = useGetArticleBySlug(String(slug));
  const { mutate } = useEditArticle(String(articleBySlug?.data?.id));
  const router = useRouter();
  const queryClient = useQueryClient();

  console.log(articleBySlug);

  const getNameCategories = data?.data.map((item: NameCategories) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  console.log(getNameCategories);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      tags: '',
      category_id: undefined,
      author: '',
      created_at: new Date().toLocaleDateString(),
      content: '<p></p>\n',
      thumbnail: undefined,
    },
  });

  useEffect(() => {
    if (articleBySlug?.data) {
      const defaultValues = {
        title: articleBySlug?.data?.title ?? '',
        // Map the tags array to a string
        tags: articleBySlug?.data?.tags ?? [], // Assuming tags is an array of strings
        category_id: articleBySlug?.data?.category ?? undefined,
        thumbnail: undefined,
        author: articleBySlug?.data?.author.full_name ?? '',
        created_at: articleBySlug?.data?.created_at ?? '',
        content: articleBySlug?.data?.content || '',
      };
      form.reset(defaultValues as any);
    }
  }, [articleBySlug?.data, form.reset]);

  const [editorStateCover, setEditorStateCover] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleEditorChange = (editorState: EditorState) => {
    setEditorStateCover(editorState);

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    form.setValue('content', htmlContent, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    if (articleBySlug) {
      const contentState = stateFromHTML(articleBySlug?.data?.content);
      setEditorStateCover(EditorState.createWithContent(contentState));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleBySlug]);

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content.toString());

      const category = await (async () => {
        const matchingCategories =
          getNameCategories?.filter(
            (item: { value: string; label: string }) =>
              item.label === data.category_id,
          ) ?? [];

        if (matchingCategories.length > 0) {
          return matchingCategories[0]?.value;
        } else {
          const alternativeCategories =
            getNameCategories?.filter(
              (item: { value: string; label: string }) =>
                item.value === data.category_id,
            ) ?? [];
          return alternativeCategories.length > 0
            ? alternativeCategories[0]?.value ?? null
            : null;
        }
      })();

      if (category !== null) {
        formData.append('category_id', category);
      }

      if (data.tags) {
        formData.append('tags', data.tags.toString());
      }

      if (data.thumbnail) {
        formData.append('thumbnail', data.thumbnail[0]);
      }

      await mutate(formData as unknown as TEditArticlePayload, {
        onSuccess: () => {
          console.log(formData);
          queryClient.invalidateQueries(['article-get'] as any);
          toast.success('Berhasil Mengunggah');
          router.push(`/sekilas-ilmu`);
        },
      });
    } catch (err) {
      console.log('Gagal Mengunggah', err);
    }
  }

  // const updateTags = (newTags: Array<string>) => {
  //   // Update the tags field in the form
  //   setValue('tags', newTags);
  // };

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMSEDIT} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-sm'>Edit Artikel</h3>
        </div>
        <div className='p-5'>
          <div className='w-full'>
            <div className='grid gap-6'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='w-full flex flex-col gap-6'
                >
                  <div className='grid grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Judul Artikel</FormLabel>
                          <FormControl>
                            <Input placeholder='Isi Judul Disini' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='tags'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputBadge
                              label='tags'
                              required={false}
                              placeholder='ex: #tags'
                              defaultValue={articleBySlug?.data?.tags}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='category_id'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pilih Kategori*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Pilih Kategori' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {getNameCategories?.map((categories) => (
                                <SelectItem
                                  key={categories.value}
                                  value={categories.value}
                                >
                                  {categories.label}
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
                      name='author'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Penulis</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Isi Penulis Disini'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='created_at'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tanggal Unggah</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              // defaultValue={
                              //   field.value || new Date().toLocaleDateString()
                              // }
                              disabled
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DraftEditor
                    editorState={editorStateCover}
                    setEditorState={(editorState) => {
                      handleEditorChange(editorState);
                    }}
                    label='Isi Artikel'
                    error={form.formState.errors.content?.message}
                  />
                  <div className='w-full'>
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
                        form?.formState?.errors?.[`thumbnail`]
                          ? 'error'
                          : 'none'
                      }
                    />
                  </div>
                  <div className='flex justify-end gap-3 my-3'>
                    <Link href='/sekilas-ilmu'>
                      <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-primary-500 text-primary-500'>
                        Kembali
                      </Button>
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className='bg-primary-500 hover:bg-primary-600'>
                          Edit Artikel
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='sm:max-w-[425px] text-center p-12 z-[9999]'>
                        <DialogHeader>
                          <DialogTitle className='text-center'>
                            Apakah Anda yakin informasi sudah sesuai ?
                          </DialogTitle>
                          <div className='py-3'>
                            <Separator className='h-1 bg-primary-500 rounded-full w-1/3 mx-auto' />
                          </div>
                          <DialogDescription className='text-center'>
                            Cek kembali informasi Acara dengan benar.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className='flex w-full justify-between'>
                          <Button variant='outline' className='w-full'>
                            Tinjau Ulang
                          </Button>
                          <DialogClose className='w-full'>
                            <Button
                              onClick={() => form.handleSubmit(onSubmit)()}
                              type='submit'
                              className='bg-primary-500 hover:bg-primary-600 w-full'
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditArtikelModule;
