import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'Dark' | 'Light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storagedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'Dark';
    return storagedTheme;
  });

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link

    setTheme(prevTheme => {
      const newTheme = prevTheme === 'Dark' ? 'Light' : 'Dark';
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon = {
    Dark: <SunIcon />,
    Light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para Página Inicial"
        title="Página Inicial"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Acessar Histórico"
        title="Acessar Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={event => handleChangeTheme(event)}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
