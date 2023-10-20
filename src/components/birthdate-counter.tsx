import { useEffect, useState } from 'react';

import moment from 'moment';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import useBirthDateStore from '@/context/birthdate-context';

import { Button } from '@/components/ui/button';
import { calculateDifference } from '@/lib/utils';

const BirthDateCounter = () => {
  const { birthDate, clearBirthDate } = useBirthDateStore((state) => ({
    birthDate: moment(state.birthDate),
    clearBirthDate: state.clearBirthDate,
  }));

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentAge, setCurrentAge] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAge(calculateDifference(birthDate));
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [birthDate]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <span className='cursor-pointer p-4 text-xl sm:text-3xl md:text-5xl lg:text-8xl'>
          {currentAge}
        </span>
      </DialogTrigger>
      <DialogContent className='max-w-xs gap-10 sm:max-w-md md:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='text-left'>Are you sure?</DialogTitle>
          <DialogDescription className='text-left'>
            To clear your current birth date and return to the input page, click
            the &quot;Clear&quot; button.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex-row justify-end gap-3'>
          <Button
            className='px-5 md:px-4'
            onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            variant='destructive'
            className='px-6'
            onClick={() => {
              setIsDialogOpen(false);
              clearBirthDate();
            }}>
            Clear
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BirthDateCounter;
