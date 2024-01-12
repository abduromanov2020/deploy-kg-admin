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
