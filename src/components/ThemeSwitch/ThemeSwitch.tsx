import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './ThemeSwitch.module.css';

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className={`${styles.switch} ${className || ''}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className={styles.icon} />
      ) : (
        <Moon size={20} className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeSwitch;