import BirthDateCounter from '@/components/birthdate-counter';

const CounterPage = () => {
  return (
    <>
      <BirthDateCounter />
      <p className='absolute bottom-3 left-1/2 w-full -translate-x-1/2 text-center text-xs text-muted-foreground/60 dark:text-muted-foreground/30 lg:text-sm'>
        *click a number to clear birth date
      </p>
    </>
  );
};

export default CounterPage;
