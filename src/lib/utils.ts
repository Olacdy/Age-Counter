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

export function createISODateString(day: number, month: number, year: number) {
  const formattedMonth = String(month).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');

  const isoString = `${year}-${formattedMonth}-${formattedDay}T00:00:00.000Z`;

  return isoString;
}
