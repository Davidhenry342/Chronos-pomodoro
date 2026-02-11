import './styles/theme.css';
import './styles/global.css';
import './components/Heading';
import { Heading } from './components/Heading';

export function App() {
  console.log('testando');

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        placeat officia illum, illo voluptates eaque repellendus perspiciatis
        corporis quam atque ducimus maxime iusto omnis voluptatibus tenetur
        corrupti autem aperiam cumque!
      </p>
    </>
  );
}
