import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle theme={defaultTheme} />
    <App />
  </React.StrictMode>,
)
