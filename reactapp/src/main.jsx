import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'//
// import App from './App.jsx';
import AnotherProgram from './task2.jsx';
import ProductList from './task3.jsx';
import RegistrationForm from './reactp1.jsx';
import LoginForm from './reactp2.jsx';
import RegistrationFormm from './reactp3.jsx';
import App from './reactd3p1.jsx';
import Pro from './reactd3p2.jsx';
import Student from './reactd3p3.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <App />
    <AnotherProgram />
    <ProductList /> */}
    {/* <RegistrationForm />
    <LoginForm />
    <RegistrationFormm /> */}
    <App />
    <Pro />
    <Student />
    </>
  </StrictMode>,
)
