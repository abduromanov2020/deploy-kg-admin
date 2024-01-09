import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { AddModuleValidationSchema } from '@/lib/validation/studi-ku/module';
import { useAddModule } from '@/hooks/studi-ku/modul/hook';

import { Button } from '@/components/ui/button';
import {
  Dialog,
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
  editModalTrigger: React.ReactNode;
  // articleId?: string;
}

export function EditModuleModal({ editModalTrigger }: moduleModalTriggerProps) {
  const searchParams = useSearchParams();

  const subject_id = searchParams.get('subject_id') ?? '';
  const session_id = searchParams.get('session_id') ?? '';

  const { mutate } = useAddModule(subject_id, session_id);

  // const { data } = useGetModulesBySessionId(subject_id, session_id);

  const form = useForm<z.infer<typeof AddModuleValidationSchema>>({
    resolver: zodResolver(AddModuleValidationSchema),
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof AddModuleValidationSchema>) => {
    // console.log(data);
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
            toast.success('Form submitted!');
            router.push(
              `/studi-ku/modul?subject_id=${subject_id}&session_id=${session_id}`,
            );
            window.location.reload();
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
            <Button variant='primary'>{editModalTrigger}</Button>
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
              <Button
                onClick={onSubmitDialog}
                disabled={
                  form.formState.isSubmitting || !form.formState.isValid
                }
                type='submit'
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
