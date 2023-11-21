import './App.css';
import Signup from './signUp';
import Login from './login';
import Home from './main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
