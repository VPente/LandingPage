import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/global.style'
import { ThemeProvider } from 'styled-components'
import {theme} from './theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
