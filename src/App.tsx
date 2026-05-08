import './styles/theme.css';
import './styles/global.css';

//import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultButton } from './components/DefaultButton';
import { Form } from './components/Form';
import { FormRow } from './components/Form/FormRow';
import { Input } from './components/Input';

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
            <Input id="meuInput" type="text">
              Testando
            </Input>
          </FormRow>
          <FormRow>
            <p>sic parvis magna</p>
          </FormRow>
          <FormRow>
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>{' '}
          </FormRow>
          <FormRow>
            <DefaultButton />
          </FormRow>
        </Form>
      </Container>
    </>
  );
}
