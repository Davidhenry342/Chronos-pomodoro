import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div>
      <h1>Sei lá (do main)</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        placeat officia illum, illo voluptates eaque repellendus perspiciatis
        corporis quam atque ducimus maxime iusto omnis voluptatibus tenetur
        corrupti autem aperiam cumque!
      </p>
    </div>
  </StrictMode>,
);
