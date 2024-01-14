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

export const EditDocumentValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Judul Dokumen Dibutuhkan',
    })
    .min(1, { message: 'Judul Dokumen Dibutuhkan' }),
  duration: z
    .string({
      required_error: 'Durasi Dokumen Dibutuhkan',
    })
    .min(1, { message: 'Durasi Dokumen Dibutuhkan' }),
  url: z.string({
    required_error: 'URL Dokumen Dibutuhkan',
  }).min(1, { message: 'URL Dokumen Dibutuhkan' }),
});

export const EditVideoValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Judul Video Dibutuhkan',
    })
    .min(1, { message: 'Judul Video Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Video Dibutuhkan',
    })
    .min(1, { message: 'Deskripsi Video Dibutuhkan' }),
  url: z.string({
    required_error: 'URL Video Dibutuhkan',
  }).min(1, { message: 'URL Video Dibutuhkan' }),
  duration: z
    .string({
      required_error: 'Durasi Video Dibutuhkan',
    })
    .min(1, { message: 'Durasi Video Dibutuhkan' }),
});