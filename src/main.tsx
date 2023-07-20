import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { router } from './routes.tsx'
import { Header } from './components/Header/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
