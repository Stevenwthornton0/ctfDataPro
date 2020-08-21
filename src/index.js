import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ClickedProvider } from './contexts/context';
import App from './Components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <ClickedProvider>
      <App />
    </ClickedProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
