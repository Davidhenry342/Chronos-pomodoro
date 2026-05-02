import './styles/theme.css';
import './styles/global.css';

//import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illum
          placeat maiores nemo recusandae sint et, voluptate similique, possimus
          perspiciatis, quasi tempore quae doloremque quia nihil eos?
          Voluptatum, quibusdam quam.
        </p>
      </Container>
    </>
  );
}
