import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { start } from 'single-spa';
import App from './App.tsx';
import './index.css';
import { registerRemotes } from './registerRemotes.tsx';

registerRemotes();
start();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
