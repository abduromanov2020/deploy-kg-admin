import { z } from 'zod';

export const generateDynamicValidationSchema = (count: number[]) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count.length; i++) {
    dynamicValidationSchema[`quiz_question_${count[i]}`] = z
      .string({
        required_error: `Pertanyaan harus diisi.`,
      })
      .min(1, { message: `Pertanyaan harus diisi. ` });

    dynamicValidationSchema[`quiz_option_${count[i]}_1`] = z
      .string({
        required_error: `Opsi jawaban A harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban A harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${count[i]}_2`] = z
      .string({
        required_error: `Opsi jawaban B harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban B harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${count[i]}_3`] = z
      .string({
        required_error: `Opsi jawaban C harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban C harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${count[i]}_4`] = z
      .string({
        required_error: `Opsi jawaban D harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban D harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${count[i]}_5`] = z
      .string({
        required_error: `Opsi jawaban E harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban E harus diisi  .` });

    dynamicValidationSchema[`quiz_correct_${count[i]}`] = z
      .string({
        required_error: `Opsi jawaban benar harus diisi.`,
      })
      .min(1, { message: `Opsi jawaban benar harus diisi. ` });
  }

  return dynamicValidationSchema;
};

export const validationSchemaQuizQuestion = (index: number[]) =>
  z.object({
    ...generateDynamicValidationSchema(index),
  });


export const ValidationSchemaQuizEditQuestion = z.object({
  quiz_question: z.string({
    required_error: `Pertanyaan harus diisi.`,
  }),
  quiz_option_1: z.string({
    required_error: `Opsi jawaban A harus diisi .`,
  }),
  quiz_option_2: z.string({
    required_error: `Opsi jawaban B harus diisi .`,
  }),
  quiz_option_3: z.string({
    required_error: `Opsi jawaban C harus diisi .`,
  }),
  quiz_option_4: z.string({
    required_error: `Opsi jawaban D harus diisi .`,
  }),
  quiz_option_5: z.string({
    required_error: `Opsi jawaban E harus diisi .`,
  }),
  quiz_correct: z.string({
    required_error: `Opsi jawaban benar harus diisi.`,
  }),
});