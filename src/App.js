
// import "./App.css"
 import Singin from "./components/Singin";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div>
 
//       <Navbar/>
//       <Sidebar/>
//     </div>

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import Connection from './components/Connection';
import Invitation from "./components/Invitation";
// import Sidebar from "./components/Sidebar";
// import RightBar from './components/RightBar';
// const Home = () => <div>Home Page</div>;

function App() {
  return (
    <div> 
       <Routes>
        <Route path="/" element={<Singin/>} />
        <Route path="main" element={<Main/>} />
        <Route path="main" element={<Connection/>} />
        <Route path="main" element={<Invitation/>} />
        {/* Add more routes for other pages */}
       </Routes>
   </div>

  );
}

export default App;
