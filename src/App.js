import "./App.css"
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./components/Pages/Register";
import Signin from './components/Pages/Signin'
import Navbar from "./components/Pages/Navbar";
import Home  from "./components/Pages/Home";
import Notlogin from './components/Pages/Notlogin'
import Notfound from './components/Pages/Notfound'
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "./firebase/setup";



function App() {
  const [isLoggedIn,setisLoggedIn]=useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setisLoggedIn(true)
        
      } else {
        
        setisLoggedIn(false)
      }
    });
  }, [auth.currentUser]);



  return (
    <div className="bg-gray-100">
      <Navbar /> 
       <Routes>
       {isLoggedIn ? (
             <>
    <Route path='/' element={<Home />}></Route>
    </>
    ) : ( 
            <>
    <Route path='/' element={<Notlogin />}></Route>
    <Route path='/login' element={<Signin />}></Route>
    <Route path='/register' element={<Register />}></Route>
            </>
             )}
             <Route path="*" element={<Notfound />} />
       </Routes>
    </div>

  );
}

export default App;
