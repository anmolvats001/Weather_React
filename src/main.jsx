import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import AppContextProvider from './context/context.jsx';
createRoot(document.getElementById('root')).render(
   <AppContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppContextProvider>
)
