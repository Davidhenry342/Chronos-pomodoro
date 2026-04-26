import './styles/theme.css';
import './styles/global.css';

//import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container/index';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>Oi tudo bem?</Heading>
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
