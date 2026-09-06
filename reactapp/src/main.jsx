import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import AnotherProgram from './task2.jsx';
import ProductList from './task3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <AnotherProgram />
    <ProductList />
    </>
  </StrictMode>,
)
