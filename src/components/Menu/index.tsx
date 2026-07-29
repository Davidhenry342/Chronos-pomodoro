import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'Dark' | 'Light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('Dark');

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link

    console.log('Tema antigo:', theme);

    setTheme(prevTheme => {
      const newTheme = prevTheme === 'Dark' ? 'Light' : 'Dark';
      return newTheme;
    });
  }
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
        <SunIcon />
      </a>
    </nav>
  );
}
