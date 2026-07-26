import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
};

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        className={` ${styles.defaultButton} ${styles[color]}`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
