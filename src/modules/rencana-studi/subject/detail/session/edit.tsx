import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa';
import { z } from 'zod';

import { EditSessionValidationSchema } from '@/lib/validation/rencana-studi/session';
import {
  useGetSessionDetail,
  useUpdateSession,
} from '@/hooks/rencana-studi/session/hook';

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { TEditSessionPayload } from '@/types/rencana-studi/sessions/type';

interface EditSessionModalProps {
  id: string;
}

export function EditSessionModal({ id }: EditSessionModalProps) {
  const { id_subject } = useParams();
  const queryClient = useQueryClient();

  const { data } = useGetSessionDetail(id_subject as string, id);
  const { mutate } = useUpdateSession(id_subject as string, id);

  const session = data?.data.session;

  const form = useForm<z.infer<typeof EditSessionValidationSchema>>({
    resolver: zodResolver(EditSessionValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      duration: '',
      type: '',
    },
  });

  const onSubmit = (data: z.infer<typeof EditSessionValidationSchema>) => {
    const payload: TEditSessionPayload = {
      ...data,
      duration: parseInt(data.duration),
      is_sync: session?.is_sync as boolean,
      session_no: session?.session_no as number,
    };

    try {
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            toast.success('Pertemuan Berhasil Diubah!');
            queryClient.invalidateQueries([
              'sessions-get-by-subject-id',
            ] as any);
          },
          onError: () => {
            toast.error('Pertemuan Gagal Diubah!');
          },
        },
      );
    } catch (err) {
      toast.error('Pertemuan Gagal Diubah!');
    }
  };

  useEffect(() => {
    form.reset({
      title: session?.title,
      description: session?.description,
      duration: session?.duration.toString(),
      type: session?.type,
    });
    console.log(session);
  }, [session]);

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
                  name='duration'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Durasi</FormLabel>
                      <FormControl>
                        <Input placeholder='Durasi' {...field} type='number' />
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
                      <FormLabel>Deskripsi*</FormLabel>
                      <FormControl>
                        <Input placeholder='Description' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid items-center gap-4'>
                <FormField
                  control={form.control}
                  name='type'
                  render={({ field }) => (
                    <FormItem className='grid w-full gap-1.5'>
                      <FormLabel>Tipe*</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value='OVERVIEW'>OVERVIEW</SelectItem>
                              <SelectItem value='REGULAR'>REGULAR</SelectItem>
                              <SelectItem value='MIDTERM_EXAM'>
                                MIDTERM_EXAM
                              </SelectItem>
                              <SelectItem value='FINAL_EXAM'>
                                FINAL_EXAM
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
                  Edit Pertemuan
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
