import { z } from 'zod';

export const generateDynamicValidationSchemaVideo = (count: number) => {
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
      .min(1, { message: `A modul description is required for video ${i + 1}.` });

    dynamicValidationSchema[`video_duration_${i + 1}`] = z
      .string({
        required_error: `A modul duration is required for video ${i + 1}.`,
      })
      .min(1, { message: `A modul duration is required for video ${i + 1}.` });

  }

  return dynamicValidationSchema;
};

export const generateDynamicValidationSchemaDocument = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`document_title_${i + 1}`] = z
      .string({
        required_error: `A document title is required for document ${i + 1}.`,
      })
      .min(1, { message: `A document title is required for document ${i + 1}.` });

    dynamicValidationSchema[`document_link_${i + 1}`] = z
      .string({
        required_error: `A document link is required for document ${i + 1}.`,
      })
      .min(1, { message: `A document link is required for document ${i + 1}.` });

    dynamicValidationSchema[`document_duration_${i + 1}`] = z
      .string({
        required_error: `A document duration is required for document ${i + 1}.`,
      })
      .min(1, { message: `A document link is required for document ${i + 1}.` });
  }

  return dynamicValidationSchema;
};

export const generateDynamicValidationSchemaQuiz = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`quiz_title_${i + 1}`] = z
      .string({
        required_error: `Judul Quiz ${i + 1}  harus diisi .`,
      })
      .min(1, { message: `Judul Quiz ${i + 1}  harus diisi  .` });
  }

  return dynamicValidationSchema;
};
export const generateDynamicValidationSchemaTugas = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`assignment_title_${i + 1}`] = z
      .string({
        required_error: `Judul Tugas ${i + 1}  harus diisi .`,
      })
      .min(1, { message: `Judul Tugas ${i + 1}  harus diisi  .` });
  }

  return dynamicValidationSchema;
};
export const generateDynamicValidationSchemaDiskusi = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`discuss_title_${i + 1}`] = z
      .string({
        required_error: `Judul Diskusi ${i + 1}  harus diisi .`,
      })
      .min(1, { message: `Judul Diskusi ${i + 1}  harus diisi  .` });
  }

  return dynamicValidationSchema;
};

export const ValidationSchemaVideo = (count: number) =>
  z.object({
    ...generateDynamicValidationSchemaVideo(count),
  });

export const ValidationSchemaDocument = (count: number) =>
  z.object({

    ...generateDynamicValidationSchemaDocument(count),
  });
