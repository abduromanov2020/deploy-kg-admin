import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddModuleValidationSchema } from '@/lib/validation/studi-ku/module';
import { useEditModule } from '@/hooks/studi-ku/modul/hook';

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
  id: string;
  title: string;
  description: string;
  duration: string;
}

export function EditModuleModal({
  id,
  title,
  description,
  duration,
}: moduleModalTriggerProps) {
  const queryClient = useQueryClient();
  const { subject_id, session_id } = useParams();

  const { mutate } = useEditModule(
    id,
    subject_id as string,
    session_id as string,
  );

  const form = useForm<z.infer<typeof AddModuleValidationSchema>>({
    resolver: zodResolver(AddModuleValidationSchema),
    defaultValues: {
      title,
      description,
      duration,
    },
  });

  const onSubmit = (data: z.infer<typeof AddModuleValidationSchema>) => {
    const durationValue = data?.duration; // Konversi nilai ke tipe number
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
            toast.success('Modul Berhasil Di Edit!');
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
            <Button variant='primary'>Edit Modul</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Edit</DialogTitle>
              <DialogDescription>
                Pastikan Modul Yang Di Edit Sudah Benar
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
                  Edit Modul
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
