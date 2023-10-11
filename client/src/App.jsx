import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Products from './admin/pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products' element={<Products/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
