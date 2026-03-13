import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import Props from './props'
import Goal from './goal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Props/> */}
    <Goal /> 
  </StrictMode>
)
