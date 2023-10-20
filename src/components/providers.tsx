import { FC } from 'react';

import { Toaster } from 'sonner';

import { ThemeContextProvider } from '@/context/theme-context';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
      <Toaster closeButton richColors />
    </>
  );
};

export default Providers;
