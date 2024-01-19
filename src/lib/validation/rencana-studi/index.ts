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
  thumbnail: z.any().optional(),
});

export const AddSubjectValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Nama Mata Kuliah Dibutuhkan',
    })
    .min(1, { message: 'Nama Mata Kuliah Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Deskripsi Mata Kuliah Dibutuhkan.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi Program Studi Dibutuhkan',
    }),
  code: z
    .string({
      required_error: 'Kode Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Kode Mata Kuliah Dibutuhkan.' }),
  duration_hours: z
    .string({
      required_error: 'Fakultas Dibutuhkan',
    })
    .min(1, { message: 'Fakultas Dibutuhkan' }),
  level: z
    .string({
      required_error: 'Level Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Level Mata Kuliah Dibutuhkan.' }),
  teacher_id: z
    .string({
      required_error: 'Pengajar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Pengajar Mata Kuliah Dibutuhkan.' }),
  indicator: z
    .string({
      required_error: 'Indikator Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Indikator Mata Kuliah Dibutuhkan.' }),
  study_experience: z
    .string({
      required_error: 'Pengalaman Belajar Pada Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Pengalaman Belajar Pada Mata Kuliah Dibutuhkan.' }),
  teaching_materials: z
    .string({
      required_error: 'Bahan Ajar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Bahan Ajar Mata Kuliah Dibutuhkan.' }),
  basic_competencies: z
    .string({
      required_error: 'Kompetensi Dasar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Kompetensi Dasar Mata Kuliah Dibutuhkan.' }),
  tools_needed: z
    .string({
      required_error: 'Alat Belajar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Alat Belajar Mata Kuliah Dibutuhkan.' }),
  scoring: z
    .string({
      required_error: 'Penilaian Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Penilaian Mata Kuliah Dibutuhkan.' }),
  credit: z
    .string({
      required_error: 'SKS Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'SKS Mata Kuliah Dibutuhkan.' }),
  major_id: z
    .string({
      required_error: 'Program Studi Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Program Studi Mata Kuliah Dibutuhkan.' }),
  semester: z
    .string({
      required_error: 'Semester Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Semester Mata Kuliah Dibutuhkan.' }),
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

export const EditSubjectValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Nama Mata Kuliah Dibutuhkan',
    })
    .min(1, { message: 'Nama Mata Kuliah Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Deskripsi Mata Kuliah Dibutuhkan.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'Deskripsi Program Studi Dibutuhkan',
    }),
  code: z
    .string({
      required_error: 'Kode Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Kode Mata Kuliah Dibutuhkan.' }),
  duration_hours: z
    .number({
      required_error: 'Fakultas Dibutuhkan',
    })
    .min(1, { message: 'Fakultas Dibutuhkan' }),
  level: z
    .number({
      required_error: 'Level Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Level Mata Kuliah Dibutuhkan.' }),
  teacher_id: z
    .string({
      required_error: 'Pengajar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Pengajar Mata Kuliah Dibutuhkan.' }),
  indicator: z
    .string({
      required_error: 'Indikator Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Indikator Mata Kuliah Dibutuhkan.' }),
  study_experience: z
    .string({
      required_error: 'Pengalaman Belajar Pada Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Pengalaman Belajar Pada Mata Kuliah Dibutuhkan.' }),
  teaching_materials: z
    .string({
      required_error: 'Bahan Ajar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Bahan Ajar Mata Kuliah Dibutuhkan.' }),
  basic_competencies: z
    .string({
      required_error: 'Kompetensi Dasar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Kompetensi Dasar Mata Kuliah Dibutuhkan.' }),
  tools_needed: z
    .string({
      required_error: 'Alat Belajar Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Alat Belajar Mata Kuliah Dibutuhkan.' }),
  scoring: z
    .string({
      required_error: 'Penilaian Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Penilaian Mata Kuliah Dibutuhkan.' }),
  credit: z
    .number({
      required_error: 'SKS Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'SKS Mata Kuliah Dibutuhkan.' }),
  major_id: z
    .string({
      required_error: 'Program Studi Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Program Studi Mata Kuliah Dibutuhkan.' }),
  semester: z
    .string({
      required_error: 'Semester Mata Kuliah Dibutuhkan.',
    })
    .min(1, { message: 'Semester Mata Kuliah Dibutuhkan.' }),
  thumbnail: z
    .any()
    .optional()
    .refine(
      (file) =>
        file.length == 1
          ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
            ? true
            : false
          : true,
      'hanya menerima .jpg, .jpeg, dan .png.',
    )
    .refine(
      (file) =>
        file.length == 1
          ? file[0]?.size <= MAX_FILE_SIZE
            ? true
            : false
          : true,
      'Ukuran maksimun adalah 3mb.',
    ),
});
