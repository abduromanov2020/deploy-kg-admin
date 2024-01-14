import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { EditFacultyValidationSchema } from '@/lib/validation/rencana-studi';
import { useEditFaculty } from '@/hooks/rencana-studi/faculties/edit-faculty/hook';

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

import { TEditFacultyPayload } from '@/types/rencana-studi/faculties/types';

interface moduleModalTriggerProps {
  id: string;
  name?: string;
  thumbnail?: string;
  slug?: string;
  modalTrigger: React.ReactNode;
}

export function EditFacultyModal({
  id,
  name,
  thumbnail,
  slug,
  modalTrigger,
}: moduleModalTriggerProps) {
  // console.log(slug);
  const queryClient = useQueryClient();

  const { mutate } = useEditFaculty(id);

  const form = useForm<z.infer<typeof EditFacultyValidationSchema>>({
    resolver: zodResolver(EditFacultyValidationSchema),
    defaultValues: {
      name,
      thumbnail,
      slug: slug || '',
    },
  });

  const onSubmit = (data: z.infer<typeof EditFacultyValidationSchema>) => {
    try {
      const payload: TEditFacultyPayload = {
        name: data?.name,
        thumbnail: data?.thumbnail[0],
        slug: data?.slug || '',
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Fakultas Berhasil Di Edit!!!');
            queryClient.invalidateQueries(['faculties-get'] as any);
          },
          onError: (error) => {
            toast.error(error && 'Gagal Mengubah Fakultas!');
          },
        },
      );
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  const onSubmitDialog = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Dialog>
          <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
          <DialogContent className='sm:max-w-[425px] md:max-w-[525px]'>
            <DialogHeader>
              <DialogTitle>Edit Fakultas</DialogTitle>
              <DialogDescription>
                Harap Pastikan Kembali Fakultas Yang Di Edit
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid items-center gap-4'>
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
              <div className='grid items-center gap-4'>
                <Label>Unggah Thumbnail*</Label>
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
              <div className='grid items-center gap-4'>
                <FormField
                  control={form.control}
                  name='slug'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Masukkan Slug</FormLabel>
                      <FormControl>
                        <Input placeholder='slug' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={onSubmitDialog}
                  // disabled={
                  //   form.formState.isSubmitting || !form.formState.isValid
                  // }
                  type='submit'
                  variant='primary'
                >
                  Simpan Perubahan
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
