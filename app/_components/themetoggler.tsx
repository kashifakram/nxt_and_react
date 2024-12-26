'use client';
import { useTheme } from '../contexts/themecontext';
import Button from "@/comps/button";

const ThemeToggler = ({}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} isPrimary={false} text='Toggle Theme'>
      Toggle Theme ({theme})
    </Button>
  );
};

export default ThemeToggler;