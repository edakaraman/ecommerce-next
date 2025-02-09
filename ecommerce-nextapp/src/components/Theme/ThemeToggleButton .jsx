import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; 
import { Button } from 'primereact/button';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleClass = theme ==="dark" ? "toggleBtn-dark":"toggleBtn-light";

  return (
    <Button
      onClick={toggleTheme}
      className={toggleClass}     
    >
      Theme Change
    </Button>
  );
};

export default ThemeToggleButton;
