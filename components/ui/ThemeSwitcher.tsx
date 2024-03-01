'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Limelight } from 'next/font/google';
import Button from './Button';
import { Skeleton } from './skeleton';
import { DotsHorizontalIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import LoadingDots from './LoadingDots';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    setTheme(theme ?? 'dark');
  }, []);
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      console.log('Error: theme = ' + theme);
    }
  };

  if (!hasMounted)
    return (
      <div className="w-fit ">
        <Button
          className="md:px-4 md:py-7 px-4 py-6 rounded-2xl lg:scale-90 bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/20 transition-all duration-300 ease-in-out-sine"
          variant={'outline'}
          onClick={toggleTheme}
        >
          <DotsHorizontalIcon className="md:w-6 md:h-6 w-4 h-4" />
        </Button>
      </div>
    );

  return (
    <div className="w-fit">
      <Button
        className="md:px-4 md:py-7 px-4 py-6 rounded-2xl lg:scale-90 bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/20 transition-all duration-300 ease-in-out-sine"
        variant={'outline'}
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <MoonIcon className="md:w-6 md:h-6 w-4 h-4" />
        ) : (
          <SunIcon className="md:w-6 md:h-6 w-4 h-4" />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
