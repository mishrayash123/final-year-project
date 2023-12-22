<<<<<<< HEAD
import "./App.css"
// import Singin from "./components/Singin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
 
      <Navbar/>
      <Sidebar/>
    </div>
=======
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => <div>Home Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
>>>>>>> 0f43fad8a63588a20cd4b0338a0d9fa1e0266b51
  );
}

export default App;
