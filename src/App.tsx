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
    </>
  );
}
