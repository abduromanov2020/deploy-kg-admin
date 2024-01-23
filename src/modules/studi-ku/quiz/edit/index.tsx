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

import {
  ValidationsSchemaEditQuiz,
  ValidationsSchemaTambahQuiz,
} from '@/lib/validation/studi-ku/quiz';
import {
  useQuizAddRequest,
  useQuizEditRequest,
} from '@/hooks/studi-ku/quiz/hook';
import { TQuizAddPayload, TQuizEditPayload } from '@/types/studi-ku/quiz';
import { FaRegEdit } from 'react-icons/fa';

interface moduleModalTriggerProps {
  quiz_id: string;
  title: string;
  duration: number;
}

export function EditQuizModal({
  quiz_id,
  title,
  duration,
}: moduleModalTriggerProps) {
  const queryClient = useQueryClient();
  const { subject_id, session_id } = useParams();

  const { mutate } = useQuizEditRequest(
    subject_id as string,
    session_id as string,
    quiz_id,
  );

  const form = useForm<z.infer<typeof ValidationsSchemaEditQuiz>>({
    resolver: zodResolver(ValidationsSchemaEditQuiz),
    defaultValues: {
      title: title,
      duration: duration.toString(),
    },
  });

  const onSubmit = (data: z.infer<typeof ValidationsSchemaEditQuiz>) => {
    try {
      const payload: TQuizEditPayload = {
        ...data,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Quiz Berhasil Di Ubah!');
            queryClient.invalidateQueries(['get-quiz'] as any);
            form.reset();
          },
          onError: (error) => {
            toast.error(error && 'Gagal Mengedit Quiz!');
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
            <div className='flex gap-3 text-primary-500 items-center text-sm font-medium cursor-pointer'>
              <FaRegEdit fill='currentColor' className='w-4 h-4' />
              Edit
            </div>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Edit Quiz</DialogTitle>
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
                  Edit Quiz
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
