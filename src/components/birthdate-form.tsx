import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useForm } from 'react-hook-form';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import useBirthDateStore from '@/context/birthdate-context';

import { birthDateSchema } from '@/schemas/birthdate-schema';

const BirthDateForm = () => {
  const setBirthDate = useBirthDateStore((state) => state.setBirthDate);

  const form = useForm<z.infer<typeof birthDateSchema>>({
    resolver: zodResolver(birthDateSchema),
    defaultValues: {
      day: '',
      month: '',
      year: '',
    },
  });

  const onSubmit = (values: z.infer<typeof birthDateSchema>) => {
    const { year, month, day } = values;

    setBirthDate({
      day: parseInt(day as string),
      month: parseInt(month as string),
      year: parseInt(year as string),
    });

    toast.success('Your birth date succesfully submitted.');
  };

  useEffect(() => {
    const {
      day: dayError,
      month: monthError,
      year: yearError,
    } = form.formState.errors;

    if (
      dayError?.message === ' ' &&
      monthError?.message === ' ' &&
      yearError?.message === ' '
    ) {
      setTimeout(() => {
        toast.error('Invalid date.');
      }, 0);
    }
  }, [form, form.formState.errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col items-end gap-1 md:flex-row md:gap-2.5'>
        <FormField
          control={form.control}
          name='day'
          render={({ field }) => (
            <FormItem className='relative w-full'>
              <FormLabel>Day</FormLabel>
              <FormControl>
                <Input placeholder='DD' {...field} />
              </FormControl>
              <FormMessage className='md:absolute' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='month'
          render={({ field }) => (
            <FormItem className='relative w-full'>
              <FormLabel>Month</FormLabel>
              <FormControl>
                <Input placeholder='MM' {...field} />
              </FormControl>
              <FormMessage className='md:absolute' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='year'
          render={({ field }) => (
            <FormItem className='relative w-full'>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input placeholder='YYYY' {...field} />
              </FormControl>
              <FormMessage className='md:absolute' />
            </FormItem>
          )}
        />

        <div className='w-full pt-5 md:w-fit'>
          <Button className='w-full md:w-fit' type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BirthDateForm;
