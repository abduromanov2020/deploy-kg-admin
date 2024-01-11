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

export const EditModuleValidationSchema = z.object({
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

export const AddDocumentValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Judul Dokumen Dibutuhkan',
    })
    .min(1, { message: 'Judul Dokumen Dibutuhkan' }),
  duration: z
    .string({
      required_error: 'Deskripsi Dokumen Dibutuhkan',
    })
    .min(1, { message: 'Deskripsi Dokumen Dibutuhkan' }),
  url: z.string({
    required_error: 'URL Dokumen Dibutuhkan',
  }).min(1, { message: 'URL Dokumen Dibutuhkan' }),
});