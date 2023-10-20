import { clsx, type ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

import moment, { type Moment } from 'moment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDifference(birthDate: Moment) {
  const current = moment();

  const yearDiff = current.diff(birthDate, 'years', true);

  return `${yearDiff.toFixed(16)}`;
}
