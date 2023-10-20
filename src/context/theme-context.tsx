import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Theme = 'light' | 'dark' | 'system';

type ThemeContextProps = {
  children: ReactNode;
};

type ThemeContextType = {
  isDark: boolean;
  theme: Theme;
  changeTheme: (value: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: FC<ThemeContextProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      return localTheme;
    } else {
      return 'system';
    }
  });

  const changeTheme = (value: Theme) => {
    setTheme(value);

    if (value === 'dark') {
      setIsDark(true);
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else if (value === 'light') {
      setIsDark(false);
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      window.localStorage.removeItem('theme');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      if (localTheme === 'dark') {
        changeTheme('dark');
      } else if (localTheme === 'light') {
        changeTheme('light');
      }
    } else {
      changeTheme('system');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
};
