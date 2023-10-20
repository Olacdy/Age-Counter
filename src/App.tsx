import { isMobile } from 'react-device-detect';

import { Toaster } from 'sonner';

import CounterPage from '@/components/counter-page';
import InputPage from '@/components/input-page';
import ThemeDropdown from '@/components/theme-dropdown';

import useBirthDateStore from '@/context/birthdate-context';
import { useTheme } from '@/context/theme-context';

const App = () => {
  const { theme } = useTheme();
  const birthDate = useBirthDateStore((state) => state.birthDate);

  return (
    <main className='relative flex h-screen max-h-screen w-full flex-col items-center justify-center'>
      <ThemeDropdown className='absolute right-5 top-5' />
      {birthDate ? <CounterPage /> : <InputPage />}
      <Toaster
        closeButton
        richColors
        position={isMobile ? 'top-center' : 'bottom-right'}
        theme={theme}
      />
    </main>
  );
};

export default App;
