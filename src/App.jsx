import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'
import theme from './theme/theme'

const App = () => {
  return (
    <WeatherContext>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/city/:countryCode/:city" element={<CityPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </WeatherContext>
  )
}

export default App
