import React from 'react'
import ReactDOM from 'react-dom/client'
import Greentings from './components/Greetings'
import './index.css'
import CounterComponent from './components/counter/CounterComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greentings />
    <CounterComponent />
  </React.StrictMode>,
)
