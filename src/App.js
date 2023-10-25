import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contests from './Components/Contests';
import Plateforms from './Components/Plateforms';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contest' element={<Contests/>}></Route>
      <Route path='/plateforms' element={<Plateforms/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
