import { FC, HTMLAttributes } from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Theme, useTheme } from '@/context/theme-context';
import { cn } from '@/lib/utils';

type ThemeDropdownProps = {} & HTMLAttributes<HTMLButtonElement>;

const ThemeDropdown: FC<ThemeDropdownProps> = ({ className, ...props }) => {
  const { isDark, theme, changeTheme } = useTheme();

  const Icon = isDark ? Icons.dark : Icons.light;

  const handleThemeChange = (value: string) => {
    changeTheme(value as Theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='icon'
          variant='ghost'
          className={cn(className)}
          {...props}>
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4'>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={handleThemeChange}>
          <DropdownMenuRadioItem value='light'>Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='dark'>Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='system'>System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeDropdown;
