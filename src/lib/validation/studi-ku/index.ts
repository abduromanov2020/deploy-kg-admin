import { z } from 'zod';

export const generateDynamicValidationSchema = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`video_title_${i + 1}`] = z
      .string({
        required_error: `A modul title is required for video ${i + 1}.`,
      })
      .min(1, { message: `A modul title is required for video ${i + 1}.` });

    dynamicValidationSchema[`video_link_${i + 1}`] = z
      .string({
        required_error: `A modul link is required for video ${i + 1}.`,
      })
      .min(1, { message: `A modul link is required for video ${i + 1}.` });

    dynamicValidationSchema[`video_description_${i + 1}`] = z
      .string({
        required_error: `A modul description is required for video ${i + 1}.`,
      })
      .refine((value) => value.trim() !== '<p></p>', {
        message: 'A modul description is required for video',
      });
  }

  return dynamicValidationSchema;
};

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_PDF_TYPES = ['application/pdf'];

export const generateDynamicValidationSchemaDocument = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`document_file_${i + 1}`] = z
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
      );
  }

  return dynamicValidationSchema;
};
export const ValidationSchemaCoverModul = (
  count: number,
  countDocument: number,
) =>
  z.object({
    cover_title: z
      .string({
        required_error: 'A modul title is required.',
      })
      .min(1, { message: 'A modul title is required.' }),
    cover_description: z
      .string({
        required_error: 'A modul description is required.',
      })
      .min(1, { message: 'A modul description is required.' })
      .refine((value) => value.trim() !== '<p></p>', {
        message: 'A modul description is required',
      }),

    ...generateDynamicValidationSchema(count),
    ...generateDynamicValidationSchemaDocument(countDocument),
  });
