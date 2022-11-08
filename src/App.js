
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/home'>Home</Route>
        <Route path='/about'>About</Route>
      </Routes>
    </div>
  );
}

export default App;
