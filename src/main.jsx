import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// The root of your app on GitHub Pages is your repository name
const repoName = '/FSAD-Project';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={repoName}>
      <App />
    </BrowserRouter>
  </StrictMode>
);