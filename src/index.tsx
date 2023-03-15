import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Contexts/Auth';
import GetThemeProvider from './Contexts/Theme';
import GlobalStyle from './Styles/GlobalStyle';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GetThemeProvider>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </GetThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);