import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddModuleValidationSchema } from '@/lib/validation/studi-ku/module';
import { useAddModule } from '@/hooks/studi-ku/modul/hook';

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

import { TAddModulePayload } from '@/types/studi-ku/modul';

interface moduleModalTriggerProps {
  modalTrigger: React.ReactNode;
  // articleId?: string;
}

export function AddModuleModal({
  modalTrigger, // moduleId,
}: moduleModalTriggerProps) {
  const queryClient = useQueryClient();
  const { subject_id, session_id } = useParams();

  const { mutate } = useAddModule(subject_id as string, session_id as string);

  const form = useForm<z.infer<typeof AddModuleValidationSchema>>({
    resolver: zodResolver(AddModuleValidationSchema),
  });

  const onSubmit = (data: z.infer<typeof AddModuleValidationSchema>) => {
    const durationValue = data?.duration;
    try {
      const payload: TAddModulePayload = {
        title: data?.title,
        description: data?.description,
        duration: durationValue,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Form submitted!');
            queryClient.invalidateQueries(['get-modules-by-session-id'] as any);
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Module!');
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
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Tambah Modul</DialogTitle>
              <DialogDescription>
                Buat Modul Untuk Bisa Menambahkan Materi Pembelajaran
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid items-center gap-4'>
                <FormField
                  control={form.control}
                  name='title'
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
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Description*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Description'
                          type='description'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid items-center gap-4'>
                <FormField
                  control={form.control}
                  name='duration'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Duration*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Duration'
                          type='number'
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
                  disabled={
                    form.formState.isSubmitting || !form.formState.isValid
                  }
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
