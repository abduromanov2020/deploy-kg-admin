'use client';

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
import { ValidationsSchemaTambahQuiz } from '@/lib/validation/studi-ku/quiz';
import { useQuizAddRequest } from '@/hooks/studi-ku/quiz/hook';
import { TQuizAddPayload } from '@/types/studi-ku/quiz';

interface moduleModalTriggerProps {
  modalTrigger: React.ReactNode;
}

export function AddQuizModal({ modalTrigger }: moduleModalTriggerProps) {
  const queryClient = useQueryClient();
  const { subject_id, session_id } = useParams();

  const { mutate } = useQuizAddRequest(
    subject_id as string,
    session_id as string,
  );

  const form = useForm<z.infer<typeof ValidationsSchemaTambahQuiz>>({
    resolver: zodResolver(ValidationsSchemaTambahQuiz),
  });

  const onSubmit = (data: z.infer<typeof ValidationsSchemaTambahQuiz>) => {
    try {
      const payload: TQuizAddPayload = {
        ...data,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Quiz Berhasil Ditambahkan!');
            queryClient.invalidateQueries(['get-quiz'] as any);
            form.reset();
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Quiz!');
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
              <DialogTitle>Tambah Quiz</DialogTitle>
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
                  name='duration'
                  render={({ field }) => (
                    <FormItem className='grid w-full items-center gap-1.5'>
                      <FormLabel>Durasi*</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder='Masukan Durasi' />
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
                  Tambah Quiz
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
