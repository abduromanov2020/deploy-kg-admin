import { z } from 'zod';
const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'application/pdf',
];

export const AddAdminUserValidationSchema = z.object({
  id_admin: z
    .string({
      required_error: 'ID Admin dibutuhkan',
    })
    .min(1, { message: 'ID Admin dibutuhkan' }),
  full_name: z
    .string({
      required_error: 'Nama Lengkap Admin Dibutuhkan',
    })
    .min(1, { message: 'Nama Lengkap Admin Dibutuhkan' }),
  email: z
    .string({
      required_error: 'Email Dibutuhkan',
    })
    .min(1, { message: 'Email Dibutuhkan' }),
  user_name: z
    .string({
      required_error: 'Nama Pengguna Akun Dibutuhkan',
    })
    .min(1, { message: 'Nama Pengguna Akun Dibutuhkan' }),
  status: z
    .string({
      required_error: 'Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Program Studi Dibutuhkan' }),
});

export const EditMahasiswaUserValidationSchema = z.object({
  id_mahasiswa: z
    .string({
      required_error: 'ID Admin dibutuhkan',
    })
    .min(1, { message: 'ID Admin dibutuhkan' }),
  full_name: z
    .string({
      required_error: 'Nama Lengkap Admin Dibutuhkan',
    })
    .min(1, { message: 'Nama Lengkap Admin Dibutuhkan' }),
  email: z
    .string({
      required_error: 'Nama Lengkap Admin Dibutuhkan',
    })
    .min(1, { message: 'Nama Lengkap Admin Dibutuhkan' }),
  faculty: z
    .string({
      required_error: 'Email Dibutuhkan',
    })
    .min(1, { message: 'Email Dibutuhkan' }),
  study_program: z
    .string({
      required_error: 'Nama Pengguna Akun Dibutuhkan',
    })
    .min(1, { message: 'Nama Pengguna Akun Dibutuhkan' }),
  lecturer: z
    .string({
      required_error: 'Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Program Studi Dibutuhkan' }),
  status: z
    .string({
      required_error: 'Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Program Studi Dibutuhkan' }),
  self_foto: z
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
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, dan .webp.',
    ),
});

export const EditAdminUserValidationSchema = z.object({
  id_admin: z
    .string({
      required_error: 'ID Admin dibutuhkan',
    })
    .min(1, { message: 'ID Admin dibutuhkan' }),
  full_name: z
    .string({
      required_error: 'Nama Lengkap Admin Dibutuhkan',
    })
    .min(1, { message: 'Nama Lengkap Admin Dibutuhkan' }),
  email: z
    .string({
      required_error: 'Email Dibutuhkan',
    })
    .min(1, { message: 'Email Dibutuhkan' }),
  user_name: z
    .string({
      required_error: 'Nama Pengguna Akun Dibutuhkan',
    })
    .min(1, { message: 'Nama Pengguna Akun Dibutuhkan' }),
  status: z
    .string({
      required_error: 'Program Studi Dibutuhkan',
    })
    .min(1, { message: 'Program Studi Dibutuhkan' }),
});