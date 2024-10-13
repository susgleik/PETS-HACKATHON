import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/CartItem/Cart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
