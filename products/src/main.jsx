import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx';
import TokenContextProvider from './context/TokenContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TokenContextProvider>
      <App />
    </TokenContextProvider>
  </StrictMode>
);
