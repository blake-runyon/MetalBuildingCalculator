import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
        BrowserRouter,
        Routes,
        Route,
        useNavigate
} from 'react-router-dom';
import Header from './components/Header';
import Users from './components/User/Users';
import Clients from './components/Client/Clients';
import Support from './components/Support';
import CreateQoute from './components/Quote/CreateQuote';
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
