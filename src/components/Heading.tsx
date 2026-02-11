import styles from './Heading.module.css';

export function Heading() {
  const titulo = `${styles.heading} ${styles.color}`;
  return <h1 className={titulo}>Sei lá (do app)</h1>;
}
