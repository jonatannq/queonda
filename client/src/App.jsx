import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import Sign from './pages/sign'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
