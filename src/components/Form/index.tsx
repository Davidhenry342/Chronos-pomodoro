import styles from './styles.module.css';

type FormingProps = { children: React.ReactNode };

export function Form({ children }: FormingProps) {
  return (
    <form className={styles.form} action="">
      {children}
    </form>
  );
}
