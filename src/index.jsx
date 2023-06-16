import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';

const element = document.querySelector('#root');

createRoot(element).render(
  <App />
);
