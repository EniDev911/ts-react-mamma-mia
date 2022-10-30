import { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/NavigationComponent'
import AppProvider from './context/AppCtx'
import Home from './pages/Home'
import Pizza from './pages/Pizza'


function App() {

  return (
    <AppProvider>
      <BrowserRouter basename='ts-react-mamma-mia'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<Pizza/>} />
          <Route path='/carrito' element={<h1>carrito</h1>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App