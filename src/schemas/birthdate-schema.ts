import z from 'zod';

export const birthDateSchema = z
  .object({
    day: z.coerce.number().gt(0).lte(31),
    month: z.coerce.number().gt(0).lte(12),
    year: z.coerce.number().gt(1900).lt(2022),
  })
  .superRefine(({ day, month, year }, ctx) => {
    try {
      new Date(`${year}-${month}-${day}`);
    } catch (error) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid date.',
      });
    }
  });
