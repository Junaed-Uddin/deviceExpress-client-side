import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import reportWebVitals from './reportWebVitals';
import AuthContext from './Contexts/AuthContext';
import "react-datepicker/dist/react-datepicker.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <App />
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>
);


reportWebVitals();
