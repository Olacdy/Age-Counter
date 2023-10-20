import z from 'zod';

import moment from 'moment';

export const birthDateSchema = z
  .object({
    day: z.union([z.literal(''), z.coerce.number().gt(0).lte(31)]),
    month: z.union([z.literal(''), z.coerce.number().gt(0).lte(12)]),
    year: z.union([z.literal(''), z.coerce.number().gt(1900).lt(2022)]),
    date: z.null().optional(),
  })
  .superRefine(({ day, month, year }, ctx) => {
    const date = moment(`${year}-${month}-${day}`);

    if (!date.isValid()) {
      ctx.addIssue({
        path: ['date'],
        code: z.ZodIssueCode.custom,
        message: 'Invalid date.',
      });
    }
  });
