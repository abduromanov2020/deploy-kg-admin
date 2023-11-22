import { z } from 'zod';

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
