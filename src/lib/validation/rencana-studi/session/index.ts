import { z } from "zod";

export const generateDynamicValidationSchemaSession = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`session_title_${i + 1}`] = z
      .string({
        required_error: `A session title is required for session ${i + 1}.`,
      })
      .min(1, { message: `A session title is required for session ${i + 1}.` });

    dynamicValidationSchema[`session_description_${i + 1}`] = z
      .string({
        required_error: `A session description is required for session ${i + 1}.`,
      })
      .min(1, { message: `A session description is required for session ${i + 1}.` });

    dynamicValidationSchema[`session_duration_${i + 1}`] = z
      .string({
        required_error: `A session duration is required for session ${i + 1}.`,
      })
      .min(1, { message: `A session duration is required for session ${i + 1}.` });

    dynamicValidationSchema[`session_type_${i + 1}`] = z
      .string()
      .min(1, { message: `A session type is required for session ${i + 1}.` });

  }

  return dynamicValidationSchema;
}

export const ValidationSchemaSession = (count: number) =>
  z.object({
    ...generateDynamicValidationSchemaSession(count),
  });


export const EditSessionValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Judul Pertemuan Dibutuhkan',
    })
    .min(1, { message: 'Judul Pertemuan Dibutuhkan' }),
  description: z
    .string({
      required_error: 'Deskripsi Pertemuan Dibutuhkan',
    })
    .min(1, { message: 'Deskripsi Pertemuan Dibutuhkan' }),
  duration: z
    .string({
      required_error: 'Durasi Pertemuan Dibutuhkan',
    })
    .min(1, { message: 'Durasi Pertemuan Dibutuhkan' }),
  type: z.string({
    required_error: 'Tipe Pertemuan Dibutuhkan',
  }).min(1, { message: 'Tipe Pertemuan Dibutuhkan' }),
});
