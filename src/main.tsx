import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { NoteStackProvider } from '@jod/design-system';

import './index.css';
import Root from './Root';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <NoteStackProvider>
      <Root />
    </NoteStackProvider>
  </StrictMode>,
);
