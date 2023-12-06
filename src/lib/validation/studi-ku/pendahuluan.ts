import { z } from 'zod';
const MAX_FILE_SIZE = 2000000;
const ACCEPTED_PDF_TYPES = ['application/pdf'];
const ACCEPTED_VIDEO_TYPES = ['application/pdf'];

export const ValidationSchemaPendahuluan = z.object({
  title: z
    .string({
      required_error: 'Judul pendahuluan harus diisi.',
    })
    .min(1, { message: 'Judul pendahuluan harus diisi.' }),
  description: z
    .string({
      required_error: 'Deskripsi pendahuluan harus diisi.',
    })
    .min(1, { message: 'Deskripsi pendahuluan harus diisi.' }),
  video: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine((files: File[]) => {
      return files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Ukuran maksimun adalah 2mb.')
    .refine(
      (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0]?.type),
      'hanya menerima .pdf.',
    ),
  document: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine((files: File[]) => {
      return files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Ukuran maksimun adalah 2mb.')
    .refine(
      (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0]?.type),
      'hanya menerima .pdf.',
    ),
});
