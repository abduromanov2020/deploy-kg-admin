import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddFacultyValidationSchema } from '@/lib/validation/rencana-studi';
import { useAddFaculty } from '@/hooks/rencana-studi/faculties/hook';

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

import { TAddFacultyPayload } from '@/types/rencana-studi/faculties/types';

interface moduleModalTriggerProps {
  modalTrigger: React.ReactNode;
  // articleId?: string;
}

export function AddFacultyModal({
  modalTrigger, // moduleId,
}: moduleModalTriggerProps) {
  const queryClient = useQueryClient();
  // const router = useRouter();

  const { mutate } = useAddFaculty();

  const form = useForm<z.infer<typeof AddFacultyValidationSchema>>({
    resolver: zodResolver(AddFacultyValidationSchema),
    defaultValues: {
      name: '',
      thumbnail: undefined,
      slug: '',
    },
  });

  const onSubmit = (data: z.infer<typeof AddFacultyValidationSchema>) => {
    try {
      const payload: TAddFacultyPayload = {
        name: data?.name,
        thumbnail: data?.thumbnail[0],
        slug: data?.slug,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Form submitted!');
            queryClient.invalidateQueries(['faculties-get'] as any);
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Fakultas!');
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
          <DialogTrigger asChild>
            <Button variant='primary'>{modalTrigger}</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px] md:max-w-[525px]'>
            <DialogHeader>
              <DialogTitle>Tambah Fakultas</DialogTitle>
              <DialogDescription>
                Buat Fakultas Untuk Bisa Menambahkan Program Studi serta Materi
                Pembelajaran
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
              <div className='grid items-center gap-4'>
                <FormField
                  control={form.control}
                  name='slug'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Slug*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='slug'
                          // type='number'
                          {...field}
                        />
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
                  Tambah Module
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
