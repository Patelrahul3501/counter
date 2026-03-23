import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import Props from './props'
import Goal from './goal'
import Random_BG from './Random_BG'
import Password_Generator from './password_generator'
import Currency_Convert from './currency_convert'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Random_BG /> */}
    {/* <Password_Generator /> */}
    <Currency_Convert />
    {/* <Props/> */}
    {/* <Goal />  */}
  </StrictMode>
)
