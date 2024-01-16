import { z } from 'zod';

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const AddFacultyValidationSchema = z.object({
  name: z.string().min(1, { message: 'Nama Fakultas Harus Diisi' }),
  thumbnail: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.',
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'hanya menerima .jpg, .jpeg, dan .png.',
    ),
  slug: z.string().optional(),
});

export const EditFacultyValidationSchema = z.object({
  name: z.string().min(1, { message: 'Nama Fakultas Harus Diisi' }),
  thumbnail: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.',
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'hanya menerima .jpg, .jpeg, dan .png.',
    ),
  slug: z.string().optional(),
});

export const AddMajorValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Nama Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Nama Program Studi Dibutuhkan' }),
  degree: z
    .string({
      required_error: 'Jenjang Studi Dibutuhkan',
    })
    .min(1, { message: 'Jenjang Studi Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Program Studi Dibutuhkan.',
    })
    .min(1, { message: 'Deskripsi Program Studi Dibutuhkan.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi Program Studi Dibutuhkan',
    }),
  head_major: z
    .string({
      required_error: 'Kepala Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Kepala Program Studi Dibutuhkan' }),
  faculty: z
    .string({
      required_error: 'Fakultas Dibutuhkan',
    })
    .min(1, { message: 'Fakultas Dibutuhkan' }),
  thumbnail: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.',
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'hanya menerima .jpg, .jpeg, dan .png.',
    ),
});

export const EditMajorValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Nama Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Nama Program Studi Dibutuhkan' }),
  degree: z
    .string({
      required_error: 'Jenjang Studi Dibutuhkan',
    })
    .min(1, { message: 'Jenjang Studi Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Program Studi Dibutuhkan.',
    })
    .min(1, { message: 'Deskripsi Program Studi Dibutuhkan.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi Program Studi Dibutuhkan',
    }),
  head_major: z
    .string({
      required_error: 'Kepala Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Kepala Program Studi Dibutuhkan' }),
  faculty: z
    .string({
      required_error: 'Fakultas Dibutuhkan',
    })
    .min(1, { message: 'Fakultas Dibutuhkan' }),
  thumbnail: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.',
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.',
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'hanya menerima .jpg, .jpeg, dan .png.',
    ),
  duration: z
    .string({
      required_error: 'Durasi Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Durasi Program Studi Dibutuhkan' }),
});
