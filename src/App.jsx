import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLogin from './pages/login/page';
import RegisterPage from './pages/registro/RegisterPage';
import HomePage from './pages/home/HomePage';
//aca se mantendra el enrutado de la app 

function App() {


  return (
    <>
    <Router>
  
        <Routes>
          <Route path="/" element={<PageLogin/>} />
          <Route path="/registro" element={<RegisterPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>

    </Router>
   </>

  )
}

export default App
