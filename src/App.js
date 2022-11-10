
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinement from './Pages/Appointment/Appoinement';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about'element={<About></About>} ></Route>
        <Route path='/appointment'element={<Appoinement/>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*'>About</Route>
      </Routes>
    </div>
  );
}

export default App;
