import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile'
import Registermain from './Pages/Registeruser/Registermain';
import Basicinfo from './Pages/Basicinfo';
import Demographics from './Pages/Demographics';
import Preferencess from './Pages/Preferencess';
import AdditionalInfo from './Pages/AdditionalInfo';
import FinalRegister from './Pages/FinalRegister';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registermain/>} /> 
        <Route path="/basic-info" element={<Basicinfo/>} /> 
        <Route path="/demographics" element={<Demographics/>} />
        <Route path="/preferences" element={<Preferencess/>} />
        <Route path="/additional-info" element={<AdditionalInfo/>} />
        <Route path="/final" element={<FinalRegister/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
