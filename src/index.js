import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <QueryClientProvider client={query}>
        <App />
        <ReactQueryDevtools position='bottom-right' />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
