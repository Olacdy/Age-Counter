import z from 'zod';

import { createISODateString } from '@/lib/utils';
import moment from 'moment';

export const birthDateSchema = z
  .object({
    day: z.union([z.literal(''), z.coerce.number().gt(0).lte(31)]),
    month: z.union([z.literal(''), z.coerce.number().gt(0).lte(12)]),
    year: z.union([z.literal(''), z.coerce.number().gt(1900).lt(2022)]),
  })
  .superRefine(({ day, month, year }, ctx) => {
    if (!day) {
      ctx.addIssue({
        path: ['day'],
        code: z.ZodIssueCode.custom,
        message: 'Please, enter Day.',
      });
    }

    if (!month) {
      ctx.addIssue({
        path: ['month'],
        code: z.ZodIssueCode.custom,
        message: 'Please, enter Month.',
      });
    }

    if (!year) {
      ctx.addIssue({
        path: ['year'],
        code: z.ZodIssueCode.custom,
        message: 'Please, enter Year.',
      });
    }

    if (!!day && !!month && !!year) {
      const date = moment(createISODateString(day, month, year));

      if (!date.isValid()) {
        ctx.addIssue({
          path: ['day'],
          code: z.ZodIssueCode.custom,
          message: ' ',
        });
        ctx.addIssue({
          path: ['month'],
          code: z.ZodIssueCode.custom,
          message: ' ',
        });
        ctx.addIssue({
          path: ['year'],
          code: z.ZodIssueCode.custom,
          message: ' ',
        });
      }
    }
  });
