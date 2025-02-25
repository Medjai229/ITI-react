import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx';
import TokenContextProvider from './context/TokenContext.jsx';
import PaginationContextProvider from './context/PaginationContext.jsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TokenContextProvider>
        <PaginationContextProvider>
          <App />
          <ToastContainer />
        </PaginationContextProvider>
      </TokenContextProvider>
    </Provider>
  </StrictMode>
);
