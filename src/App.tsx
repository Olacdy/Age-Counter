import BirthDateCounter from '@/components/birthdate-counter';
import BirthDateForm from '@/components/birthdate-form';
import ThemeDropdown from '@/components/theme-dropdown';

import useBirthDateStore from '@/context/birthdate-context';

const App = () => {
  const birthDate = useBirthDateStore((state) => state.birthDate);

  return (
    <main className='relative flex h-screen max-h-screen w-full flex-col items-center justify-center'>
      <ThemeDropdown className='absolute right-5 top-5' />
      {birthDate ? (
        <>
          <BirthDateCounter />
          <p className='absolute bottom-3 left-1/2 w-full -translate-x-1/2 text-center text-xs text-muted-foreground/60 dark:text-muted-foreground/30 lg:text-sm'>
            *click a number to clear birth date
          </p>
        </>
      ) : (
        <BirthDateForm />
      )}
    </main>
  );
};

export default App;
