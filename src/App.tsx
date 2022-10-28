import { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/NavigationComponent'
import AppCtxProvider from './context/AppCtx'
import Home from './pages/Home'


function App() {

  return (
    <AppCtxProvider>
      <BrowserRouter basename='ts-react-mamma-mia'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<h1>Products</h1>} />
          <Route path='/carrito' element={<h1>carrito</h1>} />
        </Routes>
      </BrowserRouter>
    </AppCtxProvider>
  )
}

export default App
