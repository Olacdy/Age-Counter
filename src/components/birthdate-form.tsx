import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useForm } from 'react-hook-form';

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

import { birthDateSchema } from '@/schemas/birthdate-schema';

const BirthDateForm = () => {
  const form = useForm<z.infer<typeof birthDateSchema>>({
    resolver: zodResolver(birthDateSchema),
    defaultValues: {
      day: undefined,
      month: undefined,
      year: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof birthDateSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col items-end gap-2.5 px-5 md:flex-row'>
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default BirthDateForm;
