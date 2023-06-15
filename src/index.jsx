import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.querySelector('#root');

createRoot(element).render(
  <App />
);
