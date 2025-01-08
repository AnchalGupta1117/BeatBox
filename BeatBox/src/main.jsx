import { StrictMode } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/tailwind.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
