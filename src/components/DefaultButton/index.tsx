import { CirclePlayIcon } from 'lucide-react';
import styles from './styles.module.css';

export function DefaultButton() {
  return (
    <button className={styles.defaultButton}>
      <CirclePlayIcon />
    </button>
  );
}
