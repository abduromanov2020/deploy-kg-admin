import { z } from 'zod';

export const AddModuleValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Judul Modul Dibutuhkan',
    })
    .min(1, { message: 'Judul Modul Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Modul Dibutuhkan',
    })
    .min(1, { message: 'Deskripsi Modul Dibutuhkan' }),
  duration: z
    .string({
      required_error: 'Durasi Modul Dibutuhkan',
    })
    .min(1, { message: 'Durasi Modul Dibutuhkan' }),
});
