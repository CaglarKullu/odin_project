import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProviderScope from './core/ProviderScope'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderScope>
    <App />
    </ProviderScope>
  </React.StrictMode>,
)
