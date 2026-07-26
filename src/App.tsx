import './styles/theme.css';
import './styles/global.css';

import { CirclePlayIcon, StopCircleIcon } from 'lucide-react';
import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultButton } from './components/Button';
import { Form } from './components/Form';
import { FormRow } from './components/Form/FormRow';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <Form>
          <FormRow>
            <Input
              id="meuInput"
              type="text"
              labelText="Qualquer coisa"
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
            <DefaultButton icon={<StopCircleIcon />} color="red" />
          </FormRow>
        </Form>
      </Container>
    </>
  );
}
