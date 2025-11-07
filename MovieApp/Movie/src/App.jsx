import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Movies from './pages/Movies'
import FrontPage from './pages/FrontPage'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<FrontPage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register'  element={<Registerpage/>}/>
      <Route path='/movies' element={<Movies/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
