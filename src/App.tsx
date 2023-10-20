import BirthDateCounter from '@/components/birthdate-counter';
import BirthDateForm from '@/components/birthdate-form';
import ThemeDropdown from '@/components/theme-dropdown';

import useBirthDateStore from '@/context/birthdate-context';

const App = () => {
  const birthDate = useBirthDateStore((state) => state.birthDate);

  return (
    <main className='relative flex flex-col items-center justify-center w-full h-screen max-h-screen'>
      <ThemeDropdown className='absolute right-5 top-5' />
      {birthDate ? (
        <>
          <BirthDateCounter />
          <p className='absolute w-full text-xs text-center -translate-x-1/2 bottom-3 left-1/2 text-muted-foreground'>
            *click on number to clear birth date
          </p>
        </>
      ) : (
        <BirthDateForm />
      )}
    </main>
  );
};

export default App;
