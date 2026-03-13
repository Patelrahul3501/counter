import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import Props from './props'
import Goal from './goal'
import Random_BG from './Random_BG'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Random_BG />
    {/* <Props/> */}
    {/* <Goal />  */}
  </StrictMode>
)
