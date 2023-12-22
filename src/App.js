
// import "./App.css"
// // import Singin from "./components/Singin";
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
// import Sidebar from "./components/Sidebar";
// import RightBar from './components/RightBar';
const Home = () => <div>Home Page</div>;

function App() {
  return (
    <Router>
      <Main/>
      {/* <Sidebar/> */}
      {/* <RightBar/> */}
      <Routes>
        <Route path="/" exact component={Home} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>

  );
}

export default App;
