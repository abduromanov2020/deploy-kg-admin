import { z } from 'zod';

export const ValidationSchemaEditDiskusi = () =>
  z.object({
    topic: z
      .string({
        required_error: 'Topik diskusi harus diisi.',
      })
      .min(1, { message: 'Topik diskusi terlalu pendek. ' }),
    description: z
      .string({
        required_error: 'Deskripsi Diskusi harus diisi.',
      })
      .min(1, { message: 'Deskripsi Diskusi terlalu pendek. ' }),

    deadline: z.string({
      required_error: 'Batas Diskusi harus diisi.',
    }),
    diskusi_antarMahasiswa: z.string({
      required_error: 'harus dipilih.',
    }),
    sembunyikan_nilai_mahasiswa: z.string({
      required_error: 'harus dipilih.',
    }),
  });
