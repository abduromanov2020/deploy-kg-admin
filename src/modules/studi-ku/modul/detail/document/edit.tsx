import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa';
import { z } from 'zod';

import { EditDocumentValidationSchema } from '@/lib/validation/studi-ku/module';
import { useEditDocument } from '@/hooks/studi-ku/modul/hook';

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

import { TEditDocumentPayload } from '@/types/studi-ku/modul';

interface DocumentModalTriggerProps {
  id: string;
  title: string;
  url: string;
  duration: string;
}

export function EditDocumentModal({
  id,
  title,
  url,
  duration,
}: DocumentModalTriggerProps) {
  const queryClient = useQueryClient();
  const { subject_id, session_id, module_id } = useParams();

  const { mutate } = useEditDocument(
    subject_id as string,
    session_id as string,
    module_id as string,
    id,
  );

  const form = useForm<z.infer<typeof EditDocumentValidationSchema>>({
    resolver: zodResolver(EditDocumentValidationSchema),
    defaultValues: {
      title,
      url,
      duration,
    },
  });

  const onSubmit = (data: z.infer<typeof EditDocumentValidationSchema>) => {
    try {
      const payload: TEditDocumentPayload = {
        title: data?.title,
        url: data?.url,
        duration: data?.duration,
      };
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Dokumen Berhasil Di Edit!');
            queryClient.invalidateQueries(['get-document-by-module-id'] as any);
          },
          onError: (error) => {
            toast.error(error && 'Gagal Menambahkan Dokumen!');
          },
        },
      );
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  const onSubmitDialog = () => {
    form.handleSubmit(onSubmit)();
    form.reset();
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
              <DialogTitle>Edit</DialogTitle>
              <DialogDescription>
                Pastikan Dokumen Yang Di Edit Sudah Benar
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
                  name='url'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Link*</FormLabel>
                      <FormControl>
                        <Input placeholder='Link' {...field} />
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
                  type='submit'
                  variant='primary'
                >
                  Edit Dokumen
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
