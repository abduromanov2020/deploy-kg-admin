import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddDocumentValidationSchema } from '@/lib/validation/studi-ku/module';
import { useAddDocumentModule } from '@/hooks/studi-ku/modul/hook';

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

import { TAddDocumentPayload } from '@/types/studi-ku/modul';

export function AddDocumentModal() {
  const queryClient = useQueryClient();
  const { subject_id, session_id, module_id } = useParams();

  const { mutate } = useAddDocumentModule(
    subject_id as string,
    session_id as string,
    module_id as string,
  );

  const form = useForm<z.infer<typeof AddDocumentValidationSchema>>({
    resolver: zodResolver(AddDocumentValidationSchema),
  });

  const onSubmit = (data: z.infer<typeof AddDocumentValidationSchema>) => {
    const durationValue = data?.duration; // Konversi nilai ke tipe number
    try {
      const payload: TAddDocumentPayload = {
        title: data?.title,
        duration: durationValue,
        url: data?.url,
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
            <Button variant='primary'>Tambah Dokumen</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Tambah Dokumen</DialogTitle>
              <DialogDescription>
                Tambah Dokumen Modul Pembelajaran
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
            <div className='grid items-center gap-4'>
              <FormField
                control={form.control}
                name='url'
                render={({ field }) => (
                  <FormItem className='grid w-full gap-1.5'>
                    <FormLabel>Link URL*</FormLabel>
                    <FormControl>
                      <Input placeholder='Link URL' type='url' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
