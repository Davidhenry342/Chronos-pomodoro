import { FormRow } from './FormRow';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../Button';
import { CirclePlayIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Form() {
  return (
    <form className={styles.form} action="">
      <FormRow>
        <Input
          id="meuInput"
          type="text"
          labelText="Task"
          placeholder="Digite aqui"
        />
      </FormRow>
      <FormRow>
        <p>sic parvis magna</p>
      </FormRow>
      <FormRow>
        <div>
          <Cycles />
        </div>
      </FormRow>
      <FormRow>
        <DefaultButton icon={<CirclePlayIcon />} />
      </FormRow>
    </form>
  );
}
