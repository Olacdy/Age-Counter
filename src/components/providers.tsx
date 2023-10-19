import { FC } from 'react';

import ThemeContextProvider from '@/context/theme-context';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default Providers;
