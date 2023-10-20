import BirthDateForm from '@/components/birthdate-form';
import ThemeDropdown from '@/components/theme-dropdown';

import useBirthDateStore from '@/context/birthdate-context';

const App = () => {
  const birthDate = useBirthDateStore((state) => state.birthDate);

  return (
    <main className='relative flex flex-col items-center justify-center w-full h-screen max-h-screen'>
      {birthDate ? <></> : <BirthDateForm />}
      <ThemeDropdown className='absolute right-5 top-5' />
    </main>
  );
};

export default App;
