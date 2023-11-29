import Signup from './pages/signUp';
import Login from './pages/login';
import Home from './pages/Home';
import Cats from './pages/Cats';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="pages">
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cats' element={<Cats />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
